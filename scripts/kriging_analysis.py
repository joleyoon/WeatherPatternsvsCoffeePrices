#!/usr/bin/env python3

import argparse
import csv
from dataclasses import dataclass
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
from scipy.optimize import curve_fit
from scipy.spatial.distance import cdist, pdist, squareform


ROOT = Path(__file__).resolve().parent.parent
DATASET_PATH = ROOT / "Coffee_Data_Set.csv"

VARIABLE_COLUMNS = {
    "temp_max": "Temp_Max",
    "temp_min": "Temp_Min",
    "humidity": "Humidity",
    "solar": "Solar_Radiation",
    "precip": "Precipitation_mm",
    "price": "Close_USD_60kg",
}


def parse_args():
    parser = argparse.ArgumentParser(
        description="Run ordinary kriging over one daily snapshot of the coffee-weather dataset."
    )
    parser.add_argument(
        "--date",
        default=None,
        help="ISO date to analyze, for example 2025-07-09. Defaults to the latest available date.",
    )
    parser.add_argument(
        "--variable",
        default="precip",
        choices=sorted(VARIABLE_COLUMNS),
        help="Column to interpolate geostatistically.",
    )
    parser.add_argument(
        "--grid-size",
        type=int,
        default=60,
        help="Number of grid cells per axis for the interpolation surface.",
    )
    parser.add_argument(
        "--max-points",
        type=int,
        default=25,
        help="Maximum observation points to use. The dataset has 25 locations per day, so the default uses all of them.",
    )
    parser.add_argument(
        "--show",
        action="store_true",
        help="Display a contour plot of the kriged surface.",
    )
    parser.add_argument(
        "--save-plot",
        default=None,
        help="Optional output path for a saved contour plot.",
    )
    return parser.parse_args()


def parse_float(value):
    if value in ("", "NA", None):
        return None
    return float(value)


def load_snapshot(target_date, variable, max_points):
    rows = []
    latest_date = None

    with DATASET_PATH.open(newline="") as handle:
        reader = csv.DictReader(handle)
        for row in reader:
            latest_date = row["Date"]
            if target_date is not None and row["Date"] != target_date:
                continue

            value = parse_float(row[VARIABLE_COLUMNS[variable]])
            if value is None:
                continue

            rows.append(
                {
                    "date": row["Date"],
                    "lon": float(row["LON"]),
                    "lat": float(row["LAT"]),
                    "location": row["Location"],
                    "value": value,
                }
            )

    if target_date is None:
        if latest_date is None:
            raise ValueError("Dataset is empty.")
        return load_snapshot(latest_date, variable, max_points)

    if not rows:
        raise ValueError(f"No usable rows found for date {target_date} and variable {variable}.")

    if max_points and len(rows) > max_points:
        rows = rows[:max_points]

    return rows


def empirical_variogram(points, n_bins=8):
    coordinates = np.array([[point["lon"], point["lat"]] for point in points], dtype=float)
    values = np.array([point["value"] for point in points], dtype=float)

    pairwise_distances = pdist(coordinates)
    pairwise_semivariance = 0.5 * pdist(values[:, None], metric="sqeuclidean")

    if len(pairwise_distances) == 0:
        raise ValueError("At least two points are required for a semivariogram.")

    max_distance = pairwise_distances.max()
    if max_distance == 0:
        raise ValueError("All points have identical coordinates; kriging cannot proceed.")

    bin_edges = np.linspace(0, max_distance, n_bins + 1)
    bin_centers = []
    gamma = []

    for start, end in zip(bin_edges[:-1], bin_edges[1:]):
        mask = (pairwise_distances >= start) & (pairwise_distances < end)
        if not np.any(mask):
            continue
        bin_centers.append((start + end) / 2.0)
        gamma.append(pairwise_semivariance[mask].mean())

    if len(bin_centers) < 3:
        raise ValueError("Not enough semivariogram bins were populated to fit a model.")

    return np.array(bin_centers), np.array(gamma)


def spherical_variogram(h, nugget, sill, var_range):
    scaled = h / np.maximum(var_range, 1e-9)
    return np.where(
        h <= var_range,
        nugget + sill * (1.5 * scaled - 0.5 * scaled ** 3),
        nugget + sill,
    )


@dataclass
class VariogramModel:
    nugget: float
    sill: float
    var_range: float

    def __call__(self, distances):
        return spherical_variogram(np.asarray(distances), self.nugget, self.sill, self.var_range)


def fit_variogram(points):
    distances, semivariance = empirical_variogram(points)
    initial_guess = (
        float(np.nanmin(semivariance) * 0.1),
        float(np.nanmax(semivariance)),
        float(np.nanmax(distances) * 0.5),
    )
    bounds = ([0.0, 0.0, 1e-6], [np.inf, np.inf, np.inf])
    params, _ = curve_fit(
        spherical_variogram,
        distances,
        semivariance,
        p0=initial_guess,
        bounds=bounds,
        maxfev=20000,
    )
    return VariogramModel(*params)


def ordinary_kriging(points, model, grid_size):
    coordinates = np.array([[point["lon"], point["lat"]] for point in points], dtype=float)
    values = np.array([point["value"] for point in points], dtype=float)
    count = len(points)

    min_lon, min_lat = coordinates.min(axis=0)
    max_lon, max_lat = coordinates.max(axis=0)
    padding_lon = (max_lon - min_lon) * 0.08 or 0.5
    padding_lat = (max_lat - min_lat) * 0.08 or 0.5

    grid_lon = np.linspace(min_lon - padding_lon, max_lon + padding_lon, grid_size)
    grid_lat = np.linspace(min_lat - padding_lat, max_lat + padding_lat, grid_size)
    mesh_lon, mesh_lat = np.meshgrid(grid_lon, grid_lat)
    grid_points = np.column_stack([mesh_lon.ravel(), mesh_lat.ravel()])

    point_distances = squareform(pdist(coordinates))
    kriging_matrix = np.zeros((count + 1, count + 1), dtype=float)
    kriging_matrix[:count, :count] = model(point_distances)
    kriging_matrix[:count, count] = 1.0
    kriging_matrix[count, :count] = 1.0

    surfaces = []
    variances = []
    for target in grid_points:
        distances = cdist(coordinates, target[None, :]).ravel()
        rhs = np.zeros(count + 1, dtype=float)
        rhs[:count] = model(distances)
        rhs[count] = 1.0
        weights = np.linalg.solve(kriging_matrix, rhs)
        estimate = np.dot(weights[:count], values)
        variance = np.dot(weights, rhs)
        surfaces.append(estimate)
        variances.append(max(variance, 0.0))

    return {
        "grid_lon": grid_lon,
        "grid_lat": grid_lat,
        "surface": np.array(surfaces).reshape(grid_size, grid_size),
        "variance": np.array(variances).reshape(grid_size, grid_size),
        "coordinates": coordinates,
        "values": values,
    }


def plot_surface(result, variable, analysis_date, save_path=None, show=False):
    fig, axes = plt.subplots(1, 2, figsize=(14, 5.5), constrained_layout=True)

    surface_plot = axes[0].contourf(
        result["grid_lon"],
        result["grid_lat"],
        result["surface"],
        levels=18,
        cmap="YlGnBu",
    )
    axes[0].scatter(
        result["coordinates"][:, 0],
        result["coordinates"][:, 1],
        c=result["values"],
        cmap="YlGnBu",
        edgecolors="black",
        s=45,
    )
    axes[0].set_title(f"Ordinary Kriging Surface: {variable} ({analysis_date})")
    axes[0].set_xlabel("Longitude")
    axes[0].set_ylabel("Latitude")
    fig.colorbar(surface_plot, ax=axes[0], shrink=0.85, label=variable)

    variance_plot = axes[1].contourf(
        result["grid_lon"],
        result["grid_lat"],
        result["variance"],
        levels=18,
        cmap="magma",
    )
    axes[1].scatter(
        result["coordinates"][:, 0],
        result["coordinates"][:, 1],
        color="white",
        edgecolors="black",
        s=35,
    )
    axes[1].set_title("Kriging Variance")
    axes[1].set_xlabel("Longitude")
    axes[1].set_ylabel("Latitude")
    fig.colorbar(variance_plot, ax=axes[1], shrink=0.85, label="variance")

    if save_path:
        fig.savefig(save_path, dpi=180, bbox_inches="tight")
    if show:
        plt.show()
    else:
        plt.close(fig)


def summarize(points, model, result):
    print(f"Observations used: {len(points)}")
    print(f"Date: {points[0]['date']}")
    print(f"Observed value mean: {result['values'].mean():.3f}")
    print(f"Observed value min/max: {result['values'].min():.3f} / {result['values'].max():.3f}")
    print(
        "Fitted spherical variogram: "
        f"nugget={model.nugget:.4f}, sill={model.sill:.4f}, range={model.var_range:.4f}"
    )
    print(
        "Interpolated surface min/max: "
        f"{result['surface'].min():.3f} / {result['surface'].max():.3f}"
    )
    print(
        "Average kriging variance: "
        f"{result['variance'].mean():.4f}"
    )


def main():
    args = parse_args()
    points = load_snapshot(args.date, args.variable, args.max_points)
    model = fit_variogram(points)
    result = ordinary_kriging(points, model, args.grid_size)
    summarize(points, model, result)

    if args.save_plot or args.show:
        plot_surface(
            result,
            variable=args.variable,
            analysis_date=points[0]["date"],
            save_path=args.save_plot,
            show=args.show,
        )


if __name__ == "__main__":
    main()
