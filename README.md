# Weather Patterns vs Coffee Prices

This project explores how weather conditions across major coffee-growing regions relate to coffee commodity prices.

The repository includes:

- a static website dashboard in [index.html](/Users/joelyoon/Documents/git_repo/WeatherPatternsvsCoffeePrices/index.html)
- a generated site data bundle in [assets/js/analysis-data.js](/Users/joelyoon/Documents/git_repo/WeatherPatternsvsCoffeePrices/assets/js/analysis-data.js)
- a data generator in [scripts/generate_analysis_data.py](/Users/joelyoon/Documents/git_repo/WeatherPatternsvsCoffeePrices/scripts/generate_analysis_data.py)
- an ordinary kriging script in [scripts/kriging_analysis.py](/Users/joelyoon/Documents/git_repo/WeatherPatternsvsCoffeePrices/scripts/kriging_analysis.py)
- notebooks for visualization and geospatial analysis in [notebooks/coffee_weather_visualizations.ipynb](/Users/joelyoon/Documents/git_repo/WeatherPatternsvsCoffeePrices/notebooks/coffee_weather_visualizations.ipynb) and [notebooks/geospatial_coffee_analysis.ipynb](/Users/joelyoon/Documents/git_repo/WeatherPatternsvsCoffeePrices/notebooks/geospatial_coffee_analysis.ipynb)

## Dataset

The main dataset is [Coffee_Data_Set.csv](/Users/joelyoon/Documents/git_repo/WeatherPatternsvsCoffeePrices/Coffee_Data_Set.csv), which contains:

- daily coffee commodity prices
- longitude and latitude for coffee-growing locations
- weather variables such as temperature, humidity, solar radiation, and precipitation
- exchange-rate context fields

## Website

The website is a static single-page dashboard with sections for:

- overview
- combined analysis
- forecast
- methodology

The analysis section includes market-level charts, summary tables, geospatial maps, and a kriging interpolation surface.

## Refreshing the Website Data

If you update the CSV, regenerate the front-end data with:

```bash
python3 scripts/generate_analysis_data.py
```

This rewrites [assets/js/analysis-data.js](/Users/joelyoon/Documents/git_repo/WeatherPatternsvsCoffeePrices/assets/js/analysis-data.js), which the website reads directly.

## Running the Kriging Script

Example:

```bash
python3 scripts/kriging_analysis.py --variable precip --grid-size 25
```

Optional flags:

- `--date YYYY-MM-DD`
- `--variable temp_max|temp_min|humidity|solar|precip|price`
- `--show`
- `--save-plot output.png`

## Notes

- The site is static and does not require a backend.
- The commodity price is market-level, so the geospatial analysis is framed around regional weather context and price regimes rather than a unique local price per coordinate.
