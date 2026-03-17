window.analysisData = {
  "project": {
    "title": "Analyzing the Relationship Between Weather Patterns and Coffee Commodity Prices",
    "subtitle": "A data story built from daily weather observations across major coffee-growing regions and historical coffee commodity prices."
  },
  "summary": {
    "rowCount": 233000,
    "locationCount": 25,
    "dateCount": 9320,
    "dateRange": {
      "start": "2000-01-03",
      "end": "2025-07-09"
    },
    "latestPrice": 378.11,
    "dailyChangePct": -0.54,
    "averagePrice": 182.82,
    "minPrice": 54.89,
    "minPriceDate": "2001-12-04",
    "maxPrice": 580.56,
    "maxPriceDate": "2025-02-13",
    "trailing30Average": 419.33,
    "trailing365Average": 420.88,
    "movingAverage30": 419.33,
    "missingWeatherPoints": 28
  },
  "insights": {
    "priceStory": [
      {
        "title": "Long-run price shift",
        "detail": "Coffee moved from $154.10 per 60 kg on 2000-01-03 to $378.11 on 2025-07-09, a 145.4% increase across the dataset period."
      },
      {
        "title": "Current regime",
        "detail": "The latest price sits below the trailing 1-year average by $42.76, indicating a soft pricing regime."
      },
      {
        "title": "Weather signal",
        "detail": "Average min temperature shows the strongest same-day weather relationship with price (r = +0.10), while 30-day lagged effects remain modest in this aggregated view."
      }
    ],
    "weatherCorrelations": [
      {
        "field": "temp_min",
        "label": "Average min temperature",
        "unit": "C",
        "correlation": 0.0998,
        "lag30Correlation": 0.115,
        "average": 16.68,
        "recent30Average": 15.88,
        "anomaly": -0.8
      },
      {
        "field": "precip",
        "label": "Average precipitation",
        "unit": "mm",
        "correlation": 0.0698,
        "lag30Correlation": 0.0489,
        "average": 4.14,
        "recent30Average": 8.69,
        "anomaly": 4.55
      },
      {
        "field": "humidity",
        "label": "Average humidity",
        "unit": "%",
        "correlation": 0.0303,
        "lag30Correlation": 0.0235,
        "average": 76.76,
        "recent30Average": 81.88,
        "anomaly": 5.12
      },
      {
        "field": "temp_max",
        "label": "Average max temperature",
        "unit": "C",
        "correlation": 0.029,
        "lag30Correlation": 0.0478,
        "average": 26.73,
        "recent30Average": 24.26,
        "anomaly": -2.47
      },
      {
        "field": "solar",
        "label": "Average solar radiation",
        "unit": "MJ/m2",
        "correlation": -0.0038,
        "lag30Correlation": 0.0085,
        "average": 18.09,
        "recent30Average": 15.7,
        "anomaly": -2.4
      }
    ],
    "currencyCorrelations": [
      {
        "field": "cny",
        "label": "Chinese yuan",
        "correlation": -0.5099,
        "latest": 7.1684
      },
      {
        "field": "mxn",
        "label": "Mexican peso",
        "correlation": 0.4262,
        "latest": 18.644
      },
      {
        "field": "brl",
        "label": "Brazilian real",
        "correlation": 0.3353,
        "latest": 5.4178
      }
    ],
    "hottestLocations": [
      {
        "location": "Mexico_Chiapas",
        "label": "Mexico, Chiapas",
        "temp_max": 30.23,
        "humidity": 76.51,
        "precip": 6.94,
        "solar": 18.92
      },
      {
        "location": "Brazil_Minas_Gerais_Aqua_Boa",
        "label": "Brazil, Minas Gerais Aqua Boa",
        "temp_max": 29.13,
        "humidity": 71.38,
        "precip": 2.71,
        "solar": 18.07
      },
      {
        "location": "Honduras_Danli",
        "label": "Honduras, Danli",
        "temp_max": 28.91,
        "humidity": 75.44,
        "precip": 3.08,
        "solar": 18.61
      },
      {
        "location": "Peru_Jaen",
        "label": "Peru, Jaen",
        "temp_max": 28.89,
        "humidity": 68.09,
        "precip": 1.27,
        "solar": 14.93
      },
      {
        "location": "Honduras_San_Jose",
        "label": "Honduras, San Jose",
        "temp_max": 28.81,
        "humidity": 74.06,
        "precip": 3.65,
        "solar": 18.45
      }
    ],
    "wettestLocations": [
      {
        "location": "Colombia_Santuario",
        "label": "Colombia, Santuario",
        "temp_max": 25.28,
        "humidity": 89.05,
        "precip": 7.78,
        "solar": 17.18
      },
      {
        "location": "Mexico_Chiapas",
        "label": "Mexico, Chiapas",
        "temp_max": 30.23,
        "humidity": 76.51,
        "precip": 6.94,
        "solar": 18.92
      },
      {
        "location": "Colombia_Andes",
        "label": "Colombia, Andes",
        "temp_max": 22.15,
        "humidity": 87.45,
        "precip": 6.32,
        "solar": 17.18
      },
      {
        "location": "Ethiopia_Bare",
        "label": "Ethiopia, Bare",
        "temp_max": 27.47,
        "humidity": 73.23,
        "precip": 6.07,
        "solar": 19.68
      },
      {
        "location": "Guatemala_San_Marcos",
        "label": "Guatemala, San Marcos",
        "temp_max": 23.88,
        "humidity": 83.28,
        "precip": 5.86,
        "solar": 18.92
      }
    ],
    "mostHumidLocations": [
      {
        "location": "Colombia_Santuario",
        "label": "Colombia, Santuario",
        "temp_max": 25.28,
        "humidity": 89.05,
        "precip": 7.78,
        "solar": 17.18
      },
      {
        "location": "Colombia_Andes",
        "label": "Colombia, Andes",
        "temp_max": 22.15,
        "humidity": 87.45,
        "precip": 6.32,
        "solar": 17.18
      },
      {
        "location": "Colombia_Morelia",
        "label": "Colombia, Morelia",
        "temp_max": 26.88,
        "humidity": 85.64,
        "precip": 4.19,
        "solar": 15.74
      },
      {
        "location": "Guatemala_San_Marcos",
        "label": "Guatemala, San Marcos",
        "temp_max": 23.88,
        "humidity": 83.28,
        "precip": 5.86,
        "solar": 18.92
      },
      {
        "location": "Colombia_Timbio",
        "label": "Colombia, Timbio",
        "temp_max": 24.21,
        "humidity": 82.23,
        "precip": 2.88,
        "solar": 14.72
      }
    ]
  },
  "forecast": {
    "method": "180-day linear trend extrapolation with a 1-RMSE band based on recent residuals.",
    "horizonDays": 30,
    "slopePerDay": -0.382,
    "rmse": 40.25,
    "averageProjectedPrice": 446.26,
    "minProjectedPrice": 440.72,
    "maxProjectedPrice": 451.81,
    "forecastStart": "2025-07-10",
    "forecastEnd": "2025-08-08",
    "points": [
      {
        "date": "2025-07-10",
        "predictedPrice": 451.81,
        "lowerBound": 411.56,
        "upperBound": 492.06
      },
      {
        "date": "2025-07-11",
        "predictedPrice": 451.43,
        "lowerBound": 411.18,
        "upperBound": 491.67
      },
      {
        "date": "2025-07-12",
        "predictedPrice": 451.04,
        "lowerBound": 410.8,
        "upperBound": 491.29
      },
      {
        "date": "2025-07-13",
        "predictedPrice": 450.66,
        "lowerBound": 410.41,
        "upperBound": 490.91
      },
      {
        "date": "2025-07-14",
        "predictedPrice": 450.28,
        "lowerBound": 410.03,
        "upperBound": 490.53
      },
      {
        "date": "2025-07-15",
        "predictedPrice": 449.9,
        "lowerBound": 409.65,
        "upperBound": 490.14
      },
      {
        "date": "2025-07-16",
        "predictedPrice": 449.51,
        "lowerBound": 409.27,
        "upperBound": 489.76
      },
      {
        "date": "2025-07-17",
        "predictedPrice": 449.13,
        "lowerBound": 408.88,
        "upperBound": 489.38
      },
      {
        "date": "2025-07-18",
        "predictedPrice": 448.75,
        "lowerBound": 408.5,
        "upperBound": 489.0
      },
      {
        "date": "2025-07-19",
        "predictedPrice": 448.37,
        "lowerBound": 408.12,
        "upperBound": 488.62
      },
      {
        "date": "2025-07-20",
        "predictedPrice": 447.99,
        "lowerBound": 407.74,
        "upperBound": 488.23
      },
      {
        "date": "2025-07-21",
        "predictedPrice": 447.6,
        "lowerBound": 407.36,
        "upperBound": 487.85
      },
      {
        "date": "2025-07-22",
        "predictedPrice": 447.22,
        "lowerBound": 406.97,
        "upperBound": 487.47
      },
      {
        "date": "2025-07-23",
        "predictedPrice": 446.84,
        "lowerBound": 406.59,
        "upperBound": 487.09
      },
      {
        "date": "2025-07-24",
        "predictedPrice": 446.46,
        "lowerBound": 406.21,
        "upperBound": 486.7
      },
      {
        "date": "2025-07-25",
        "predictedPrice": 446.07,
        "lowerBound": 405.83,
        "upperBound": 486.32
      },
      {
        "date": "2025-07-26",
        "predictedPrice": 445.69,
        "lowerBound": 405.44,
        "upperBound": 485.94
      },
      {
        "date": "2025-07-27",
        "predictedPrice": 445.31,
        "lowerBound": 405.06,
        "upperBound": 485.56
      },
      {
        "date": "2025-07-28",
        "predictedPrice": 444.93,
        "lowerBound": 404.68,
        "upperBound": 485.17
      },
      {
        "date": "2025-07-29",
        "predictedPrice": 444.54,
        "lowerBound": 404.3,
        "upperBound": 484.79
      },
      {
        "date": "2025-07-30",
        "predictedPrice": 444.16,
        "lowerBound": 403.91,
        "upperBound": 484.41
      },
      {
        "date": "2025-07-31",
        "predictedPrice": 443.78,
        "lowerBound": 403.53,
        "upperBound": 484.03
      },
      {
        "date": "2025-08-01",
        "predictedPrice": 443.4,
        "lowerBound": 403.15,
        "upperBound": 483.64
      },
      {
        "date": "2025-08-02",
        "predictedPrice": 443.01,
        "lowerBound": 402.77,
        "upperBound": 483.26
      },
      {
        "date": "2025-08-03",
        "predictedPrice": 442.63,
        "lowerBound": 402.38,
        "upperBound": 482.88
      },
      {
        "date": "2025-08-04",
        "predictedPrice": 442.25,
        "lowerBound": 402.0,
        "upperBound": 482.5
      },
      {
        "date": "2025-08-05",
        "predictedPrice": 441.87,
        "lowerBound": 401.62,
        "upperBound": 482.12
      },
      {
        "date": "2025-08-06",
        "predictedPrice": 441.49,
        "lowerBound": 401.24,
        "upperBound": 481.73
      },
      {
        "date": "2025-08-07",
        "predictedPrice": 441.1,
        "lowerBound": 400.85,
        "upperBound": 481.35
      },
      {
        "date": "2025-08-08",
        "predictedPrice": 440.72,
        "lowerBound": 400.47,
        "upperBound": 480.97
      }
    ]
  },
  "series": {
    "history36Months": [
      {
        "date": "2022-08",
        "price": 296.35
      },
      {
        "date": "2022-09",
        "price": 298.64
      },
      {
        "date": "2022-10",
        "price": 263.73
      },
      {
        "date": "2022-11",
        "price": 218.25
      },
      {
        "date": "2022-12",
        "price": 218.55
      },
      {
        "date": "2023-01",
        "price": 210.86
      },
      {
        "date": "2023-02",
        "price": 241.58
      },
      {
        "date": "2023-03",
        "price": 238.18
      },
      {
        "date": "2023-04",
        "price": 250.46
      },
      {
        "date": "2023-05",
        "price": 247.65
      },
      {
        "date": "2023-06",
        "price": 236.96
      },
      {
        "date": "2023-07",
        "price": 212.4
      },
      {
        "date": "2023-08",
        "price": 204.94
      },
      {
        "date": "2023-09",
        "price": 200.86
      },
      {
        "date": "2023-10",
        "price": 205.88
      },
      {
        "date": "2023-11",
        "price": 232.45
      },
      {
        "date": "2023-12",
        "price": 255.95
      },
      {
        "date": "2024-01",
        "price": 246.19
      },
      {
        "date": "2024-02",
        "price": 254.28
      },
      {
        "date": "2024-03",
        "price": 250.45
      },
      {
        "date": "2024-04",
        "price": 296.03
      },
      {
        "date": "2024-05",
        "price": 279.15
      },
      {
        "date": "2024-06",
        "price": 300.3
      },
      {
        "date": "2024-07",
        "price": 313.82
      },
      {
        "date": "2024-08",
        "price": 321.21
      },
      {
        "date": "2024-09",
        "price": 339.24
      },
      {
        "date": "2024-10",
        "price": 334.65
      },
      {
        "date": "2024-11",
        "price": 370.21
      },
      {
        "date": "2024-12",
        "price": 427.4
      },
      {
        "date": "2025-01",
        "price": 441.54
      },
      {
        "date": "2025-02",
        "price": 532.47
      },
      {
        "date": "2025-03",
        "price": 515.08
      },
      {
        "date": "2025-04",
        "price": 499.6
      },
      {
        "date": "2025-05",
        "price": 498.8
      },
      {
        "date": "2025-06",
        "price": 443.52
      },
      {
        "date": "2025-07",
        "price": 385.18
      }
    ],
    "recent60Days": [
      {
        "date": "2025-05-11",
        "price": 525.34
      },
      {
        "date": "2025-05-12",
        "price": 505.89
      },
      {
        "date": "2025-05-13",
        "price": 509.07
      },
      {
        "date": "2025-05-14",
        "price": 494.65
      },
      {
        "date": "2025-05-15",
        "price": 509.2
      },
      {
        "date": "2025-05-16",
        "price": 497.69
      },
      {
        "date": "2025-05-17",
        "price": 497.69
      },
      {
        "date": "2025-05-18",
        "price": 497.69
      },
      {
        "date": "2025-05-19",
        "price": 497.56
      },
      {
        "date": "2025-05-20",
        "price": 488.5
      },
      {
        "date": "2025-05-21",
        "price": 489.82
      },
      {
        "date": "2025-05-22",
        "price": 477.19
      },
      {
        "date": "2025-05-23",
        "price": 477.52
      },
      {
        "date": "2025-05-24",
        "price": 477.52
      },
      {
        "date": "2025-05-25",
        "price": 477.52
      },
      {
        "date": "2025-05-26",
        "price": 477.52
      },
      {
        "date": "2025-05-27",
        "price": 478.45
      },
      {
        "date": "2025-05-28",
        "price": 465.55
      },
      {
        "date": "2025-05-29",
        "price": 460.85
      },
      {
        "date": "2025-05-30",
        "price": 452.98
      },
      {
        "date": "2025-05-31",
        "price": 452.98
      },
      {
        "date": "2025-06-01",
        "price": 452.98
      },
      {
        "date": "2025-06-02",
        "price": 455.63
      },
      {
        "date": "2025-06-03",
        "price": 450.87
      },
      {
        "date": "2025-06-04",
        "price": 457.88
      },
      {
        "date": "2025-06-05",
        "price": 475.87
      },
      {
        "date": "2025-06-06",
        "price": 473.62
      },
      {
        "date": "2025-06-07",
        "price": 473.62
      },
      {
        "date": "2025-06-08",
        "price": 473.62
      },
      {
        "date": "2025-06-09",
        "price": 478.25
      },
      {
        "date": "2025-06-10",
        "price": 469.65
      },
      {
        "date": "2025-06-11",
        "price": 463.83
      },
      {
        "date": "2025-06-12",
        "price": 460.06
      },
      {
        "date": "2025-06-13",
        "price": 462.57
      },
      {
        "date": "2025-06-14",
        "price": 462.57
      },
      {
        "date": "2025-06-15",
        "price": 462.57
      },
      {
        "date": "2025-06-16",
        "price": 454.97
      },
      {
        "date": "2025-06-17",
        "price": 444.25
      },
      {
        "date": "2025-06-18",
        "price": 429.77
      },
      {
        "date": "2025-06-19",
        "price": 429.77
      },
      {
        "date": "2025-06-20",
        "price": 422.03
      },
      {
        "date": "2025-06-21",
        "price": 422.03
      },
      {
        "date": "2025-06-22",
        "price": 422.03
      },
      {
        "date": "2025-06-23",
        "price": 436.91
      },
      {
        "date": "2025-06-24",
        "price": 417.14
      },
      {
        "date": "2025-06-25",
        "price": 408.27
      },
      {
        "date": "2025-06-26",
        "price": 409.4
      },
      {
        "date": "2025-06-27",
        "price": 409.93
      },
      {
        "date": "2025-06-28",
        "price": 409.93
      },
      {
        "date": "2025-06-29",
        "price": 409.93
      },
      {
        "date": "2025-06-30",
        "price": 405.76
      },
      {
        "date": "2025-07-01",
        "price": 395.31
      },
      {
        "date": "2025-07-02",
        "price": 394.12
      },
      {
        "date": "2025-07-03",
        "price": 387.11
      },
      {
        "date": "2025-07-04",
        "price": 387.11
      },
      {
        "date": "2025-07-05",
        "price": 387.11
      },
      {
        "date": "2025-07-06",
        "price": 387.11
      },
      {
        "date": "2025-07-07",
        "price": 370.44
      },
      {
        "date": "2025-07-08",
        "price": 380.16
      },
      {
        "date": "2025-07-09",
        "price": 378.11
      }
    ]
  },
  "methodology": [
    "Daily weather variables were averaged across all coffee-growing locations for each trading date to create a market-level weather view.",
    "Correlations were measured with Pearson coefficients against the daily coffee close price in USD per 60 kg bag.",
    "The forecast is a simple statistical baseline, not a causal or production trading model. It extends the recent 180-day trend and reports a residual-based uncertainty band."
  ]
};
