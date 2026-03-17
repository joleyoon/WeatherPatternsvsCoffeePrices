#!/usr/bin/env python3

import csv
import json
from collections import defaultdict
from datetime import date, datetime, timedelta
from pathlib import Path
from statistics import mean


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


def main():
    by_date, by_location, locations, row_count, missing_weather_points = build_dataset()
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

    generated = {
        "project": {
            "title": "Analyzing the Relationship Between Weather Patterns and Coffee Commodity Prices",
            "subtitle": "A data story built from daily weather observations across major coffee-growing regions and historical coffee commodity prices.",
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
        "methodology": [
            "Daily weather variables were averaged across all coffee-growing locations for each trading date to create a market-level weather view.",
            "Correlations were measured with Pearson coefficients against the daily coffee close price in USD per 60 kg bag.",
            "The forecast is a simple statistical baseline, not a causal or production trading model. It extends the recent 180-day trend and reports a residual-based uncertainty band.",
        ],
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text("window.analysisData = " + json.dumps(generated, indent=2) + ";\n")
    print(f"Wrote {OUTPUT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
