#!/usr/bin/env python3

import csv
import json
import math
import os
from collections import defaultdict
from datetime import datetime, timedelta
from pathlib import Path
from statistics import mean

os.environ.setdefault("MPLCONFIGDIR", str(Path("/tmp") / "matplotlib-codex"))
os.environ.setdefault("LOKY_MAX_CPU_COUNT", "1")

import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, roc_auc_score
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

from kriging_analysis import fit_variogram, load_snapshot, ordinary_kriging


ROOT = Path(__file__).resolve().parent.parent
DATASET_PATH = ROOT / "Coffee_Data_Set.csv"
OUTPUT_PATH = ROOT / "assets" / "js" / "analysis-data.js"

WEATHER_FIELDS = {
    "temp_max": "Temp_Max",
    "temp_min": "Temp_Min",
    "humidity": "Humidity",
    "solar": "Solar_Radiation",
    "precip": "Precipitation_mm",
}

WEATHER_LABELS = {
    "temp_max": "Average max temperature",
    "temp_min": "Average min temperature",
    "humidity": "Average humidity",
    "solar": "Average solar radiation",
    "precip": "Average precipitation",
}

WEATHER_UNITS = {
    "temp_max": "C",
    "temp_min": "C",
    "humidity": "%",
    "solar": "MJ/m2",
    "precip": "mm",
}

FX_FIELDS = {
    "brl": "Brazilian real",
    "cny": "Chinese yuan",
    "mxn": "Mexican peso",
}


def parse_float(value):
    if value in ("", "NA", None):
        return None
    return float(value)


def pearson(xs, ys):
    if not xs or len(xs) != len(ys):
        return 0.0
    avg_x = sum(xs) / len(xs)
    avg_y = sum(ys) / len(ys)
    cov = sum((x - avg_x) * (y - avg_y) for x, y in zip(xs, ys))
    std_x = sum((x - avg_x) ** 2 for x in xs) ** 0.5
    std_y = sum((y - avg_y) ** 2 for y in ys) ** 0.5
    if not std_x or not std_y:
        return 0.0
    return cov / (std_x * std_y)


def linear_regression(xs, ys):
    avg_x = sum(xs) / len(xs)
    avg_y = sum(ys) / len(ys)
    denominator = sum((x - avg_x) ** 2 for x in xs)
    slope = 0.0 if denominator == 0 else sum((x - avg_x) * (y - avg_y) for x, y in zip(xs, ys)) / denominator
    intercept = avg_y - slope * avg_x
    return slope, intercept


def rolling_average(values, window):
    results = []
    running = 0.0
    for idx, value in enumerate(values):
        running += value
        if idx >= window:
            running -= values[idx - window]
        count = min(idx + 1, window)
        results.append(running / count)
    return results


def month_key(iso_date):
    return iso_date[:7]


def friendly_location(name):
    return name.replace("_", ", ", 1).replace("_", " ")


def rounded(value, digits=2):
    if value is None or (isinstance(value, float) and not math.isfinite(value)):
        return None
    return round(float(value), digits)


def make_histogram(values, bins=24):
    clean = np.asarray([value for value in values if pd.notna(value)], dtype=float)
    if clean.size == 0:
        return []
    counts, edges = np.histogram(clean, bins=bins)
    return [
        {
            "start": rounded(edges[idx], 2),
            "end": rounded(edges[idx + 1], 2),
            "count": int(counts[idx]),
        }
        for idx in range(len(counts))
    ]


def sample_pairs(frame, x_col, y_col, max_points=900):
    sampled = frame[[x_col, y_col]].dropna().reset_index(drop=True)
    if sampled.empty:
        return []
    if len(sampled) > max_points:
        step = max(len(sampled) // max_points, 1)
        sampled = sampled.iloc[::step].head(max_points)
    return [{"x": rounded(row[x_col], 2), "y": rounded(row[y_col], 2)} for _, row in sampled.iterrows()]


def build_dataset():
    by_date = {}
    by_location = defaultdict(lambda: {"count": 0, **{field: 0.0 for field in WEATHER_FIELDS}})
    locations = set()
    missing_weather_points = 0

    with DATASET_PATH.open(newline="") as handle:
        reader = csv.DictReader(handle)
        row_count = 0
        for row in reader:
            row_count += 1
            iso_date = row["Date"]
            record = by_date.setdefault(
                iso_date,
                {
                    "price": None,
                    "brl": None,
                    "cny": None,
                    "mxn": None,
                    "count": 0,
                    **{field: 0.0 for field in WEATHER_FIELDS},
                    **{f"{field}_count": 0 for field in WEATHER_FIELDS},
                },
            )
            record["count"] += 1

            location = row["Location"]
            locations.add(location)
            location_record = by_location[location]
            location_record["count"] += 1

            for field, source in WEATHER_FIELDS.items():
                value = parse_float(row[source])
                if value is None:
                    missing_weather_points += 1
                    continue
                record[field] += value
                record[f"{field}_count"] += 1
                location_record[field] += value

            for field in ("Close_USD_60kg", "brl", "cny", "mxn"):
                value = parse_float(row[field])
                if value is not None:
                    target = "price" if field == "Close_USD_60kg" else field
                    record[target] = value

    for record in by_date.values():
        for field in WEATHER_FIELDS:
            count = record[f"{field}_count"] or 1
            record[field] /= count

    for record in by_location.values():
        count = record["count"] or 1
        for field in WEATHER_FIELDS:
            record[field] /= count

    return by_date, by_location, sorted(locations), row_count, missing_weather_points


def load_frames():
    frame = pd.read_csv(DATASET_PATH, parse_dates=["Date"])
    numeric_columns = [
        "LON",
        "LAT",
        "Temp_Max",
        "Temp_Min",
        "Humidity",
        "Solar_Radiation",
        "Precipitation_mm",
        "Close_USD_60kg",
        "brl",
        "cny",
        "mxn",
    ]
    frame[numeric_columns] = frame[numeric_columns].apply(pd.to_numeric, errors="coerce")

    daily = (
        frame.groupby("Date", as_index=False)
        .agg(
            {
                "Close_USD_60kg": "first",
                "Temp_Max": "mean",
                "Temp_Min": "mean",
                "Humidity": "mean",
                "Solar_Radiation": "mean",
                "Precipitation_mm": "mean",
                "brl": "first",
                "cny": "first",
                "mxn": "first",
            }
        )
        .sort_values("Date")
    )
    daily["Price_MA30"] = daily["Close_USD_60kg"].rolling(30, min_periods=1).mean()
    daily["YearMonth"] = daily["Date"].dt.to_period("M").astype(str)
    return frame, daily


def build_visuals(frame, daily):
    corr_columns = [
        ("Close_USD_60kg", "Coffee Price"),
        ("Temp_Max", "Temp Max"),
        ("Temp_Min", "Temp Min"),
        ("Humidity", "Humidity"),
        ("Solar_Radiation", "Solar"),
        ("Precipitation_mm", "Precip"),
        ("brl", "BRL"),
        ("cny", "CNY"),
        ("mxn", "MXN"),
    ]
    corr_frame = daily[[column for column, _ in corr_columns]].corr()
    heatmap = {
        "labels": [label for _, label in corr_columns],
        "matrix": [[rounded(value, 3) for value in row] for row in corr_frame.to_numpy().tolist()],
    }

    scatter_specs = [
        ("Temp_Min", "Coffee Price", "Minimum Temperature vs Price"),
        ("Temp_Max", "Coffee Price", "Maximum Temperature vs Price"),
        ("Humidity", "Coffee Price", "Humidity vs Price"),
        ("Precipitation_mm", "Coffee Price", "Precipitation vs Price"),
    ]
    scatter_plots = []
    for x_col, y_label, title in scatter_specs:
        x_values = daily[x_col].dropna().tolist()
        y_values = daily.loc[daily[x_col].notna(), "Close_USD_60kg"].tolist()
        slope, intercept = linear_regression(x_values, y_values)
        scatter_plots.append(
            {
                "title": title,
                "xLabel": x_col,
                "yLabel": y_label,
                "points": sample_pairs(daily.rename(columns={"Close_USD_60kg": "Coffee Price"}), x_col, "Coffee Price"),
                "trend": {
                    "slope": rounded(slope, 4),
                    "intercept": rounded(intercept, 2),
                },
            }
        )

    distribution_specs = [
        ("Temp_Max", "Temp Max"),
        ("Temp_Min", "Temp Min"),
        ("Humidity", "Humidity"),
        ("Solar_Radiation", "Solar Radiation"),
        ("Precipitation_mm", "Precipitation"),
        ("Close_USD_60kg", "Coffee Price"),
    ]
    distributions = [
        {
            "title": label,
            "bins": make_histogram(frame[column].tolist() if column != "Close_USD_60kg" else daily[column].tolist(), bins=22),
        }
        for column, label in distribution_specs
    ]

    monthly_price = daily.groupby("YearMonth", as_index=False)["Close_USD_60kg"].mean()
    recent = daily.tail(365)

    return {
        "correlationHeatmap": heatmap,
        "scatterPlots": scatter_plots,
        "distributions": distributions,
        "monthlyPrice": [
            {"date": row["YearMonth"], "price": rounded(row["Close_USD_60kg"], 2)} for _, row in monthly_price.iterrows()
        ],
        "recentPrice": [
            {
                "date": row["Date"].strftime("%Y-%m-%d"),
                "price": rounded(row["Close_USD_60kg"], 2),
                "movingAverage": rounded(row["Price_MA30"], 2),
            }
            for _, row in recent.iterrows()
        ],
    }


def build_geospatial(frame, daily):
    location_points = (
        frame.groupby("Location", as_index=False)
        .agg(
            {
                "LON": "first",
                "LAT": "first",
                "Temp_Max": "mean",
                "Temp_Min": "mean",
                "Humidity": "mean",
                "Precipitation_mm": "mean",
            }
        )
        .sort_values("Location")
    )
    location_points["Label"] = location_points["Location"].map(friendly_location)

    price_threshold = daily["Close_USD_60kg"].quantile(0.75)
    daily_regime = daily[["Date", "Close_USD_60kg"]].copy()
    daily_regime["High_Price_Regime"] = (daily_regime["Close_USD_60kg"] >= price_threshold).astype(int)
    frame_with_regime = frame.merge(daily_regime[["Date", "High_Price_Regime"]], on="Date", how="left")

    location_regime = (
        frame_with_regime.groupby(["Location", "High_Price_Regime"], as_index=False)
        .agg(
            {
                "LON": "first",
                "LAT": "first",
                "Precipitation_mm": "mean",
                "Temp_Max": "mean",
            }
        )
    )
    precip_shift = location_regime.pivot(index="Location", columns="High_Price_Regime", values="Precipitation_mm")
    temp_shift = location_regime.pivot(index="Location", columns="High_Price_Regime", values="Temp_Max")
    shift_summary = pd.DataFrame(
        {
            "Location": precip_shift.index,
            "PrecipitationShift": precip_shift.get(1) - precip_shift.get(0),
            "TempMaxShift": temp_shift.get(1) - temp_shift.get(0),
        }
    ).reset_index(drop=True)
    shift_summary["Label"] = shift_summary["Location"].map(friendly_location)
    shift_summary = shift_summary.sort_values("PrecipitationShift", ascending=False)

    model_df = frame_with_regime[
        ["LON", "LAT", "Temp_Max", "Temp_Min", "Humidity", "Solar_Radiation", "Precipitation_mm", "High_Price_Regime"]
    ].dropna(subset=["High_Price_Regime"])
    if len(model_df) > 40000:
        model_df = model_df.iloc[:: max(len(model_df) // 40000, 1)].copy()

    train_df, test_df = train_test_split(
        model_df,
        test_size=0.25,
        random_state=42,
        stratify=model_df["High_Price_Regime"],
    )

    def fit_logistic(feature_columns):
        preprocessor = ColumnTransformer(
            transformers=[
                (
                    "num",
                    Pipeline(
                        [
                            ("imputer", SimpleImputer(strategy="median")),
                            ("scaler", StandardScaler()),
                        ]
                    ),
                    feature_columns,
                )
            ]
        )
        model = Pipeline([("prep", preprocessor), ("clf", LogisticRegression(max_iter=2000))])
        model.fit(train_df[feature_columns], train_df["High_Price_Regime"])
        probabilities = model.predict_proba(test_df[feature_columns])[:, 1]
        predictions = (probabilities >= 0.5).astype(int)
        return {
            "auc": rounded(roc_auc_score(test_df["High_Price_Regime"], probabilities), 3),
            "report": classification_report(
                test_df["High_Price_Regime"],
                predictions,
                output_dict=True,
                zero_division=0,
            ),
        }

    coordinate_model = fit_logistic(["LON", "LAT"])
    full_model = fit_logistic(["LON", "LAT", "Temp_Max", "Temp_Min", "Humidity", "Solar_Radiation", "Precipitation_mm"])

    cluster_features = location_points[["LON", "LAT", "Temp_Max", "Humidity", "Precipitation_mm"]].copy()
    scaled = StandardScaler().fit_transform(cluster_features)
    kmeans = KMeans(n_clusters=4, random_state=42, n_init=20)
    location_points["Cluster"] = kmeans.fit_predict(scaled).astype(int)

    snapshot_date = daily["Date"].max().strftime("%Y-%m-%d")
    snapshot = frame[frame["Date"] == pd.Timestamp(snapshot_date)].dropna(subset=["LON", "LAT"]).copy()

    kriging_points = load_snapshot(snapshot_date, "precip", 25)
    variogram_model = fit_variogram(kriging_points)
    kriging_result = ordinary_kriging(kriging_points, variogram_model, 28)

    return {
        "priceThreshold": rounded(price_threshold, 2),
        "snapshotDate": snapshot_date,
        "locationMap": [
            {
                "label": row["Label"],
                "lon": rounded(row["LON"], 3),
                "lat": rounded(row["LAT"], 3),
                "precip": rounded(row["Precipitation_mm"], 2),
                "tempMax": rounded(row["Temp_Max"], 2),
                "cluster": int(row["Cluster"]),
            }
            for _, row in location_points.iterrows()
        ],
        "highPriceShifts": [
            {
                "label": row["Label"],
                "precipShift": rounded(row["PrecipitationShift"], 2),
                "tempShift": rounded(row["TempMaxShift"], 2),
            }
            for _, row in shift_summary.head(10).iterrows()
        ],
        "modelComparison": [
            {
                "label": "Coordinates only",
                "auc": coordinate_model["auc"],
                "precision": rounded(coordinate_model["report"]["1"]["precision"], 3),
                "recall": rounded(coordinate_model["report"]["1"]["recall"], 3),
            },
            {
                "label": "Coordinates + weather",
                "auc": full_model["auc"],
                "precision": rounded(full_model["report"]["1"]["precision"], 3),
                "recall": rounded(full_model["report"]["1"]["recall"], 3),
            },
        ],
        "kriging": {
            "variable": "precip",
            "label": "Precipitation kriging surface",
            "date": snapshot_date,
            "nugget": rounded(variogram_model.nugget, 4),
            "sill": rounded(variogram_model.sill, 4),
            "range": rounded(variogram_model.var_range, 4),
            "meanObserved": rounded(float(np.mean(kriging_result["values"])), 3),
            "surfaceMin": rounded(float(np.min(kriging_result["surface"])), 3),
            "surfaceMax": rounded(float(np.max(kriging_result["surface"])), 3),
            "varianceMean": rounded(float(np.mean(kriging_result["variance"])), 4),
            "gridLon": [rounded(value, 3) for value in kriging_result["grid_lon"].tolist()],
            "gridLat": [rounded(value, 3) for value in kriging_result["grid_lat"].tolist()],
            "surface": [[rounded(value, 2) for value in row] for row in kriging_result["surface"].tolist()],
            "variance": [[rounded(value, 2) for value in row] for row in kriging_result["variance"].tolist()],
            "points": [
                {
                    "lon": rounded(point["lon"], 3),
                    "lat": rounded(point["lat"], 3),
                    "value": rounded(point["value"], 2),
                    "label": friendly_location(point["location"]),
                }
                for point in kriging_points
            ],
        },
    }


def main():
    by_date, by_location, locations, row_count, missing_weather_points = build_dataset()
    frame, daily = load_frames()

    dates = sorted(by_date)
    prices = [by_date[iso_date]["price"] for iso_date in dates]
    first_date = dates[0]
    last_date = dates[-1]
    latest_price = prices[-1]

    min_price = min(prices)
    max_price = max(prices)
    min_idx = prices.index(min_price)
    max_idx = prices.index(max_price)

    daily_change_pct = ((prices[-1] / prices[-2]) - 1.0) * 100
    full_period_change_pct = ((prices[-1] / prices[0]) - 1.0) * 100
    trailing_30_avg = mean(prices[-30:])
    trailing_365_avg = mean(prices[-365:])

    weather_correlations = []
    for field in WEATHER_FIELDS:
        xs = [by_date[iso_date][field] for iso_date in dates]
        ys = prices
        weather_correlations.append(
            {
                "field": field,
                "label": WEATHER_LABELS[field],
                "unit": WEATHER_UNITS[field],
                "correlation": round(pearson(xs, ys), 4),
                "lag30Correlation": round(pearson(xs[:-30], ys[30:]), 4),
                "average": round(mean(xs), 2),
                "recent30Average": round(mean(xs[-30:]), 2),
                "anomaly": round(mean(xs[-30:]) - mean(xs), 2),
            }
        )
    weather_correlations.sort(key=lambda item: abs(item["correlation"]), reverse=True)

    currency_correlations = []
    for field, label in FX_FIELDS.items():
        xs = [by_date[iso_date][field] for iso_date in dates]
        currency_correlations.append(
            {
                "field": field,
                "label": label,
                "correlation": round(pearson(xs, prices), 4),
                "latest": round(xs[-1], 4),
            }
        )
    currency_correlations.sort(key=lambda item: abs(item["correlation"]), reverse=True)

    location_highlights = []
    for location, record in by_location.items():
        location_highlights.append(
            {
                "location": location,
                "label": friendly_location(location),
                "temp_max": round(record["temp_max"], 2),
                "humidity": round(record["humidity"], 2),
                "precip": round(record["precip"], 2),
                "solar": round(record["solar"], 2),
            }
        )

    hottest_locations = sorted(location_highlights, key=lambda item: item["temp_max"], reverse=True)[:5]
    wettest_locations = sorted(location_highlights, key=lambda item: item["precip"], reverse=True)[:5]
    most_humid_locations = sorted(location_highlights, key=lambda item: item["humidity"], reverse=True)[:5]

    monthly_buckets = defaultdict(list)
    for iso_date, price in zip(dates, prices):
        monthly_buckets[month_key(iso_date)].append(price)
    monthly_series = [{"month": month, "price": round(mean(values), 2)} for month, values in sorted(monthly_buckets.items())]

    recent_window = 180
    horizon = 30
    recent_prices = prices[-recent_window:]
    regression_x = list(range(recent_window))
    slope, intercept = linear_regression(regression_x, recent_prices)
    fitted = [intercept + slope * x for x in regression_x]
    residuals = [actual - predicted for actual, predicted in zip(recent_prices, fitted)]
    rmse = (sum(error * error for error in residuals) / len(residuals)) ** 0.5

    last_date_obj = datetime.fromisoformat(last_date).date()
    forecast_points = []
    for step in range(1, horizon + 1):
        forecast_date = last_date_obj + timedelta(days=step)
        predicted = intercept + slope * (recent_window - 1 + step)
        forecast_points.append(
            {
                "date": forecast_date.isoformat(),
                "predictedPrice": round(predicted, 2),
                "lowerBound": round(predicted - rmse, 2),
                "upperBound": round(predicted + rmse, 2),
            }
        )

    history_points = [{"date": item["month"], "price": item["price"]} for item in monthly_series[-36:]]
    recent_trend = [{"date": iso_date, "price": round(price, 2)} for iso_date, price in zip(dates[-60:], prices[-60:])]
    moving_average_30 = rolling_average(prices, 30)
    latest_ma30 = moving_average_30[-1]

    price_story = [
        {
            "title": "Long-run price shift",
            "detail": f"Coffee moved from ${prices[0]:.2f} per 60 kg on {first_date} to ${latest_price:.2f} on {last_date}, a {full_period_change_pct:.1f}% increase across the dataset period.",
        },
        {
            "title": "Current regime",
            "detail": f"The latest price sits {'above' if latest_price >= trailing_365_avg else 'below'} the trailing 1-year average by ${abs(latest_price - trailing_365_avg):.2f}, indicating a {'high' if latest_price >= trailing_365_avg else 'soft'} pricing regime.",
        },
        {
            "title": "Weather signal",
            "detail": f"{weather_correlations[0]['label']} shows the strongest same-day weather relationship with price (r = {weather_correlations[0]['correlation']:+.2f}), while 30-day lagged effects remain modest in this aggregated view.",
        },
    ]

    visuals = build_visuals(frame, daily)
    geospatial = build_geospatial(frame, daily)

    generated = {
        "project": {
            "title": "Analyzing the Relationship Between Weather Patterns and Coffee Commodity Prices",
            "subtitle": "A data story built from daily weather observations across major coffee-growing regions, historical coffee commodity prices, and geospatial interpolation.",
        },
        "summary": {
            "rowCount": row_count,
            "locationCount": len(locations),
            "dateCount": len(dates),
            "dateRange": {"start": first_date, "end": last_date},
            "latestPrice": round(latest_price, 2),
            "dailyChangePct": round(daily_change_pct, 2),
            "averagePrice": round(mean(prices), 2),
            "minPrice": round(min_price, 2),
            "minPriceDate": dates[min_idx],
            "maxPrice": round(max_price, 2),
            "maxPriceDate": dates[max_idx],
            "trailing30Average": round(trailing_30_avg, 2),
            "trailing365Average": round(trailing_365_avg, 2),
            "movingAverage30": round(latest_ma30, 2),
            "missingWeatherPoints": missing_weather_points,
        },
        "insights": {
            "priceStory": price_story,
            "weatherCorrelations": weather_correlations,
            "currencyCorrelations": currency_correlations,
            "hottestLocations": hottest_locations,
            "wettestLocations": wettest_locations,
            "mostHumidLocations": most_humid_locations,
        },
        "forecast": {
            "method": "180-day linear trend extrapolation with a 1-RMSE band based on recent residuals.",
            "horizonDays": horizon,
            "slopePerDay": round(slope, 3),
            "rmse": round(rmse, 2),
            "averageProjectedPrice": round(mean(item["predictedPrice"] for item in forecast_points), 2),
            "minProjectedPrice": min(item["predictedPrice"] for item in forecast_points),
            "maxProjectedPrice": max(item["predictedPrice"] for item in forecast_points),
            "forecastStart": forecast_points[0]["date"],
            "forecastEnd": forecast_points[-1]["date"],
            "points": forecast_points,
        },
        "series": {
            "history36Months": history_points,
            "recent60Days": recent_trend,
        },
        "visuals": visuals,
        "geospatial": geospatial,
        "methodology": [
            "Daily weather variables were averaged across all coffee-growing locations for each trading date to create a market-level weather view.",
            "Correlations were measured with Pearson coefficients against the daily coffee close price in USD per 60 kg bag.",
            "The geospatial section compares regional weather patterns across high-price and low-price periods and includes an ordinary kriging interpolation over the latest daily snapshot.",
            "The forecast is a simple statistical baseline, not a causal or production trading model. It extends the recent 180-day trend and reports a residual-based uncertainty band.",
        ],
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text("window.analysisData = " + json.dumps(generated, indent=2) + ";\n")
    print(f"Wrote {OUTPUT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
