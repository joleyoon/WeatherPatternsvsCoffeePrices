window.analysisData = {
  "project": {
    "title": "Analyzing the Relationship Between Weather Patterns and Coffee Commodity Prices",
    "subtitle": "A data story built from daily weather observations across major coffee-growing regions, historical coffee commodity prices, and geospatial interpolation."
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
  "visuals": {
    "correlationHeatmap": {
      "labels": [
        "Coffee Price",
        "Temp Max",
        "Temp Min",
        "Humidity",
        "Solar",
        "Precip",
        "BRL",
        "CNY",
        "MXN"
      ],
      "matrix": [
        [
          1.0,
          0.029,
          0.1,
          0.03,
          -0.004,
          0.07,
          0.335,
          -0.51,
          0.426
        ],
        [
          0.029,
          1.0,
          0.67,
          -0.794,
          0.654,
          -0.333,
          0.176,
          0.013,
          0.104
        ],
        [
          0.1,
          0.67,
          1.0,
          -0.195,
          0.142,
          0.076,
          0.273,
          -0.069,
          0.221
        ],
        [
          0.03,
          -0.794,
          -0.195,
          1.0,
          -0.703,
          0.45,
          0.002,
          -0.085,
          0.068
        ],
        [
          -0.004,
          0.654,
          0.142,
          -0.703,
          1.0,
          -0.504,
          0.012,
          -0.026,
          0.033
        ],
        [
          0.07,
          -0.333,
          0.076,
          0.45,
          -0.504,
          1.0,
          0.118,
          -0.042,
          0.124
        ],
        [
          0.335,
          0.176,
          0.273,
          0.002,
          0.012,
          0.118,
          1.0,
          -0.146,
          0.816
        ],
        [
          -0.51,
          0.013,
          -0.069,
          -0.085,
          -0.026,
          -0.042,
          -0.146,
          1.0,
          -0.548
        ],
        [
          0.426,
          0.104,
          0.221,
          0.068,
          0.033,
          0.124,
          0.816,
          -0.548,
          1.0
        ]
      ]
    },
    "scatterPlots": [
      {
        "title": "Minimum Temperature vs Price",
        "xLabel": "Temp_Min",
        "yLabel": "Coffee Price",
        "points": [
          {
            "x": 15.49,
            "y": 154.1
          },
          {
            "x": 15.33,
            "y": 156.81
          },
          {
            "x": 15.9,
            "y": 147.09
          },
          {
            "x": 16.35,
            "y": 148.48
          },
          {
            "x": 16.11,
            "y": 143.92
          },
          {
            "x": 15.55,
            "y": 136.51
          },
          {
            "x": 16.33,
            "y": 138.03
          },
          {
            "x": 16.77,
            "y": 140.21
          },
          {
            "x": 16.99,
            "y": 135.05
          },
          {
            "x": 17.27,
            "y": 137.17
          },
          {
            "x": 17.58,
            "y": 124.6
          },
          {
            "x": 15.41,
            "y": 129.3
          },
          {
            "x": 17.57,
            "y": 131.09
          },
          {
            "x": 15.92,
            "y": 121.43
          },
          {
            "x": 15.88,
            "y": 136.64
          },
          {
            "x": 16.09,
            "y": 124.94
          },
          {
            "x": 15.22,
            "y": 121.5
          },
          {
            "x": 15.69,
            "y": 111.71
          },
          {
            "x": 15.23,
            "y": 112.24
          },
          {
            "x": 15.5,
            "y": 119.18
          },
          {
            "x": 14.11,
            "y": 127.85
          },
          {
            "x": 14.19,
            "y": 114.35
          },
          {
            "x": 16.19,
            "y": 105.29
          },
          {
            "x": 15.67,
            "y": 103.71
          },
          {
            "x": 16.76,
            "y": 97.75
          },
          {
            "x": 16.17,
            "y": 102.38
          },
          {
            "x": 16.52,
            "y": 102.12
          },
          {
            "x": 16.1,
            "y": 109.79
          },
          {
            "x": 16.62,
            "y": 105.76
          },
          {
            "x": 17.09,
            "y": 114.68
          },
          {
            "x": 16.41,
            "y": 100.0
          },
          {
            "x": 16.13,
            "y": 99.6
          },
          {
            "x": 16.56,
            "y": 90.68
          },
          {
            "x": 16.43,
            "y": 91.93
          },
          {
            "x": 15.27,
            "y": 84.19
          },
          {
            "x": 15.58,
            "y": 82.94
          },
          {
            "x": 15.93,
            "y": 89.09
          },
          {
            "x": 15.52,
            "y": 85.12
          },
          {
            "x": 15.57,
            "y": 92.86
          },
          {
            "x": 15.62,
            "y": 88.76
          },
          {
            "x": 16.59,
            "y": 82.28
          },
          {
            "x": 16.84,
            "y": 79.1
          },
          {
            "x": 17.1,
            "y": 84.53
          },
          {
            "x": 16.22,
            "y": 84.86
          },
          {
            "x": 17.96,
            "y": 78.04
          },
          {
            "x": 17.01,
            "y": 80.89
          },
          {
            "x": 17.5,
            "y": 76.85
          },
          {
            "x": 17.25,
            "y": 74.34
          },
          {
            "x": 17.0,
            "y": 80.62
          },
          {
            "x": 15.78,
            "y": 87.3
          },
          {
            "x": 17.12,
            "y": 83.0
          },
          {
            "x": 17.43,
            "y": 79.23
          },
          {
            "x": 15.72,
            "y": 77.25
          },
          {
            "x": 16.21,
            "y": 78.57
          },
          {
            "x": 16.03,
            "y": 73.41
          },
          {
            "x": 15.21,
            "y": 71.23
          },
          {
            "x": 15.42,
            "y": 69.11
          },
          {
            "x": 16.48,
            "y": 67.99
          },
          {
            "x": 15.29,
            "y": 66.67
          },
          {
            "x": 15.79,
            "y": 65.08
          },
          {
            "x": 16.93,
            "y": 67.4
          },
          {
            "x": 16.52,
            "y": 62.83
          },
          {
            "x": 17.78,
            "y": 63.96
          },
          {
            "x": 16.54,
            "y": 64.95
          },
          {
            "x": 16.81,
            "y": 61.51
          },
          {
            "x": 17.1,
            "y": 59.13
          },
          {
            "x": 16.84,
            "y": 57.28
          },
          {
            "x": 16.23,
            "y": 60.05
          },
          {
            "x": 16.63,
            "y": 59.33
          },
          {
            "x": 16.04,
            "y": 61.38
          },
          {
            "x": 14.65,
            "y": 55.82
          },
          {
            "x": 17.13,
            "y": 58.4
          },
          {
            "x": 17.15,
            "y": 61.71
          },
          {
            "x": 17.6,
            "y": 62.63
          },
          {
            "x": 16.1,
            "y": 65.54
          },
          {
            "x": 16.19,
            "y": 61.91
          },
          {
            "x": 17.46,
            "y": 60.12
          },
          {
            "x": 17.06,
            "y": 57.01
          },
          {
            "x": 17.58,
            "y": 64.82
          },
          {
            "x": 17.36,
            "y": 60.65
          },
          {
            "x": 17.48,
            "y": 71.96
          },
          {
            "x": 17.12,
            "y": 71.83
          },
          {
            "x": 17.16,
            "y": 78.51
          },
          {
            "x": 17.27,
            "y": 70.37
          },
          {
            "x": 17.86,
            "y": 71.23
          },
          {
            "x": 17.67,
            "y": 64.62
          },
          {
            "x": 17.74,
            "y": 62.83
          },
          {
            "x": 17.31,
            "y": 67.06
          },
          {
            "x": 16.27,
            "y": 68.65
          },
          {
            "x": 16.6,
            "y": 65.28
          },
          {
            "x": 15.79,
            "y": 62.3
          },
          {
            "x": 16.0,
            "y": 63.23
          },
          {
            "x": 16.55,
            "y": 68.65
          },
          {
            "x": 15.98,
            "y": 62.63
          },
          {
            "x": 15.4,
            "y": 61.91
          },
          {
            "x": 16.3,
            "y": 62.9
          },
          {
            "x": 15.63,
            "y": 62.17
          },
          {
            "x": 16.47,
            "y": 68.12
          },
          {
            "x": 16.39,
            "y": 78.44
          },
          {
            "x": 16.86,
            "y": 77.32
          },
          {
            "x": 16.41,
            "y": 73.61
          },
          {
            "x": 16.8,
            "y": 77.78
          },
          {
            "x": 17.11,
            "y": 82.81
          },
          {
            "x": 18.24,
            "y": 83.2
          },
          {
            "x": 15.25,
            "y": 89.75
          },
          {
            "x": 16.15,
            "y": 85.65
          },
          {
            "x": 17.04,
            "y": 88.1
          },
          {
            "x": 17.24,
            "y": 83.86
          },
          {
            "x": 16.81,
            "y": 82.81
          },
          {
            "x": 16.39,
            "y": 81.15
          },
          {
            "x": 16.14,
            "y": 84.0
          },
          {
            "x": 16.79,
            "y": 87.63
          },
          {
            "x": 16.33,
            "y": 86.84
          },
          {
            "x": 17.27,
            "y": 86.84
          },
          {
            "x": 17.6,
            "y": 82.87
          },
          {
            "x": 17.54,
            "y": 76.65
          },
          {
            "x": 17.5,
            "y": 77.58
          },
          {
            "x": 17.04,
            "y": 74.87
          },
          {
            "x": 17.81,
            "y": 77.05
          },
          {
            "x": 17.97,
            "y": 82.34
          },
          {
            "x": 16.45,
            "y": 82.61
          },
          {
            "x": 17.62,
            "y": 84.33
          },
          {
            "x": 15.91,
            "y": 89.75
          },
          {
            "x": 16.84,
            "y": 85.58
          },
          {
            "x": 15.53,
            "y": 80.89
          },
          {
            "x": 17.07,
            "y": 78.57
          },
          {
            "x": 16.09,
            "y": 79.5
          },
          {
            "x": 15.17,
            "y": 76.72
          },
          {
            "x": 15.2,
            "y": 80.03
          },
          {
            "x": 15.08,
            "y": 81.61
          },
          {
            "x": 15.93,
            "y": 80.49
          },
          {
            "x": 15.61,
            "y": 83.67
          },
          {
            "x": 15.54,
            "y": 79.5
          },
          {
            "x": 16.51,
            "y": 80.29
          },
          {
            "x": 16.29,
            "y": 83.53
          },
          {
            "x": 17.04,
            "y": 90.54
          },
          {
            "x": 17.04,
            "y": 86.44
          },
          {
            "x": 17.84,
            "y": 86.11
          },
          {
            "x": 16.57,
            "y": 81.28
          },
          {
            "x": 16.64,
            "y": 83.47
          },
          {
            "x": 14.97,
            "y": 77.58
          },
          {
            "x": 17.18,
            "y": 79.56
          },
          {
            "x": 16.89,
            "y": 74.93
          },
          {
            "x": 16.89,
            "y": 82.67
          },
          {
            "x": 16.19,
            "y": 83.33
          },
          {
            "x": 16.51,
            "y": 84.46
          },
          {
            "x": 16.36,
            "y": 85.91
          },
          {
            "x": 17.15,
            "y": 93.65
          },
          {
            "x": 16.68,
            "y": 99.6
          },
          {
            "x": 16.79,
            "y": 99.87
          },
          {
            "x": 16.59,
            "y": 98.35
          },
          {
            "x": 17.2,
            "y": 92.99
          },
          {
            "x": 17.2,
            "y": 97.49
          },
          {
            "x": 17.15,
            "y": 98.74
          },
          {
            "x": 16.81,
            "y": 102.32
          },
          {
            "x": 17.18,
            "y": 98.02
          },
          {
            "x": 18.43,
            "y": 95.97
          },
          {
            "x": 16.92,
            "y": 89.09
          },
          {
            "x": 16.47,
            "y": 88.82
          },
          {
            "x": 17.13,
            "y": 93.19
          },
          {
            "x": 16.93,
            "y": 95.7
          },
          {
            "x": 16.35,
            "y": 113.16
          },
          {
            "x": 16.08,
            "y": 110.12
          },
          {
            "x": 15.45,
            "y": 100.13
          },
          {
            "x": 15.58,
            "y": 96.69
          },
          {
            "x": 16.49,
            "y": 91.07
          },
          {
            "x": 15.25,
            "y": 95.04
          },
          {
            "x": 15.05,
            "y": 87.9
          },
          {
            "x": 14.85,
            "y": 89.09
          },
          {
            "x": 15.57,
            "y": 88.76
          },
          {
            "x": 16.77,
            "y": 92.59
          },
          {
            "x": 16.07,
            "y": 89.35
          },
          {
            "x": 17.04,
            "y": 99.67
          },
          {
            "x": 16.91,
            "y": 107.28
          },
          {
            "x": 15.56,
            "y": 102.12
          },
          {
            "x": 17.31,
            "y": 97.69
          },
          {
            "x": 15.93,
            "y": 102.78
          },
          {
            "x": 16.01,
            "y": 103.57
          },
          {
            "x": 16.41,
            "y": 116.47
          },
          {
            "x": 16.56,
            "y": 117.59
          },
          {
            "x": 16.94,
            "y": 125.13
          },
          {
            "x": 16.16,
            "y": 135.32
          },
          {
            "x": 15.51,
            "y": 138.49
          },
          {
            "x": 15.74,
            "y": 128.04
          },
          {
            "x": 16.76,
            "y": 132.41
          },
          {
            "x": 16.28,
            "y": 139.02
          },
          {
            "x": 15.85,
            "y": 146.17
          },
          {
            "x": 16.27,
            "y": 155.82
          },
          {
            "x": 18.03,
            "y": 152.45
          },
          {
            "x": 17.7,
            "y": 169.31
          },
          {
            "x": 18.09,
            "y": 178.71
          },
          {
            "x": 18.29,
            "y": 159.92
          },
          {
            "x": 17.78,
            "y": 164.95
          },
          {
            "x": 17.49,
            "y": 148.88
          },
          {
            "x": 17.45,
            "y": 171.43
          },
          {
            "x": 15.95,
            "y": 161.25
          },
          {
            "x": 17.06,
            "y": 150.47
          },
          {
            "x": 17.07,
            "y": 163.63
          },
          {
            "x": 17.07,
            "y": 166.07
          },
          {
            "x": 16.35,
            "y": 147.03
          },
          {
            "x": 15.65,
            "y": 139.49
          },
          {
            "x": 16.09,
            "y": 135.19
          },
          {
            "x": 14.87,
            "y": 136.58
          },
          {
            "x": 15.99,
            "y": 135.05
          },
          {
            "x": 15.87,
            "y": 140.54
          },
          {
            "x": 16.33,
            "y": 138.76
          },
          {
            "x": 16.69,
            "y": 127.18
          },
          {
            "x": 16.63,
            "y": 132.28
          },
          {
            "x": 16.84,
            "y": 117.26
          },
          {
            "x": 17.19,
            "y": 117.73
          },
          {
            "x": 17.15,
            "y": 122.82
          },
          {
            "x": 17.02,
            "y": 132.74
          },
          {
            "x": 17.36,
            "y": 136.84
          },
          {
            "x": 16.18,
            "y": 133.67
          },
          {
            "x": 15.18,
            "y": 141.47
          },
          {
            "x": 15.33,
            "y": 130.49
          },
          {
            "x": 16.07,
            "y": 120.04
          },
          {
            "x": 16.0,
            "y": 127.58
          },
          {
            "x": 15.49,
            "y": 135.98
          },
          {
            "x": 16.24,
            "y": 141.67
          },
          {
            "x": 16.51,
            "y": 155.03
          },
          {
            "x": 16.01,
            "y": 156.62
          },
          {
            "x": 17.34,
            "y": 156.35
          },
          {
            "x": 17.0,
            "y": 152.25
          },
          {
            "x": 17.23,
            "y": 144.78
          },
          {
            "x": 17.28,
            "y": 145.64
          },
          {
            "x": 17.05,
            "y": 139.82
          },
          {
            "x": 17.1,
            "y": 137.77
          },
          {
            "x": 17.21,
            "y": 141.54
          },
          {
            "x": 17.45,
            "y": 138.56
          },
          {
            "x": 16.72,
            "y": 148.15
          },
          {
            "x": 16.95,
            "y": 141.67
          },
          {
            "x": 16.66,
            "y": 135.85
          },
          {
            "x": 15.91,
            "y": 133.14
          },
          {
            "x": 16.34,
            "y": 130.89
          },
          {
            "x": 16.18,
            "y": 126.85
          },
          {
            "x": 15.69,
            "y": 126.26
          },
          {
            "x": 15.67,
            "y": 131.62
          },
          {
            "x": 15.84,
            "y": 131.09
          },
          {
            "x": 14.68,
            "y": 126.72
          },
          {
            "x": 15.76,
            "y": 131.48
          },
          {
            "x": 15.4,
            "y": 142.4
          },
          {
            "x": 16.77,
            "y": 136.58
          },
          {
            "x": 16.32,
            "y": 136.64
          },
          {
            "x": 15.61,
            "y": 135.52
          },
          {
            "x": 16.89,
            "y": 131.22
          },
          {
            "x": 15.7,
            "y": 142.2
          },
          {
            "x": 18.01,
            "y": 137.44
          },
          {
            "x": 17.79,
            "y": 135.25
          },
          {
            "x": 17.28,
            "y": 142.86
          },
          {
            "x": 16.76,
            "y": 149.41
          },
          {
            "x": 16.66,
            "y": 149.61
          },
          {
            "x": 16.6,
            "y": 156.09
          },
          {
            "x": 16.77,
            "y": 161.25
          },
          {
            "x": 16.53,
            "y": 160.78
          },
          {
            "x": 16.0,
            "y": 170.51
          },
          {
            "x": 16.54,
            "y": 159.33
          },
          {
            "x": 17.18,
            "y": 160.91
          },
          {
            "x": 17.0,
            "y": 153.84
          },
          {
            "x": 16.82,
            "y": 154.23
          },
          {
            "x": 16.73,
            "y": 152.52
          },
          {
            "x": 16.53,
            "y": 157.74
          },
          {
            "x": 16.23,
            "y": 146.96
          },
          {
            "x": 17.85,
            "y": 144.78
          },
          {
            "x": 17.05,
            "y": 148.75
          },
          {
            "x": 17.36,
            "y": 146.63
          },
          {
            "x": 17.33,
            "y": 143.45
          },
          {
            "x": 17.47,
            "y": 137.24
          },
          {
            "x": 16.85,
            "y": 136.25
          },
          {
            "x": 17.06,
            "y": 141.87
          },
          {
            "x": 15.19,
            "y": 149.34
          },
          {
            "x": 14.67,
            "y": 154.17
          },
          {
            "x": 15.91,
            "y": 151.72
          },
          {
            "x": 15.71,
            "y": 145.5
          },
          {
            "x": 15.69,
            "y": 143.26
          },
          {
            "x": 16.48,
            "y": 142.53
          },
          {
            "x": 16.32,
            "y": 151.06
          },
          {
            "x": 15.53,
            "y": 155.62
          },
          {
            "x": 15.85,
            "y": 157.61
          },
          {
            "x": 15.34,
            "y": 151.66
          },
          {
            "x": 17.18,
            "y": 149.01
          },
          {
            "x": 15.95,
            "y": 153.71
          },
          {
            "x": 16.95,
            "y": 171.83
          },
          {
            "x": 16.11,
            "y": 179.7
          },
          {
            "x": 17.42,
            "y": 184.26
          },
          {
            "x": 16.92,
            "y": 163.83
          },
          {
            "x": 17.04,
            "y": 157.28
          },
          {
            "x": 16.06,
            "y": 161.05
          },
          {
            "x": 16.14,
            "y": 163.3
          },
          {
            "x": 15.4,
            "y": 166.6
          },
          {
            "x": 15.43,
            "y": 173.02
          },
          {
            "x": 15.97,
            "y": 177.52
          },
          {
            "x": 15.63,
            "y": 180.16
          },
          {
            "x": 16.06,
            "y": 180.29
          },
          {
            "x": 16.22,
            "y": 176.06
          },
          {
            "x": 16.3,
            "y": 182.74
          },
          {
            "x": 17.11,
            "y": 194.71
          },
          {
            "x": 16.84,
            "y": 204.5
          },
          {
            "x": 16.37,
            "y": 217.73
          },
          {
            "x": 16.67,
            "y": 198.61
          },
          {
            "x": 17.01,
            "y": 173.15
          },
          {
            "x": 16.67,
            "y": 168.52
          },
          {
            "x": 17.69,
            "y": 174.27
          },
          {
            "x": 17.8,
            "y": 178.9
          },
          {
            "x": 17.5,
            "y": 177.98
          },
          {
            "x": 16.58,
            "y": 179.9
          },
          {
            "x": 16.39,
            "y": 180.95
          },
          {
            "x": 16.5,
            "y": 177.12
          },
          {
            "x": 15.65,
            "y": 173.35
          },
          {
            "x": 15.58,
            "y": 181.15
          },
          {
            "x": 15.41,
            "y": 198.61
          },
          {
            "x": 14.35,
            "y": 183.01
          },
          {
            "x": 15.53,
            "y": 179.43
          },
          {
            "x": 14.66,
            "y": 180.43
          },
          {
            "x": 16.42,
            "y": 179.63
          },
          {
            "x": 15.89,
            "y": 177.19
          },
          {
            "x": 15.52,
            "y": 189.49
          },
          {
            "x": 16.7,
            "y": 183.67
          },
          {
            "x": 16.17,
            "y": 171.23
          },
          {
            "x": 16.38,
            "y": 177.45
          },
          {
            "x": 16.99,
            "y": 151.06
          },
          {
            "x": 17.25,
            "y": 152.91
          },
          {
            "x": 17.63,
            "y": 142.53
          },
          {
            "x": 17.27,
            "y": 146.83
          },
          {
            "x": 16.03,
            "y": 146.76
          },
          {
            "x": 15.2,
            "y": 150.93
          },
          {
            "x": 14.95,
            "y": 134.39
          },
          {
            "x": 15.91,
            "y": 144.98
          },
          {
            "x": 16.48,
            "y": 143.39
          },
          {
            "x": 15.53,
            "y": 142.46
          },
          {
            "x": 15.96,
            "y": 150.66
          },
          {
            "x": 16.12,
            "y": 158.27
          },
          {
            "x": 15.9,
            "y": 153.31
          },
          {
            "x": 17.05,
            "y": 148.61
          },
          {
            "x": 16.93,
            "y": 147.09
          },
          {
            "x": 16.77,
            "y": 139.29
          },
          {
            "x": 17.21,
            "y": 143.98
          },
          {
            "x": 17.27,
            "y": 155.23
          },
          {
            "x": 17.55,
            "y": 156.62
          },
          {
            "x": 17.74,
            "y": 153.04
          },
          {
            "x": 17.43,
            "y": 157.41
          },
          {
            "x": 16.74,
            "y": 163.56
          },
          {
            "x": 17.21,
            "y": 168.72
          },
          {
            "x": 16.54,
            "y": 178.57
          },
          {
            "x": 14.9,
            "y": 184.13
          },
          {
            "x": 14.99,
            "y": 171.36
          },
          {
            "x": 15.92,
            "y": 153.64
          },
          {
            "x": 15.64,
            "y": 152.18
          },
          {
            "x": 15.46,
            "y": 149.34
          },
          {
            "x": 16.71,
            "y": 163.96
          },
          {
            "x": 16.5,
            "y": 175.99
          },
          {
            "x": 16.0,
            "y": 175.6
          },
          {
            "x": 15.99,
            "y": 163.63
          },
          {
            "x": 17.56,
            "y": 159.26
          },
          {
            "x": 16.62,
            "y": 165.74
          },
          {
            "x": 18.09,
            "y": 182.61
          },
          {
            "x": 17.41,
            "y": 171.56
          },
          {
            "x": 17.2,
            "y": 182.61
          },
          {
            "x": 17.59,
            "y": 190.02
          },
          {
            "x": 16.71,
            "y": 179.24
          },
          {
            "x": 17.16,
            "y": 175.53
          },
          {
            "x": 16.6,
            "y": 178.04
          },
          {
            "x": 17.48,
            "y": 188.49
          },
          {
            "x": 16.95,
            "y": 188.63
          },
          {
            "x": 16.0,
            "y": 192.6
          },
          {
            "x": 16.82,
            "y": 179.83
          },
          {
            "x": 15.84,
            "y": 192.26
          },
          {
            "x": 17.08,
            "y": 184.13
          },
          {
            "x": 17.34,
            "y": 174.21
          },
          {
            "x": 17.31,
            "y": 172.49
          },
          {
            "x": 17.26,
            "y": 178.24
          },
          {
            "x": 17.39,
            "y": 171.36
          },
          {
            "x": 16.96,
            "y": 173.88
          },
          {
            "x": 17.87,
            "y": 172.36
          },
          {
            "x": 18.13,
            "y": 180.1
          },
          {
            "x": 16.45,
            "y": 175.53
          },
          {
            "x": 17.76,
            "y": 170.84
          },
          {
            "x": 17.84,
            "y": 178.84
          },
          {
            "x": 16.65,
            "y": 176.66
          },
          {
            "x": 17.33,
            "y": 174.14
          },
          {
            "x": 16.92,
            "y": 177.58
          },
          {
            "x": 15.8,
            "y": 177.85
          },
          {
            "x": 15.4,
            "y": 211.97
          },
          {
            "x": 15.41,
            "y": 213.63
          },
          {
            "x": 15.83,
            "y": 213.23
          },
          {
            "x": 16.09,
            "y": 214.29
          },
          {
            "x": 15.79,
            "y": 228.91
          },
          {
            "x": 15.78,
            "y": 221.43
          },
          {
            "x": 14.19,
            "y": 231.68
          },
          {
            "x": 16.44,
            "y": 234.2
          },
          {
            "x": 16.77,
            "y": 252.25
          },
          {
            "x": 17.07,
            "y": 248.48
          },
          {
            "x": 17.66,
            "y": 241.07
          },
          {
            "x": 16.6,
            "y": 229.43
          },
          {
            "x": 17.53,
            "y": 246.56
          },
          {
            "x": 16.37,
            "y": 264.95
          },
          {
            "x": 14.93,
            "y": 271.37
          },
          {
            "x": 15.92,
            "y": 261.64
          },
          {
            "x": 17.06,
            "y": 267.4
          },
          {
            "x": 16.05,
            "y": 276.0
          },
          {
            "x": 15.1,
            "y": 285.92
          },
          {
            "x": 16.03,
            "y": 312.04
          },
          {
            "x": 15.62,
            "y": 308.21
          },
          {
            "x": 16.41,
            "y": 310.32
          },
          {
            "x": 16.34,
            "y": 305.89
          },
          {
            "x": 16.26,
            "y": 329.77
          },
          {
            "x": 16.22,
            "y": 342.13
          },
          {
            "x": 17.68,
            "y": 349.48
          },
          {
            "x": 16.81,
            "y": 360.98
          },
          {
            "x": 16.99,
            "y": 349.94
          },
          {
            "x": 17.04,
            "y": 355.3
          },
          {
            "x": 18.26,
            "y": 354.83
          },
          {
            "x": 17.46,
            "y": 381.09
          },
          {
            "x": 17.43,
            "y": 380.83
          },
          {
            "x": 17.17,
            "y": 380.3
          },
          {
            "x": 16.73,
            "y": 356.22
          },
          {
            "x": 16.02,
            "y": 350.34
          },
          {
            "x": 15.97,
            "y": 358.4
          },
          {
            "x": 15.32,
            "y": 356.16
          },
          {
            "x": 15.83,
            "y": 329.37
          },
          {
            "x": 15.87,
            "y": 348.48
          },
          {
            "x": 14.93,
            "y": 340.41
          },
          {
            "x": 15.96,
            "y": 319.45
          },
          {
            "x": 15.92,
            "y": 319.98
          },
          {
            "x": 15.23,
            "y": 317.93
          },
          {
            "x": 16.63,
            "y": 355.63
          },
          {
            "x": 15.28,
            "y": 382.55
          },
          {
            "x": 16.72,
            "y": 362.04
          },
          {
            "x": 16.67,
            "y": 316.47
          },
          {
            "x": 17.48,
            "y": 302.78
          },
          {
            "x": 17.55,
            "y": 303.51
          },
          {
            "x": 14.55,
            "y": 323.88
          },
          {
            "x": 14.74,
            "y": 295.84
          },
          {
            "x": 16.33,
            "y": 309.46
          },
          {
            "x": 15.76,
            "y": 307.15
          },
          {
            "x": 15.4,
            "y": 308.47
          },
          {
            "x": 15.06,
            "y": 297.16
          },
          {
            "x": 16.15,
            "y": 290.88
          },
          {
            "x": 16.03,
            "y": 300.07
          },
          {
            "x": 16.6,
            "y": 298.88
          },
          {
            "x": 15.35,
            "y": 298.15
          },
          {
            "x": 15.57,
            "y": 286.51
          },
          {
            "x": 16.62,
            "y": 285.72
          },
          {
            "x": 16.88,
            "y": 264.62
          },
          {
            "x": 16.36,
            "y": 268.72
          },
          {
            "x": 16.62,
            "y": 245.51
          },
          {
            "x": 17.2,
            "y": 242.2
          },
          {
            "x": 17.69,
            "y": 241.34
          },
          {
            "x": 17.36,
            "y": 235.52
          },
          {
            "x": 16.73,
            "y": 229.7
          },
          {
            "x": 17.76,
            "y": 231.48
          },
          {
            "x": 16.55,
            "y": 231.68
          },
          {
            "x": 16.61,
            "y": 235.06
          },
          {
            "x": 17.03,
            "y": 218.79
          },
          {
            "x": 16.87,
            "y": 205.82
          },
          {
            "x": 15.74,
            "y": 197.82
          },
          {
            "x": 15.76,
            "y": 215.61
          },
          {
            "x": 15.62,
            "y": 232.68
          },
          {
            "x": 14.96,
            "y": 239.95
          },
          {
            "x": 15.93,
            "y": 229.77
          },
          {
            "x": 15.25,
            "y": 228.38
          },
          {
            "x": 16.05,
            "y": 212.04
          },
          {
            "x": 15.94,
            "y": 220.97
          },
          {
            "x": 15.96,
            "y": 208.87
          },
          {
            "x": 16.65,
            "y": 239.16
          },
          {
            "x": 15.41,
            "y": 224.14
          },
          {
            "x": 17.06,
            "y": 222.36
          },
          {
            "x": 15.37,
            "y": 215.35
          },
          {
            "x": 17.23,
            "y": 208.67
          },
          {
            "x": 17.27,
            "y": 199.61
          },
          {
            "x": 15.84,
            "y": 197.09
          },
          {
            "x": 15.64,
            "y": 188.03
          },
          {
            "x": 16.65,
            "y": 184.66
          },
          {
            "x": 16.42,
            "y": 181.75
          },
          {
            "x": 16.02,
            "y": 194.45
          },
          {
            "x": 16.56,
            "y": 194.91
          },
          {
            "x": 16.11,
            "y": 202.78
          },
          {
            "x": 16.38,
            "y": 193.85
          },
          {
            "x": 16.7,
            "y": 195.7
          },
          {
            "x": 17.06,
            "y": 183.53
          },
          {
            "x": 17.49,
            "y": 189.29
          },
          {
            "x": 16.92,
            "y": 185.85
          },
          {
            "x": 17.15,
            "y": 180.56
          },
          {
            "x": 18.0,
            "y": 179.37
          },
          {
            "x": 18.3,
            "y": 184.53
          },
          {
            "x": 18.32,
            "y": 178.9
          },
          {
            "x": 16.61,
            "y": 183.07
          },
          {
            "x": 16.46,
            "y": 185.58
          },
          {
            "x": 16.7,
            "y": 187.37
          },
          {
            "x": 16.77,
            "y": 168.32
          },
          {
            "x": 16.92,
            "y": 170.64
          },
          {
            "x": 16.16,
            "y": 163.63
          },
          {
            "x": 16.61,
            "y": 157.01
          },
          {
            "x": 15.96,
            "y": 160.25
          },
          {
            "x": 15.53,
            "y": 157.61
          },
          {
            "x": 15.61,
            "y": 166.8
          },
          {
            "x": 14.74,
            "y": 156.42
          },
          {
            "x": 15.81,
            "y": 163.3
          },
          {
            "x": 16.05,
            "y": 149.74
          },
          {
            "x": 16.06,
            "y": 148.28
          },
          {
            "x": 16.58,
            "y": 154.04
          },
          {
            "x": 17.01,
            "y": 151.66
          },
          {
            "x": 17.42,
            "y": 150.93
          },
          {
            "x": 15.52,
            "y": 154.37
          },
          {
            "x": 17.46,
            "y": 149.08
          },
          {
            "x": 17.03,
            "y": 139.42
          },
          {
            "x": 16.85,
            "y": 137.63
          },
          {
            "x": 16.86,
            "y": 142.0
          },
          {
            "x": 15.87,
            "y": 145.84
          },
          {
            "x": 16.61,
            "y": 145.04
          },
          {
            "x": 15.75,
            "y": 152.52
          },
          {
            "x": 17.4,
            "y": 151.72
          },
          {
            "x": 15.91,
            "y": 157.87
          },
          {
            "x": 15.84,
            "y": 154.96
          },
          {
            "x": 16.22,
            "y": 154.9
          },
          {
            "x": 16.7,
            "y": 179.5
          },
          {
            "x": 16.68,
            "y": 201.92
          },
          {
            "x": 17.8,
            "y": 237.83
          },
          {
            "x": 17.41,
            "y": 267.86
          },
          {
            "x": 17.61,
            "y": 230.36
          },
          {
            "x": 17.76,
            "y": 238.89
          },
          {
            "x": 17.05,
            "y": 264.36
          },
          {
            "x": 18.06,
            "y": 266.14
          },
          {
            "x": 16.38,
            "y": 276.33
          },
          {
            "x": 17.24,
            "y": 239.16
          },
          {
            "x": 16.89,
            "y": 238.3
          },
          {
            "x": 16.76,
            "y": 240.68
          },
          {
            "x": 16.97,
            "y": 227.65
          },
          {
            "x": 16.59,
            "y": 220.57
          },
          {
            "x": 16.63,
            "y": 225.47
          },
          {
            "x": 16.47,
            "y": 225.14
          },
          {
            "x": 16.56,
            "y": 225.8
          },
          {
            "x": 16.29,
            "y": 239.55
          },
          {
            "x": 14.59,
            "y": 243.39
          },
          {
            "x": 16.44,
            "y": 249.67
          },
          {
            "x": 16.84,
            "y": 254.5
          },
          {
            "x": 14.8,
            "y": 255.1
          },
          {
            "x": 16.95,
            "y": 238.89
          },
          {
            "x": 17.87,
            "y": 246.1
          },
          {
            "x": 15.19,
            "y": 292.07
          },
          {
            "x": 18.07,
            "y": 287.17
          },
          {
            "x": 16.02,
            "y": 253.31
          },
          {
            "x": 17.0,
            "y": 246.37
          },
          {
            "x": 15.67,
            "y": 253.97
          },
          {
            "x": 17.69,
            "y": 256.95
          },
          {
            "x": 15.74,
            "y": 236.91
          },
          {
            "x": 15.3,
            "y": 234.99
          },
          {
            "x": 16.53,
            "y": 225.07
          },
          {
            "x": 16.43,
            "y": 213.03
          },
          {
            "x": 16.74,
            "y": 237.9
          },
          {
            "x": 16.42,
            "y": 214.88
          },
          {
            "x": 16.25,
            "y": 212.64
          },
          {
            "x": 16.84,
            "y": 215.88
          },
          {
            "x": 16.98,
            "y": 191.07
          },
          {
            "x": 17.24,
            "y": 174.01
          },
          {
            "x": 17.44,
            "y": 167.26
          },
          {
            "x": 17.34,
            "y": 185.12
          },
          {
            "x": 17.19,
            "y": 186.38
          },
          {
            "x": 17.48,
            "y": 178.04
          },
          {
            "x": 18.29,
            "y": 186.71
          },
          {
            "x": 17.54,
            "y": 174.41
          },
          {
            "x": 17.01,
            "y": 179.43
          },
          {
            "x": 16.79,
            "y": 167.93
          },
          {
            "x": 16.82,
            "y": 177.65
          },
          {
            "x": 16.67,
            "y": 174.67
          },
          {
            "x": 15.59,
            "y": 168.92
          },
          {
            "x": 16.88,
            "y": 166.14
          },
          {
            "x": 16.12,
            "y": 167.46
          },
          {
            "x": 16.56,
            "y": 160.78
          },
          {
            "x": 16.14,
            "y": 165.68
          },
          {
            "x": 15.45,
            "y": 174.41
          },
          {
            "x": 16.28,
            "y": 161.25
          },
          {
            "x": 17.44,
            "y": 154.83
          },
          {
            "x": 17.7,
            "y": 149.94
          },
          {
            "x": 17.11,
            "y": 155.09
          },
          {
            "x": 18.24,
            "y": 159.72
          },
          {
            "x": 18.03,
            "y": 174.08
          },
          {
            "x": 19.03,
            "y": 160.06
          },
          {
            "x": 18.02,
            "y": 159.99
          },
          {
            "x": 17.95,
            "y": 153.84
          },
          {
            "x": 18.28,
            "y": 161.25
          },
          {
            "x": 16.84,
            "y": 154.63
          },
          {
            "x": 17.55,
            "y": 162.24
          },
          {
            "x": 17.36,
            "y": 156.68
          },
          {
            "x": 17.53,
            "y": 163.56
          },
          {
            "x": 17.64,
            "y": 157.41
          },
          {
            "x": 16.65,
            "y": 152.98
          },
          {
            "x": 16.88,
            "y": 153.9
          },
          {
            "x": 16.27,
            "y": 153.11
          },
          {
            "x": 17.97,
            "y": 150.99
          },
          {
            "x": 17.57,
            "y": 149.47
          },
          {
            "x": 18.13,
            "y": 159.86
          },
          {
            "x": 18.04,
            "y": 177.05
          },
          {
            "x": 19.03,
            "y": 168.59
          },
          {
            "x": 17.88,
            "y": 159.33
          },
          {
            "x": 18.38,
            "y": 164.02
          },
          {
            "x": 17.52,
            "y": 159.26
          },
          {
            "x": 17.02,
            "y": 163.3
          },
          {
            "x": 18.29,
            "y": 171.03
          },
          {
            "x": 17.24,
            "y": 160.45
          },
          {
            "x": 17.34,
            "y": 174.87
          },
          {
            "x": 15.06,
            "y": 186.18
          },
          {
            "x": 15.16,
            "y": 177.91
          },
          {
            "x": 16.32,
            "y": 185.78
          },
          {
            "x": 15.33,
            "y": 192.73
          },
          {
            "x": 16.44,
            "y": 186.78
          },
          {
            "x": 16.13,
            "y": 188.49
          },
          {
            "x": 17.37,
            "y": 181.75
          },
          {
            "x": 15.86,
            "y": 190.35
          },
          {
            "x": 16.77,
            "y": 198.55
          },
          {
            "x": 17.15,
            "y": 195.24
          },
          {
            "x": 16.85,
            "y": 200.27
          },
          {
            "x": 17.22,
            "y": 196.03
          },
          {
            "x": 17.8,
            "y": 205.56
          },
          {
            "x": 17.98,
            "y": 217.6
          },
          {
            "x": 17.24,
            "y": 226.66
          },
          {
            "x": 16.15,
            "y": 214.02
          },
          {
            "x": 16.97,
            "y": 204.57
          },
          {
            "x": 16.89,
            "y": 186.78
          },
          {
            "x": 17.53,
            "y": 185.52
          },
          {
            "x": 16.06,
            "y": 180.1
          },
          {
            "x": 16.66,
            "y": 181.75
          },
          {
            "x": 15.62,
            "y": 197.49
          },
          {
            "x": 15.59,
            "y": 205.56
          },
          {
            "x": 16.76,
            "y": 193.06
          },
          {
            "x": 16.62,
            "y": 192.79
          },
          {
            "x": 17.05,
            "y": 197.36
          },
          {
            "x": 17.21,
            "y": 186.84
          },
          {
            "x": 17.82,
            "y": 184.66
          },
          {
            "x": 16.27,
            "y": 182.01
          },
          {
            "x": 16.87,
            "y": 182.34
          },
          {
            "x": 17.42,
            "y": 183.73
          },
          {
            "x": 17.48,
            "y": 171.76
          },
          {
            "x": 17.28,
            "y": 178.57
          },
          {
            "x": 16.97,
            "y": 175.4
          },
          {
            "x": 17.43,
            "y": 172.29
          },
          {
            "x": 16.85,
            "y": 166.07
          },
          {
            "x": 16.94,
            "y": 168.79
          },
          {
            "x": 15.97,
            "y": 150.07
          },
          {
            "x": 15.69,
            "y": 164.09
          },
          {
            "x": 15.39,
            "y": 166.67
          },
          {
            "x": 15.53,
            "y": 180.62
          },
          {
            "x": 14.71,
            "y": 182.34
          },
          {
            "x": 16.24,
            "y": 185.58
          },
          {
            "x": 16.52,
            "y": 167.2
          },
          {
            "x": 16.61,
            "y": 169.51
          },
          {
            "x": 17.23,
            "y": 171.17
          },
          {
            "x": 16.72,
            "y": 180.62
          },
          {
            "x": 17.67,
            "y": 169.38
          },
          {
            "x": 17.68,
            "y": 173.28
          },
          {
            "x": 17.98,
            "y": 165.68
          },
          {
            "x": 16.9,
            "y": 166.54
          },
          {
            "x": 16.19,
            "y": 167.2
          },
          {
            "x": 16.19,
            "y": 163.76
          },
          {
            "x": 16.28,
            "y": 171.43
          },
          {
            "x": 16.17,
            "y": 159.53
          },
          {
            "x": 16.04,
            "y": 161.05
          },
          {
            "x": 16.15,
            "y": 166.93
          },
          {
            "x": 15.37,
            "y": 165.54
          },
          {
            "x": 15.32,
            "y": 160.19
          },
          {
            "x": 17.06,
            "y": 165.54
          },
          {
            "x": 15.96,
            "y": 163.1
          },
          {
            "x": 16.67,
            "y": 156.02
          },
          {
            "x": 16.69,
            "y": 158.67
          },
          {
            "x": 17.1,
            "y": 157.21
          },
          {
            "x": 17.88,
            "y": 156.55
          },
          {
            "x": 17.66,
            "y": 156.29
          },
          {
            "x": 17.23,
            "y": 155.36
          },
          {
            "x": 16.29,
            "y": 151.99
          },
          {
            "x": 17.28,
            "y": 159.2
          },
          {
            "x": 16.68,
            "y": 154.17
          },
          {
            "x": 17.36,
            "y": 150.73
          },
          {
            "x": 16.23,
            "y": 159.26
          },
          {
            "x": 16.86,
            "y": 153.04
          },
          {
            "x": 16.32,
            "y": 152.38
          },
          {
            "x": 15.67,
            "y": 151.19
          },
          {
            "x": 15.44,
            "y": 147.16
          },
          {
            "x": 15.83,
            "y": 139.82
          },
          {
            "x": 15.85,
            "y": 146.1
          },
          {
            "x": 16.62,
            "y": 143.85
          },
          {
            "x": 16.2,
            "y": 134.53
          },
          {
            "x": 16.45,
            "y": 133.0
          },
          {
            "x": 15.34,
            "y": 132.41
          },
          {
            "x": 17.22,
            "y": 126.26
          },
          {
            "x": 16.98,
            "y": 128.44
          },
          {
            "x": 17.75,
            "y": 144.12
          },
          {
            "x": 18.06,
            "y": 157.87
          },
          {
            "x": 17.78,
            "y": 160.25
          },
          {
            "x": 17.61,
            "y": 158.8
          },
          {
            "x": 17.14,
            "y": 149.01
          },
          {
            "x": 16.82,
            "y": 141.73
          },
          {
            "x": 16.65,
            "y": 134.79
          },
          {
            "x": 16.24,
            "y": 128.24
          },
          {
            "x": 16.68,
            "y": 135.19
          },
          {
            "x": 16.84,
            "y": 135.12
          },
          {
            "x": 15.78,
            "y": 137.37
          },
          {
            "x": 17.31,
            "y": 136.77
          },
          {
            "x": 17.34,
            "y": 137.17
          },
          {
            "x": 17.96,
            "y": 132.87
          },
          {
            "x": 18.36,
            "y": 127.58
          },
          {
            "x": 18.12,
            "y": 124.47
          },
          {
            "x": 18.28,
            "y": 124.27
          },
          {
            "x": 17.06,
            "y": 124.21
          },
          {
            "x": 17.87,
            "y": 126.13
          },
          {
            "x": 17.79,
            "y": 119.58
          },
          {
            "x": 18.11,
            "y": 121.03
          },
          {
            "x": 19.11,
            "y": 118.06
          },
          {
            "x": 18.83,
            "y": 116.73
          },
          {
            "x": 17.63,
            "y": 123.68
          },
          {
            "x": 17.7,
            "y": 138.36
          },
          {
            "x": 16.38,
            "y": 131.02
          },
          {
            "x": 16.9,
            "y": 132.01
          },
          {
            "x": 16.78,
            "y": 143.19
          },
          {
            "x": 15.34,
            "y": 139.16
          },
          {
            "x": 16.19,
            "y": 139.02
          },
          {
            "x": 15.89,
            "y": 128.64
          },
          {
            "x": 17.0,
            "y": 128.71
          },
          {
            "x": 16.97,
            "y": 122.82
          },
          {
            "x": 17.18,
            "y": 123.81
          },
          {
            "x": 17.23,
            "y": 130.09
          },
          {
            "x": 17.98,
            "y": 130.16
          },
          {
            "x": 16.91,
            "y": 133.8
          },
          {
            "x": 17.28,
            "y": 123.68
          },
          {
            "x": 18.26,
            "y": 126.59
          },
          {
            "x": 17.38,
            "y": 131.42
          },
          {
            "x": 17.95,
            "y": 144.78
          },
          {
            "x": 17.15,
            "y": 135.85
          },
          {
            "x": 17.01,
            "y": 156.81
          },
          {
            "x": 16.35,
            "y": 168.39
          },
          {
            "x": 16.28,
            "y": 168.26
          },
          {
            "x": 16.91,
            "y": 175.27
          },
          {
            "x": 17.51,
            "y": 157.61
          },
          {
            "x": 17.06,
            "y": 148.35
          },
          {
            "x": 17.31,
            "y": 138.96
          },
          {
            "x": 16.69,
            "y": 130.09
          },
          {
            "x": 17.36,
            "y": 144.31
          },
          {
            "x": 17.81,
            "y": 143.12
          },
          {
            "x": 17.01,
            "y": 139.68
          },
          {
            "x": 17.88,
            "y": 142.93
          },
          {
            "x": 17.63,
            "y": 153.24
          },
          {
            "x": 18.48,
            "y": 158.6
          },
          {
            "x": 17.87,
            "y": 153.51
          },
          {
            "x": 16.79,
            "y": 138.36
          },
          {
            "x": 17.83,
            "y": 142.13
          },
          {
            "x": 17.22,
            "y": 138.63
          },
          {
            "x": 15.1,
            "y": 135.58
          },
          {
            "x": 16.78,
            "y": 130.82
          },
          {
            "x": 16.65,
            "y": 123.88
          },
          {
            "x": 16.34,
            "y": 126.52
          },
          {
            "x": 16.32,
            "y": 128.57
          },
          {
            "x": 15.9,
            "y": 128.44
          },
          {
            "x": 16.21,
            "y": 143.39
          },
          {
            "x": 15.01,
            "y": 160.78
          },
          {
            "x": 16.97,
            "y": 151.72
          },
          {
            "x": 15.13,
            "y": 162.97
          },
          {
            "x": 16.66,
            "y": 178.31
          },
          {
            "x": 17.24,
            "y": 163.43
          },
          {
            "x": 16.89,
            "y": 147.03
          },
          {
            "x": 18.32,
            "y": 144.12
          },
          {
            "x": 18.12,
            "y": 144.98
          },
          {
            "x": 17.71,
            "y": 139.68
          },
          {
            "x": 15.51,
            "y": 136.84
          },
          {
            "x": 16.95,
            "y": 144.51
          },
          {
            "x": 16.32,
            "y": 151.39
          },
          {
            "x": 17.33,
            "y": 155.62
          },
          {
            "x": 16.41,
            "y": 157.54
          },
          {
            "x": 16.81,
            "y": 164.75
          },
          {
            "x": 16.86,
            "y": 169.65
          },
          {
            "x": 17.07,
            "y": 160.58
          },
          {
            "x": 16.28,
            "y": 164.09
          },
          {
            "x": 16.86,
            "y": 165.81
          },
          {
            "x": 16.75,
            "y": 160.32
          },
          {
            "x": 16.96,
            "y": 168.65
          },
          {
            "x": 16.78,
            "y": 173.48
          },
          {
            "x": 17.1,
            "y": 175.2
          },
          {
            "x": 16.45,
            "y": 168.79
          },
          {
            "x": 17.04,
            "y": 160.85
          },
          {
            "x": 17.19,
            "y": 169.45
          },
          {
            "x": 16.76,
            "y": 177.65
          },
          {
            "x": 16.34,
            "y": 185.12
          },
          {
            "x": 16.31,
            "y": 192.79
          },
          {
            "x": 17.78,
            "y": 198.55
          },
          {
            "x": 17.06,
            "y": 213.03
          },
          {
            "x": 17.2,
            "y": 208.27
          },
          {
            "x": 16.07,
            "y": 201.52
          },
          {
            "x": 14.1,
            "y": 206.35
          },
          {
            "x": 14.9,
            "y": 200.14
          },
          {
            "x": 14.95,
            "y": 232.81
          },
          {
            "x": 14.35,
            "y": 237.5
          },
          {
            "x": 16.05,
            "y": 240.74
          },
          {
            "x": 16.58,
            "y": 235.78
          },
          {
            "x": 17.11,
            "y": 261.11
          },
          {
            "x": 18.06,
            "y": 244.71
          },
          {
            "x": 17.86,
            "y": 247.75
          },
          {
            "x": 18.06,
            "y": 255.82
          },
          {
            "x": 17.9,
            "y": 266.34
          },
          {
            "x": 17.19,
            "y": 270.18
          },
          {
            "x": 17.48,
            "y": 269.78
          },
          {
            "x": 16.57,
            "y": 264.09
          },
          {
            "x": 17.07,
            "y": 302.85
          },
          {
            "x": 16.16,
            "y": 322.56
          },
          {
            "x": 15.45,
            "y": 323.75
          },
          {
            "x": 17.11,
            "y": 312.04
          },
          {
            "x": 16.96,
            "y": 298.42
          },
          {
            "x": 16.76,
            "y": 315.41
          },
          {
            "x": 16.37,
            "y": 317.0
          },
          {
            "x": 16.32,
            "y": 306.95
          },
          {
            "x": 16.67,
            "y": 319.91
          },
          {
            "x": 16.69,
            "y": 333.67
          },
          {
            "x": 17.0,
            "y": 317.53
          },
          {
            "x": 17.24,
            "y": 309.59
          },
          {
            "x": 18.1,
            "y": 291.41
          },
          {
            "x": 17.7,
            "y": 283.8
          },
          {
            "x": 18.35,
            "y": 299.14
          },
          {
            "x": 16.29,
            "y": 295.77
          },
          {
            "x": 17.51,
            "y": 285.65
          },
          {
            "x": 17.07,
            "y": 279.9
          },
          {
            "x": 15.79,
            "y": 301.86
          },
          {
            "x": 15.95,
            "y": 303.51
          },
          {
            "x": 15.22,
            "y": 314.22
          },
          {
            "x": 14.85,
            "y": 306.82
          },
          {
            "x": 15.4,
            "y": 299.74
          },
          {
            "x": 15.19,
            "y": 294.32
          },
          {
            "x": 16.03,
            "y": 269.45
          },
          {
            "x": 15.75,
            "y": 282.01
          },
          {
            "x": 15.83,
            "y": 277.05
          },
          {
            "x": 15.47,
            "y": 298.28
          },
          {
            "x": 16.07,
            "y": 321.96
          },
          {
            "x": 16.43,
            "y": 307.74
          },
          {
            "x": 17.64,
            "y": 287.83
          },
          {
            "x": 15.96,
            "y": 291.6
          },
          {
            "x": 17.52,
            "y": 290.08
          },
          {
            "x": 17.4,
            "y": 260.19
          },
          {
            "x": 17.6,
            "y": 251.86
          },
          {
            "x": 15.09,
            "y": 227.78
          },
          {
            "x": 16.82,
            "y": 225.0
          },
          {
            "x": 16.71,
            "y": 211.78
          },
          {
            "x": 16.47,
            "y": 211.84
          },
          {
            "x": 16.8,
            "y": 221.1
          },
          {
            "x": 15.85,
            "y": 227.52
          },
          {
            "x": 16.46,
            "y": 221.3
          },
          {
            "x": 16.79,
            "y": 197.62
          },
          {
            "x": 16.38,
            "y": 204.76
          },
          {
            "x": 16.5,
            "y": 232.68
          },
          {
            "x": 16.79,
            "y": 231.15
          },
          {
            "x": 16.41,
            "y": 257.21
          },
          {
            "x": 16.97,
            "y": 239.16
          },
          {
            "x": 17.61,
            "y": 242.33
          },
          {
            "x": 16.96,
            "y": 230.56
          },
          {
            "x": 16.82,
            "y": 225.53
          },
          {
            "x": 17.56,
            "y": 251.66
          },
          {
            "x": 17.27,
            "y": 256.88
          },
          {
            "x": 17.2,
            "y": 252.19
          },
          {
            "x": 17.59,
            "y": 246.04
          },
          {
            "x": 16.26,
            "y": 250.27
          },
          {
            "x": 17.22,
            "y": 242.13
          },
          {
            "x": 17.31,
            "y": 252.19
          },
          {
            "x": 15.86,
            "y": 227.52
          },
          {
            "x": 16.15,
            "y": 212.97
          },
          {
            "x": 16.85,
            "y": 210.72
          },
          {
            "x": 16.54,
            "y": 214.09
          },
          {
            "x": 16.49,
            "y": 217.79
          },
          {
            "x": 17.19,
            "y": 211.51
          },
          {
            "x": 17.54,
            "y": 195.04
          },
          {
            "x": 17.25,
            "y": 202.85
          },
          {
            "x": 17.24,
            "y": 193.46
          },
          {
            "x": 17.9,
            "y": 221.56
          },
          {
            "x": 18.52,
            "y": 193.32
          },
          {
            "x": 19.01,
            "y": 193.19
          },
          {
            "x": 18.24,
            "y": 216.87
          },
          {
            "x": 18.56,
            "y": 212.9
          },
          {
            "x": 17.01,
            "y": 230.62
          },
          {
            "x": 19.1,
            "y": 226.13
          },
          {
            "x": 17.57,
            "y": 242.93
          },
          {
            "x": 17.65,
            "y": 244.91
          },
          {
            "x": 16.12,
            "y": 277.19
          },
          {
            "x": 17.01,
            "y": 261.91
          },
          {
            "x": 17.41,
            "y": 241.8
          },
          {
            "x": 17.87,
            "y": 237.04
          },
          {
            "x": 17.4,
            "y": 256.42
          },
          {
            "x": 16.18,
            "y": 248.95
          },
          {
            "x": 17.87,
            "y": 252.45
          },
          {
            "x": 17.46,
            "y": 251.46
          },
          {
            "x": 18.83,
            "y": 262.37
          },
          {
            "x": 20.21,
            "y": 241.87
          },
          {
            "x": 18.52,
            "y": 252.19
          },
          {
            "x": 18.65,
            "y": 281.09
          },
          {
            "x": 18.77,
            "y": 313.17
          },
          {
            "x": 18.58,
            "y": 305.03
          },
          {
            "x": 18.43,
            "y": 265.48
          },
          {
            "x": 18.97,
            "y": 263.96
          },
          {
            "x": 18.94,
            "y": 288.69
          },
          {
            "x": 17.82,
            "y": 306.82
          },
          {
            "x": 17.2,
            "y": 296.5
          },
          {
            "x": 17.31,
            "y": 305.82
          },
          {
            "x": 16.69,
            "y": 304.63
          },
          {
            "x": 16.57,
            "y": 322.95
          },
          {
            "x": 16.56,
            "y": 310.45
          },
          {
            "x": 17.26,
            "y": 304.9
          },
          {
            "x": 15.3,
            "y": 313.5
          }
        ],
        "trend": {
          "slope": 9.08,
          "intercept": 31.38
        }
      },
      {
        "title": "Maximum Temperature vs Price",
        "xLabel": "Temp_Max",
        "yLabel": "Coffee Price",
        "points": [
          {
            "x": 25.09,
            "y": 154.1
          },
          {
            "x": 26.6,
            "y": 156.81
          },
          {
            "x": 27.63,
            "y": 147.09
          },
          {
            "x": 27.05,
            "y": 148.48
          },
          {
            "x": 27.31,
            "y": 143.92
          },
          {
            "x": 26.91,
            "y": 136.51
          },
          {
            "x": 27.66,
            "y": 138.03
          },
          {
            "x": 27.46,
            "y": 140.21
          },
          {
            "x": 28.44,
            "y": 135.05
          },
          {
            "x": 28.44,
            "y": 137.17
          },
          {
            "x": 27.39,
            "y": 124.6
          },
          {
            "x": 26.47,
            "y": 129.3
          },
          {
            "x": 25.87,
            "y": 131.09
          },
          {
            "x": 24.56,
            "y": 121.43
          },
          {
            "x": 24.67,
            "y": 136.64
          },
          {
            "x": 24.9,
            "y": 124.94
          },
          {
            "x": 24.23,
            "y": 121.5
          },
          {
            "x": 24.79,
            "y": 111.71
          },
          {
            "x": 25.61,
            "y": 112.24
          },
          {
            "x": 25.45,
            "y": 119.18
          },
          {
            "x": 24.34,
            "y": 127.85
          },
          {
            "x": 25.6,
            "y": 114.35
          },
          {
            "x": 26.05,
            "y": 105.29
          },
          {
            "x": 25.59,
            "y": 103.71
          },
          {
            "x": 25.37,
            "y": 97.75
          },
          {
            "x": 25.02,
            "y": 102.38
          },
          {
            "x": 25.81,
            "y": 102.12
          },
          {
            "x": 25.14,
            "y": 109.79
          },
          {
            "x": 26.87,
            "y": 105.76
          },
          {
            "x": 28.57,
            "y": 114.68
          },
          {
            "x": 25.39,
            "y": 100.0
          },
          {
            "x": 25.08,
            "y": 99.6
          },
          {
            "x": 24.89,
            "y": 90.68
          },
          {
            "x": 25.8,
            "y": 91.93
          },
          {
            "x": 26.01,
            "y": 84.19
          },
          {
            "x": 24.76,
            "y": 82.94
          },
          {
            "x": 26.17,
            "y": 89.09
          },
          {
            "x": 26.87,
            "y": 85.12
          },
          {
            "x": 26.63,
            "y": 92.86
          },
          {
            "x": 27.15,
            "y": 88.76
          },
          {
            "x": 27.51,
            "y": 82.28
          },
          {
            "x": 29.24,
            "y": 79.1
          },
          {
            "x": 28.1,
            "y": 84.53
          },
          {
            "x": 28.26,
            "y": 84.86
          },
          {
            "x": 28.11,
            "y": 78.04
          },
          {
            "x": 28.86,
            "y": 80.89
          },
          {
            "x": 29.05,
            "y": 76.85
          },
          {
            "x": 28.41,
            "y": 74.34
          },
          {
            "x": 28.73,
            "y": 80.62
          },
          {
            "x": 28.38,
            "y": 87.3
          },
          {
            "x": 26.99,
            "y": 83.0
          },
          {
            "x": 24.86,
            "y": 79.23
          },
          {
            "x": 26.13,
            "y": 77.25
          },
          {
            "x": 26.08,
            "y": 78.57
          },
          {
            "x": 26.26,
            "y": 73.41
          },
          {
            "x": 26.36,
            "y": 71.23
          },
          {
            "x": 26.38,
            "y": 69.11
          },
          {
            "x": 26.21,
            "y": 67.99
          },
          {
            "x": 25.78,
            "y": 66.67
          },
          {
            "x": 26.7,
            "y": 65.08
          },
          {
            "x": 27.27,
            "y": 67.4
          },
          {
            "x": 27.85,
            "y": 62.83
          },
          {
            "x": 26.09,
            "y": 63.96
          },
          {
            "x": 27.01,
            "y": 64.95
          },
          {
            "x": 28.64,
            "y": 61.51
          },
          {
            "x": 26.92,
            "y": 59.13
          },
          {
            "x": 27.17,
            "y": 57.28
          },
          {
            "x": 26.41,
            "y": 60.05
          },
          {
            "x": 25.61,
            "y": 59.33
          },
          {
            "x": 26.33,
            "y": 61.38
          },
          {
            "x": 25.95,
            "y": 55.82
          },
          {
            "x": 26.34,
            "y": 58.4
          },
          {
            "x": 26.81,
            "y": 61.71
          },
          {
            "x": 26.4,
            "y": 62.63
          },
          {
            "x": 25.94,
            "y": 65.54
          },
          {
            "x": 27.51,
            "y": 61.91
          },
          {
            "x": 27.53,
            "y": 60.12
          },
          {
            "x": 27.82,
            "y": 57.01
          },
          {
            "x": 28.31,
            "y": 64.82
          },
          {
            "x": 27.98,
            "y": 60.65
          },
          {
            "x": 28.47,
            "y": 71.96
          },
          {
            "x": 27.79,
            "y": 71.83
          },
          {
            "x": 28.99,
            "y": 78.51
          },
          {
            "x": 28.28,
            "y": 70.37
          },
          {
            "x": 28.38,
            "y": 71.23
          },
          {
            "x": 28.61,
            "y": 64.62
          },
          {
            "x": 28.04,
            "y": 62.83
          },
          {
            "x": 25.26,
            "y": 67.06
          },
          {
            "x": 25.5,
            "y": 68.65
          },
          {
            "x": 25.7,
            "y": 65.28
          },
          {
            "x": 25.58,
            "y": 62.3
          },
          {
            "x": 26.48,
            "y": 63.23
          },
          {
            "x": 25.89,
            "y": 68.65
          },
          {
            "x": 24.24,
            "y": 62.63
          },
          {
            "x": 26.44,
            "y": 61.91
          },
          {
            "x": 27.46,
            "y": 62.9
          },
          {
            "x": 27.12,
            "y": 62.17
          },
          {
            "x": 27.26,
            "y": 68.12
          },
          {
            "x": 27.36,
            "y": 78.44
          },
          {
            "x": 27.0,
            "y": 77.32
          },
          {
            "x": 27.27,
            "y": 73.61
          },
          {
            "x": 28.83,
            "y": 77.78
          },
          {
            "x": 28.49,
            "y": 82.81
          },
          {
            "x": 26.24,
            "y": 83.2
          },
          {
            "x": 25.74,
            "y": 89.75
          },
          {
            "x": 25.85,
            "y": 85.65
          },
          {
            "x": 28.03,
            "y": 88.1
          },
          {
            "x": 26.88,
            "y": 83.86
          },
          {
            "x": 26.56,
            "y": 82.81
          },
          {
            "x": 26.39,
            "y": 81.15
          },
          {
            "x": 26.77,
            "y": 84.0
          },
          {
            "x": 26.87,
            "y": 87.63
          },
          {
            "x": 25.9,
            "y": 86.84
          },
          {
            "x": 28.01,
            "y": 86.84
          },
          {
            "x": 28.37,
            "y": 82.87
          },
          {
            "x": 28.45,
            "y": 76.65
          },
          {
            "x": 28.7,
            "y": 77.58
          },
          {
            "x": 26.77,
            "y": 74.87
          },
          {
            "x": 27.75,
            "y": 77.05
          },
          {
            "x": 29.64,
            "y": 82.34
          },
          {
            "x": 28.74,
            "y": 82.61
          },
          {
            "x": 29.35,
            "y": 84.33
          },
          {
            "x": 27.81,
            "y": 89.75
          },
          {
            "x": 26.86,
            "y": 85.58
          },
          {
            "x": 26.25,
            "y": 80.89
          },
          {
            "x": 25.97,
            "y": 78.57
          },
          {
            "x": 24.76,
            "y": 79.5
          },
          {
            "x": 25.47,
            "y": 76.72
          },
          {
            "x": 25.41,
            "y": 80.03
          },
          {
            "x": 24.43,
            "y": 81.61
          },
          {
            "x": 25.62,
            "y": 80.49
          },
          {
            "x": 26.25,
            "y": 83.67
          },
          {
            "x": 26.44,
            "y": 79.5
          },
          {
            "x": 27.22,
            "y": 80.29
          },
          {
            "x": 26.53,
            "y": 83.53
          },
          {
            "x": 26.25,
            "y": 90.54
          },
          {
            "x": 29.33,
            "y": 86.44
          },
          {
            "x": 27.96,
            "y": 86.11
          },
          {
            "x": 25.35,
            "y": 81.28
          },
          {
            "x": 27.12,
            "y": 83.47
          },
          {
            "x": 26.03,
            "y": 77.58
          },
          {
            "x": 27.49,
            "y": 79.56
          },
          {
            "x": 26.58,
            "y": 74.93
          },
          {
            "x": 27.04,
            "y": 82.67
          },
          {
            "x": 27.21,
            "y": 83.33
          },
          {
            "x": 27.55,
            "y": 84.46
          },
          {
            "x": 26.47,
            "y": 85.91
          },
          {
            "x": 26.76,
            "y": 93.65
          },
          {
            "x": 26.08,
            "y": 99.6
          },
          {
            "x": 27.45,
            "y": 99.87
          },
          {
            "x": 27.69,
            "y": 98.35
          },
          {
            "x": 27.46,
            "y": 92.99
          },
          {
            "x": 29.2,
            "y": 97.49
          },
          {
            "x": 28.08,
            "y": 98.74
          },
          {
            "x": 27.87,
            "y": 102.32
          },
          {
            "x": 27.87,
            "y": 98.02
          },
          {
            "x": 27.23,
            "y": 95.97
          },
          {
            "x": 27.17,
            "y": 89.09
          },
          {
            "x": 26.47,
            "y": 88.82
          },
          {
            "x": 27.82,
            "y": 93.19
          },
          {
            "x": 25.01,
            "y": 95.7
          },
          {
            "x": 25.0,
            "y": 113.16
          },
          {
            "x": 24.72,
            "y": 110.12
          },
          {
            "x": 24.4,
            "y": 100.13
          },
          {
            "x": 25.28,
            "y": 96.69
          },
          {
            "x": 24.44,
            "y": 91.07
          },
          {
            "x": 24.27,
            "y": 95.04
          },
          {
            "x": 24.23,
            "y": 87.9
          },
          {
            "x": 24.97,
            "y": 89.09
          },
          {
            "x": 26.82,
            "y": 88.76
          },
          {
            "x": 26.37,
            "y": 92.59
          },
          {
            "x": 26.84,
            "y": 89.35
          },
          {
            "x": 26.86,
            "y": 99.67
          },
          {
            "x": 28.12,
            "y": 107.28
          },
          {
            "x": 26.89,
            "y": 102.12
          },
          {
            "x": 27.18,
            "y": 97.69
          },
          {
            "x": 25.55,
            "y": 102.78
          },
          {
            "x": 26.28,
            "y": 103.57
          },
          {
            "x": 25.98,
            "y": 116.47
          },
          {
            "x": 27.52,
            "y": 117.59
          },
          {
            "x": 26.92,
            "y": 125.13
          },
          {
            "x": 26.2,
            "y": 135.32
          },
          {
            "x": 25.37,
            "y": 138.49
          },
          {
            "x": 26.56,
            "y": 128.04
          },
          {
            "x": 26.34,
            "y": 132.41
          },
          {
            "x": 26.74,
            "y": 139.02
          },
          {
            "x": 27.74,
            "y": 146.17
          },
          {
            "x": 28.45,
            "y": 155.82
          },
          {
            "x": 29.88,
            "y": 152.45
          },
          {
            "x": 28.27,
            "y": 169.31
          },
          {
            "x": 27.68,
            "y": 178.71
          },
          {
            "x": 27.91,
            "y": 159.92
          },
          {
            "x": 29.93,
            "y": 164.95
          },
          {
            "x": 29.01,
            "y": 148.88
          },
          {
            "x": 27.03,
            "y": 171.43
          },
          {
            "x": 26.36,
            "y": 161.25
          },
          {
            "x": 26.27,
            "y": 150.47
          },
          {
            "x": 25.37,
            "y": 163.63
          },
          {
            "x": 25.34,
            "y": 166.07
          },
          {
            "x": 25.53,
            "y": 147.03
          },
          {
            "x": 24.04,
            "y": 139.49
          },
          {
            "x": 25.45,
            "y": 135.19
          },
          {
            "x": 24.07,
            "y": 136.58
          },
          {
            "x": 25.75,
            "y": 135.05
          },
          {
            "x": 26.23,
            "y": 140.54
          },
          {
            "x": 26.88,
            "y": 138.76
          },
          {
            "x": 26.9,
            "y": 127.18
          },
          {
            "x": 27.63,
            "y": 132.28
          },
          {
            "x": 26.38,
            "y": 117.26
          },
          {
            "x": 25.24,
            "y": 117.73
          },
          {
            "x": 26.85,
            "y": 122.82
          },
          {
            "x": 28.03,
            "y": 132.74
          },
          {
            "x": 26.17,
            "y": 136.84
          },
          {
            "x": 25.17,
            "y": 133.67
          },
          {
            "x": 25.45,
            "y": 141.47
          },
          {
            "x": 24.8,
            "y": 130.49
          },
          {
            "x": 26.08,
            "y": 120.04
          },
          {
            "x": 25.37,
            "y": 127.58
          },
          {
            "x": 25.74,
            "y": 135.98
          },
          {
            "x": 26.25,
            "y": 141.67
          },
          {
            "x": 26.45,
            "y": 155.03
          },
          {
            "x": 26.97,
            "y": 156.62
          },
          {
            "x": 27.0,
            "y": 156.35
          },
          {
            "x": 28.59,
            "y": 152.25
          },
          {
            "x": 28.01,
            "y": 144.78
          },
          {
            "x": 28.61,
            "y": 145.64
          },
          {
            "x": 27.93,
            "y": 139.82
          },
          {
            "x": 28.54,
            "y": 137.77
          },
          {
            "x": 27.68,
            "y": 141.54
          },
          {
            "x": 28.55,
            "y": 138.56
          },
          {
            "x": 27.62,
            "y": 148.15
          },
          {
            "x": 27.37,
            "y": 141.67
          },
          {
            "x": 25.97,
            "y": 135.85
          },
          {
            "x": 25.09,
            "y": 133.14
          },
          {
            "x": 25.93,
            "y": 130.89
          },
          {
            "x": 24.14,
            "y": 126.85
          },
          {
            "x": 24.35,
            "y": 126.26
          },
          {
            "x": 25.28,
            "y": 131.62
          },
          {
            "x": 25.91,
            "y": 131.09
          },
          {
            "x": 25.62,
            "y": 126.72
          },
          {
            "x": 24.72,
            "y": 131.48
          },
          {
            "x": 26.32,
            "y": 142.4
          },
          {
            "x": 27.16,
            "y": 136.58
          },
          {
            "x": 26.31,
            "y": 136.64
          },
          {
            "x": 25.61,
            "y": 135.52
          },
          {
            "x": 26.9,
            "y": 131.22
          },
          {
            "x": 27.04,
            "y": 142.2
          },
          {
            "x": 25.62,
            "y": 137.44
          },
          {
            "x": 27.04,
            "y": 135.25
          },
          {
            "x": 26.36,
            "y": 142.86
          },
          {
            "x": 25.62,
            "y": 149.41
          },
          {
            "x": 26.02,
            "y": 149.61
          },
          {
            "x": 25.89,
            "y": 156.09
          },
          {
            "x": 25.74,
            "y": 161.25
          },
          {
            "x": 26.19,
            "y": 160.78
          },
          {
            "x": 24.39,
            "y": 170.51
          },
          {
            "x": 25.49,
            "y": 159.33
          },
          {
            "x": 26.59,
            "y": 160.91
          },
          {
            "x": 26.05,
            "y": 153.84
          },
          {
            "x": 27.32,
            "y": 154.23
          },
          {
            "x": 27.29,
            "y": 152.52
          },
          {
            "x": 28.44,
            "y": 157.74
          },
          {
            "x": 27.8,
            "y": 146.96
          },
          {
            "x": 27.22,
            "y": 144.78
          },
          {
            "x": 28.27,
            "y": 148.75
          },
          {
            "x": 28.14,
            "y": 146.63
          },
          {
            "x": 27.69,
            "y": 143.45
          },
          {
            "x": 27.87,
            "y": 137.24
          },
          {
            "x": 26.95,
            "y": 136.25
          },
          {
            "x": 27.76,
            "y": 141.87
          },
          {
            "x": 25.0,
            "y": 149.34
          },
          {
            "x": 24.78,
            "y": 154.17
          },
          {
            "x": 26.23,
            "y": 151.72
          },
          {
            "x": 25.69,
            "y": 145.5
          },
          {
            "x": 26.2,
            "y": 143.26
          },
          {
            "x": 26.16,
            "y": 142.53
          },
          {
            "x": 25.79,
            "y": 151.06
          },
          {
            "x": 26.07,
            "y": 155.62
          },
          {
            "x": 25.23,
            "y": 157.61
          },
          {
            "x": 25.85,
            "y": 151.66
          },
          {
            "x": 26.63,
            "y": 149.01
          },
          {
            "x": 26.44,
            "y": 153.71
          },
          {
            "x": 28.01,
            "y": 171.83
          },
          {
            "x": 26.69,
            "y": 179.7
          },
          {
            "x": 27.39,
            "y": 184.26
          },
          {
            "x": 25.22,
            "y": 163.83
          },
          {
            "x": 27.28,
            "y": 157.28
          },
          {
            "x": 25.94,
            "y": 161.05
          },
          {
            "x": 25.13,
            "y": 163.3
          },
          {
            "x": 27.17,
            "y": 166.6
          },
          {
            "x": 26.46,
            "y": 173.02
          },
          {
            "x": 25.29,
            "y": 177.52
          },
          {
            "x": 27.61,
            "y": 180.16
          },
          {
            "x": 26.94,
            "y": 180.29
          },
          {
            "x": 25.67,
            "y": 176.06
          },
          {
            "x": 26.76,
            "y": 182.74
          },
          {
            "x": 27.33,
            "y": 194.71
          },
          {
            "x": 26.6,
            "y": 204.5
          },
          {
            "x": 27.3,
            "y": 217.73
          },
          {
            "x": 27.77,
            "y": 198.61
          },
          {
            "x": 28.11,
            "y": 173.15
          },
          {
            "x": 27.51,
            "y": 168.52
          },
          {
            "x": 27.53,
            "y": 174.27
          },
          {
            "x": 27.63,
            "y": 178.9
          },
          {
            "x": 26.71,
            "y": 177.98
          },
          {
            "x": 26.75,
            "y": 179.9
          },
          {
            "x": 26.34,
            "y": 180.95
          },
          {
            "x": 24.55,
            "y": 177.12
          },
          {
            "x": 25.12,
            "y": 173.35
          },
          {
            "x": 25.16,
            "y": 181.15
          },
          {
            "x": 24.85,
            "y": 198.61
          },
          {
            "x": 23.45,
            "y": 183.01
          },
          {
            "x": 24.59,
            "y": 179.43
          },
          {
            "x": 25.41,
            "y": 180.43
          },
          {
            "x": 26.06,
            "y": 179.63
          },
          {
            "x": 25.96,
            "y": 177.19
          },
          {
            "x": 26.6,
            "y": 189.49
          },
          {
            "x": 27.17,
            "y": 183.67
          },
          {
            "x": 25.55,
            "y": 171.23
          },
          {
            "x": 25.47,
            "y": 177.45
          },
          {
            "x": 25.97,
            "y": 151.06
          },
          {
            "x": 26.89,
            "y": 152.91
          },
          {
            "x": 28.3,
            "y": 142.53
          },
          {
            "x": 27.02,
            "y": 146.83
          },
          {
            "x": 26.5,
            "y": 146.76
          },
          {
            "x": 24.65,
            "y": 150.93
          },
          {
            "x": 25.45,
            "y": 134.39
          },
          {
            "x": 24.33,
            "y": 144.98
          },
          {
            "x": 25.09,
            "y": 143.39
          },
          {
            "x": 25.34,
            "y": 142.46
          },
          {
            "x": 25.46,
            "y": 150.66
          },
          {
            "x": 24.66,
            "y": 158.27
          },
          {
            "x": 26.56,
            "y": 153.31
          },
          {
            "x": 26.13,
            "y": 148.61
          },
          {
            "x": 26.96,
            "y": 147.09
          },
          {
            "x": 28.47,
            "y": 139.29
          },
          {
            "x": 27.85,
            "y": 143.98
          },
          {
            "x": 27.58,
            "y": 155.23
          },
          {
            "x": 28.5,
            "y": 156.62
          },
          {
            "x": 27.18,
            "y": 153.04
          },
          {
            "x": 26.97,
            "y": 157.41
          },
          {
            "x": 26.73,
            "y": 163.56
          },
          {
            "x": 26.0,
            "y": 168.72
          },
          {
            "x": 26.03,
            "y": 178.57
          },
          {
            "x": 24.85,
            "y": 184.13
          },
          {
            "x": 24.16,
            "y": 171.36
          },
          {
            "x": 25.41,
            "y": 153.64
          },
          {
            "x": 25.25,
            "y": 152.18
          },
          {
            "x": 25.83,
            "y": 149.34
          },
          {
            "x": 25.95,
            "y": 163.96
          },
          {
            "x": 26.51,
            "y": 175.99
          },
          {
            "x": 26.15,
            "y": 175.6
          },
          {
            "x": 25.75,
            "y": 163.63
          },
          {
            "x": 27.99,
            "y": 159.26
          },
          {
            "x": 26.88,
            "y": 165.74
          },
          {
            "x": 26.48,
            "y": 182.61
          },
          {
            "x": 27.31,
            "y": 171.56
          },
          {
            "x": 27.9,
            "y": 182.61
          },
          {
            "x": 26.3,
            "y": 190.02
          },
          {
            "x": 25.78,
            "y": 179.24
          },
          {
            "x": 26.52,
            "y": 175.53
          },
          {
            "x": 27.11,
            "y": 178.04
          },
          {
            "x": 26.03,
            "y": 188.49
          },
          {
            "x": 26.44,
            "y": 188.63
          },
          {
            "x": 24.46,
            "y": 192.6
          },
          {
            "x": 26.48,
            "y": 179.83
          },
          {
            "x": 25.76,
            "y": 192.26
          },
          {
            "x": 28.52,
            "y": 184.13
          },
          {
            "x": 28.91,
            "y": 174.21
          },
          {
            "x": 28.01,
            "y": 172.49
          },
          {
            "x": 28.1,
            "y": 178.24
          },
          {
            "x": 27.92,
            "y": 171.36
          },
          {
            "x": 29.74,
            "y": 173.88
          },
          {
            "x": 29.21,
            "y": 172.36
          },
          {
            "x": 28.71,
            "y": 180.1
          },
          {
            "x": 27.29,
            "y": 175.53
          },
          {
            "x": 28.29,
            "y": 170.84
          },
          {
            "x": 26.48,
            "y": 178.84
          },
          {
            "x": 25.75,
            "y": 176.66
          },
          {
            "x": 26.02,
            "y": 174.14
          },
          {
            "x": 25.46,
            "y": 177.58
          },
          {
            "x": 24.89,
            "y": 177.85
          },
          {
            "x": 25.5,
            "y": 211.97
          },
          {
            "x": 24.45,
            "y": 213.63
          },
          {
            "x": 25.24,
            "y": 213.23
          },
          {
            "x": 24.52,
            "y": 214.29
          },
          {
            "x": 25.15,
            "y": 228.91
          },
          {
            "x": 26.64,
            "y": 221.43
          },
          {
            "x": 23.87,
            "y": 231.68
          },
          {
            "x": 26.87,
            "y": 234.2
          },
          {
            "x": 25.96,
            "y": 252.25
          },
          {
            "x": 27.81,
            "y": 248.48
          },
          {
            "x": 26.02,
            "y": 241.07
          },
          {
            "x": 26.26,
            "y": 229.43
          },
          {
            "x": 26.4,
            "y": 246.56
          },
          {
            "x": 26.39,
            "y": 264.95
          },
          {
            "x": 24.35,
            "y": 271.37
          },
          {
            "x": 23.99,
            "y": 261.64
          },
          {
            "x": 25.56,
            "y": 267.4
          },
          {
            "x": 25.29,
            "y": 276.0
          },
          {
            "x": 24.55,
            "y": 285.92
          },
          {
            "x": 24.83,
            "y": 312.04
          },
          {
            "x": 25.78,
            "y": 308.21
          },
          {
            "x": 25.59,
            "y": 310.32
          },
          {
            "x": 27.43,
            "y": 305.89
          },
          {
            "x": 27.38,
            "y": 329.77
          },
          {
            "x": 27.47,
            "y": 342.13
          },
          {
            "x": 27.65,
            "y": 349.48
          },
          {
            "x": 26.49,
            "y": 360.98
          },
          {
            "x": 25.69,
            "y": 349.94
          },
          {
            "x": 27.77,
            "y": 355.3
          },
          {
            "x": 27.88,
            "y": 354.83
          },
          {
            "x": 27.01,
            "y": 381.09
          },
          {
            "x": 26.55,
            "y": 380.83
          },
          {
            "x": 27.63,
            "y": 380.3
          },
          {
            "x": 26.27,
            "y": 356.22
          },
          {
            "x": 25.49,
            "y": 350.34
          },
          {
            "x": 25.62,
            "y": 358.4
          },
          {
            "x": 24.6,
            "y": 356.16
          },
          {
            "x": 24.76,
            "y": 329.37
          },
          {
            "x": 24.17,
            "y": 348.48
          },
          {
            "x": 23.77,
            "y": 340.41
          },
          {
            "x": 24.57,
            "y": 319.45
          },
          {
            "x": 25.29,
            "y": 319.98
          },
          {
            "x": 26.62,
            "y": 317.93
          },
          {
            "x": 26.04,
            "y": 355.63
          },
          {
            "x": 25.51,
            "y": 382.55
          },
          {
            "x": 26.18,
            "y": 362.04
          },
          {
            "x": 27.98,
            "y": 316.47
          },
          {
            "x": 26.84,
            "y": 302.78
          },
          {
            "x": 25.91,
            "y": 303.51
          },
          {
            "x": 24.19,
            "y": 323.88
          },
          {
            "x": 24.65,
            "y": 295.84
          },
          {
            "x": 26.33,
            "y": 309.46
          },
          {
            "x": 25.98,
            "y": 307.15
          },
          {
            "x": 23.99,
            "y": 308.47
          },
          {
            "x": 25.0,
            "y": 297.16
          },
          {
            "x": 26.3,
            "y": 290.88
          },
          {
            "x": 25.73,
            "y": 300.07
          },
          {
            "x": 24.93,
            "y": 298.88
          },
          {
            "x": 25.63,
            "y": 298.15
          },
          {
            "x": 26.15,
            "y": 286.51
          },
          {
            "x": 27.95,
            "y": 285.72
          },
          {
            "x": 26.56,
            "y": 264.62
          },
          {
            "x": 28.56,
            "y": 268.72
          },
          {
            "x": 27.65,
            "y": 245.51
          },
          {
            "x": 27.67,
            "y": 242.2
          },
          {
            "x": 28.18,
            "y": 241.34
          },
          {
            "x": 27.36,
            "y": 235.52
          },
          {
            "x": 27.38,
            "y": 229.7
          },
          {
            "x": 28.33,
            "y": 231.48
          },
          {
            "x": 25.75,
            "y": 231.68
          },
          {
            "x": 23.21,
            "y": 235.06
          },
          {
            "x": 26.43,
            "y": 218.79
          },
          {
            "x": 24.84,
            "y": 205.82
          },
          {
            "x": 24.93,
            "y": 197.82
          },
          {
            "x": 24.45,
            "y": 215.61
          },
          {
            "x": 24.65,
            "y": 232.68
          },
          {
            "x": 24.22,
            "y": 239.95
          },
          {
            "x": 26.55,
            "y": 229.77
          },
          {
            "x": 25.64,
            "y": 228.38
          },
          {
            "x": 25.21,
            "y": 212.04
          },
          {
            "x": 26.13,
            "y": 220.97
          },
          {
            "x": 27.25,
            "y": 208.87
          },
          {
            "x": 27.63,
            "y": 239.16
          },
          {
            "x": 25.43,
            "y": 224.14
          },
          {
            "x": 26.92,
            "y": 222.36
          },
          {
            "x": 26.68,
            "y": 215.35
          },
          {
            "x": 28.15,
            "y": 208.67
          },
          {
            "x": 26.42,
            "y": 199.61
          },
          {
            "x": 25.08,
            "y": 197.09
          },
          {
            "x": 24.68,
            "y": 188.03
          },
          {
            "x": 25.57,
            "y": 184.66
          },
          {
            "x": 26.04,
            "y": 181.75
          },
          {
            "x": 27.73,
            "y": 194.45
          },
          {
            "x": 27.68,
            "y": 194.91
          },
          {
            "x": 26.11,
            "y": 202.78
          },
          {
            "x": 26.51,
            "y": 193.85
          },
          {
            "x": 26.87,
            "y": 195.7
          },
          {
            "x": 28.51,
            "y": 183.53
          },
          {
            "x": 28.71,
            "y": 189.29
          },
          {
            "x": 29.64,
            "y": 185.85
          },
          {
            "x": 26.97,
            "y": 180.56
          },
          {
            "x": 28.15,
            "y": 179.37
          },
          {
            "x": 28.03,
            "y": 184.53
          },
          {
            "x": 27.84,
            "y": 178.9
          },
          {
            "x": 27.18,
            "y": 183.07
          },
          {
            "x": 26.85,
            "y": 185.58
          },
          {
            "x": 26.98,
            "y": 187.37
          },
          {
            "x": 24.57,
            "y": 168.32
          },
          {
            "x": 24.88,
            "y": 170.64
          },
          {
            "x": 25.27,
            "y": 163.63
          },
          {
            "x": 25.48,
            "y": 157.01
          },
          {
            "x": 24.09,
            "y": 160.25
          },
          {
            "x": 24.51,
            "y": 157.61
          },
          {
            "x": 24.38,
            "y": 166.8
          },
          {
            "x": 26.1,
            "y": 156.42
          },
          {
            "x": 25.48,
            "y": 163.3
          },
          {
            "x": 26.44,
            "y": 149.74
          },
          {
            "x": 26.38,
            "y": 148.28
          },
          {
            "x": 25.7,
            "y": 154.04
          },
          {
            "x": 27.96,
            "y": 151.66
          },
          {
            "x": 26.2,
            "y": 150.93
          },
          {
            "x": 25.78,
            "y": 154.37
          },
          {
            "x": 26.56,
            "y": 149.08
          },
          {
            "x": 25.88,
            "y": 139.42
          },
          {
            "x": 27.06,
            "y": 137.63
          },
          {
            "x": 27.08,
            "y": 142.0
          },
          {
            "x": 24.71,
            "y": 145.84
          },
          {
            "x": 25.1,
            "y": 145.04
          },
          {
            "x": 25.69,
            "y": 152.52
          },
          {
            "x": 25.7,
            "y": 151.72
          },
          {
            "x": 26.15,
            "y": 157.87
          },
          {
            "x": 25.42,
            "y": 154.96
          },
          {
            "x": 28.07,
            "y": 154.9
          },
          {
            "x": 28.12,
            "y": 179.5
          },
          {
            "x": 27.42,
            "y": 201.92
          },
          {
            "x": 29.01,
            "y": 237.83
          },
          {
            "x": 28.69,
            "y": 267.86
          },
          {
            "x": 30.01,
            "y": 230.36
          },
          {
            "x": 28.58,
            "y": 238.89
          },
          {
            "x": 28.42,
            "y": 264.36
          },
          {
            "x": 28.83,
            "y": 266.14
          },
          {
            "x": 26.86,
            "y": 276.33
          },
          {
            "x": 26.82,
            "y": 239.16
          },
          {
            "x": 27.69,
            "y": 238.3
          },
          {
            "x": 25.95,
            "y": 240.68
          },
          {
            "x": 27.05,
            "y": 227.65
          },
          {
            "x": 26.15,
            "y": 220.57
          },
          {
            "x": 26.56,
            "y": 225.47
          },
          {
            "x": 26.17,
            "y": 225.14
          },
          {
            "x": 26.96,
            "y": 225.8
          },
          {
            "x": 24.73,
            "y": 239.55
          },
          {
            "x": 26.3,
            "y": 243.39
          },
          {
            "x": 26.31,
            "y": 249.67
          },
          {
            "x": 27.48,
            "y": 254.5
          },
          {
            "x": 25.74,
            "y": 255.1
          },
          {
            "x": 27.67,
            "y": 238.89
          },
          {
            "x": 26.5,
            "y": 246.1
          },
          {
            "x": 26.03,
            "y": 292.07
          },
          {
            "x": 28.23,
            "y": 287.17
          },
          {
            "x": 24.36,
            "y": 253.31
          },
          {
            "x": 26.38,
            "y": 246.37
          },
          {
            "x": 25.33,
            "y": 253.97
          },
          {
            "x": 24.87,
            "y": 256.95
          },
          {
            "x": 25.07,
            "y": 236.91
          },
          {
            "x": 25.23,
            "y": 234.99
          },
          {
            "x": 26.48,
            "y": 225.07
          },
          {
            "x": 27.34,
            "y": 213.03
          },
          {
            "x": 28.11,
            "y": 237.9
          },
          {
            "x": 26.93,
            "y": 214.88
          },
          {
            "x": 28.39,
            "y": 212.64
          },
          {
            "x": 27.83,
            "y": 215.88
          },
          {
            "x": 28.66,
            "y": 191.07
          },
          {
            "x": 29.3,
            "y": 174.01
          },
          {
            "x": 28.93,
            "y": 167.26
          },
          {
            "x": 27.41,
            "y": 185.12
          },
          {
            "x": 27.84,
            "y": 186.38
          },
          {
            "x": 27.49,
            "y": 178.04
          },
          {
            "x": 28.94,
            "y": 186.71
          },
          {
            "x": 26.96,
            "y": 174.41
          },
          {
            "x": 25.74,
            "y": 179.43
          },
          {
            "x": 26.66,
            "y": 167.93
          },
          {
            "x": 26.17,
            "y": 177.65
          },
          {
            "x": 25.87,
            "y": 174.67
          },
          {
            "x": 26.04,
            "y": 168.92
          },
          {
            "x": 26.97,
            "y": 166.14
          },
          {
            "x": 27.48,
            "y": 167.46
          },
          {
            "x": 25.83,
            "y": 160.78
          },
          {
            "x": 27.04,
            "y": 165.68
          },
          {
            "x": 25.93,
            "y": 174.41
          },
          {
            "x": 28.01,
            "y": 161.25
          },
          {
            "x": 29.33,
            "y": 154.83
          },
          {
            "x": 28.13,
            "y": 149.94
          },
          {
            "x": 28.16,
            "y": 155.09
          },
          {
            "x": 28.49,
            "y": 159.72
          },
          {
            "x": 28.87,
            "y": 174.08
          },
          {
            "x": 29.61,
            "y": 160.06
          },
          {
            "x": 27.63,
            "y": 159.99
          },
          {
            "x": 28.19,
            "y": 153.84
          },
          {
            "x": 26.37,
            "y": 161.25
          },
          {
            "x": 26.48,
            "y": 154.63
          },
          {
            "x": 26.11,
            "y": 162.24
          },
          {
            "x": 26.92,
            "y": 156.68
          },
          {
            "x": 27.21,
            "y": 163.56
          },
          {
            "x": 27.55,
            "y": 157.41
          },
          {
            "x": 26.43,
            "y": 152.98
          },
          {
            "x": 25.78,
            "y": 153.9
          },
          {
            "x": 26.92,
            "y": 153.11
          },
          {
            "x": 27.99,
            "y": 150.99
          },
          {
            "x": 28.47,
            "y": 149.47
          },
          {
            "x": 28.23,
            "y": 159.86
          },
          {
            "x": 29.46,
            "y": 177.05
          },
          {
            "x": 29.72,
            "y": 168.59
          },
          {
            "x": 30.59,
            "y": 159.33
          },
          {
            "x": 28.75,
            "y": 164.02
          },
          {
            "x": 25.73,
            "y": 159.26
          },
          {
            "x": 27.62,
            "y": 163.3
          },
          {
            "x": 27.81,
            "y": 171.03
          },
          {
            "x": 26.39,
            "y": 160.45
          },
          {
            "x": 25.96,
            "y": 174.87
          },
          {
            "x": 25.07,
            "y": 186.18
          },
          {
            "x": 24.72,
            "y": 177.91
          },
          {
            "x": 25.39,
            "y": 185.78
          },
          {
            "x": 25.46,
            "y": 192.73
          },
          {
            "x": 27.11,
            "y": 186.78
          },
          {
            "x": 26.73,
            "y": 188.49
          },
          {
            "x": 27.11,
            "y": 181.75
          },
          {
            "x": 26.45,
            "y": 190.35
          },
          {
            "x": 27.1,
            "y": 198.55
          },
          {
            "x": 28.35,
            "y": 195.24
          },
          {
            "x": 27.13,
            "y": 200.27
          },
          {
            "x": 26.67,
            "y": 196.03
          },
          {
            "x": 26.99,
            "y": 205.56
          },
          {
            "x": 26.82,
            "y": 217.6
          },
          {
            "x": 25.8,
            "y": 226.66
          },
          {
            "x": 24.45,
            "y": 214.02
          },
          {
            "x": 26.27,
            "y": 204.57
          },
          {
            "x": 25.83,
            "y": 186.78
          },
          {
            "x": 25.88,
            "y": 185.52
          },
          {
            "x": 26.82,
            "y": 180.1
          },
          {
            "x": 27.74,
            "y": 181.75
          },
          {
            "x": 25.82,
            "y": 197.49
          },
          {
            "x": 27.26,
            "y": 205.56
          },
          {
            "x": 27.13,
            "y": 193.06
          },
          {
            "x": 27.26,
            "y": 192.79
          },
          {
            "x": 27.22,
            "y": 197.36
          },
          {
            "x": 28.06,
            "y": 186.84
          },
          {
            "x": 27.97,
            "y": 184.66
          },
          {
            "x": 27.92,
            "y": 182.01
          },
          {
            "x": 29.25,
            "y": 182.34
          },
          {
            "x": 28.65,
            "y": 183.73
          },
          {
            "x": 28.25,
            "y": 171.76
          },
          {
            "x": 26.23,
            "y": 178.57
          },
          {
            "x": 25.78,
            "y": 175.4
          },
          {
            "x": 26.27,
            "y": 172.29
          },
          {
            "x": 26.95,
            "y": 166.07
          },
          {
            "x": 25.28,
            "y": 168.79
          },
          {
            "x": 24.72,
            "y": 150.07
          },
          {
            "x": 23.41,
            "y": 164.09
          },
          {
            "x": 25.04,
            "y": 166.67
          },
          {
            "x": 25.19,
            "y": 180.62
          },
          {
            "x": 24.77,
            "y": 182.34
          },
          {
            "x": 25.81,
            "y": 185.58
          },
          {
            "x": 25.96,
            "y": 167.2
          },
          {
            "x": 27.27,
            "y": 169.51
          },
          {
            "x": 26.51,
            "y": 171.17
          },
          {
            "x": 27.05,
            "y": 180.62
          },
          {
            "x": 24.73,
            "y": 169.38
          },
          {
            "x": 27.61,
            "y": 173.28
          },
          {
            "x": 28.53,
            "y": 165.68
          },
          {
            "x": 25.57,
            "y": 166.54
          },
          {
            "x": 25.54,
            "y": 167.2
          },
          {
            "x": 26.18,
            "y": 163.76
          },
          {
            "x": 25.66,
            "y": 171.43
          },
          {
            "x": 25.36,
            "y": 159.53
          },
          {
            "x": 26.26,
            "y": 161.05
          },
          {
            "x": 26.19,
            "y": 166.93
          },
          {
            "x": 25.7,
            "y": 165.54
          },
          {
            "x": 26.06,
            "y": 160.19
          },
          {
            "x": 28.02,
            "y": 165.54
          },
          {
            "x": 27.61,
            "y": 163.1
          },
          {
            "x": 26.9,
            "y": 156.02
          },
          {
            "x": 26.78,
            "y": 158.67
          },
          {
            "x": 27.94,
            "y": 157.21
          },
          {
            "x": 28.3,
            "y": 156.55
          },
          {
            "x": 27.92,
            "y": 156.29
          },
          {
            "x": 27.01,
            "y": 155.36
          },
          {
            "x": 27.1,
            "y": 151.99
          },
          {
            "x": 27.13,
            "y": 159.2
          },
          {
            "x": 25.92,
            "y": 154.17
          },
          {
            "x": 26.01,
            "y": 150.73
          },
          {
            "x": 25.02,
            "y": 159.26
          },
          {
            "x": 25.83,
            "y": 153.04
          },
          {
            "x": 24.87,
            "y": 152.38
          },
          {
            "x": 25.18,
            "y": 151.19
          },
          {
            "x": 25.82,
            "y": 147.16
          },
          {
            "x": 25.8,
            "y": 139.82
          },
          {
            "x": 26.44,
            "y": 146.1
          },
          {
            "x": 26.13,
            "y": 143.85
          },
          {
            "x": 25.82,
            "y": 134.53
          },
          {
            "x": 26.02,
            "y": 133.0
          },
          {
            "x": 25.67,
            "y": 132.41
          },
          {
            "x": 26.04,
            "y": 126.26
          },
          {
            "x": 28.62,
            "y": 128.44
          },
          {
            "x": 26.55,
            "y": 144.12
          },
          {
            "x": 26.3,
            "y": 157.87
          },
          {
            "x": 25.68,
            "y": 160.25
          },
          {
            "x": 25.87,
            "y": 158.8
          },
          {
            "x": 26.2,
            "y": 149.01
          },
          {
            "x": 25.65,
            "y": 141.73
          },
          {
            "x": 26.5,
            "y": 134.79
          },
          {
            "x": 26.75,
            "y": 128.24
          },
          {
            "x": 27.3,
            "y": 135.19
          },
          {
            "x": 27.68,
            "y": 135.12
          },
          {
            "x": 27.14,
            "y": 137.37
          },
          {
            "x": 28.91,
            "y": 136.77
          },
          {
            "x": 29.67,
            "y": 137.17
          },
          {
            "x": 28.59,
            "y": 132.87
          },
          {
            "x": 28.79,
            "y": 127.58
          },
          {
            "x": 28.17,
            "y": 124.47
          },
          {
            "x": 29.12,
            "y": 124.27
          },
          {
            "x": 28.75,
            "y": 124.21
          },
          {
            "x": 28.34,
            "y": 126.13
          },
          {
            "x": 28.45,
            "y": 119.58
          },
          {
            "x": 28.6,
            "y": 121.03
          },
          {
            "x": 27.94,
            "y": 118.06
          },
          {
            "x": 28.25,
            "y": 116.73
          },
          {
            "x": 25.92,
            "y": 123.68
          },
          {
            "x": 26.4,
            "y": 138.36
          },
          {
            "x": 25.47,
            "y": 131.02
          },
          {
            "x": 25.35,
            "y": 132.01
          },
          {
            "x": 27.23,
            "y": 143.19
          },
          {
            "x": 25.96,
            "y": 139.16
          },
          {
            "x": 25.62,
            "y": 139.02
          },
          {
            "x": 27.84,
            "y": 128.64
          },
          {
            "x": 28.19,
            "y": 128.71
          },
          {
            "x": 27.15,
            "y": 122.82
          },
          {
            "x": 28.57,
            "y": 123.81
          },
          {
            "x": 29.26,
            "y": 130.09
          },
          {
            "x": 28.85,
            "y": 130.16
          },
          {
            "x": 26.95,
            "y": 133.8
          },
          {
            "x": 26.3,
            "y": 123.68
          },
          {
            "x": 27.06,
            "y": 126.59
          },
          {
            "x": 27.72,
            "y": 131.42
          },
          {
            "x": 27.44,
            "y": 144.78
          },
          {
            "x": 25.58,
            "y": 135.85
          },
          {
            "x": 26.02,
            "y": 156.81
          },
          {
            "x": 25.77,
            "y": 168.39
          },
          {
            "x": 26.12,
            "y": 168.26
          },
          {
            "x": 27.8,
            "y": 175.27
          },
          {
            "x": 27.29,
            "y": 157.61
          },
          {
            "x": 27.81,
            "y": 148.35
          },
          {
            "x": 27.15,
            "y": 138.96
          },
          {
            "x": 27.09,
            "y": 130.09
          },
          {
            "x": 28.58,
            "y": 144.31
          },
          {
            "x": 27.0,
            "y": 143.12
          },
          {
            "x": 27.78,
            "y": 139.68
          },
          {
            "x": 29.13,
            "y": 142.93
          },
          {
            "x": 28.72,
            "y": 153.24
          },
          {
            "x": 30.17,
            "y": 158.6
          },
          {
            "x": 27.61,
            "y": 153.51
          },
          {
            "x": 27.07,
            "y": 138.36
          },
          {
            "x": 26.1,
            "y": 142.13
          },
          {
            "x": 27.12,
            "y": 138.63
          },
          {
            "x": 24.83,
            "y": 135.58
          },
          {
            "x": 25.73,
            "y": 130.82
          },
          {
            "x": 25.22,
            "y": 123.88
          },
          {
            "x": 25.59,
            "y": 126.52
          },
          {
            "x": 25.39,
            "y": 128.57
          },
          {
            "x": 25.24,
            "y": 128.44
          },
          {
            "x": 25.21,
            "y": 143.39
          },
          {
            "x": 25.17,
            "y": 160.78
          },
          {
            "x": 26.83,
            "y": 151.72
          },
          {
            "x": 24.52,
            "y": 162.97
          },
          {
            "x": 27.78,
            "y": 178.31
          },
          {
            "x": 27.89,
            "y": 163.43
          },
          {
            "x": 26.72,
            "y": 147.03
          },
          {
            "x": 27.54,
            "y": 144.12
          },
          {
            "x": 27.72,
            "y": 144.98
          },
          {
            "x": 25.43,
            "y": 139.68
          },
          {
            "x": 25.39,
            "y": 136.84
          },
          {
            "x": 26.12,
            "y": 144.51
          },
          {
            "x": 25.51,
            "y": 151.39
          },
          {
            "x": 25.94,
            "y": 155.62
          },
          {
            "x": 25.76,
            "y": 157.54
          },
          {
            "x": 26.09,
            "y": 164.75
          },
          {
            "x": 25.49,
            "y": 169.65
          },
          {
            "x": 25.42,
            "y": 160.58
          },
          {
            "x": 26.87,
            "y": 164.09
          },
          {
            "x": 27.83,
            "y": 165.81
          },
          {
            "x": 25.88,
            "y": 160.32
          },
          {
            "x": 26.79,
            "y": 168.65
          },
          {
            "x": 27.06,
            "y": 173.48
          },
          {
            "x": 27.77,
            "y": 175.2
          },
          {
            "x": 29.02,
            "y": 168.79
          },
          {
            "x": 28.65,
            "y": 160.85
          },
          {
            "x": 29.02,
            "y": 169.45
          },
          {
            "x": 27.89,
            "y": 177.65
          },
          {
            "x": 25.8,
            "y": 185.12
          },
          {
            "x": 28.0,
            "y": 192.79
          },
          {
            "x": 28.1,
            "y": 198.55
          },
          {
            "x": 27.43,
            "y": 213.03
          },
          {
            "x": 26.23,
            "y": 208.27
          },
          {
            "x": 26.29,
            "y": 201.52
          },
          {
            "x": 24.39,
            "y": 206.35
          },
          {
            "x": 25.54,
            "y": 200.14
          },
          {
            "x": 26.35,
            "y": 232.81
          },
          {
            "x": 25.22,
            "y": 237.5
          },
          {
            "x": 26.61,
            "y": 240.74
          },
          {
            "x": 26.43,
            "y": 235.78
          },
          {
            "x": 25.41,
            "y": 261.11
          },
          {
            "x": 28.38,
            "y": 244.71
          },
          {
            "x": 28.88,
            "y": 247.75
          },
          {
            "x": 28.21,
            "y": 255.82
          },
          {
            "x": 26.76,
            "y": 266.34
          },
          {
            "x": 25.2,
            "y": 270.18
          },
          {
            "x": 25.93,
            "y": 269.78
          },
          {
            "x": 26.13,
            "y": 264.09
          },
          {
            "x": 25.39,
            "y": 302.85
          },
          {
            "x": 26.56,
            "y": 322.56
          },
          {
            "x": 25.66,
            "y": 323.75
          },
          {
            "x": 26.32,
            "y": 312.04
          },
          {
            "x": 26.2,
            "y": 298.42
          },
          {
            "x": 25.62,
            "y": 315.41
          },
          {
            "x": 25.52,
            "y": 317.0
          },
          {
            "x": 26.8,
            "y": 306.95
          },
          {
            "x": 26.14,
            "y": 319.91
          },
          {
            "x": 26.53,
            "y": 333.67
          },
          {
            "x": 26.79,
            "y": 317.53
          },
          {
            "x": 28.93,
            "y": 309.59
          },
          {
            "x": 29.04,
            "y": 291.41
          },
          {
            "x": 27.95,
            "y": 283.8
          },
          {
            "x": 28.86,
            "y": 299.14
          },
          {
            "x": 26.65,
            "y": 295.77
          },
          {
            "x": 27.18,
            "y": 285.65
          },
          {
            "x": 26.82,
            "y": 279.9
          },
          {
            "x": 25.63,
            "y": 301.86
          },
          {
            "x": 24.86,
            "y": 303.51
          },
          {
            "x": 24.6,
            "y": 314.22
          },
          {
            "x": 24.94,
            "y": 306.82
          },
          {
            "x": 24.17,
            "y": 299.74
          },
          {
            "x": 25.58,
            "y": 294.32
          },
          {
            "x": 25.95,
            "y": 269.45
          },
          {
            "x": 25.9,
            "y": 282.01
          },
          {
            "x": 26.72,
            "y": 277.05
          },
          {
            "x": 26.06,
            "y": 298.28
          },
          {
            "x": 25.83,
            "y": 321.96
          },
          {
            "x": 26.17,
            "y": 307.74
          },
          {
            "x": 27.64,
            "y": 287.83
          },
          {
            "x": 26.14,
            "y": 291.6
          },
          {
            "x": 26.31,
            "y": 290.08
          },
          {
            "x": 27.28,
            "y": 260.19
          },
          {
            "x": 26.71,
            "y": 251.86
          },
          {
            "x": 23.41,
            "y": 227.78
          },
          {
            "x": 26.97,
            "y": 225.0
          },
          {
            "x": 25.88,
            "y": 211.78
          },
          {
            "x": 25.23,
            "y": 211.84
          },
          {
            "x": 24.53,
            "y": 221.1
          },
          {
            "x": 25.13,
            "y": 227.52
          },
          {
            "x": 25.51,
            "y": 221.3
          },
          {
            "x": 25.25,
            "y": 197.62
          },
          {
            "x": 25.94,
            "y": 204.76
          },
          {
            "x": 27.08,
            "y": 232.68
          },
          {
            "x": 26.85,
            "y": 231.15
          },
          {
            "x": 27.52,
            "y": 257.21
          },
          {
            "x": 28.5,
            "y": 239.16
          },
          {
            "x": 26.54,
            "y": 242.33
          },
          {
            "x": 28.38,
            "y": 230.56
          },
          {
            "x": 27.95,
            "y": 225.53
          },
          {
            "x": 27.92,
            "y": 251.66
          },
          {
            "x": 28.14,
            "y": 256.88
          },
          {
            "x": 26.62,
            "y": 252.19
          },
          {
            "x": 26.68,
            "y": 246.04
          },
          {
            "x": 27.68,
            "y": 250.27
          },
          {
            "x": 26.5,
            "y": 242.13
          },
          {
            "x": 27.17,
            "y": 252.19
          },
          {
            "x": 25.29,
            "y": 227.52
          },
          {
            "x": 26.19,
            "y": 212.97
          },
          {
            "x": 27.24,
            "y": 210.72
          },
          {
            "x": 25.65,
            "y": 214.09
          },
          {
            "x": 26.6,
            "y": 217.79
          },
          {
            "x": 27.75,
            "y": 211.51
          },
          {
            "x": 27.96,
            "y": 195.04
          },
          {
            "x": 27.41,
            "y": 202.85
          },
          {
            "x": 28.0,
            "y": 193.46
          },
          {
            "x": 29.12,
            "y": 221.56
          },
          {
            "x": 28.02,
            "y": 193.32
          },
          {
            "x": 28.76,
            "y": 193.19
          },
          {
            "x": 27.57,
            "y": 216.87
          },
          {
            "x": 26.62,
            "y": 212.9
          },
          {
            "x": 28.05,
            "y": 230.62
          },
          {
            "x": 29.13,
            "y": 226.13
          },
          {
            "x": 27.73,
            "y": 242.93
          },
          {
            "x": 28.64,
            "y": 244.91
          },
          {
            "x": 27.77,
            "y": 277.19
          },
          {
            "x": 27.42,
            "y": 261.91
          },
          {
            "x": 27.86,
            "y": 241.8
          },
          {
            "x": 29.56,
            "y": 237.04
          },
          {
            "x": 28.7,
            "y": 256.42
          },
          {
            "x": 27.36,
            "y": 248.95
          },
          {
            "x": 28.53,
            "y": 252.45
          },
          {
            "x": 28.71,
            "y": 251.46
          },
          {
            "x": 30.48,
            "y": 262.37
          },
          {
            "x": 32.18,
            "y": 241.87
          },
          {
            "x": 29.31,
            "y": 252.19
          },
          {
            "x": 30.05,
            "y": 281.09
          },
          {
            "x": 30.25,
            "y": 313.17
          },
          {
            "x": 29.78,
            "y": 305.03
          },
          {
            "x": 30.27,
            "y": 265.48
          },
          {
            "x": 28.46,
            "y": 263.96
          },
          {
            "x": 27.71,
            "y": 288.69
          },
          {
            "x": 26.5,
            "y": 306.82
          },
          {
            "x": 26.32,
            "y": 296.5
          },
          {
            "x": 26.79,
            "y": 305.82
          },
          {
            "x": 26.06,
            "y": 304.63
          },
          {
            "x": 26.76,
            "y": 322.95
          },
          {
            "x": 26.17,
            "y": 310.45
          },
          {
            "x": 26.22,
            "y": 304.9
          },
          {
            "x": 26.42,
            "y": 313.5
          }
        ],
        "trend": {
          "slope": 1.826,
          "intercept": 134.02
        }
      },
      {
        "title": "Humidity vs Price",
        "xLabel": "Humidity",
        "yLabel": "Coffee Price",
        "points": [
          {
            "x": 78.49,
            "y": 154.1
          },
          {
            "x": 73.01,
            "y": 156.81
          },
          {
            "x": 74.12,
            "y": 147.09
          },
          {
            "x": 74.73,
            "y": 148.48
          },
          {
            "x": 71.71,
            "y": 143.92
          },
          {
            "x": 70.54,
            "y": 136.51
          },
          {
            "x": 70.85,
            "y": 138.03
          },
          {
            "x": 71.31,
            "y": 140.21
          },
          {
            "x": 70.53,
            "y": 135.05
          },
          {
            "x": 70.94,
            "y": 137.17
          },
          {
            "x": 75.67,
            "y": 124.6
          },
          {
            "x": 73.56,
            "y": 129.3
          },
          {
            "x": 80.97,
            "y": 131.09
          },
          {
            "x": 81.44,
            "y": 121.43
          },
          {
            "x": 83.19,
            "y": 136.64
          },
          {
            "x": 82.47,
            "y": 124.94
          },
          {
            "x": 82.27,
            "y": 121.5
          },
          {
            "x": 82.54,
            "y": 111.71
          },
          {
            "x": 78.76,
            "y": 112.24
          },
          {
            "x": 78.8,
            "y": 119.18
          },
          {
            "x": 80.03,
            "y": 127.85
          },
          {
            "x": 75.26,
            "y": 114.35
          },
          {
            "x": 77.51,
            "y": 105.29
          },
          {
            "x": 78.13,
            "y": 103.71
          },
          {
            "x": 81.6,
            "y": 97.75
          },
          {
            "x": 81.85,
            "y": 102.38
          },
          {
            "x": 81.55,
            "y": 102.12
          },
          {
            "x": 80.58,
            "y": 109.79
          },
          {
            "x": 78.45,
            "y": 105.76
          },
          {
            "x": 72.63,
            "y": 114.68
          },
          {
            "x": 80.75,
            "y": 100.0
          },
          {
            "x": 81.23,
            "y": 99.6
          },
          {
            "x": 83.36,
            "y": 90.68
          },
          {
            "x": 78.94,
            "y": 91.93
          },
          {
            "x": 78.17,
            "y": 84.19
          },
          {
            "x": 79.69,
            "y": 82.94
          },
          {
            "x": 77.48,
            "y": 89.09
          },
          {
            "x": 73.58,
            "y": 85.12
          },
          {
            "x": 74.09,
            "y": 92.86
          },
          {
            "x": 73.97,
            "y": 88.76
          },
          {
            "x": 72.14,
            "y": 82.28
          },
          {
            "x": 68.37,
            "y": 79.1
          },
          {
            "x": 71.44,
            "y": 84.53
          },
          {
            "x": 70.47,
            "y": 84.86
          },
          {
            "x": 74.25,
            "y": 78.04
          },
          {
            "x": 68.86,
            "y": 80.89
          },
          {
            "x": 71.5,
            "y": 76.85
          },
          {
            "x": 71.63,
            "y": 74.34
          },
          {
            "x": 68.98,
            "y": 80.62
          },
          {
            "x": 69.45,
            "y": 87.3
          },
          {
            "x": 80.47,
            "y": 83.0
          },
          {
            "x": 84.18,
            "y": 79.23
          },
          {
            "x": 78.31,
            "y": 77.25
          },
          {
            "x": 76.01,
            "y": 78.57
          },
          {
            "x": 74.17,
            "y": 73.41
          },
          {
            "x": 73.18,
            "y": 71.23
          },
          {
            "x": 73.38,
            "y": 69.11
          },
          {
            "x": 76.89,
            "y": 67.99
          },
          {
            "x": 75.36,
            "y": 66.67
          },
          {
            "x": 73.14,
            "y": 65.08
          },
          {
            "x": 75.43,
            "y": 67.4
          },
          {
            "x": 72.3,
            "y": 62.83
          },
          {
            "x": 79.22,
            "y": 63.96
          },
          {
            "x": 76.42,
            "y": 64.95
          },
          {
            "x": 73.16,
            "y": 61.51
          },
          {
            "x": 76.71,
            "y": 59.13
          },
          {
            "x": 77.69,
            "y": 57.28
          },
          {
            "x": 78.06,
            "y": 60.05
          },
          {
            "x": 80.52,
            "y": 59.33
          },
          {
            "x": 76.43,
            "y": 61.38
          },
          {
            "x": 75.14,
            "y": 55.82
          },
          {
            "x": 77.78,
            "y": 58.4
          },
          {
            "x": 76.5,
            "y": 61.71
          },
          {
            "x": 78.23,
            "y": 62.63
          },
          {
            "x": 78.25,
            "y": 65.54
          },
          {
            "x": 72.07,
            "y": 61.91
          },
          {
            "x": 73.51,
            "y": 60.12
          },
          {
            "x": 71.4,
            "y": 57.01
          },
          {
            "x": 72.73,
            "y": 64.82
          },
          {
            "x": 75.31,
            "y": 60.65
          },
          {
            "x": 70.76,
            "y": 71.96
          },
          {
            "x": 74.56,
            "y": 71.83
          },
          {
            "x": 71.07,
            "y": 78.51
          },
          {
            "x": 71.9,
            "y": 70.37
          },
          {
            "x": 74.4,
            "y": 71.23
          },
          {
            "x": 74.32,
            "y": 64.62
          },
          {
            "x": 74.84,
            "y": 62.83
          },
          {
            "x": 82.31,
            "y": 67.06
          },
          {
            "x": 81.21,
            "y": 68.65
          },
          {
            "x": 80.62,
            "y": 65.28
          },
          {
            "x": 76.83,
            "y": 62.3
          },
          {
            "x": 75.91,
            "y": 63.23
          },
          {
            "x": 79.23,
            "y": 68.65
          },
          {
            "x": 80.87,
            "y": 62.63
          },
          {
            "x": 74.93,
            "y": 61.91
          },
          {
            "x": 70.83,
            "y": 62.9
          },
          {
            "x": 71.43,
            "y": 62.17
          },
          {
            "x": 74.97,
            "y": 68.12
          },
          {
            "x": 74.94,
            "y": 78.44
          },
          {
            "x": 74.65,
            "y": 77.32
          },
          {
            "x": 75.59,
            "y": 73.61
          },
          {
            "x": 69.21,
            "y": 77.78
          },
          {
            "x": 70.51,
            "y": 82.81
          },
          {
            "x": 81.33,
            "y": 83.2
          },
          {
            "x": 76.5,
            "y": 89.75
          },
          {
            "x": 77.95,
            "y": 85.65
          },
          {
            "x": 73.77,
            "y": 88.1
          },
          {
            "x": 76.73,
            "y": 83.86
          },
          {
            "x": 79.54,
            "y": 82.81
          },
          {
            "x": 76.67,
            "y": 81.15
          },
          {
            "x": 74.98,
            "y": 84.0
          },
          {
            "x": 74.76,
            "y": 87.63
          },
          {
            "x": 76.35,
            "y": 86.84
          },
          {
            "x": 71.99,
            "y": 86.84
          },
          {
            "x": 70.41,
            "y": 82.87
          },
          {
            "x": 71.67,
            "y": 76.65
          },
          {
            "x": 68.52,
            "y": 77.58
          },
          {
            "x": 75.13,
            "y": 74.87
          },
          {
            "x": 76.4,
            "y": 77.05
          },
          {
            "x": 69.35,
            "y": 82.34
          },
          {
            "x": 70.9,
            "y": 82.61
          },
          {
            "x": 70.76,
            "y": 84.33
          },
          {
            "x": 69.43,
            "y": 89.75
          },
          {
            "x": 76.18,
            "y": 85.58
          },
          {
            "x": 76.2,
            "y": 80.89
          },
          {
            "x": 80.97,
            "y": 78.57
          },
          {
            "x": 82.05,
            "y": 79.5
          },
          {
            "x": 76.55,
            "y": 76.72
          },
          {
            "x": 77.01,
            "y": 80.03
          },
          {
            "x": 80.15,
            "y": 81.61
          },
          {
            "x": 78.8,
            "y": 80.49
          },
          {
            "x": 75.94,
            "y": 83.67
          },
          {
            "x": 75.01,
            "y": 79.5
          },
          {
            "x": 76.77,
            "y": 80.29
          },
          {
            "x": 75.64,
            "y": 83.53
          },
          {
            "x": 76.57,
            "y": 90.54
          },
          {
            "x": 68.67,
            "y": 86.44
          },
          {
            "x": 74.16,
            "y": 86.11
          },
          {
            "x": 77.88,
            "y": 81.28
          },
          {
            "x": 75.06,
            "y": 83.47
          },
          {
            "x": 73.32,
            "y": 77.58
          },
          {
            "x": 76.26,
            "y": 79.56
          },
          {
            "x": 77.85,
            "y": 74.93
          },
          {
            "x": 78.22,
            "y": 82.67
          },
          {
            "x": 73.78,
            "y": 83.33
          },
          {
            "x": 75.55,
            "y": 84.46
          },
          {
            "x": 77.13,
            "y": 85.91
          },
          {
            "x": 77.84,
            "y": 93.65
          },
          {
            "x": 77.54,
            "y": 99.6
          },
          {
            "x": 73.33,
            "y": 99.87
          },
          {
            "x": 70.96,
            "y": 98.35
          },
          {
            "x": 72.47,
            "y": 92.99
          },
          {
            "x": 67.23,
            "y": 97.49
          },
          {
            "x": 72.55,
            "y": 98.74
          },
          {
            "x": 71.9,
            "y": 102.32
          },
          {
            "x": 73.47,
            "y": 98.02
          },
          {
            "x": 78.5,
            "y": 95.97
          },
          {
            "x": 75.48,
            "y": 89.09
          },
          {
            "x": 76.92,
            "y": 88.82
          },
          {
            "x": 76.21,
            "y": 93.19
          },
          {
            "x": 82.53,
            "y": 95.7
          },
          {
            "x": 83.02,
            "y": 113.16
          },
          {
            "x": 83.98,
            "y": 110.12
          },
          {
            "x": 81.94,
            "y": 100.13
          },
          {
            "x": 80.33,
            "y": 96.69
          },
          {
            "x": 85.46,
            "y": 91.07
          },
          {
            "x": 81.99,
            "y": 95.04
          },
          {
            "x": 80.31,
            "y": 87.9
          },
          {
            "x": 77.34,
            "y": 89.09
          },
          {
            "x": 76.65,
            "y": 88.76
          },
          {
            "x": 76.89,
            "y": 92.59
          },
          {
            "x": 75.48,
            "y": 89.35
          },
          {
            "x": 76.45,
            "y": 99.67
          },
          {
            "x": 72.26,
            "y": 107.28
          },
          {
            "x": 75.98,
            "y": 102.12
          },
          {
            "x": 77.05,
            "y": 97.69
          },
          {
            "x": 78.56,
            "y": 102.78
          },
          {
            "x": 78.51,
            "y": 103.57
          },
          {
            "x": 79.13,
            "y": 116.47
          },
          {
            "x": 73.59,
            "y": 117.59
          },
          {
            "x": 78.11,
            "y": 125.13
          },
          {
            "x": 77.34,
            "y": 135.32
          },
          {
            "x": 77.59,
            "y": 138.49
          },
          {
            "x": 74.27,
            "y": 128.04
          },
          {
            "x": 77.55,
            "y": 132.41
          },
          {
            "x": 76.36,
            "y": 139.02
          },
          {
            "x": 70.46,
            "y": 146.17
          },
          {
            "x": 70.02,
            "y": 155.82
          },
          {
            "x": 66.42,
            "y": 152.45
          },
          {
            "x": 74.94,
            "y": 169.31
          },
          {
            "x": 77.15,
            "y": 178.71
          },
          {
            "x": 74.74,
            "y": 159.92
          },
          {
            "x": 70.09,
            "y": 164.95
          },
          {
            "x": 72.13,
            "y": 148.88
          },
          {
            "x": 77.91,
            "y": 171.43
          },
          {
            "x": 76.56,
            "y": 161.25
          },
          {
            "x": 76.45,
            "y": 150.47
          },
          {
            "x": 83.49,
            "y": 163.63
          },
          {
            "x": 83.89,
            "y": 166.07
          },
          {
            "x": 81.48,
            "y": 147.03
          },
          {
            "x": 82.49,
            "y": 139.49
          },
          {
            "x": 78.91,
            "y": 135.19
          },
          {
            "x": 81.91,
            "y": 136.58
          },
          {
            "x": 80.28,
            "y": 135.05
          },
          {
            "x": 76.79,
            "y": 140.54
          },
          {
            "x": 76.46,
            "y": 138.76
          },
          {
            "x": 75.04,
            "y": 127.18
          },
          {
            "x": 74.45,
            "y": 132.28
          },
          {
            "x": 78.0,
            "y": 117.26
          },
          {
            "x": 80.8,
            "y": 117.73
          },
          {
            "x": 78.05,
            "y": 122.82
          },
          {
            "x": 73.4,
            "y": 132.74
          },
          {
            "x": 79.1,
            "y": 136.84
          },
          {
            "x": 81.32,
            "y": 133.67
          },
          {
            "x": 78.28,
            "y": 141.47
          },
          {
            "x": 79.24,
            "y": 130.49
          },
          {
            "x": 77.85,
            "y": 120.04
          },
          {
            "x": 76.41,
            "y": 127.58
          },
          {
            "x": 74.22,
            "y": 135.98
          },
          {
            "x": 74.45,
            "y": 141.67
          },
          {
            "x": 75.68,
            "y": 155.03
          },
          {
            "x": 72.68,
            "y": 156.62
          },
          {
            "x": 75.72,
            "y": 156.35
          },
          {
            "x": 70.94,
            "y": 152.25
          },
          {
            "x": 72.94,
            "y": 144.78
          },
          {
            "x": 70.77,
            "y": 145.64
          },
          {
            "x": 73.03,
            "y": 139.82
          },
          {
            "x": 71.98,
            "y": 137.77
          },
          {
            "x": 75.04,
            "y": 141.54
          },
          {
            "x": 72.79,
            "y": 138.56
          },
          {
            "x": 75.8,
            "y": 148.15
          },
          {
            "x": 75.59,
            "y": 141.67
          },
          {
            "x": 78.43,
            "y": 135.85
          },
          {
            "x": 79.45,
            "y": 133.14
          },
          {
            "x": 78.22,
            "y": 130.89
          },
          {
            "x": 84.8,
            "y": 126.85
          },
          {
            "x": 81.3,
            "y": 126.26
          },
          {
            "x": 80.3,
            "y": 131.62
          },
          {
            "x": 78.45,
            "y": 131.09
          },
          {
            "x": 73.79,
            "y": 126.72
          },
          {
            "x": 79.97,
            "y": 131.48
          },
          {
            "x": 74.68,
            "y": 142.4
          },
          {
            "x": 73.25,
            "y": 136.58
          },
          {
            "x": 77.96,
            "y": 136.64
          },
          {
            "x": 77.62,
            "y": 135.52
          },
          {
            "x": 78.66,
            "y": 131.22
          },
          {
            "x": 75.01,
            "y": 142.2
          },
          {
            "x": 83.16,
            "y": 137.44
          },
          {
            "x": 81.65,
            "y": 135.25
          },
          {
            "x": 80.64,
            "y": 142.86
          },
          {
            "x": 82.08,
            "y": 149.41
          },
          {
            "x": 78.58,
            "y": 149.61
          },
          {
            "x": 80.49,
            "y": 156.09
          },
          {
            "x": 82.5,
            "y": 161.25
          },
          {
            "x": 80.78,
            "y": 160.78
          },
          {
            "x": 81.12,
            "y": 170.51
          },
          {
            "x": 79.46,
            "y": 159.33
          },
          {
            "x": 79.73,
            "y": 160.91
          },
          {
            "x": 81.49,
            "y": 153.84
          },
          {
            "x": 76.37,
            "y": 154.23
          },
          {
            "x": 74.84,
            "y": 152.52
          },
          {
            "x": 68.6,
            "y": 157.74
          },
          {
            "x": 71.18,
            "y": 146.96
          },
          {
            "x": 75.41,
            "y": 144.78
          },
          {
            "x": 72.6,
            "y": 148.75
          },
          {
            "x": 74.68,
            "y": 146.63
          },
          {
            "x": 75.11,
            "y": 143.45
          },
          {
            "x": 76.84,
            "y": 137.24
          },
          {
            "x": 76.91,
            "y": 136.25
          },
          {
            "x": 75.12,
            "y": 141.87
          },
          {
            "x": 78.64,
            "y": 149.34
          },
          {
            "x": 79.58,
            "y": 154.17
          },
          {
            "x": 78.3,
            "y": 151.72
          },
          {
            "x": 78.55,
            "y": 145.5
          },
          {
            "x": 76.74,
            "y": 143.26
          },
          {
            "x": 75.97,
            "y": 142.53
          },
          {
            "x": 79.9,
            "y": 151.06
          },
          {
            "x": 76.02,
            "y": 155.62
          },
          {
            "x": 79.32,
            "y": 157.61
          },
          {
            "x": 74.42,
            "y": 151.66
          },
          {
            "x": 76.32,
            "y": 149.01
          },
          {
            "x": 74.99,
            "y": 153.71
          },
          {
            "x": 70.3,
            "y": 171.83
          },
          {
            "x": 72.96,
            "y": 179.7
          },
          {
            "x": 72.15,
            "y": 184.26
          },
          {
            "x": 80.34,
            "y": 163.83
          },
          {
            "x": 75.46,
            "y": 157.28
          },
          {
            "x": 79.29,
            "y": 161.05
          },
          {
            "x": 79.67,
            "y": 163.3
          },
          {
            "x": 73.84,
            "y": 166.6
          },
          {
            "x": 77.03,
            "y": 173.02
          },
          {
            "x": 77.39,
            "y": 177.52
          },
          {
            "x": 70.47,
            "y": 180.16
          },
          {
            "x": 73.78,
            "y": 180.29
          },
          {
            "x": 78.28,
            "y": 176.06
          },
          {
            "x": 75.07,
            "y": 182.74
          },
          {
            "x": 74.5,
            "y": 194.71
          },
          {
            "x": 75.54,
            "y": 204.5
          },
          {
            "x": 73.62,
            "y": 217.73
          },
          {
            "x": 70.92,
            "y": 198.61
          },
          {
            "x": 70.88,
            "y": 173.15
          },
          {
            "x": 72.97,
            "y": 168.52
          },
          {
            "x": 75.67,
            "y": 174.27
          },
          {
            "x": 76.61,
            "y": 178.9
          },
          {
            "x": 78.04,
            "y": 177.98
          },
          {
            "x": 76.48,
            "y": 179.9
          },
          {
            "x": 76.5,
            "y": 180.95
          },
          {
            "x": 82.73,
            "y": 177.12
          },
          {
            "x": 81.68,
            "y": 173.35
          },
          {
            "x": 80.42,
            "y": 181.15
          },
          {
            "x": 80.1,
            "y": 198.61
          },
          {
            "x": 80.85,
            "y": 183.01
          },
          {
            "x": 78.05,
            "y": 179.43
          },
          {
            "x": 76.58,
            "y": 180.43
          },
          {
            "x": 79.75,
            "y": 179.63
          },
          {
            "x": 77.04,
            "y": 177.19
          },
          {
            "x": 74.88,
            "y": 189.49
          },
          {
            "x": 77.06,
            "y": 183.67
          },
          {
            "x": 79.43,
            "y": 171.23
          },
          {
            "x": 80.8,
            "y": 177.45
          },
          {
            "x": 81.27,
            "y": 151.06
          },
          {
            "x": 77.39,
            "y": 152.91
          },
          {
            "x": 76.3,
            "y": 142.53
          },
          {
            "x": 78.56,
            "y": 146.83
          },
          {
            "x": 77.18,
            "y": 146.76
          },
          {
            "x": 80.54,
            "y": 150.93
          },
          {
            "x": 78.3,
            "y": 134.39
          },
          {
            "x": 82.85,
            "y": 144.98
          },
          {
            "x": 82.02,
            "y": 143.39
          },
          {
            "x": 77.51,
            "y": 142.46
          },
          {
            "x": 79.2,
            "y": 150.66
          },
          {
            "x": 82.16,
            "y": 158.27
          },
          {
            "x": 75.02,
            "y": 153.31
          },
          {
            "x": 78.07,
            "y": 148.61
          },
          {
            "x": 74.25,
            "y": 147.09
          },
          {
            "x": 70.46,
            "y": 139.29
          },
          {
            "x": 73.38,
            "y": 143.98
          },
          {
            "x": 75.8,
            "y": 155.23
          },
          {
            "x": 73.32,
            "y": 156.62
          },
          {
            "x": 76.83,
            "y": 153.04
          },
          {
            "x": 76.04,
            "y": 157.41
          },
          {
            "x": 78.02,
            "y": 163.56
          },
          {
            "x": 81.36,
            "y": 168.72
          },
          {
            "x": 80.4,
            "y": 178.57
          },
          {
            "x": 80.85,
            "y": 184.13
          },
          {
            "x": 81.05,
            "y": 171.36
          },
          {
            "x": 81.28,
            "y": 153.64
          },
          {
            "x": 78.91,
            "y": 152.18
          },
          {
            "x": 78.3,
            "y": 149.34
          },
          {
            "x": 81.83,
            "y": 163.96
          },
          {
            "x": 78.4,
            "y": 175.99
          },
          {
            "x": 77.63,
            "y": 175.6
          },
          {
            "x": 79.47,
            "y": 163.63
          },
          {
            "x": 74.91,
            "y": 159.26
          },
          {
            "x": 77.4,
            "y": 165.74
          },
          {
            "x": 81.05,
            "y": 182.61
          },
          {
            "x": 78.33,
            "y": 171.56
          },
          {
            "x": 77.36,
            "y": 182.61
          },
          {
            "x": 82.01,
            "y": 190.02
          },
          {
            "x": 81.25,
            "y": 179.24
          },
          {
            "x": 78.72,
            "y": 175.53
          },
          {
            "x": 74.78,
            "y": 178.04
          },
          {
            "x": 81.61,
            "y": 188.49
          },
          {
            "x": 78.82,
            "y": 188.63
          },
          {
            "x": 81.05,
            "y": 192.6
          },
          {
            "x": 78.66,
            "y": 179.83
          },
          {
            "x": 74.35,
            "y": 192.26
          },
          {
            "x": 72.53,
            "y": 184.13
          },
          {
            "x": 69.24,
            "y": 174.21
          },
          {
            "x": 73.21,
            "y": 172.49
          },
          {
            "x": 71.72,
            "y": 178.24
          },
          {
            "x": 73.9,
            "y": 171.36
          },
          {
            "x": 67.59,
            "y": 173.88
          },
          {
            "x": 72.26,
            "y": 172.36
          },
          {
            "x": 72.66,
            "y": 180.1
          },
          {
            "x": 73.37,
            "y": 175.53
          },
          {
            "x": 72.99,
            "y": 170.84
          },
          {
            "x": 80.87,
            "y": 178.84
          },
          {
            "x": 77.57,
            "y": 176.66
          },
          {
            "x": 81.1,
            "y": 174.14
          },
          {
            "x": 83.71,
            "y": 177.58
          },
          {
            "x": 81.13,
            "y": 177.85
          },
          {
            "x": 79.27,
            "y": 211.97
          },
          {
            "x": 81.69,
            "y": 213.63
          },
          {
            "x": 79.64,
            "y": 213.23
          },
          {
            "x": 82.19,
            "y": 214.29
          },
          {
            "x": 79.57,
            "y": 228.91
          },
          {
            "x": 75.07,
            "y": 221.43
          },
          {
            "x": 76.72,
            "y": 231.68
          },
          {
            "x": 74.0,
            "y": 234.2
          },
          {
            "x": 78.86,
            "y": 252.25
          },
          {
            "x": 73.85,
            "y": 248.48
          },
          {
            "x": 79.21,
            "y": 241.07
          },
          {
            "x": 80.09,
            "y": 229.43
          },
          {
            "x": 79.88,
            "y": 246.56
          },
          {
            "x": 78.8,
            "y": 264.95
          },
          {
            "x": 79.3,
            "y": 271.37
          },
          {
            "x": 84.86,
            "y": 261.64
          },
          {
            "x": 83.34,
            "y": 267.4
          },
          {
            "x": 79.41,
            "y": 276.0
          },
          {
            "x": 78.77,
            "y": 285.92
          },
          {
            "x": 80.98,
            "y": 312.04
          },
          {
            "x": 77.7,
            "y": 308.21
          },
          {
            "x": 78.64,
            "y": 310.32
          },
          {
            "x": 73.51,
            "y": 305.89
          },
          {
            "x": 72.59,
            "y": 329.77
          },
          {
            "x": 72.97,
            "y": 342.13
          },
          {
            "x": 73.19,
            "y": 349.48
          },
          {
            "x": 73.1,
            "y": 360.98
          },
          {
            "x": 79.84,
            "y": 349.94
          },
          {
            "x": 72.01,
            "y": 355.3
          },
          {
            "x": 75.82,
            "y": 354.83
          },
          {
            "x": 77.28,
            "y": 381.09
          },
          {
            "x": 78.89,
            "y": 380.83
          },
          {
            "x": 75.77,
            "y": 380.3
          },
          {
            "x": 79.38,
            "y": 356.22
          },
          {
            "x": 80.96,
            "y": 350.34
          },
          {
            "x": 78.34,
            "y": 358.4
          },
          {
            "x": 80.79,
            "y": 356.16
          },
          {
            "x": 82.59,
            "y": 329.37
          },
          {
            "x": 84.0,
            "y": 348.48
          },
          {
            "x": 80.4,
            "y": 340.41
          },
          {
            "x": 82.09,
            "y": 319.45
          },
          {
            "x": 80.84,
            "y": 319.98
          },
          {
            "x": 74.91,
            "y": 317.93
          },
          {
            "x": 79.47,
            "y": 355.63
          },
          {
            "x": 75.4,
            "y": 382.55
          },
          {
            "x": 77.72,
            "y": 362.04
          },
          {
            "x": 73.87,
            "y": 316.47
          },
          {
            "x": 76.29,
            "y": 302.78
          },
          {
            "x": 82.28,
            "y": 303.51
          },
          {
            "x": 78.62,
            "y": 323.88
          },
          {
            "x": 79.1,
            "y": 295.84
          },
          {
            "x": 78.42,
            "y": 309.46
          },
          {
            "x": 78.77,
            "y": 307.15
          },
          {
            "x": 83.72,
            "y": 308.47
          },
          {
            "x": 79.87,
            "y": 297.16
          },
          {
            "x": 77.65,
            "y": 290.88
          },
          {
            "x": 77.67,
            "y": 300.07
          },
          {
            "x": 79.83,
            "y": 298.88
          },
          {
            "x": 74.86,
            "y": 298.15
          },
          {
            "x": 73.33,
            "y": 286.51
          },
          {
            "x": 71.06,
            "y": 285.72
          },
          {
            "x": 75.1,
            "y": 264.62
          },
          {
            "x": 66.55,
            "y": 268.72
          },
          {
            "x": 70.19,
            "y": 245.51
          },
          {
            "x": 71.18,
            "y": 242.2
          },
          {
            "x": 72.21,
            "y": 241.34
          },
          {
            "x": 73.42,
            "y": 235.52
          },
          {
            "x": 76.1,
            "y": 229.7
          },
          {
            "x": 75.65,
            "y": 231.48
          },
          {
            "x": 79.2,
            "y": 231.68
          },
          {
            "x": 85.61,
            "y": 235.06
          },
          {
            "x": 79.17,
            "y": 218.79
          },
          {
            "x": 84.53,
            "y": 205.82
          },
          {
            "x": 81.82,
            "y": 197.82
          },
          {
            "x": 82.42,
            "y": 215.61
          },
          {
            "x": 82.15,
            "y": 232.68
          },
          {
            "x": 81.43,
            "y": 239.95
          },
          {
            "x": 75.36,
            "y": 229.77
          },
          {
            "x": 78.05,
            "y": 228.38
          },
          {
            "x": 80.22,
            "y": 212.04
          },
          {
            "x": 76.97,
            "y": 220.97
          },
          {
            "x": 73.42,
            "y": 208.87
          },
          {
            "x": 72.61,
            "y": 239.16
          },
          {
            "x": 80.8,
            "y": 224.14
          },
          {
            "x": 74.82,
            "y": 222.36
          },
          {
            "x": 76.61,
            "y": 215.35
          },
          {
            "x": 74.98,
            "y": 208.67
          },
          {
            "x": 81.42,
            "y": 199.61
          },
          {
            "x": 82.81,
            "y": 197.09
          },
          {
            "x": 81.69,
            "y": 188.03
          },
          {
            "x": 80.03,
            "y": 184.66
          },
          {
            "x": 79.1,
            "y": 181.75
          },
          {
            "x": 73.86,
            "y": 194.45
          },
          {
            "x": 73.81,
            "y": 194.91
          },
          {
            "x": 76.29,
            "y": 202.78
          },
          {
            "x": 76.58,
            "y": 193.85
          },
          {
            "x": 77.5,
            "y": 195.7
          },
          {
            "x": 71.25,
            "y": 183.53
          },
          {
            "x": 69.04,
            "y": 189.29
          },
          {
            "x": 67.11,
            "y": 185.85
          },
          {
            "x": 75.76,
            "y": 180.56
          },
          {
            "x": 76.04,
            "y": 179.37
          },
          {
            "x": 75.36,
            "y": 184.53
          },
          {
            "x": 77.12,
            "y": 178.9
          },
          {
            "x": 74.31,
            "y": 183.07
          },
          {
            "x": 75.22,
            "y": 185.58
          },
          {
            "x": 76.14,
            "y": 187.37
          },
          {
            "x": 84.23,
            "y": 168.32
          },
          {
            "x": 84.34,
            "y": 170.64
          },
          {
            "x": 81.59,
            "y": 163.63
          },
          {
            "x": 82.85,
            "y": 157.01
          },
          {
            "x": 83.73,
            "y": 160.25
          },
          {
            "x": 82.68,
            "y": 157.61
          },
          {
            "x": 83.06,
            "y": 166.8
          },
          {
            "x": 73.44,
            "y": 156.42
          },
          {
            "x": 79.04,
            "y": 163.3
          },
          {
            "x": 78.27,
            "y": 149.74
          },
          {
            "x": 75.0,
            "y": 148.28
          },
          {
            "x": 78.1,
            "y": 154.04
          },
          {
            "x": 74.55,
            "y": 151.66
          },
          {
            "x": 81.07,
            "y": 150.93
          },
          {
            "x": 77.47,
            "y": 154.37
          },
          {
            "x": 80.41,
            "y": 149.08
          },
          {
            "x": 81.41,
            "y": 139.42
          },
          {
            "x": 78.95,
            "y": 137.63
          },
          {
            "x": 76.67,
            "y": 142.0
          },
          {
            "x": 81.15,
            "y": 145.84
          },
          {
            "x": 81.11,
            "y": 145.04
          },
          {
            "x": 79.95,
            "y": 152.52
          },
          {
            "x": 81.95,
            "y": 151.72
          },
          {
            "x": 77.9,
            "y": 157.87
          },
          {
            "x": 77.88,
            "y": 154.96
          },
          {
            "x": 70.83,
            "y": 154.9
          },
          {
            "x": 68.73,
            "y": 179.5
          },
          {
            "x": 74.24,
            "y": 201.92
          },
          {
            "x": 70.71,
            "y": 237.83
          },
          {
            "x": 71.59,
            "y": 267.86
          },
          {
            "x": 67.46,
            "y": 230.36
          },
          {
            "x": 72.8,
            "y": 238.89
          },
          {
            "x": 67.34,
            "y": 264.36
          },
          {
            "x": 72.6,
            "y": 266.14
          },
          {
            "x": 74.38,
            "y": 276.33
          },
          {
            "x": 77.14,
            "y": 239.16
          },
          {
            "x": 74.86,
            "y": 238.3
          },
          {
            "x": 78.47,
            "y": 240.68
          },
          {
            "x": 74.52,
            "y": 227.65
          },
          {
            "x": 77.65,
            "y": 220.57
          },
          {
            "x": 76.17,
            "y": 225.47
          },
          {
            "x": 77.2,
            "y": 225.14
          },
          {
            "x": 73.2,
            "y": 225.8
          },
          {
            "x": 82.01,
            "y": 239.55
          },
          {
            "x": 73.2,
            "y": 243.39
          },
          {
            "x": 77.3,
            "y": 249.67
          },
          {
            "x": 73.95,
            "y": 254.5
          },
          {
            "x": 73.87,
            "y": 255.1
          },
          {
            "x": 72.08,
            "y": 238.89
          },
          {
            "x": 78.24,
            "y": 246.1
          },
          {
            "x": 73.93,
            "y": 292.07
          },
          {
            "x": 73.27,
            "y": 287.17
          },
          {
            "x": 82.09,
            "y": 253.31
          },
          {
            "x": 80.62,
            "y": 246.37
          },
          {
            "x": 81.22,
            "y": 253.97
          },
          {
            "x": 86.14,
            "y": 256.95
          },
          {
            "x": 81.0,
            "y": 236.91
          },
          {
            "x": 79.27,
            "y": 234.99
          },
          {
            "x": 79.07,
            "y": 225.07
          },
          {
            "x": 73.31,
            "y": 213.03
          },
          {
            "x": 71.56,
            "y": 237.9
          },
          {
            "x": 73.76,
            "y": 214.88
          },
          {
            "x": 67.3,
            "y": 212.64
          },
          {
            "x": 71.49,
            "y": 215.88
          },
          {
            "x": 71.52,
            "y": 191.07
          },
          {
            "x": 69.06,
            "y": 174.01
          },
          {
            "x": 69.75,
            "y": 167.26
          },
          {
            "x": 76.44,
            "y": 185.12
          },
          {
            "x": 75.69,
            "y": 186.38
          },
          {
            "x": 75.45,
            "y": 178.04
          },
          {
            "x": 74.07,
            "y": 186.71
          },
          {
            "x": 78.55,
            "y": 174.41
          },
          {
            "x": 79.0,
            "y": 179.43
          },
          {
            "x": 77.55,
            "y": 167.93
          },
          {
            "x": 79.88,
            "y": 177.65
          },
          {
            "x": 79.72,
            "y": 174.67
          },
          {
            "x": 76.72,
            "y": 168.92
          },
          {
            "x": 75.19,
            "y": 166.14
          },
          {
            "x": 74.25,
            "y": 167.46
          },
          {
            "x": 79.08,
            "y": 160.78
          },
          {
            "x": 73.28,
            "y": 165.68
          },
          {
            "x": 74.17,
            "y": 174.41
          },
          {
            "x": 69.77,
            "y": 161.25
          },
          {
            "x": 68.1,
            "y": 154.83
          },
          {
            "x": 75.52,
            "y": 149.94
          },
          {
            "x": 72.45,
            "y": 155.09
          },
          {
            "x": 75.26,
            "y": 159.72
          },
          {
            "x": 72.02,
            "y": 174.08
          },
          {
            "x": 72.07,
            "y": 160.06
          },
          {
            "x": 78.78,
            "y": 159.99
          },
          {
            "x": 77.26,
            "y": 153.84
          },
          {
            "x": 83.8,
            "y": 161.25
          },
          {
            "x": 80.79,
            "y": 154.63
          },
          {
            "x": 81.73,
            "y": 162.24
          },
          {
            "x": 78.01,
            "y": 156.68
          },
          {
            "x": 78.42,
            "y": 163.56
          },
          {
            "x": 77.75,
            "y": 157.41
          },
          {
            "x": 78.61,
            "y": 152.98
          },
          {
            "x": 79.16,
            "y": 153.9
          },
          {
            "x": 74.25,
            "y": 153.11
          },
          {
            "x": 73.4,
            "y": 150.99
          },
          {
            "x": 73.17,
            "y": 149.47
          },
          {
            "x": 75.69,
            "y": 159.86
          },
          {
            "x": 72.55,
            "y": 177.05
          },
          {
            "x": 72.39,
            "y": 168.59
          },
          {
            "x": 67.83,
            "y": 159.33
          },
          {
            "x": 73.53,
            "y": 164.02
          },
          {
            "x": 79.66,
            "y": 159.26
          },
          {
            "x": 76.03,
            "y": 163.3
          },
          {
            "x": 79.07,
            "y": 171.03
          },
          {
            "x": 80.14,
            "y": 160.45
          },
          {
            "x": 80.66,
            "y": 174.87
          },
          {
            "x": 79.36,
            "y": 186.18
          },
          {
            "x": 80.59,
            "y": 177.91
          },
          {
            "x": 80.93,
            "y": 185.78
          },
          {
            "x": 75.6,
            "y": 192.73
          },
          {
            "x": 74.1,
            "y": 186.78
          },
          {
            "x": 75.4,
            "y": 188.49
          },
          {
            "x": 77.41,
            "y": 181.75
          },
          {
            "x": 73.47,
            "y": 190.35
          },
          {
            "x": 75.0,
            "y": 198.55
          },
          {
            "x": 72.97,
            "y": 195.24
          },
          {
            "x": 76.41,
            "y": 200.27
          },
          {
            "x": 79.9,
            "y": 196.03
          },
          {
            "x": 79.24,
            "y": 205.56
          },
          {
            "x": 79.47,
            "y": 217.6
          },
          {
            "x": 80.83,
            "y": 226.66
          },
          {
            "x": 81.89,
            "y": 214.02
          },
          {
            "x": 81.46,
            "y": 204.57
          },
          {
            "x": 81.7,
            "y": 186.78
          },
          {
            "x": 82.1,
            "y": 185.52
          },
          {
            "x": 76.68,
            "y": 180.1
          },
          {
            "x": 72.24,
            "y": 181.75
          },
          {
            "x": 74.65,
            "y": 197.49
          },
          {
            "x": 71.84,
            "y": 205.56
          },
          {
            "x": 75.33,
            "y": 193.06
          },
          {
            "x": 74.01,
            "y": 192.79
          },
          {
            "x": 74.12,
            "y": 197.36
          },
          {
            "x": 72.0,
            "y": 186.84
          },
          {
            "x": 72.61,
            "y": 184.66
          },
          {
            "x": 70.63,
            "y": 182.01
          },
          {
            "x": 68.53,
            "y": 182.34
          },
          {
            "x": 72.2,
            "y": 183.73
          },
          {
            "x": 74.16,
            "y": 171.76
          },
          {
            "x": 78.72,
            "y": 178.57
          },
          {
            "x": 81.14,
            "y": 175.4
          },
          {
            "x": 82.85,
            "y": 172.29
          },
          {
            "x": 78.99,
            "y": 166.07
          },
          {
            "x": 81.95,
            "y": 168.79
          },
          {
            "x": 82.26,
            "y": 150.07
          },
          {
            "x": 82.55,
            "y": 164.09
          },
          {
            "x": 80.66,
            "y": 166.67
          },
          {
            "x": 77.95,
            "y": 180.62
          },
          {
            "x": 77.5,
            "y": 182.34
          },
          {
            "x": 78.35,
            "y": 185.58
          },
          {
            "x": 79.55,
            "y": 167.2
          },
          {
            "x": 73.28,
            "y": 169.51
          },
          {
            "x": 76.03,
            "y": 171.17
          },
          {
            "x": 73.8,
            "y": 180.62
          },
          {
            "x": 83.61,
            "y": 169.38
          },
          {
            "x": 76.33,
            "y": 173.28
          },
          {
            "x": 73.39,
            "y": 165.68
          },
          {
            "x": 82.14,
            "y": 166.54
          },
          {
            "x": 81.38,
            "y": 167.2
          },
          {
            "x": 79.95,
            "y": 163.76
          },
          {
            "x": 81.26,
            "y": 171.43
          },
          {
            "x": 81.64,
            "y": 159.53
          },
          {
            "x": 78.45,
            "y": 161.05
          },
          {
            "x": 77.43,
            "y": 166.93
          },
          {
            "x": 77.91,
            "y": 165.54
          },
          {
            "x": 73.75,
            "y": 160.19
          },
          {
            "x": 72.81,
            "y": 165.54
          },
          {
            "x": 73.39,
            "y": 163.1
          },
          {
            "x": 73.66,
            "y": 156.02
          },
          {
            "x": 77.29,
            "y": 158.67
          },
          {
            "x": 73.22,
            "y": 157.21
          },
          {
            "x": 74.24,
            "y": 156.55
          },
          {
            "x": 75.18,
            "y": 156.29
          },
          {
            "x": 77.67,
            "y": 155.36
          },
          {
            "x": 75.23,
            "y": 151.99
          },
          {
            "x": 78.61,
            "y": 159.2
          },
          {
            "x": 79.75,
            "y": 154.17
          },
          {
            "x": 82.56,
            "y": 150.73
          },
          {
            "x": 82.59,
            "y": 159.26
          },
          {
            "x": 82.57,
            "y": 153.04
          },
          {
            "x": 83.07,
            "y": 152.38
          },
          {
            "x": 77.9,
            "y": 151.19
          },
          {
            "x": 74.75,
            "y": 147.16
          },
          {
            "x": 76.13,
            "y": 139.82
          },
          {
            "x": 74.34,
            "y": 146.1
          },
          {
            "x": 79.82,
            "y": 143.85
          },
          {
            "x": 77.6,
            "y": 134.53
          },
          {
            "x": 78.03,
            "y": 133.0
          },
          {
            "x": 75.45,
            "y": 132.41
          },
          {
            "x": 80.2,
            "y": 126.26
          },
          {
            "x": 72.52,
            "y": 128.44
          },
          {
            "x": 80.05,
            "y": 144.12
          },
          {
            "x": 83.47,
            "y": 157.87
          },
          {
            "x": 84.27,
            "y": 160.25
          },
          {
            "x": 82.47,
            "y": 158.8
          },
          {
            "x": 82.04,
            "y": 149.01
          },
          {
            "x": 80.96,
            "y": 141.73
          },
          {
            "x": 79.39,
            "y": 134.79
          },
          {
            "x": 76.99,
            "y": 128.24
          },
          {
            "x": 76.33,
            "y": 135.19
          },
          {
            "x": 74.5,
            "y": 135.12
          },
          {
            "x": 71.63,
            "y": 137.37
          },
          {
            "x": 70.2,
            "y": 136.77
          },
          {
            "x": 65.07,
            "y": 137.17
          },
          {
            "x": 71.61,
            "y": 132.87
          },
          {
            "x": 75.4,
            "y": 127.58
          },
          {
            "x": 74.07,
            "y": 124.47
          },
          {
            "x": 71.35,
            "y": 124.27
          },
          {
            "x": 70.87,
            "y": 124.21
          },
          {
            "x": 72.43,
            "y": 126.13
          },
          {
            "x": 75.02,
            "y": 119.58
          },
          {
            "x": 73.95,
            "y": 121.03
          },
          {
            "x": 76.7,
            "y": 118.06
          },
          {
            "x": 78.28,
            "y": 116.73
          },
          {
            "x": 81.21,
            "y": 123.68
          },
          {
            "x": 80.75,
            "y": 138.36
          },
          {
            "x": 81.84,
            "y": 131.02
          },
          {
            "x": 81.87,
            "y": 132.01
          },
          {
            "x": 75.18,
            "y": 143.19
          },
          {
            "x": 75.78,
            "y": 139.16
          },
          {
            "x": 77.3,
            "y": 139.02
          },
          {
            "x": 72.37,
            "y": 128.64
          },
          {
            "x": 73.9,
            "y": 128.71
          },
          {
            "x": 77.76,
            "y": 122.82
          },
          {
            "x": 70.05,
            "y": 123.81
          },
          {
            "x": 69.82,
            "y": 130.09
          },
          {
            "x": 70.67,
            "y": 130.16
          },
          {
            "x": 78.54,
            "y": 133.8
          },
          {
            "x": 80.84,
            "y": 123.68
          },
          {
            "x": 78.98,
            "y": 126.59
          },
          {
            "x": 76.31,
            "y": 131.42
          },
          {
            "x": 79.12,
            "y": 144.78
          },
          {
            "x": 82.87,
            "y": 135.85
          },
          {
            "x": 82.28,
            "y": 156.81
          },
          {
            "x": 81.87,
            "y": 168.39
          },
          {
            "x": 79.19,
            "y": 168.26
          },
          {
            "x": 76.54,
            "y": 175.27
          },
          {
            "x": 78.85,
            "y": 157.61
          },
          {
            "x": 74.68,
            "y": 148.35
          },
          {
            "x": 78.22,
            "y": 138.96
          },
          {
            "x": 75.03,
            "y": 130.09
          },
          {
            "x": 73.29,
            "y": 144.31
          },
          {
            "x": 77.73,
            "y": 143.12
          },
          {
            "x": 74.88,
            "y": 139.68
          },
          {
            "x": 72.74,
            "y": 142.93
          },
          {
            "x": 73.56,
            "y": 153.24
          },
          {
            "x": 69.65,
            "y": 158.6
          },
          {
            "x": 75.68,
            "y": 153.51
          },
          {
            "x": 75.28,
            "y": 138.36
          },
          {
            "x": 79.54,
            "y": 142.13
          },
          {
            "x": 77.82,
            "y": 138.63
          },
          {
            "x": 77.96,
            "y": 135.58
          },
          {
            "x": 82.68,
            "y": 130.82
          },
          {
            "x": 83.79,
            "y": 123.88
          },
          {
            "x": 81.86,
            "y": 126.52
          },
          {
            "x": 81.26,
            "y": 128.57
          },
          {
            "x": 79.6,
            "y": 128.44
          },
          {
            "x": 81.77,
            "y": 143.39
          },
          {
            "x": 77.6,
            "y": 160.78
          },
          {
            "x": 77.17,
            "y": 151.72
          },
          {
            "x": 78.74,
            "y": 162.97
          },
          {
            "x": 73.4,
            "y": 178.31
          },
          {
            "x": 72.12,
            "y": 163.43
          },
          {
            "x": 79.8,
            "y": 147.03
          },
          {
            "x": 75.75,
            "y": 144.12
          },
          {
            "x": 77.65,
            "y": 144.98
          },
          {
            "x": 83.12,
            "y": 139.68
          },
          {
            "x": 78.16,
            "y": 136.84
          },
          {
            "x": 79.24,
            "y": 144.51
          },
          {
            "x": 80.53,
            "y": 151.39
          },
          {
            "x": 82.02,
            "y": 155.62
          },
          {
            "x": 80.63,
            "y": 157.54
          },
          {
            "x": 82.42,
            "y": 164.75
          },
          {
            "x": 84.12,
            "y": 169.65
          },
          {
            "x": 82.3,
            "y": 160.58
          },
          {
            "x": 75.64,
            "y": 164.09
          },
          {
            "x": 72.87,
            "y": 165.81
          },
          {
            "x": 80.03,
            "y": 160.32
          },
          {
            "x": 78.61,
            "y": 168.65
          },
          {
            "x": 75.37,
            "y": 173.48
          },
          {
            "x": 73.15,
            "y": 175.2
          },
          {
            "x": 69.35,
            "y": 168.79
          },
          {
            "x": 71.7,
            "y": 160.85
          },
          {
            "x": 71.1,
            "y": 169.45
          },
          {
            "x": 73.89,
            "y": 177.65
          },
          {
            "x": 77.71,
            "y": 185.12
          },
          {
            "x": 73.51,
            "y": 192.79
          },
          {
            "x": 74.01,
            "y": 198.55
          },
          {
            "x": 76.38,
            "y": 213.03
          },
          {
            "x": 79.98,
            "y": 208.27
          },
          {
            "x": 77.86,
            "y": 201.52
          },
          {
            "x": 77.82,
            "y": 206.35
          },
          {
            "x": 75.13,
            "y": 200.14
          },
          {
            "x": 73.62,
            "y": 232.81
          },
          {
            "x": 76.4,
            "y": 237.5
          },
          {
            "x": 74.61,
            "y": 240.74
          },
          {
            "x": 74.6,
            "y": 235.78
          },
          {
            "x": 78.83,
            "y": 261.11
          },
          {
            "x": 73.62,
            "y": 244.71
          },
          {
            "x": 72.16,
            "y": 247.75
          },
          {
            "x": 72.78,
            "y": 255.82
          },
          {
            "x": 81.39,
            "y": 266.34
          },
          {
            "x": 83.88,
            "y": 270.18
          },
          {
            "x": 82.07,
            "y": 269.78
          },
          {
            "x": 80.8,
            "y": 264.09
          },
          {
            "x": 82.47,
            "y": 302.85
          },
          {
            "x": 77.84,
            "y": 322.56
          },
          {
            "x": 79.6,
            "y": 323.75
          },
          {
            "x": 81.62,
            "y": 312.04
          },
          {
            "x": 79.78,
            "y": 298.42
          },
          {
            "x": 80.98,
            "y": 315.41
          },
          {
            "x": 80.58,
            "y": 317.0
          },
          {
            "x": 76.39,
            "y": 306.95
          },
          {
            "x": 78.93,
            "y": 319.91
          },
          {
            "x": 78.11,
            "y": 333.67
          },
          {
            "x": 78.3,
            "y": 317.53
          },
          {
            "x": 71.64,
            "y": 309.59
          },
          {
            "x": 72.39,
            "y": 291.41
          },
          {
            "x": 74.59,
            "y": 283.8
          },
          {
            "x": 74.07,
            "y": 299.14
          },
          {
            "x": 75.58,
            "y": 295.77
          },
          {
            "x": 78.35,
            "y": 285.65
          },
          {
            "x": 80.04,
            "y": 279.9
          },
          {
            "x": 75.02,
            "y": 301.86
          },
          {
            "x": 82.55,
            "y": 303.51
          },
          {
            "x": 81.86,
            "y": 314.22
          },
          {
            "x": 79.69,
            "y": 306.82
          },
          {
            "x": 82.22,
            "y": 299.74
          },
          {
            "x": 79.12,
            "y": 294.32
          },
          {
            "x": 78.27,
            "y": 269.45
          },
          {
            "x": 78.39,
            "y": 282.01
          },
          {
            "x": 74.57,
            "y": 277.05
          },
          {
            "x": 76.16,
            "y": 298.28
          },
          {
            "x": 77.58,
            "y": 321.96
          },
          {
            "x": 76.6,
            "y": 307.74
          },
          {
            "x": 74.41,
            "y": 287.83
          },
          {
            "x": 76.51,
            "y": 291.6
          },
          {
            "x": 81.19,
            "y": 290.08
          },
          {
            "x": 78.33,
            "y": 260.19
          },
          {
            "x": 80.38,
            "y": 251.86
          },
          {
            "x": 80.52,
            "y": 227.78
          },
          {
            "x": 79.16,
            "y": 225.0
          },
          {
            "x": 81.62,
            "y": 211.78
          },
          {
            "x": 81.75,
            "y": 211.84
          },
          {
            "x": 83.49,
            "y": 221.1
          },
          {
            "x": 81.36,
            "y": 227.52
          },
          {
            "x": 81.35,
            "y": 221.3
          },
          {
            "x": 81.81,
            "y": 197.62
          },
          {
            "x": 78.09,
            "y": 204.76
          },
          {
            "x": 75.26,
            "y": 232.68
          },
          {
            "x": 75.04,
            "y": 231.15
          },
          {
            "x": 71.89,
            "y": 257.21
          },
          {
            "x": 73.94,
            "y": 239.16
          },
          {
            "x": 79.04,
            "y": 242.33
          },
          {
            "x": 73.42,
            "y": 230.56
          },
          {
            "x": 73.79,
            "y": 225.53
          },
          {
            "x": 73.99,
            "y": 251.66
          },
          {
            "x": 74.51,
            "y": 256.88
          },
          {
            "x": 76.53,
            "y": 252.19
          },
          {
            "x": 78.45,
            "y": 246.04
          },
          {
            "x": 72.66,
            "y": 250.27
          },
          {
            "x": 80.08,
            "y": 242.13
          },
          {
            "x": 76.63,
            "y": 252.19
          },
          {
            "x": 79.98,
            "y": 227.52
          },
          {
            "x": 79.13,
            "y": 212.97
          },
          {
            "x": 75.3,
            "y": 210.72
          },
          {
            "x": 80.15,
            "y": 214.09
          },
          {
            "x": 78.8,
            "y": 217.79
          },
          {
            "x": 75.63,
            "y": 211.51
          },
          {
            "x": 74.26,
            "y": 195.04
          },
          {
            "x": 77.39,
            "y": 202.85
          },
          {
            "x": 72.26,
            "y": 193.46
          },
          {
            "x": 69.36,
            "y": 221.56
          },
          {
            "x": 77.81,
            "y": 193.32
          },
          {
            "x": 78.11,
            "y": 193.19
          },
          {
            "x": 79.37,
            "y": 216.87
          },
          {
            "x": 82.43,
            "y": 212.9
          },
          {
            "x": 76.06,
            "y": 230.62
          },
          {
            "x": 73.55,
            "y": 226.13
          },
          {
            "x": 77.69,
            "y": 242.93
          },
          {
            "x": 75.58,
            "y": 244.91
          },
          {
            "x": 71.74,
            "y": 277.19
          },
          {
            "x": 77.0,
            "y": 261.91
          },
          {
            "x": 76.91,
            "y": 241.8
          },
          {
            "x": 73.08,
            "y": 237.04
          },
          {
            "x": 73.56,
            "y": 256.42
          },
          {
            "x": 72.18,
            "y": 248.95
          },
          {
            "x": 75.3,
            "y": 252.45
          },
          {
            "x": 73.76,
            "y": 251.46
          },
          {
            "x": 71.27,
            "y": 262.37
          },
          {
            "x": 64.8,
            "y": 241.87
          },
          {
            "x": 71.03,
            "y": 252.19
          },
          {
            "x": 72.45,
            "y": 281.09
          },
          {
            "x": 70.11,
            "y": 313.17
          },
          {
            "x": 71.64,
            "y": 305.03
          },
          {
            "x": 70.49,
            "y": 265.48
          },
          {
            "x": 76.08,
            "y": 263.96
          },
          {
            "x": 78.06,
            "y": 288.69
          },
          {
            "x": 80.04,
            "y": 306.82
          },
          {
            "x": 79.32,
            "y": 296.5
          },
          {
            "x": 77.37,
            "y": 305.82
          },
          {
            "x": 74.87,
            "y": 304.63
          },
          {
            "x": 75.47,
            "y": 322.95
          },
          {
            "x": 75.93,
            "y": 310.45
          },
          {
            "x": 78.67,
            "y": 304.9
          },
          {
            "x": 74.67,
            "y": 313.5
          }
        ],
        "trend": {
          "slope": 0.6752,
          "intercept": 130.99
        }
      },
      {
        "title": "Precipitation vs Price",
        "xLabel": "Precipitation_mm",
        "yLabel": "Coffee Price",
        "points": [
          {
            "x": 10.33,
            "y": 154.1
          },
          {
            "x": 1.63,
            "y": 156.81
          },
          {
            "x": 1.73,
            "y": 147.09
          },
          {
            "x": 4.49,
            "y": 148.48
          },
          {
            "x": 4.04,
            "y": 143.92
          },
          {
            "x": 3.22,
            "y": 136.51
          },
          {
            "x": 2.2,
            "y": 138.03
          },
          {
            "x": 3.25,
            "y": 140.21
          },
          {
            "x": 2.37,
            "y": 135.05
          },
          {
            "x": 3.26,
            "y": 137.17
          },
          {
            "x": 3.8,
            "y": 124.6
          },
          {
            "x": 3.38,
            "y": 129.3
          },
          {
            "x": 5.22,
            "y": 131.09
          },
          {
            "x": 3.82,
            "y": 121.43
          },
          {
            "x": 5.83,
            "y": 136.64
          },
          {
            "x": 5.03,
            "y": 124.94
          },
          {
            "x": 3.74,
            "y": 121.5
          },
          {
            "x": 6.06,
            "y": 111.71
          },
          {
            "x": 1.6,
            "y": 112.24
          },
          {
            "x": 1.89,
            "y": 119.18
          },
          {
            "x": 4.63,
            "y": 127.85
          },
          {
            "x": 2.94,
            "y": 114.35
          },
          {
            "x": 4.49,
            "y": 105.29
          },
          {
            "x": 4.24,
            "y": 103.71
          },
          {
            "x": 5.86,
            "y": 97.75
          },
          {
            "x": 3.88,
            "y": 102.38
          },
          {
            "x": 3.49,
            "y": 102.12
          },
          {
            "x": 6.09,
            "y": 109.79
          },
          {
            "x": 6.64,
            "y": 105.76
          },
          {
            "x": 2.06,
            "y": 114.68
          },
          {
            "x": 8.4,
            "y": 100.0
          },
          {
            "x": 3.6,
            "y": 99.6
          },
          {
            "x": 9.28,
            "y": 90.68
          },
          {
            "x": 2.58,
            "y": 91.93
          },
          {
            "x": 1.21,
            "y": 84.19
          },
          {
            "x": 5.8,
            "y": 82.94
          },
          {
            "x": 3.9,
            "y": 89.09
          },
          {
            "x": 0.91,
            "y": 85.12
          },
          {
            "x": 1.0,
            "y": 92.86
          },
          {
            "x": 1.78,
            "y": 88.76
          },
          {
            "x": 2.55,
            "y": 82.28
          },
          {
            "x": 1.83,
            "y": 79.1
          },
          {
            "x": 3.24,
            "y": 84.53
          },
          {
            "x": 3.33,
            "y": 84.86
          },
          {
            "x": 2.22,
            "y": 78.04
          },
          {
            "x": 4.63,
            "y": 80.89
          },
          {
            "x": 1.62,
            "y": 76.85
          },
          {
            "x": 2.0,
            "y": 74.34
          },
          {
            "x": 1.14,
            "y": 80.62
          },
          {
            "x": 3.22,
            "y": 87.3
          },
          {
            "x": 4.39,
            "y": 83.0
          },
          {
            "x": 9.89,
            "y": 79.23
          },
          {
            "x": 5.68,
            "y": 77.25
          },
          {
            "x": 3.68,
            "y": 78.57
          },
          {
            "x": 1.52,
            "y": 73.41
          },
          {
            "x": 2.3,
            "y": 71.23
          },
          {
            "x": 4.88,
            "y": 69.11
          },
          {
            "x": 4.54,
            "y": 67.99
          },
          {
            "x": 7.9,
            "y": 66.67
          },
          {
            "x": 1.66,
            "y": 65.08
          },
          {
            "x": 6.09,
            "y": 67.4
          },
          {
            "x": 6.01,
            "y": 62.83
          },
          {
            "x": 8.18,
            "y": 63.96
          },
          {
            "x": 3.3,
            "y": 64.95
          },
          {
            "x": 3.0,
            "y": 61.51
          },
          {
            "x": 5.42,
            "y": 59.13
          },
          {
            "x": 2.44,
            "y": 57.28
          },
          {
            "x": 3.91,
            "y": 60.05
          },
          {
            "x": 8.22,
            "y": 59.33
          },
          {
            "x": 2.92,
            "y": 61.38
          },
          {
            "x": 0.43,
            "y": 55.82
          },
          {
            "x": 4.53,
            "y": 58.4
          },
          {
            "x": 4.83,
            "y": 61.71
          },
          {
            "x": 3.51,
            "y": 62.63
          },
          {
            "x": 4.78,
            "y": 65.54
          },
          {
            "x": 1.28,
            "y": 61.91
          },
          {
            "x": 4.05,
            "y": 60.12
          },
          {
            "x": 1.63,
            "y": 57.01
          },
          {
            "x": 4.68,
            "y": 64.82
          },
          {
            "x": 2.83,
            "y": 60.65
          },
          {
            "x": 0.9,
            "y": 71.96
          },
          {
            "x": 3.95,
            "y": 71.83
          },
          {
            "x": 2.62,
            "y": 78.51
          },
          {
            "x": 1.29,
            "y": 70.37
          },
          {
            "x": 2.75,
            "y": 71.23
          },
          {
            "x": 3.25,
            "y": 64.62
          },
          {
            "x": 1.68,
            "y": 62.83
          },
          {
            "x": 4.33,
            "y": 67.06
          },
          {
            "x": 5.58,
            "y": 68.65
          },
          {
            "x": 5.1,
            "y": 65.28
          },
          {
            "x": 1.93,
            "y": 62.3
          },
          {
            "x": 1.45,
            "y": 63.23
          },
          {
            "x": 6.42,
            "y": 68.65
          },
          {
            "x": 5.05,
            "y": 62.63
          },
          {
            "x": 3.38,
            "y": 61.91
          },
          {
            "x": 3.77,
            "y": 62.9
          },
          {
            "x": 1.82,
            "y": 62.17
          },
          {
            "x": 4.7,
            "y": 68.12
          },
          {
            "x": 5.52,
            "y": 78.44
          },
          {
            "x": 6.07,
            "y": 77.32
          },
          {
            "x": 3.8,
            "y": 73.61
          },
          {
            "x": 1.01,
            "y": 77.78
          },
          {
            "x": 1.74,
            "y": 82.81
          },
          {
            "x": 9.73,
            "y": 83.2
          },
          {
            "x": 3.4,
            "y": 89.75
          },
          {
            "x": 4.74,
            "y": 85.65
          },
          {
            "x": 1.71,
            "y": 88.1
          },
          {
            "x": 3.09,
            "y": 83.86
          },
          {
            "x": 2.8,
            "y": 82.81
          },
          {
            "x": 2.44,
            "y": 81.15
          },
          {
            "x": 5.29,
            "y": 84.0
          },
          {
            "x": 5.98,
            "y": 87.63
          },
          {
            "x": 5.69,
            "y": 86.84
          },
          {
            "x": 1.31,
            "y": 86.84
          },
          {
            "x": 1.88,
            "y": 82.87
          },
          {
            "x": 1.98,
            "y": 76.65
          },
          {
            "x": 2.51,
            "y": 77.58
          },
          {
            "x": 3.31,
            "y": 74.87
          },
          {
            "x": 1.75,
            "y": 77.05
          },
          {
            "x": 2.78,
            "y": 82.34
          },
          {
            "x": 1.89,
            "y": 82.61
          },
          {
            "x": 1.53,
            "y": 84.33
          },
          {
            "x": 0.78,
            "y": 89.75
          },
          {
            "x": 2.89,
            "y": 85.58
          },
          {
            "x": 4.37,
            "y": 80.89
          },
          {
            "x": 2.81,
            "y": 78.57
          },
          {
            "x": 6.67,
            "y": 79.5
          },
          {
            "x": 1.95,
            "y": 76.72
          },
          {
            "x": 4.6,
            "y": 80.03
          },
          {
            "x": 2.07,
            "y": 81.61
          },
          {
            "x": 7.18,
            "y": 80.49
          },
          {
            "x": 3.61,
            "y": 83.67
          },
          {
            "x": 4.16,
            "y": 79.5
          },
          {
            "x": 9.92,
            "y": 80.29
          },
          {
            "x": 4.1,
            "y": 83.53
          },
          {
            "x": 4.78,
            "y": 90.54
          },
          {
            "x": 4.2,
            "y": 86.44
          },
          {
            "x": 3.87,
            "y": 86.11
          },
          {
            "x": 3.5,
            "y": 81.28
          },
          {
            "x": 5.14,
            "y": 83.47
          },
          {
            "x": 1.87,
            "y": 77.58
          },
          {
            "x": 4.74,
            "y": 79.56
          },
          {
            "x": 3.26,
            "y": 74.93
          },
          {
            "x": 5.1,
            "y": 82.67
          },
          {
            "x": 2.47,
            "y": 83.33
          },
          {
            "x": 3.46,
            "y": 84.46
          },
          {
            "x": 6.61,
            "y": 85.91
          },
          {
            "x": 4.95,
            "y": 93.65
          },
          {
            "x": 4.38,
            "y": 99.6
          },
          {
            "x": 2.5,
            "y": 99.87
          },
          {
            "x": 3.86,
            "y": 98.35
          },
          {
            "x": 6.15,
            "y": 92.99
          },
          {
            "x": 1.69,
            "y": 97.49
          },
          {
            "x": 2.74,
            "y": 98.74
          },
          {
            "x": 2.0,
            "y": 102.32
          },
          {
            "x": 3.37,
            "y": 98.02
          },
          {
            "x": 5.51,
            "y": 95.97
          },
          {
            "x": 2.3,
            "y": 89.09
          },
          {
            "x": 2.43,
            "y": 88.82
          },
          {
            "x": 1.07,
            "y": 93.19
          },
          {
            "x": 5.5,
            "y": 95.7
          },
          {
            "x": 5.87,
            "y": 113.16
          },
          {
            "x": 3.09,
            "y": 110.12
          },
          {
            "x": 3.01,
            "y": 100.13
          },
          {
            "x": 2.9,
            "y": 96.69
          },
          {
            "x": 9.31,
            "y": 91.07
          },
          {
            "x": 4.76,
            "y": 95.04
          },
          {
            "x": 3.31,
            "y": 87.9
          },
          {
            "x": 2.27,
            "y": 89.09
          },
          {
            "x": 4.94,
            "y": 88.76
          },
          {
            "x": 2.25,
            "y": 92.59
          },
          {
            "x": 3.24,
            "y": 89.35
          },
          {
            "x": 3.71,
            "y": 99.67
          },
          {
            "x": 4.34,
            "y": 107.28
          },
          {
            "x": 5.06,
            "y": 102.12
          },
          {
            "x": 10.51,
            "y": 97.69
          },
          {
            "x": 3.96,
            "y": 102.78
          },
          {
            "x": 5.32,
            "y": 103.57
          },
          {
            "x": 7.35,
            "y": 116.47
          },
          {
            "x": 3.4,
            "y": 117.59
          },
          {
            "x": 3.07,
            "y": 125.13
          },
          {
            "x": 2.47,
            "y": 135.32
          },
          {
            "x": 2.55,
            "y": 138.49
          },
          {
            "x": 1.35,
            "y": 128.04
          },
          {
            "x": 3.82,
            "y": 132.41
          },
          {
            "x": 5.02,
            "y": 139.02
          },
          {
            "x": 2.64,
            "y": 146.17
          },
          {
            "x": 0.64,
            "y": 155.82
          },
          {
            "x": 4.36,
            "y": 152.45
          },
          {
            "x": 4.11,
            "y": 169.31
          },
          {
            "x": 7.79,
            "y": 178.71
          },
          {
            "x": 1.57,
            "y": 159.92
          },
          {
            "x": 4.62,
            "y": 164.95
          },
          {
            "x": 1.71,
            "y": 148.88
          },
          {
            "x": 5.24,
            "y": 171.43
          },
          {
            "x": 2.9,
            "y": 161.25
          },
          {
            "x": 3.13,
            "y": 150.47
          },
          {
            "x": 7.91,
            "y": 163.63
          },
          {
            "x": 4.13,
            "y": 166.07
          },
          {
            "x": 5.62,
            "y": 147.03
          },
          {
            "x": 4.93,
            "y": 139.49
          },
          {
            "x": 5.57,
            "y": 135.19
          },
          {
            "x": 6.76,
            "y": 136.58
          },
          {
            "x": 2.85,
            "y": 135.05
          },
          {
            "x": 2.84,
            "y": 140.54
          },
          {
            "x": 5.08,
            "y": 138.76
          },
          {
            "x": 4.4,
            "y": 127.18
          },
          {
            "x": 1.94,
            "y": 132.28
          },
          {
            "x": 2.61,
            "y": 117.26
          },
          {
            "x": 7.69,
            "y": 117.73
          },
          {
            "x": 7.68,
            "y": 122.82
          },
          {
            "x": 2.67,
            "y": 132.74
          },
          {
            "x": 4.4,
            "y": 136.84
          },
          {
            "x": 6.06,
            "y": 133.67
          },
          {
            "x": 2.66,
            "y": 141.47
          },
          {
            "x": 3.15,
            "y": 130.49
          },
          {
            "x": 8.1,
            "y": 120.04
          },
          {
            "x": 5.16,
            "y": 127.58
          },
          {
            "x": 2.38,
            "y": 135.98
          },
          {
            "x": 2.53,
            "y": 141.67
          },
          {
            "x": 0.8,
            "y": 155.03
          },
          {
            "x": 0.96,
            "y": 156.62
          },
          {
            "x": 2.74,
            "y": 156.35
          },
          {
            "x": 5.1,
            "y": 152.25
          },
          {
            "x": 1.85,
            "y": 144.78
          },
          {
            "x": 1.72,
            "y": 145.64
          },
          {
            "x": 2.31,
            "y": 139.82
          },
          {
            "x": 2.5,
            "y": 137.77
          },
          {
            "x": 4.84,
            "y": 141.54
          },
          {
            "x": 2.14,
            "y": 138.56
          },
          {
            "x": 2.39,
            "y": 148.15
          },
          {
            "x": 3.48,
            "y": 141.67
          },
          {
            "x": 6.63,
            "y": 135.85
          },
          {
            "x": 4.2,
            "y": 133.14
          },
          {
            "x": 3.84,
            "y": 130.89
          },
          {
            "x": 7.7,
            "y": 126.85
          },
          {
            "x": 4.62,
            "y": 126.26
          },
          {
            "x": 1.74,
            "y": 131.62
          },
          {
            "x": 5.49,
            "y": 131.09
          },
          {
            "x": 4.75,
            "y": 126.72
          },
          {
            "x": 5.33,
            "y": 131.48
          },
          {
            "x": 4.17,
            "y": 142.4
          },
          {
            "x": 4.65,
            "y": 136.58
          },
          {
            "x": 3.12,
            "y": 136.64
          },
          {
            "x": 6.71,
            "y": 135.52
          },
          {
            "x": 5.8,
            "y": 131.22
          },
          {
            "x": 1.51,
            "y": 142.2
          },
          {
            "x": 7.13,
            "y": 137.44
          },
          {
            "x": 7.98,
            "y": 135.25
          },
          {
            "x": 2.67,
            "y": 142.86
          },
          {
            "x": 6.52,
            "y": 149.41
          },
          {
            "x": 1.55,
            "y": 149.61
          },
          {
            "x": 3.23,
            "y": 156.09
          },
          {
            "x": 5.74,
            "y": 161.25
          },
          {
            "x": 2.64,
            "y": 160.78
          },
          {
            "x": 6.74,
            "y": 170.51
          },
          {
            "x": 3.03,
            "y": 159.33
          },
          {
            "x": 4.48,
            "y": 160.91
          },
          {
            "x": 4.55,
            "y": 153.84
          },
          {
            "x": 2.98,
            "y": 154.23
          },
          {
            "x": 2.68,
            "y": 152.52
          },
          {
            "x": 2.43,
            "y": 157.74
          },
          {
            "x": 1.58,
            "y": 146.96
          },
          {
            "x": 7.48,
            "y": 144.78
          },
          {
            "x": 3.19,
            "y": 148.75
          },
          {
            "x": 3.39,
            "y": 146.63
          },
          {
            "x": 3.65,
            "y": 143.45
          },
          {
            "x": 5.08,
            "y": 137.24
          },
          {
            "x": 6.09,
            "y": 136.25
          },
          {
            "x": 2.27,
            "y": 141.87
          },
          {
            "x": 3.14,
            "y": 149.34
          },
          {
            "x": 5.03,
            "y": 154.17
          },
          {
            "x": 5.33,
            "y": 151.72
          },
          {
            "x": 2.04,
            "y": 145.5
          },
          {
            "x": 0.82,
            "y": 143.26
          },
          {
            "x": 6.08,
            "y": 142.53
          },
          {
            "x": 4.97,
            "y": 151.06
          },
          {
            "x": 3.15,
            "y": 155.62
          },
          {
            "x": 5.78,
            "y": 157.61
          },
          {
            "x": 5.44,
            "y": 151.66
          },
          {
            "x": 5.66,
            "y": 149.01
          },
          {
            "x": 3.29,
            "y": 153.71
          },
          {
            "x": 7.74,
            "y": 171.83
          },
          {
            "x": 3.33,
            "y": 179.7
          },
          {
            "x": 5.33,
            "y": 184.26
          },
          {
            "x": 3.55,
            "y": 163.83
          },
          {
            "x": 3.15,
            "y": 157.28
          },
          {
            "x": 4.4,
            "y": 161.05
          },
          {
            "x": 1.48,
            "y": 163.3
          },
          {
            "x": 0.9,
            "y": 166.6
          },
          {
            "x": 4.56,
            "y": 173.02
          },
          {
            "x": 3.73,
            "y": 177.52
          },
          {
            "x": 4.25,
            "y": 180.16
          },
          {
            "x": 3.07,
            "y": 180.29
          },
          {
            "x": 4.73,
            "y": 176.06
          },
          {
            "x": 2.13,
            "y": 182.74
          },
          {
            "x": 1.59,
            "y": 194.71
          },
          {
            "x": 3.51,
            "y": 204.5
          },
          {
            "x": 5.17,
            "y": 217.73
          },
          {
            "x": 1.63,
            "y": 198.61
          },
          {
            "x": 2.21,
            "y": 173.15
          },
          {
            "x": 1.87,
            "y": 168.52
          },
          {
            "x": 3.83,
            "y": 174.27
          },
          {
            "x": 4.14,
            "y": 178.9
          },
          {
            "x": 3.33,
            "y": 177.98
          },
          {
            "x": 2.4,
            "y": 179.9
          },
          {
            "x": 2.81,
            "y": 180.95
          },
          {
            "x": 6.34,
            "y": 177.12
          },
          {
            "x": 3.84,
            "y": 173.35
          },
          {
            "x": 6.43,
            "y": 181.15
          },
          {
            "x": 2.84,
            "y": 198.61
          },
          {
            "x": 3.52,
            "y": 183.01
          },
          {
            "x": 6.04,
            "y": 179.43
          },
          {
            "x": 1.88,
            "y": 180.43
          },
          {
            "x": 3.91,
            "y": 179.63
          },
          {
            "x": 3.1,
            "y": 177.19
          },
          {
            "x": 4.85,
            "y": 189.49
          },
          {
            "x": 6.19,
            "y": 183.67
          },
          {
            "x": 4.9,
            "y": 171.23
          },
          {
            "x": 8.96,
            "y": 177.45
          },
          {
            "x": 6.13,
            "y": 151.06
          },
          {
            "x": 6.16,
            "y": 152.91
          },
          {
            "x": 3.34,
            "y": 142.53
          },
          {
            "x": 4.23,
            "y": 146.83
          },
          {
            "x": 3.56,
            "y": 146.76
          },
          {
            "x": 3.54,
            "y": 150.93
          },
          {
            "x": 0.68,
            "y": 134.39
          },
          {
            "x": 9.79,
            "y": 144.98
          },
          {
            "x": 11.66,
            "y": 143.39
          },
          {
            "x": 5.73,
            "y": 142.46
          },
          {
            "x": 3.59,
            "y": 150.66
          },
          {
            "x": 5.43,
            "y": 158.27
          },
          {
            "x": 2.47,
            "y": 153.31
          },
          {
            "x": 7.71,
            "y": 148.61
          },
          {
            "x": 3.86,
            "y": 147.09
          },
          {
            "x": 0.95,
            "y": 139.29
          },
          {
            "x": 2.02,
            "y": 143.98
          },
          {
            "x": 3.43,
            "y": 155.23
          },
          {
            "x": 2.98,
            "y": 156.62
          },
          {
            "x": 5.27,
            "y": 153.04
          },
          {
            "x": 0.87,
            "y": 157.41
          },
          {
            "x": 2.19,
            "y": 163.56
          },
          {
            "x": 4.94,
            "y": 168.72
          },
          {
            "x": 2.79,
            "y": 178.57
          },
          {
            "x": 2.58,
            "y": 184.13
          },
          {
            "x": 4.19,
            "y": 171.36
          },
          {
            "x": 5.06,
            "y": 153.64
          },
          {
            "x": 1.63,
            "y": 152.18
          },
          {
            "x": 3.6,
            "y": 149.34
          },
          {
            "x": 4.55,
            "y": 163.96
          },
          {
            "x": 2.63,
            "y": 175.99
          },
          {
            "x": 3.5,
            "y": 175.6
          },
          {
            "x": 6.13,
            "y": 163.63
          },
          {
            "x": 4.08,
            "y": 159.26
          },
          {
            "x": 3.99,
            "y": 165.74
          },
          {
            "x": 3.85,
            "y": 182.61
          },
          {
            "x": 1.83,
            "y": 171.56
          },
          {
            "x": 4.55,
            "y": 182.61
          },
          {
            "x": 3.88,
            "y": 190.02
          },
          {
            "x": 6.12,
            "y": 179.24
          },
          {
            "x": 2.87,
            "y": 175.53
          },
          {
            "x": 0.97,
            "y": 178.04
          },
          {
            "x": 2.49,
            "y": 188.49
          },
          {
            "x": 2.25,
            "y": 188.63
          },
          {
            "x": 4.57,
            "y": 192.6
          },
          {
            "x": 4.48,
            "y": 179.83
          },
          {
            "x": 0.92,
            "y": 192.26
          },
          {
            "x": 1.55,
            "y": 184.13
          },
          {
            "x": 0.49,
            "y": 174.21
          },
          {
            "x": 2.19,
            "y": 172.49
          },
          {
            "x": 1.05,
            "y": 178.24
          },
          {
            "x": 7.12,
            "y": 171.36
          },
          {
            "x": 1.97,
            "y": 173.88
          },
          {
            "x": 5.14,
            "y": 172.36
          },
          {
            "x": 3.3,
            "y": 180.1
          },
          {
            "x": 5.0,
            "y": 175.53
          },
          {
            "x": 2.84,
            "y": 170.84
          },
          {
            "x": 3.95,
            "y": 178.84
          },
          {
            "x": 5.44,
            "y": 176.66
          },
          {
            "x": 5.1,
            "y": 174.14
          },
          {
            "x": 13.46,
            "y": 177.58
          },
          {
            "x": 6.06,
            "y": 177.85
          },
          {
            "x": 5.87,
            "y": 211.97
          },
          {
            "x": 3.04,
            "y": 213.63
          },
          {
            "x": 2.57,
            "y": 213.23
          },
          {
            "x": 3.76,
            "y": 214.29
          },
          {
            "x": 4.7,
            "y": 228.91
          },
          {
            "x": 4.28,
            "y": 221.43
          },
          {
            "x": 7.71,
            "y": 231.68
          },
          {
            "x": 4.3,
            "y": 234.2
          },
          {
            "x": 7.37,
            "y": 252.25
          },
          {
            "x": 3.96,
            "y": 248.48
          },
          {
            "x": 9.72,
            "y": 241.07
          },
          {
            "x": 4.92,
            "y": 229.43
          },
          {
            "x": 2.03,
            "y": 246.56
          },
          {
            "x": 5.11,
            "y": 264.95
          },
          {
            "x": 8.24,
            "y": 271.37
          },
          {
            "x": 7.63,
            "y": 261.64
          },
          {
            "x": 4.58,
            "y": 267.4
          },
          {
            "x": 2.36,
            "y": 276.0
          },
          {
            "x": 3.12,
            "y": 285.92
          },
          {
            "x": 7.06,
            "y": 312.04
          },
          {
            "x": 3.68,
            "y": 308.21
          },
          {
            "x": 3.09,
            "y": 310.32
          },
          {
            "x": 0.55,
            "y": 305.89
          },
          {
            "x": 0.23,
            "y": 329.77
          },
          {
            "x": 2.65,
            "y": 342.13
          },
          {
            "x": 3.78,
            "y": 349.48
          },
          {
            "x": 8.81,
            "y": 360.98
          },
          {
            "x": 5.63,
            "y": 349.94
          },
          {
            "x": 1.59,
            "y": 355.3
          },
          {
            "x": 7.27,
            "y": 354.83
          },
          {
            "x": 5.05,
            "y": 381.09
          },
          {
            "x": 2.49,
            "y": 380.83
          },
          {
            "x": 1.6,
            "y": 380.3
          },
          {
            "x": 2.97,
            "y": 356.22
          },
          {
            "x": 4.33,
            "y": 350.34
          },
          {
            "x": 2.4,
            "y": 358.4
          },
          {
            "x": 3.49,
            "y": 356.16
          },
          {
            "x": 7.32,
            "y": 329.37
          },
          {
            "x": 5.1,
            "y": 348.48
          },
          {
            "x": 3.79,
            "y": 340.41
          },
          {
            "x": 3.16,
            "y": 319.45
          },
          {
            "x": 2.77,
            "y": 319.98
          },
          {
            "x": 3.77,
            "y": 317.93
          },
          {
            "x": 3.96,
            "y": 355.63
          },
          {
            "x": 1.9,
            "y": 382.55
          },
          {
            "x": 3.95,
            "y": 362.04
          },
          {
            "x": 3.98,
            "y": 316.47
          },
          {
            "x": 7.05,
            "y": 302.78
          },
          {
            "x": 8.87,
            "y": 303.51
          },
          {
            "x": 2.78,
            "y": 323.88
          },
          {
            "x": 1.78,
            "y": 295.84
          },
          {
            "x": 5.36,
            "y": 309.46
          },
          {
            "x": 1.73,
            "y": 307.15
          },
          {
            "x": 4.92,
            "y": 308.47
          },
          {
            "x": 1.9,
            "y": 297.16
          },
          {
            "x": 1.94,
            "y": 290.88
          },
          {
            "x": 4.17,
            "y": 300.07
          },
          {
            "x": 7.02,
            "y": 298.88
          },
          {
            "x": 2.23,
            "y": 298.15
          },
          {
            "x": 1.53,
            "y": 286.51
          },
          {
            "x": 1.61,
            "y": 285.72
          },
          {
            "x": 0.86,
            "y": 264.62
          },
          {
            "x": 0.69,
            "y": 268.72
          },
          {
            "x": 1.92,
            "y": 245.51
          },
          {
            "x": 1.66,
            "y": 242.2
          },
          {
            "x": 4.89,
            "y": 241.34
          },
          {
            "x": 2.2,
            "y": 235.52
          },
          {
            "x": 3.53,
            "y": 229.7
          },
          {
            "x": 4.92,
            "y": 231.48
          },
          {
            "x": 5.03,
            "y": 231.68
          },
          {
            "x": 7.0,
            "y": 235.06
          },
          {
            "x": 2.37,
            "y": 218.79
          },
          {
            "x": 3.44,
            "y": 205.82
          },
          {
            "x": 3.5,
            "y": 197.82
          },
          {
            "x": 2.22,
            "y": 215.61
          },
          {
            "x": 6.82,
            "y": 232.68
          },
          {
            "x": 3.41,
            "y": 239.95
          },
          {
            "x": 3.09,
            "y": 229.77
          },
          {
            "x": 6.09,
            "y": 228.38
          },
          {
            "x": 7.57,
            "y": 212.04
          },
          {
            "x": 5.69,
            "y": 220.97
          },
          {
            "x": 3.32,
            "y": 208.87
          },
          {
            "x": 2.68,
            "y": 239.16
          },
          {
            "x": 7.51,
            "y": 224.14
          },
          {
            "x": 3.68,
            "y": 222.36
          },
          {
            "x": 3.37,
            "y": 215.35
          },
          {
            "x": 3.23,
            "y": 208.67
          },
          {
            "x": 3.56,
            "y": 199.61
          },
          {
            "x": 6.19,
            "y": 197.09
          },
          {
            "x": 7.73,
            "y": 188.03
          },
          {
            "x": 2.35,
            "y": 184.66
          },
          {
            "x": 5.73,
            "y": 181.75
          },
          {
            "x": 0.92,
            "y": 194.45
          },
          {
            "x": 0.96,
            "y": 194.91
          },
          {
            "x": 2.34,
            "y": 202.78
          },
          {
            "x": 4.22,
            "y": 193.85
          },
          {
            "x": 4.05,
            "y": 195.7
          },
          {
            "x": 1.46,
            "y": 183.53
          },
          {
            "x": 1.31,
            "y": 189.29
          },
          {
            "x": 1.2,
            "y": 185.85
          },
          {
            "x": 3.2,
            "y": 180.56
          },
          {
            "x": 3.2,
            "y": 179.37
          },
          {
            "x": 4.27,
            "y": 184.53
          },
          {
            "x": 3.97,
            "y": 178.9
          },
          {
            "x": 1.23,
            "y": 183.07
          },
          {
            "x": 4.91,
            "y": 185.58
          },
          {
            "x": 3.41,
            "y": 187.37
          },
          {
            "x": 5.24,
            "y": 168.32
          },
          {
            "x": 6.62,
            "y": 170.64
          },
          {
            "x": 2.89,
            "y": 163.63
          },
          {
            "x": 4.57,
            "y": 157.01
          },
          {
            "x": 7.29,
            "y": 160.25
          },
          {
            "x": 6.32,
            "y": 157.61
          },
          {
            "x": 4.79,
            "y": 166.8
          },
          {
            "x": 3.34,
            "y": 156.42
          },
          {
            "x": 5.83,
            "y": 163.3
          },
          {
            "x": 2.85,
            "y": 149.74
          },
          {
            "x": 5.28,
            "y": 148.28
          },
          {
            "x": 5.63,
            "y": 154.04
          },
          {
            "x": 1.83,
            "y": 151.66
          },
          {
            "x": 3.9,
            "y": 150.93
          },
          {
            "x": 3.44,
            "y": 154.37
          },
          {
            "x": 10.19,
            "y": 149.08
          },
          {
            "x": 4.02,
            "y": 139.42
          },
          {
            "x": 1.91,
            "y": 137.63
          },
          {
            "x": 1.97,
            "y": 142.0
          },
          {
            "x": 3.31,
            "y": 145.84
          },
          {
            "x": 4.55,
            "y": 145.04
          },
          {
            "x": 6.31,
            "y": 152.52
          },
          {
            "x": 2.45,
            "y": 151.72
          },
          {
            "x": 2.69,
            "y": 157.87
          },
          {
            "x": 2.22,
            "y": 154.96
          },
          {
            "x": 0.33,
            "y": 154.9
          },
          {
            "x": 0.58,
            "y": 179.5
          },
          {
            "x": 2.83,
            "y": 201.92
          },
          {
            "x": 3.9,
            "y": 237.83
          },
          {
            "x": 1.7,
            "y": 267.86
          },
          {
            "x": 1.16,
            "y": 230.36
          },
          {
            "x": 2.89,
            "y": 238.89
          },
          {
            "x": 3.79,
            "y": 264.36
          },
          {
            "x": 3.12,
            "y": 266.14
          },
          {
            "x": 2.78,
            "y": 276.33
          },
          {
            "x": 6.75,
            "y": 239.16
          },
          {
            "x": 4.19,
            "y": 238.3
          },
          {
            "x": 4.56,
            "y": 240.68
          },
          {
            "x": 2.46,
            "y": 227.65
          },
          {
            "x": 2.93,
            "y": 220.57
          },
          {
            "x": 2.99,
            "y": 225.47
          },
          {
            "x": 4.11,
            "y": 225.14
          },
          {
            "x": 1.29,
            "y": 225.8
          },
          {
            "x": 2.87,
            "y": 239.55
          },
          {
            "x": 1.62,
            "y": 243.39
          },
          {
            "x": 4.0,
            "y": 249.67
          },
          {
            "x": 4.75,
            "y": 254.5
          },
          {
            "x": 4.31,
            "y": 255.1
          },
          {
            "x": 2.96,
            "y": 238.89
          },
          {
            "x": 8.5,
            "y": 246.1
          },
          {
            "x": 2.94,
            "y": 292.07
          },
          {
            "x": 3.36,
            "y": 287.17
          },
          {
            "x": 9.39,
            "y": 253.31
          },
          {
            "x": 3.55,
            "y": 246.37
          },
          {
            "x": 2.93,
            "y": 253.97
          },
          {
            "x": 11.52,
            "y": 256.95
          },
          {
            "x": 6.47,
            "y": 236.91
          },
          {
            "x": 4.04,
            "y": 234.99
          },
          {
            "x": 2.23,
            "y": 225.07
          },
          {
            "x": 1.17,
            "y": 213.03
          },
          {
            "x": 0.81,
            "y": 237.9
          },
          {
            "x": 2.67,
            "y": 214.88
          },
          {
            "x": 1.59,
            "y": 212.64
          },
          {
            "x": 0.59,
            "y": 215.88
          },
          {
            "x": 0.71,
            "y": 191.07
          },
          {
            "x": 1.2,
            "y": 174.01
          },
          {
            "x": 1.48,
            "y": 167.26
          },
          {
            "x": 3.0,
            "y": 185.12
          },
          {
            "x": 2.51,
            "y": 186.38
          },
          {
            "x": 4.98,
            "y": 178.04
          },
          {
            "x": 2.05,
            "y": 186.71
          },
          {
            "x": 4.26,
            "y": 174.41
          },
          {
            "x": 3.14,
            "y": 179.43
          },
          {
            "x": 5.29,
            "y": 167.93
          },
          {
            "x": 4.28,
            "y": 177.65
          },
          {
            "x": 4.85,
            "y": 174.67
          },
          {
            "x": 1.34,
            "y": 168.92
          },
          {
            "x": 1.4,
            "y": 166.14
          },
          {
            "x": 1.68,
            "y": 167.46
          },
          {
            "x": 7.39,
            "y": 160.78
          },
          {
            "x": 3.92,
            "y": 165.68
          },
          {
            "x": 2.63,
            "y": 174.41
          },
          {
            "x": 1.25,
            "y": 161.25
          },
          {
            "x": 5.38,
            "y": 154.83
          },
          {
            "x": 5.77,
            "y": 149.94
          },
          {
            "x": 4.64,
            "y": 155.09
          },
          {
            "x": 5.53,
            "y": 159.72
          },
          {
            "x": 3.06,
            "y": 174.08
          },
          {
            "x": 4.55,
            "y": 160.06
          },
          {
            "x": 5.45,
            "y": 159.99
          },
          {
            "x": 2.12,
            "y": 153.84
          },
          {
            "x": 7.42,
            "y": 161.25
          },
          {
            "x": 2.93,
            "y": 154.63
          },
          {
            "x": 4.16,
            "y": 162.24
          },
          {
            "x": 2.33,
            "y": 156.68
          },
          {
            "x": 1.81,
            "y": 163.56
          },
          {
            "x": 2.61,
            "y": 157.41
          },
          {
            "x": 5.17,
            "y": 152.98
          },
          {
            "x": 2.72,
            "y": 153.9
          },
          {
            "x": 1.67,
            "y": 153.11
          },
          {
            "x": 2.59,
            "y": 150.99
          },
          {
            "x": 1.69,
            "y": 149.47
          },
          {
            "x": 1.42,
            "y": 159.86
          },
          {
            "x": 2.17,
            "y": 177.05
          },
          {
            "x": 1.37,
            "y": 168.59
          },
          {
            "x": 0.83,
            "y": 159.33
          },
          {
            "x": 2.45,
            "y": 164.02
          },
          {
            "x": 7.77,
            "y": 159.26
          },
          {
            "x": 6.61,
            "y": 163.3
          },
          {
            "x": 7.19,
            "y": 171.03
          },
          {
            "x": 5.23,
            "y": 160.45
          },
          {
            "x": 7.61,
            "y": 174.87
          },
          {
            "x": 7.67,
            "y": 186.18
          },
          {
            "x": 3.23,
            "y": 177.91
          },
          {
            "x": 2.73,
            "y": 185.78
          },
          {
            "x": 2.9,
            "y": 192.73
          },
          {
            "x": 5.6,
            "y": 186.78
          },
          {
            "x": 5.77,
            "y": 188.49
          },
          {
            "x": 10.43,
            "y": 181.75
          },
          {
            "x": 4.95,
            "y": 190.35
          },
          {
            "x": 4.99,
            "y": 198.55
          },
          {
            "x": 6.88,
            "y": 195.24
          },
          {
            "x": 4.23,
            "y": 200.27
          },
          {
            "x": 3.56,
            "y": 196.03
          },
          {
            "x": 5.77,
            "y": 205.56
          },
          {
            "x": 5.42,
            "y": 217.6
          },
          {
            "x": 4.37,
            "y": 226.66
          },
          {
            "x": 12.93,
            "y": 214.02
          },
          {
            "x": 3.05,
            "y": 204.57
          },
          {
            "x": 5.47,
            "y": 186.78
          },
          {
            "x": 6.48,
            "y": 185.52
          },
          {
            "x": 1.73,
            "y": 180.1
          },
          {
            "x": 2.35,
            "y": 181.75
          },
          {
            "x": 5.16,
            "y": 197.49
          },
          {
            "x": 1.46,
            "y": 205.56
          },
          {
            "x": 5.18,
            "y": 193.06
          },
          {
            "x": 1.23,
            "y": 192.79
          },
          {
            "x": 3.42,
            "y": 197.36
          },
          {
            "x": 2.41,
            "y": 186.84
          },
          {
            "x": 6.66,
            "y": 184.66
          },
          {
            "x": 1.88,
            "y": 182.01
          },
          {
            "x": 0.89,
            "y": 182.34
          },
          {
            "x": 1.9,
            "y": 183.73
          },
          {
            "x": 3.05,
            "y": 171.76
          },
          {
            "x": 4.16,
            "y": 178.57
          },
          {
            "x": 11.94,
            "y": 175.4
          },
          {
            "x": 3.67,
            "y": 172.29
          },
          {
            "x": 2.4,
            "y": 166.07
          },
          {
            "x": 8.47,
            "y": 168.79
          },
          {
            "x": 6.72,
            "y": 150.07
          },
          {
            "x": 5.92,
            "y": 164.09
          },
          {
            "x": 4.81,
            "y": 166.67
          },
          {
            "x": 4.9,
            "y": 180.62
          },
          {
            "x": 5.35,
            "y": 182.34
          },
          {
            "x": 7.56,
            "y": 185.58
          },
          {
            "x": 3.61,
            "y": 167.2
          },
          {
            "x": 5.89,
            "y": 169.51
          },
          {
            "x": 7.48,
            "y": 171.17
          },
          {
            "x": 6.04,
            "y": 180.62
          },
          {
            "x": 14.66,
            "y": 169.38
          },
          {
            "x": 10.28,
            "y": 173.28
          },
          {
            "x": 4.7,
            "y": 165.68
          },
          {
            "x": 5.4,
            "y": 166.54
          },
          {
            "x": 1.4,
            "y": 167.2
          },
          {
            "x": 6.89,
            "y": 163.76
          },
          {
            "x": 2.62,
            "y": 171.43
          },
          {
            "x": 3.11,
            "y": 159.53
          },
          {
            "x": 1.24,
            "y": 161.05
          },
          {
            "x": 2.55,
            "y": 166.93
          },
          {
            "x": 3.67,
            "y": 165.54
          },
          {
            "x": 0.89,
            "y": 160.19
          },
          {
            "x": 1.63,
            "y": 165.54
          },
          {
            "x": 1.74,
            "y": 163.1
          },
          {
            "x": 1.43,
            "y": 156.02
          },
          {
            "x": 4.34,
            "y": 158.67
          },
          {
            "x": 5.04,
            "y": 157.21
          },
          {
            "x": 1.68,
            "y": 156.55
          },
          {
            "x": 2.17,
            "y": 156.29
          },
          {
            "x": 4.07,
            "y": 155.36
          },
          {
            "x": 2.0,
            "y": 151.99
          },
          {
            "x": 3.71,
            "y": 159.2
          },
          {
            "x": 6.23,
            "y": 154.17
          },
          {
            "x": 3.27,
            "y": 150.73
          },
          {
            "x": 7.14,
            "y": 159.26
          },
          {
            "x": 6.71,
            "y": 153.04
          },
          {
            "x": 5.93,
            "y": 152.38
          },
          {
            "x": 6.96,
            "y": 151.19
          },
          {
            "x": 1.32,
            "y": 147.16
          },
          {
            "x": 4.46,
            "y": 139.82
          },
          {
            "x": 2.68,
            "y": 146.1
          },
          {
            "x": 5.21,
            "y": 143.85
          },
          {
            "x": 5.71,
            "y": 134.53
          },
          {
            "x": 4.69,
            "y": 133.0
          },
          {
            "x": 4.86,
            "y": 132.41
          },
          {
            "x": 9.39,
            "y": 126.26
          },
          {
            "x": 3.02,
            "y": 128.44
          },
          {
            "x": 10.53,
            "y": 144.12
          },
          {
            "x": 8.57,
            "y": 157.87
          },
          {
            "x": 6.51,
            "y": 160.25
          },
          {
            "x": 7.91,
            "y": 158.8
          },
          {
            "x": 4.13,
            "y": 149.01
          },
          {
            "x": 7.55,
            "y": 141.73
          },
          {
            "x": 2.37,
            "y": 134.79
          },
          {
            "x": 2.04,
            "y": 128.24
          },
          {
            "x": 3.1,
            "y": 135.19
          },
          {
            "x": 1.46,
            "y": 135.12
          },
          {
            "x": 1.52,
            "y": 137.37
          },
          {
            "x": 1.25,
            "y": 136.77
          },
          {
            "x": 0.51,
            "y": 137.17
          },
          {
            "x": 1.57,
            "y": 132.87
          },
          {
            "x": 3.56,
            "y": 127.58
          },
          {
            "x": 4.15,
            "y": 124.47
          },
          {
            "x": 2.32,
            "y": 124.27
          },
          {
            "x": 0.67,
            "y": 124.21
          },
          {
            "x": 3.5,
            "y": 126.13
          },
          {
            "x": 3.7,
            "y": 119.58
          },
          {
            "x": 2.71,
            "y": 121.03
          },
          {
            "x": 3.1,
            "y": 118.06
          },
          {
            "x": 4.78,
            "y": 116.73
          },
          {
            "x": 9.43,
            "y": 123.68
          },
          {
            "x": 6.22,
            "y": 138.36
          },
          {
            "x": 5.1,
            "y": 131.02
          },
          {
            "x": 6.57,
            "y": 132.01
          },
          {
            "x": 3.6,
            "y": 143.19
          },
          {
            "x": 5.6,
            "y": 139.16
          },
          {
            "x": 3.63,
            "y": 139.02
          },
          {
            "x": 2.28,
            "y": 128.64
          },
          {
            "x": 4.56,
            "y": 128.71
          },
          {
            "x": 5.33,
            "y": 122.82
          },
          {
            "x": 2.95,
            "y": 123.81
          },
          {
            "x": 5.86,
            "y": 130.09
          },
          {
            "x": 6.36,
            "y": 130.16
          },
          {
            "x": 6.38,
            "y": 133.8
          },
          {
            "x": 7.16,
            "y": 123.68
          },
          {
            "x": 2.69,
            "y": 126.59
          },
          {
            "x": 3.68,
            "y": 131.42
          },
          {
            "x": 5.13,
            "y": 144.78
          },
          {
            "x": 6.15,
            "y": 135.85
          },
          {
            "x": 7.07,
            "y": 156.81
          },
          {
            "x": 1.77,
            "y": 168.39
          },
          {
            "x": 2.58,
            "y": 168.26
          },
          {
            "x": 1.18,
            "y": 175.27
          },
          {
            "x": 2.21,
            "y": 157.61
          },
          {
            "x": 2.23,
            "y": 148.35
          },
          {
            "x": 3.21,
            "y": 138.96
          },
          {
            "x": 2.57,
            "y": 130.09
          },
          {
            "x": 1.54,
            "y": 144.31
          },
          {
            "x": 10.71,
            "y": 143.12
          },
          {
            "x": 2.4,
            "y": 139.68
          },
          {
            "x": 1.74,
            "y": 142.93
          },
          {
            "x": 0.56,
            "y": 153.24
          },
          {
            "x": 0.92,
            "y": 158.6
          },
          {
            "x": 2.72,
            "y": 153.51
          },
          {
            "x": 6.35,
            "y": 138.36
          },
          {
            "x": 3.77,
            "y": 142.13
          },
          {
            "x": 6.63,
            "y": 138.63
          },
          {
            "x": 8.88,
            "y": 135.58
          },
          {
            "x": 3.65,
            "y": 130.82
          },
          {
            "x": 6.89,
            "y": 123.88
          },
          {
            "x": 3.74,
            "y": 126.52
          },
          {
            "x": 3.37,
            "y": 128.57
          },
          {
            "x": 5.1,
            "y": 128.44
          },
          {
            "x": 6.01,
            "y": 143.39
          },
          {
            "x": 6.19,
            "y": 160.78
          },
          {
            "x": 4.62,
            "y": 151.72
          },
          {
            "x": 7.46,
            "y": 162.97
          },
          {
            "x": 5.63,
            "y": 178.31
          },
          {
            "x": 7.23,
            "y": 163.43
          },
          {
            "x": 8.08,
            "y": 147.03
          },
          {
            "x": 4.94,
            "y": 144.12
          },
          {
            "x": 5.81,
            "y": 144.98
          },
          {
            "x": 8.48,
            "y": 139.68
          },
          {
            "x": 5.33,
            "y": 136.84
          },
          {
            "x": 2.53,
            "y": 144.51
          },
          {
            "x": 4.32,
            "y": 151.39
          },
          {
            "x": 3.59,
            "y": 155.62
          },
          {
            "x": 19.15,
            "y": 157.54
          },
          {
            "x": 2.64,
            "y": 164.75
          },
          {
            "x": 11.44,
            "y": 169.65
          },
          {
            "x": 3.32,
            "y": 160.58
          },
          {
            "x": 4.34,
            "y": 164.09
          },
          {
            "x": 1.9,
            "y": 165.81
          },
          {
            "x": 2.86,
            "y": 160.32
          },
          {
            "x": 1.84,
            "y": 168.65
          },
          {
            "x": 0.97,
            "y": 173.48
          },
          {
            "x": 2.8,
            "y": 175.2
          },
          {
            "x": 0.81,
            "y": 168.79
          },
          {
            "x": 3.72,
            "y": 160.85
          },
          {
            "x": 11.12,
            "y": 169.45
          },
          {
            "x": 3.46,
            "y": 177.65
          },
          {
            "x": 4.63,
            "y": 185.12
          },
          {
            "x": 5.7,
            "y": 192.79
          },
          {
            "x": 2.33,
            "y": 198.55
          },
          {
            "x": 2.64,
            "y": 213.03
          },
          {
            "x": 4.55,
            "y": 208.27
          },
          {
            "x": 4.01,
            "y": 201.52
          },
          {
            "x": 3.66,
            "y": 206.35
          },
          {
            "x": 4.26,
            "y": 200.14
          },
          {
            "x": 2.16,
            "y": 232.81
          },
          {
            "x": 3.94,
            "y": 237.5
          },
          {
            "x": 3.91,
            "y": 240.74
          },
          {
            "x": 6.1,
            "y": 235.78
          },
          {
            "x": 5.77,
            "y": 261.11
          },
          {
            "x": 6.51,
            "y": 244.71
          },
          {
            "x": 3.45,
            "y": 247.75
          },
          {
            "x": 4.41,
            "y": 255.82
          },
          {
            "x": 10.61,
            "y": 266.34
          },
          {
            "x": 10.36,
            "y": 270.18
          },
          {
            "x": 4.24,
            "y": 269.78
          },
          {
            "x": 3.97,
            "y": 264.09
          },
          {
            "x": 5.84,
            "y": 302.85
          },
          {
            "x": 4.48,
            "y": 322.56
          },
          {
            "x": 5.2,
            "y": 323.75
          },
          {
            "x": 4.64,
            "y": 312.04
          },
          {
            "x": 4.87,
            "y": 298.42
          },
          {
            "x": 7.57,
            "y": 315.41
          },
          {
            "x": 5.51,
            "y": 317.0
          },
          {
            "x": 1.87,
            "y": 306.95
          },
          {
            "x": 5.66,
            "y": 319.91
          },
          {
            "x": 3.05,
            "y": 333.67
          },
          {
            "x": 2.61,
            "y": 317.53
          },
          {
            "x": 1.29,
            "y": 309.59
          },
          {
            "x": 1.32,
            "y": 291.41
          },
          {
            "x": 3.66,
            "y": 283.8
          },
          {
            "x": 2.77,
            "y": 299.14
          },
          {
            "x": 7.34,
            "y": 295.77
          },
          {
            "x": 2.75,
            "y": 285.65
          },
          {
            "x": 4.3,
            "y": 279.9
          },
          {
            "x": 2.62,
            "y": 301.86
          },
          {
            "x": 6.55,
            "y": 303.51
          },
          {
            "x": 9.75,
            "y": 314.22
          },
          {
            "x": 2.79,
            "y": 306.82
          },
          {
            "x": 4.58,
            "y": 299.74
          },
          {
            "x": 5.49,
            "y": 294.32
          },
          {
            "x": 4.52,
            "y": 269.45
          },
          {
            "x": 4.29,
            "y": 282.01
          },
          {
            "x": 6.43,
            "y": 277.05
          },
          {
            "x": 5.41,
            "y": 298.28
          },
          {
            "x": 5.47,
            "y": 321.96
          },
          {
            "x": 5.95,
            "y": 307.74
          },
          {
            "x": 11.23,
            "y": 287.83
          },
          {
            "x": 6.35,
            "y": 291.6
          },
          {
            "x": 8.09,
            "y": 290.08
          },
          {
            "x": 4.58,
            "y": 260.19
          },
          {
            "x": 2.62,
            "y": 251.86
          },
          {
            "x": 5.32,
            "y": 227.78
          },
          {
            "x": 2.34,
            "y": 225.0
          },
          {
            "x": 5.73,
            "y": 211.78
          },
          {
            "x": 3.77,
            "y": 211.84
          },
          {
            "x": 7.64,
            "y": 221.1
          },
          {
            "x": 2.85,
            "y": 227.52
          },
          {
            "x": 3.72,
            "y": 221.3
          },
          {
            "x": 3.46,
            "y": 197.62
          },
          {
            "x": 2.28,
            "y": 204.76
          },
          {
            "x": 2.06,
            "y": 232.68
          },
          {
            "x": 3.11,
            "y": 231.15
          },
          {
            "x": 3.02,
            "y": 257.21
          },
          {
            "x": 1.32,
            "y": 239.16
          },
          {
            "x": 4.65,
            "y": 242.33
          },
          {
            "x": 3.38,
            "y": 230.56
          },
          {
            "x": 2.64,
            "y": 225.53
          },
          {
            "x": 2.07,
            "y": 251.66
          },
          {
            "x": 2.68,
            "y": 256.88
          },
          {
            "x": 4.59,
            "y": 252.19
          },
          {
            "x": 3.05,
            "y": 246.04
          },
          {
            "x": 3.73,
            "y": 250.27
          },
          {
            "x": 3.86,
            "y": 242.13
          },
          {
            "x": 2.93,
            "y": 252.19
          },
          {
            "x": 5.43,
            "y": 227.52
          },
          {
            "x": 5.98,
            "y": 212.97
          },
          {
            "x": 4.48,
            "y": 210.72
          },
          {
            "x": 4.35,
            "y": 214.09
          },
          {
            "x": 11.32,
            "y": 217.79
          },
          {
            "x": 2.19,
            "y": 211.51
          },
          {
            "x": 5.36,
            "y": 195.04
          },
          {
            "x": 2.62,
            "y": 202.85
          },
          {
            "x": 2.53,
            "y": 193.46
          },
          {
            "x": 3.69,
            "y": 221.56
          },
          {
            "x": 9.41,
            "y": 193.32
          },
          {
            "x": 4.69,
            "y": 193.19
          },
          {
            "x": 4.36,
            "y": 216.87
          },
          {
            "x": 8.46,
            "y": 212.9
          },
          {
            "x": 2.23,
            "y": 230.62
          },
          {
            "x": 5.85,
            "y": 226.13
          },
          {
            "x": 3.31,
            "y": 242.93
          },
          {
            "x": 1.1,
            "y": 244.91
          },
          {
            "x": 0.88,
            "y": 277.19
          },
          {
            "x": 3.24,
            "y": 261.91
          },
          {
            "x": 0.67,
            "y": 241.8
          },
          {
            "x": 1.41,
            "y": 237.04
          },
          {
            "x": 1.45,
            "y": 256.42
          },
          {
            "x": 0.99,
            "y": 248.95
          },
          {
            "x": 3.39,
            "y": 252.45
          },
          {
            "x": 3.44,
            "y": 251.46
          },
          {
            "x": 1.89,
            "y": 262.37
          },
          {
            "x": 0.64,
            "y": 241.87
          },
          {
            "x": 5.1,
            "y": 252.19
          },
          {
            "x": 2.83,
            "y": 281.09
          },
          {
            "x": 1.24,
            "y": 313.17
          },
          {
            "x": 2.46,
            "y": 305.03
          },
          {
            "x": 2.22,
            "y": 265.48
          },
          {
            "x": 5.05,
            "y": 263.96
          },
          {
            "x": 6.91,
            "y": 288.69
          },
          {
            "x": 6.44,
            "y": 306.82
          },
          {
            "x": 12.24,
            "y": 296.5
          },
          {
            "x": 11.78,
            "y": 305.82
          },
          {
            "x": 6.31,
            "y": 304.63
          },
          {
            "x": 3.42,
            "y": 322.95
          },
          {
            "x": 4.71,
            "y": 310.45
          },
          {
            "x": 6.89,
            "y": 304.9
          },
          {
            "x": 4.06,
            "y": 313.5
          }
        ],
        "trend": {
          "slope": 2.5233,
          "intercept": 172.38
        }
      }
    ],
    "distributions": [
      {
        "title": "Temp Max",
        "bins": [
          {
            "start": 4.1,
            "end": 5.82,
            "count": 2
          },
          {
            "start": 5.82,
            "end": 7.53,
            "count": 0
          },
          {
            "start": 7.53,
            "end": 9.25,
            "count": 5
          },
          {
            "start": 9.25,
            "end": 10.96,
            "count": 7
          },
          {
            "start": 10.96,
            "end": 12.68,
            "count": 39
          },
          {
            "start": 12.68,
            "end": 14.4,
            "count": 96
          },
          {
            "start": 14.4,
            "end": 16.11,
            "count": 178
          },
          {
            "start": 16.11,
            "end": 17.83,
            "count": 543
          },
          {
            "start": 17.83,
            "end": 19.54,
            "count": 2482
          },
          {
            "start": 19.54,
            "end": 21.26,
            "count": 9020
          },
          {
            "start": 21.26,
            "end": 22.98,
            "count": 23123
          },
          {
            "start": 22.98,
            "end": 24.69,
            "count": 34121
          },
          {
            "start": 24.69,
            "end": 26.41,
            "count": 40524
          },
          {
            "start": 26.41,
            "end": 28.12,
            "count": 44917
          },
          {
            "start": 28.12,
            "end": 29.84,
            "count": 33670
          },
          {
            "start": 29.84,
            "end": 31.55,
            "count": 21094
          },
          {
            "start": 31.55,
            "end": 33.27,
            "count": 13161
          },
          {
            "start": 33.27,
            "end": 34.99,
            "count": 6892
          },
          {
            "start": 34.99,
            "end": 36.7,
            "count": 2385
          },
          {
            "start": 36.7,
            "end": 38.42,
            "count": 578
          },
          {
            "start": 38.42,
            "end": 40.13,
            "count": 141
          },
          {
            "start": 40.13,
            "end": 41.85,
            "count": 22
          }
        ]
      },
      {
        "title": "Temp Min",
        "bins": [
          {
            "start": -0.5,
            "end": 0.76,
            "count": 9
          },
          {
            "start": 0.76,
            "end": 2.03,
            "count": 13
          },
          {
            "start": 2.03,
            "end": 3.29,
            "count": 53
          },
          {
            "start": 3.29,
            "end": 4.55,
            "count": 149
          },
          {
            "start": 4.55,
            "end": 5.82,
            "count": 360
          },
          {
            "start": 5.82,
            "end": 7.08,
            "count": 817
          },
          {
            "start": 7.08,
            "end": 8.34,
            "count": 1540
          },
          {
            "start": 8.34,
            "end": 9.61,
            "count": 2866
          },
          {
            "start": 9.61,
            "end": 10.87,
            "count": 4889
          },
          {
            "start": 10.87,
            "end": 12.13,
            "count": 8046
          },
          {
            "start": 12.13,
            "end": 13.39,
            "count": 14053
          },
          {
            "start": 13.39,
            "end": 14.66,
            "count": 26770
          },
          {
            "start": 14.66,
            "end": 15.92,
            "count": 33956
          },
          {
            "start": 15.92,
            "end": 17.18,
            "count": 29964
          },
          {
            "start": 17.18,
            "end": 18.45,
            "count": 35080
          },
          {
            "start": 18.45,
            "end": 19.71,
            "count": 38277
          },
          {
            "start": 19.71,
            "end": 20.97,
            "count": 22159
          },
          {
            "start": 20.97,
            "end": 22.24,
            "count": 5719
          },
          {
            "start": 22.24,
            "end": 23.5,
            "count": 2792
          },
          {
            "start": 23.5,
            "end": 24.76,
            "count": 3976
          },
          {
            "start": 24.76,
            "end": 26.03,
            "count": 1390
          },
          {
            "start": 26.03,
            "end": 27.29,
            "count": 122
          }
        ]
      },
      {
        "title": "Humidity",
        "bins": [
          {
            "start": 16.34,
            "end": 20.07,
            "count": 22
          },
          {
            "start": 20.07,
            "end": 23.81,
            "count": 79
          },
          {
            "start": 23.81,
            "end": 27.55,
            "count": 231
          },
          {
            "start": 27.55,
            "end": 31.28,
            "count": 446
          },
          {
            "start": 31.28,
            "end": 35.02,
            "count": 695
          },
          {
            "start": 35.02,
            "end": 38.75,
            "count": 1036
          },
          {
            "start": 38.75,
            "end": 42.48,
            "count": 1388
          },
          {
            "start": 42.48,
            "end": 46.22,
            "count": 1971
          },
          {
            "start": 46.22,
            "end": 49.95,
            "count": 2979
          },
          {
            "start": 49.95,
            "end": 53.69,
            "count": 4223
          },
          {
            "start": 53.69,
            "end": 57.42,
            "count": 6017
          },
          {
            "start": 57.42,
            "end": 61.16,
            "count": 8342
          },
          {
            "start": 61.16,
            "end": 64.89,
            "count": 11443
          },
          {
            "start": 64.89,
            "end": 68.63,
            "count": 14472
          },
          {
            "start": 68.63,
            "end": 72.36,
            "count": 17795
          },
          {
            "start": 72.36,
            "end": 76.1,
            "count": 20771
          },
          {
            "start": 76.1,
            "end": 79.83,
            "count": 24848
          },
          {
            "start": 79.83,
            "end": 83.57,
            "count": 31731
          },
          {
            "start": 83.57,
            "end": 87.31,
            "count": 38296
          },
          {
            "start": 87.31,
            "end": 91.04,
            "count": 31556
          },
          {
            "start": 91.04,
            "end": 94.78,
            "count": 12838
          },
          {
            "start": 94.78,
            "end": 98.51,
            "count": 1821
          }
        ]
      },
      {
        "title": "Solar Radiation",
        "bins": [
          {
            "start": 1.66,
            "end": 3.09,
            "count": 79
          },
          {
            "start": 3.09,
            "end": 4.52,
            "count": 313
          },
          {
            "start": 4.52,
            "end": 5.95,
            "count": 789
          },
          {
            "start": 5.95,
            "end": 7.38,
            "count": 1762
          },
          {
            "start": 7.38,
            "end": 8.81,
            "count": 3269
          },
          {
            "start": 8.81,
            "end": 10.24,
            "count": 5457
          },
          {
            "start": 10.24,
            "end": 11.67,
            "count": 8421
          },
          {
            "start": 11.67,
            "end": 13.1,
            "count": 12443
          },
          {
            "start": 13.1,
            "end": 14.53,
            "count": 17872
          },
          {
            "start": 14.53,
            "end": 15.96,
            "count": 23039
          },
          {
            "start": 15.96,
            "end": 17.38,
            "count": 27025
          },
          {
            "start": 17.38,
            "end": 18.81,
            "count": 28273
          },
          {
            "start": 18.81,
            "end": 20.24,
            "count": 27628
          },
          {
            "start": 20.24,
            "end": 21.67,
            "count": 24519
          },
          {
            "start": 21.67,
            "end": 23.1,
            "count": 19669
          },
          {
            "start": 23.1,
            "end": 24.53,
            "count": 14110
          },
          {
            "start": 24.53,
            "end": 25.96,
            "count": 9095
          },
          {
            "start": 25.96,
            "end": 27.39,
            "count": 5180
          },
          {
            "start": 27.39,
            "end": 28.82,
            "count": 2680
          },
          {
            "start": 28.82,
            "end": 30.25,
            "count": 1074
          },
          {
            "start": 30.25,
            "end": 31.68,
            "count": 255
          },
          {
            "start": 31.68,
            "end": 33.11,
            "count": 20
          }
        ]
      },
      {
        "title": "Precipitation",
        "bins": [
          {
            "start": 0.0,
            "end": 9.44,
            "count": 199858
          },
          {
            "start": 9.44,
            "end": 18.88,
            "count": 23121
          },
          {
            "start": 18.88,
            "end": 28.32,
            "count": 6676
          },
          {
            "start": 28.32,
            "end": 37.76,
            "count": 2039
          },
          {
            "start": 37.76,
            "end": 47.2,
            "count": 709
          },
          {
            "start": 47.2,
            "end": 56.63,
            "count": 281
          },
          {
            "start": 56.63,
            "end": 66.07,
            "count": 130
          },
          {
            "start": 66.07,
            "end": 75.51,
            "count": 59
          },
          {
            "start": 75.51,
            "end": 84.95,
            "count": 36
          },
          {
            "start": 84.95,
            "end": 94.39,
            "count": 21
          },
          {
            "start": 94.39,
            "end": 103.83,
            "count": 13
          },
          {
            "start": 103.83,
            "end": 113.27,
            "count": 13
          },
          {
            "start": 113.27,
            "end": 122.71,
            "count": 6
          },
          {
            "start": 122.71,
            "end": 132.15,
            "count": 5
          },
          {
            "start": 132.15,
            "end": 141.59,
            "count": 6
          },
          {
            "start": 141.59,
            "end": 151.03,
            "count": 5
          },
          {
            "start": 151.03,
            "end": 160.46,
            "count": 4
          },
          {
            "start": 160.46,
            "end": 169.9,
            "count": 5
          },
          {
            "start": 169.9,
            "end": 179.34,
            "count": 3
          },
          {
            "start": 179.34,
            "end": 188.78,
            "count": 5
          },
          {
            "start": 188.78,
            "end": 198.22,
            "count": 3
          },
          {
            "start": 198.22,
            "end": 207.66,
            "count": 2
          }
        ]
      },
      {
        "title": "Coffee Price",
        "bins": [
          {
            "start": 54.89,
            "end": 78.79,
            "count": 617
          },
          {
            "start": 78.79,
            "end": 102.68,
            "count": 833
          },
          {
            "start": 102.68,
            "end": 126.58,
            "count": 447
          },
          {
            "start": 126.58,
            "end": 150.47,
            "count": 1520
          },
          {
            "start": 150.47,
            "end": 174.37,
            "count": 1869
          },
          {
            "start": 174.37,
            "end": 198.26,
            "count": 1168
          },
          {
            "start": 198.26,
            "end": 222.15,
            "count": 559
          },
          {
            "start": 222.15,
            "end": 246.05,
            "count": 604
          },
          {
            "start": 246.05,
            "end": 269.94,
            "count": 413
          },
          {
            "start": 269.94,
            "end": 293.84,
            "count": 253
          },
          {
            "start": 293.84,
            "end": 317.73,
            "count": 412
          },
          {
            "start": 317.73,
            "end": 341.62,
            "count": 197
          },
          {
            "start": 341.62,
            "end": 365.52,
            "count": 141
          },
          {
            "start": 365.52,
            "end": 389.41,
            "count": 52
          },
          {
            "start": 389.41,
            "end": 413.31,
            "count": 28
          },
          {
            "start": 413.31,
            "end": 437.2,
            "count": 54
          },
          {
            "start": 437.2,
            "end": 461.09,
            "count": 25
          },
          {
            "start": 461.09,
            "end": 484.99,
            "count": 27
          },
          {
            "start": 484.99,
            "end": 508.88,
            "count": 36
          },
          {
            "start": 508.88,
            "end": 532.78,
            "count": 42
          },
          {
            "start": 532.78,
            "end": 556.67,
            "count": 19
          },
          {
            "start": 556.67,
            "end": 580.56,
            "count": 4
          }
        ]
      }
    ],
    "monthlyPrice": [
      {
        "date": "2000-01",
        "price": 151.5
      },
      {
        "date": "2000-02",
        "price": 140.64
      },
      {
        "date": "2000-03",
        "price": 138.51
      },
      {
        "date": "2000-04",
        "price": 128.31
      },
      {
        "date": "2000-05",
        "price": 128.15
      },
      {
        "date": "2000-06",
        "price": 118.44
      },
      {
        "date": "2000-07",
        "price": 118.95
      },
      {
        "date": "2000-08",
        "price": 105.55
      },
      {
        "date": "2000-09",
        "price": 102.81
      },
      {
        "date": "2000-10",
        "price": 106.42
      },
      {
        "date": "2000-11",
        "price": 94.04
      },
      {
        "date": "2000-12",
        "price": 86.18
      },
      {
        "date": "2001-01",
        "price": 87.32
      },
      {
        "date": "2001-02",
        "price": 82.92
      },
      {
        "date": "2001-03",
        "price": 81.27
      },
      {
        "date": "2001-04",
        "price": 77.41
      },
      {
        "date": "2001-05",
        "price": 83.42
      },
      {
        "date": "2001-06",
        "price": 76.08
      },
      {
        "date": "2001-07",
        "price": 70.16
      },
      {
        "date": "2001-08",
        "price": 66.95
      },
      {
        "date": "2001-09",
        "price": 64.3
      },
      {
        "date": "2001-10",
        "price": 59.16
      },
      {
        "date": "2001-11",
        "price": 60.68
      },
      {
        "date": "2001-12",
        "price": 59.29
      },
      {
        "date": "2002-01",
        "price": 63.17
      },
      {
        "date": "2002-02",
        "price": 59.81
      },
      {
        "date": "2002-03",
        "price": 69.27
      },
      {
        "date": "2002-04",
        "price": 71.22
      },
      {
        "date": "2002-05",
        "price": 65.34
      },
      {
        "date": "2002-06",
        "price": 63.74
      },
      {
        "date": "2002-07",
        "price": 64.22
      },
      {
        "date": "2002-08",
        "price": 63.73
      },
      {
        "date": "2002-09",
        "price": 74.88
      },
      {
        "date": "2002-10",
        "price": 81.9
      },
      {
        "date": "2002-11",
        "price": 87.38
      },
      {
        "date": "2002-12",
        "price": 81.67
      },
      {
        "date": "2003-01",
        "price": 85.73
      },
      {
        "date": "2003-02",
        "price": 83.23
      },
      {
        "date": "2003-03",
        "price": 77.01
      },
      {
        "date": "2003-04",
        "price": 81.99
      },
      {
        "date": "2003-05",
        "price": 86.46
      },
      {
        "date": "2003-06",
        "price": 77.72
      },
      {
        "date": "2003-07",
        "price": 80.59
      },
      {
        "date": "2003-08",
        "price": 81.63
      },
      {
        "date": "2003-09",
        "price": 85.36
      },
      {
        "date": "2003-10",
        "price": 82.45
      },
      {
        "date": "2003-11",
        "price": 77.67
      },
      {
        "date": "2003-12",
        "price": 83.03
      },
      {
        "date": "2004-01",
        "price": 94.41
      },
      {
        "date": "2004-02",
        "price": 96.61
      },
      {
        "date": "2004-03",
        "price": 97.91
      },
      {
        "date": "2004-04",
        "price": 93.27
      },
      {
        "date": "2004-05",
        "price": 96.63
      },
      {
        "date": "2004-06",
        "price": 103.41
      },
      {
        "date": "2004-07",
        "price": 91.8
      },
      {
        "date": "2004-08",
        "price": 89.44
      },
      {
        "date": "2004-09",
        "price": 99.48
      },
      {
        "date": "2004-10",
        "price": 100.53
      },
      {
        "date": "2004-11",
        "price": 111.67
      },
      {
        "date": "2004-12",
        "price": 131.52
      },
      {
        "date": "2005-01",
        "price": 134.32
      },
      {
        "date": "2005-02",
        "price": 150.97
      },
      {
        "date": "2005-03",
        "price": 168.58
      },
      {
        "date": "2005-04",
        "price": 159.55
      },
      {
        "date": "2005-05",
        "price": 158.58
      },
      {
        "date": "2005-06",
        "price": 148.79
      },
      {
        "date": "2005-07",
        "price": 134.71
      },
      {
        "date": "2005-08",
        "price": 131.75
      },
      {
        "date": "2005-09",
        "price": 121.9
      },
      {
        "date": "2005-10",
        "price": 131.15
      },
      {
        "date": "2005-11",
        "price": 132.71
      },
      {
        "date": "2005-12",
        "price": 129.03
      },
      {
        "date": "2006-01",
        "price": 157.24
      },
      {
        "date": "2006-02",
        "price": 148.43
      },
      {
        "date": "2006-03",
        "price": 140.95
      },
      {
        "date": "2006-04",
        "price": 142.86
      },
      {
        "date": "2006-05",
        "price": 135.3
      },
      {
        "date": "2006-06",
        "price": 127.84
      },
      {
        "date": "2006-07",
        "price": 129.59
      },
      {
        "date": "2006-08",
        "price": 138.6
      },
      {
        "date": "2006-09",
        "price": 136.49
      },
      {
        "date": "2006-10",
        "price": 138.41
      },
      {
        "date": "2006-11",
        "price": 152.34
      },
      {
        "date": "2006-12",
        "price": 164.03
      },
      {
        "date": "2007-01",
        "price": 158.36
      },
      {
        "date": "2007-02",
        "price": 153.59
      },
      {
        "date": "2007-03",
        "price": 147.46
      },
      {
        "date": "2007-04",
        "price": 143.39
      },
      {
        "date": "2007-05",
        "price": 141.78
      },
      {
        "date": "2007-06",
        "price": 151.08
      },
      {
        "date": "2007-07",
        "price": 146.49
      },
      {
        "date": "2007-08",
        "price": 153.7
      },
      {
        "date": "2007-09",
        "price": 161.18
      },
      {
        "date": "2007-10",
        "price": 171.66
      },
      {
        "date": "2007-11",
        "price": 162.27
      },
      {
        "date": "2007-12",
        "price": 173.17
      },
      {
        "date": "2008-01",
        "price": 177.64
      },
      {
        "date": "2008-02",
        "price": 200.03
      },
      {
        "date": "2008-03",
        "price": 189.66
      },
      {
        "date": "2008-04",
        "price": 175.68
      },
      {
        "date": "2008-05",
        "price": 177.69
      },
      {
        "date": "2008-06",
        "price": 184.65
      },
      {
        "date": "2008-07",
        "price": 185.53
      },
      {
        "date": "2008-08",
        "price": 183.03
      },
      {
        "date": "2008-09",
        "price": 179.13
      },
      {
        "date": "2008-10",
        "price": 152.05
      },
      {
        "date": "2008-11",
        "price": 148.21
      },
      {
        "date": "2008-12",
        "price": 143.41
      },
      {
        "date": "2009-01",
        "price": 153.81
      },
      {
        "date": "2009-02",
        "price": 150.47
      },
      {
        "date": "2009-03",
        "price": 146.31
      },
      {
        "date": "2009-04",
        "price": 153.87
      },
      {
        "date": "2009-05",
        "price": 171.25
      },
      {
        "date": "2009-06",
        "price": 165.82
      },
      {
        "date": "2009-07",
        "price": 155.82
      },
      {
        "date": "2009-08",
        "price": 169.31
      },
      {
        "date": "2009-09",
        "price": 169.23
      },
      {
        "date": "2009-10",
        "price": 180.95
      },
      {
        "date": "2009-11",
        "price": 180.95
      },
      {
        "date": "2009-12",
        "price": 188.14
      },
      {
        "date": "2010-01",
        "price": 184.61
      },
      {
        "date": "2010-02",
        "price": 174.06
      },
      {
        "date": "2010-03",
        "price": 174.38
      },
      {
        "date": "2010-04",
        "price": 176.22
      },
      {
        "date": "2010-05",
        "price": 177.66
      },
      {
        "date": "2010-06",
        "price": 199.49
      },
      {
        "date": "2010-07",
        "price": 216.71
      },
      {
        "date": "2010-08",
        "price": 230.01
      },
      {
        "date": "2010-09",
        "price": 245.87
      },
      {
        "date": "2010-10",
        "price": 250.3
      },
      {
        "date": "2010-11",
        "price": 270.74
      },
      {
        "date": "2010-12",
        "price": 291.9
      },
      {
        "date": "2011-01",
        "price": 313.23
      },
      {
        "date": "2011-02",
        "price": 343.55
      },
      {
        "date": "2011-03",
        "price": 360.2
      },
      {
        "date": "2011-04",
        "price": 372.74
      },
      {
        "date": "2011-05",
        "price": 362.12
      },
      {
        "date": "2011-06",
        "price": 341.46
      },
      {
        "date": "2011-07",
        "price": 333.95
      },
      {
        "date": "2011-08",
        "price": 339.0
      },
      {
        "date": "2011-09",
        "price": 346.58
      },
      {
        "date": "2011-10",
        "price": 308.69
      },
      {
        "date": "2011-11",
        "price": 305.63
      },
      {
        "date": "2011-12",
        "price": 294.09
      },
      {
        "date": "2012-01",
        "price": 295.42
      },
      {
        "date": "2012-02",
        "price": 275.8
      },
      {
        "date": "2012-03",
        "price": 246.21
      },
      {
        "date": "2012-04",
        "price": 236.73
      },
      {
        "date": "2012-05",
        "price": 229.58
      },
      {
        "date": "2012-06",
        "price": 207.21
      },
      {
        "date": "2012-07",
        "price": 237.79
      },
      {
        "date": "2012-08",
        "price": 219.23
      },
      {
        "date": "2012-09",
        "price": 226.6
      },
      {
        "date": "2012-10",
        "price": 216.94
      },
      {
        "date": "2012-11",
        "price": 195.45
      },
      {
        "date": "2012-12",
        "price": 188.09
      },
      {
        "date": "2013-01",
        "price": 198.9
      },
      {
        "date": "2013-02",
        "price": 187.18
      },
      {
        "date": "2013-03",
        "price": 183.45
      },
      {
        "date": "2013-04",
        "price": 181.66
      },
      {
        "date": "2013-05",
        "price": 179.63
      },
      {
        "date": "2013-06",
        "price": 163.07
      },
      {
        "date": "2013-07",
        "price": 161.85
      },
      {
        "date": "2013-08",
        "price": 155.7
      },
      {
        "date": "2013-09",
        "price": 151.19
      },
      {
        "date": "2013-10",
        "price": 149.51
      },
      {
        "date": "2013-11",
        "price": 139.98
      },
      {
        "date": "2013-12",
        "price": 148.34
      },
      {
        "date": "2014-01",
        "price": 155.11
      },
      {
        "date": "2014-02",
        "price": 198.79
      },
      {
        "date": "2014-03",
        "price": 247.88
      },
      {
        "date": "2014-04",
        "price": 261.16
      },
      {
        "date": "2014-05",
        "price": 246.62
      },
      {
        "date": "2014-06",
        "price": 227.52
      },
      {
        "date": "2014-07",
        "price": 225.76
      },
      {
        "date": "2014-08",
        "price": 248.24
      },
      {
        "date": "2014-09",
        "price": 245.83
      },
      {
        "date": "2014-10",
        "price": 271.99
      },
      {
        "date": "2014-11",
        "price": 248.96
      },
      {
        "date": "2014-12",
        "price": 230.86
      },
      {
        "date": "2015-01",
        "price": 223.31
      },
      {
        "date": "2015-02",
        "price": 206.08
      },
      {
        "date": "2015-03",
        "price": 178.77
      },
      {
        "date": "2015-04",
        "price": 183.4
      },
      {
        "date": "2015-05",
        "price": 174.0
      },
      {
        "date": "2015-06",
        "price": 174.23
      },
      {
        "date": "2015-07",
        "price": 164.59
      },
      {
        "date": "2015-08",
        "price": 167.94
      },
      {
        "date": "2015-09",
        "price": 154.17
      },
      {
        "date": "2015-10",
        "price": 165.31
      },
      {
        "date": "2015-11",
        "price": 156.63
      },
      {
        "date": "2015-12",
        "price": 159.0
      },
      {
        "date": "2016-01",
        "price": 155.78
      },
      {
        "date": "2016-02",
        "price": 153.89
      },
      {
        "date": "2016-03",
        "price": 165.56
      },
      {
        "date": "2016-04",
        "price": 162.71
      },
      {
        "date": "2016-05",
        "price": 164.23
      },
      {
        "date": "2016-06",
        "price": 179.21
      },
      {
        "date": "2016-07",
        "price": 191.09
      },
      {
        "date": "2016-08",
        "price": 186.43
      },
      {
        "date": "2016-09",
        "price": 199.7
      },
      {
        "date": "2016-10",
        "price": 205.5
      },
      {
        "date": "2016-11",
        "price": 212.24
      },
      {
        "date": "2016-12",
        "price": 182.9
      },
      {
        "date": "2017-01",
        "price": 195.97
      },
      {
        "date": "2017-02",
        "price": 192.62
      },
      {
        "date": "2017-03",
        "price": 185.4
      },
      {
        "date": "2017-04",
        "price": 179.65
      },
      {
        "date": "2017-05",
        "price": 174.41
      },
      {
        "date": "2017-06",
        "price": 164.07
      },
      {
        "date": "2017-07",
        "price": 173.28
      },
      {
        "date": "2017-08",
        "price": 176.92
      },
      {
        "date": "2017-09",
        "price": 174.72
      },
      {
        "date": "2017-10",
        "price": 167.24
      },
      {
        "date": "2017-11",
        "price": 166.0
      },
      {
        "date": "2017-12",
        "price": 161.52
      },
      {
        "date": "2018-01",
        "price": 164.22
      },
      {
        "date": "2018-02",
        "price": 159.3
      },
      {
        "date": "2018-03",
        "price": 157.05
      },
      {
        "date": "2018-04",
        "price": 155.12
      },
      {
        "date": "2018-05",
        "price": 156.27
      },
      {
        "date": "2018-06",
        "price": 153.52
      },
      {
        "date": "2018-07",
        "price": 144.65
      },
      {
        "date": "2018-08",
        "price": 136.48
      },
      {
        "date": "2018-09",
        "price": 129.74
      },
      {
        "date": "2018-10",
        "price": 152.59
      },
      {
        "date": "2018-11",
        "price": 148.39
      },
      {
        "date": "2018-12",
        "price": 132.39
      },
      {
        "date": "2019-01",
        "price": 137.04
      },
      {
        "date": "2019-02",
        "price": 131.78
      },
      {
        "date": "2019-03",
        "price": 125.23
      },
      {
        "date": "2019-04",
        "price": 121.36
      },
      {
        "date": "2019-05",
        "price": 120.76
      },
      {
        "date": "2019-06",
        "price": 133.75
      },
      {
        "date": "2019-07",
        "price": 139.08
      },
      {
        "date": "2019-08",
        "price": 125.29
      },
      {
        "date": "2019-09",
        "price": 129.23
      },
      {
        "date": "2019-10",
        "price": 128.66
      },
      {
        "date": "2019-11",
        "price": 145.29
      },
      {
        "date": "2019-12",
        "price": 170.07
      },
      {
        "date": "2020-01",
        "price": 151.99
      },
      {
        "date": "2020-02",
        "price": 138.14
      },
      {
        "date": "2020-03",
        "price": 150.76
      },
      {
        "date": "2020-04",
        "price": 150.52
      },
      {
        "date": "2020-05",
        "price": 138.48
      },
      {
        "date": "2020-06",
        "price": 127.63
      },
      {
        "date": "2020-07",
        "price": 136.11
      },
      {
        "date": "2020-08",
        "price": 157.47
      },
      {
        "date": "2020-09",
        "price": 161.81
      },
      {
        "date": "2020-10",
        "price": 142.26
      },
      {
        "date": "2020-11",
        "price": 148.27
      },
      {
        "date": "2020-12",
        "price": 160.78
      },
      {
        "date": "2021-01",
        "price": 165.31
      },
      {
        "date": "2021-02",
        "price": 168.18
      },
      {
        "date": "2021-03",
        "price": 170.72
      },
      {
        "date": "2021-04",
        "price": 173.42
      },
      {
        "date": "2021-05",
        "price": 198.2
      },
      {
        "date": "2021-06",
        "price": 206.83
      },
      {
        "date": "2021-07",
        "price": 221.71
      },
      {
        "date": "2021-08",
        "price": 240.44
      },
      {
        "date": "2021-09",
        "price": 250.33
      },
      {
        "date": "2021-10",
        "price": 268.11
      },
      {
        "date": "2021-11",
        "price": 295.25
      },
      {
        "date": "2021-12",
        "price": 310.83
      },
      {
        "date": "2022-01",
        "price": 312.36
      },
      {
        "date": "2022-02",
        "price": 325.28
      },
      {
        "date": "2022-03",
        "price": 295.24
      },
      {
        "date": "2022-04",
        "price": 298.96
      },
      {
        "date": "2022-05",
        "price": 289.16
      },
      {
        "date": "2022-06",
        "price": 305.0
      },
      {
        "date": "2022-07",
        "price": 286.12
      },
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
    "recentPrice": [
      {
        "date": "2024-07-10",
        "price": 325.0,
        "movingAverage": 303.19
      },
      {
        "date": "2024-07-11",
        "price": 326.39,
        "movingAverage": 304.34
      },
      {
        "date": "2024-07-12",
        "price": 331.29,
        "movingAverage": 305.49
      },
      {
        "date": "2024-07-13",
        "price": 331.29,
        "movingAverage": 306.57
      },
      {
        "date": "2024-07-14",
        "price": 331.29,
        "movingAverage": 307.73
      },
      {
        "date": "2024-07-15",
        "price": 322.95,
        "movingAverage": 308.61
      },
      {
        "date": "2024-07-16",
        "price": 324.61,
        "movingAverage": 309.55
      },
      {
        "date": "2024-07-17",
        "price": 327.19,
        "movingAverage": 310.44
      },
      {
        "date": "2024-07-18",
        "price": 321.96,
        "movingAverage": 311.19
      },
      {
        "date": "2024-07-19",
        "price": 315.08,
        "movingAverage": 311.72
      },
      {
        "date": "2024-07-20",
        "price": 315.08,
        "movingAverage": 312.07
      },
      {
        "date": "2024-07-21",
        "price": 315.08,
        "movingAverage": 312.58
      },
      {
        "date": "2024-07-22",
        "price": 321.5,
        "movingAverage": 313.31
      },
      {
        "date": "2024-07-23",
        "price": 316.27,
        "movingAverage": 313.86
      },
      {
        "date": "2024-07-24",
        "price": 305.76,
        "movingAverage": 313.56
      },
      {
        "date": "2024-07-25",
        "price": 310.45,
        "movingAverage": 313.71
      },
      {
        "date": "2024-07-26",
        "price": 304.57,
        "movingAverage": 313.89
      },
      {
        "date": "2024-07-27",
        "price": 304.57,
        "movingAverage": 313.97
      },
      {
        "date": "2024-07-28",
        "price": 304.57,
        "movingAverage": 314.03
      },
      {
        "date": "2024-07-29",
        "price": 304.77,
        "movingAverage": 314.1
      },
      {
        "date": "2024-07-30",
        "price": 305.3,
        "movingAverage": 314.18
      },
      {
        "date": "2024-07-31",
        "price": 303.18,
        "movingAverage": 314.29
      },
      {
        "date": "2024-08-01",
        "price": 300.6,
        "movingAverage": 314.21
      },
      {
        "date": "2024-08-02",
        "price": 304.9,
        "movingAverage": 314.41
      },
      {
        "date": "2024-08-03",
        "price": 304.9,
        "movingAverage": 314.61
      },
      {
        "date": "2024-08-04",
        "price": 304.9,
        "movingAverage": 314.62
      },
      {
        "date": "2024-08-05",
        "price": 298.55,
        "movingAverage": 314.41
      },
      {
        "date": "2024-08-06",
        "price": 312.11,
        "movingAverage": 314.66
      },
      {
        "date": "2024-08-07",
        "price": 325.8,
        "movingAverage": 315.11
      },
      {
        "date": "2024-08-08",
        "price": 324.48,
        "movingAverage": 314.81
      },
      {
        "date": "2024-08-09",
        "price": 309.59,
        "movingAverage": 314.3
      },
      {
        "date": "2024-08-10",
        "price": 309.59,
        "movingAverage": 313.74
      },
      {
        "date": "2024-08-11",
        "price": 309.59,
        "movingAverage": 313.02
      },
      {
        "date": "2024-08-12",
        "price": 318.59,
        "movingAverage": 312.59
      },
      {
        "date": "2024-08-13",
        "price": 307.81,
        "movingAverage": 311.81
      },
      {
        "date": "2024-08-14",
        "price": 313.5,
        "movingAverage": 311.49
      },
      {
        "date": "2024-08-15",
        "price": 317.33,
        "movingAverage": 311.25
      },
      {
        "date": "2024-08-16",
        "price": 324.67,
        "movingAverage": 311.17
      },
      {
        "date": "2024-08-17",
        "price": 324.67,
        "movingAverage": 311.26
      },
      {
        "date": "2024-08-18",
        "price": 324.67,
        "movingAverage": 311.58
      },
      {
        "date": "2024-08-19",
        "price": 325.27,
        "movingAverage": 311.92
      },
      {
        "date": "2024-08-20",
        "price": 329.96,
        "movingAverage": 312.41
      },
      {
        "date": "2024-08-21",
        "price": 329.96,
        "movingAverage": 312.7
      },
      {
        "date": "2024-08-22",
        "price": 326.46,
        "movingAverage": 313.04
      },
      {
        "date": "2024-08-23",
        "price": 332.28,
        "movingAverage": 313.92
      },
      {
        "date": "2024-08-24",
        "price": 332.28,
        "movingAverage": 314.65
      },
      {
        "date": "2024-08-25",
        "price": 332.28,
        "movingAverage": 315.57
      },
      {
        "date": "2024-08-26",
        "price": 335.52,
        "movingAverage": 316.6
      },
      {
        "date": "2024-08-27",
        "price": 343.13,
        "movingAverage": 317.89
      },
      {
        "date": "2024-08-28",
        "price": 344.52,
        "movingAverage": 319.21
      },
      {
        "date": "2024-08-29",
        "price": 333.07,
        "movingAverage": 320.14
      },
      {
        "date": "2024-08-30",
        "price": 328.31,
        "movingAverage": 320.98
      },
      {
        "date": "2024-08-31",
        "price": 328.31,
        "movingAverage": 321.9
      },
      {
        "date": "2024-09-01",
        "price": 328.31,
        "movingAverage": 322.68
      },
      {
        "date": "2024-09-02",
        "price": 328.31,
        "movingAverage": 323.46
      },
      {
        "date": "2024-09-03",
        "price": 326.39,
        "movingAverage": 324.18
      },
      {
        "date": "2024-09-04",
        "price": 324.81,
        "movingAverage": 325.05
      },
      {
        "date": "2024-09-05",
        "price": 326.2,
        "movingAverage": 325.52
      },
      {
        "date": "2024-09-06",
        "price": 317.53,
        "movingAverage": 325.25
      },
      {
        "date": "2024-09-07",
        "price": 317.53,
        "movingAverage": 325.02
      },
      {
        "date": "2024-09-08",
        "price": 317.53,
        "movingAverage": 325.28
      },
      {
        "date": "2024-09-09",
        "price": 329.96,
        "movingAverage": 325.96
      },
      {
        "date": "2024-09-10",
        "price": 328.05,
        "movingAverage": 326.57
      },
      {
        "date": "2024-09-11",
        "price": 329.96,
        "movingAverage": 326.95
      },
      {
        "date": "2024-09-12",
        "price": 333.34,
        "movingAverage": 327.8
      },
      {
        "date": "2024-09-13",
        "price": 346.63,
        "movingAverage": 328.91
      },
      {
        "date": "2024-09-14",
        "price": 346.63,
        "movingAverage": 329.89
      },
      {
        "date": "2024-09-15",
        "price": 346.63,
        "movingAverage": 330.62
      },
      {
        "date": "2024-09-16",
        "price": 342.66,
        "movingAverage": 331.22
      },
      {
        "date": "2024-09-17",
        "price": 350.53,
        "movingAverage": 332.08
      },
      {
        "date": "2024-09-18",
        "price": 348.09,
        "movingAverage": 332.84
      },
      {
        "date": "2024-09-19",
        "price": 346.1,
        "movingAverage": 333.38
      },
      {
        "date": "2024-09-20",
        "price": 331.68,
        "movingAverage": 333.44
      },
      {
        "date": "2024-09-21",
        "price": 331.68,
        "movingAverage": 333.61
      },
      {
        "date": "2024-09-22",
        "price": 331.68,
        "movingAverage": 333.59
      },
      {
        "date": "2024-09-23",
        "price": 348.75,
        "movingAverage": 334.14
      },
      {
        "date": "2024-09-24",
        "price": 354.24,
        "movingAverage": 334.87
      },
      {
        "date": "2024-09-25",
        "price": 355.96,
        "movingAverage": 335.55
      },
      {
        "date": "2024-09-26",
        "price": 362.31,
        "movingAverage": 336.19
      },
      {
        "date": "2024-09-27",
        "price": 356.02,
        "movingAverage": 336.57
      },
      {
        "date": "2024-09-28",
        "price": 356.02,
        "movingAverage": 337.34
      },
      {
        "date": "2024-09-29",
        "price": 356.02,
        "movingAverage": 338.26
      },
      {
        "date": "2024-09-30",
        "price": 357.48,
        "movingAverage": 339.24
      },
      {
        "date": "2024-10-01",
        "price": 349.41,
        "movingAverage": 339.94
      },
      {
        "date": "2024-10-02",
        "price": 339.29,
        "movingAverage": 340.3
      },
      {
        "date": "2024-10-03",
        "price": 333.4,
        "movingAverage": 340.54
      },
      {
        "date": "2024-10-04",
        "price": 340.41,
        "movingAverage": 341.06
      },
      {
        "date": "2024-10-05",
        "price": 340.41,
        "movingAverage": 341.53
      },
      {
        "date": "2024-10-06",
        "price": 340.41,
        "movingAverage": 342.3
      },
      {
        "date": "2024-10-07",
        "price": 323.62,
        "movingAverage": 342.5
      },
      {
        "date": "2024-10-08",
        "price": 328.31,
        "movingAverage": 342.86
      },
      {
        "date": "2024-10-09",
        "price": 330.76,
        "movingAverage": 342.88
      },
      {
        "date": "2024-10-10",
        "price": 336.98,
        "movingAverage": 343.18
      },
      {
        "date": "2024-10-11",
        "price": 333.4,
        "movingAverage": 343.3
      },
      {
        "date": "2024-10-12",
        "price": 333.4,
        "movingAverage": 343.3
      },
      {
        "date": "2024-10-13",
        "price": 333.4,
        "movingAverage": 342.86
      },
      {
        "date": "2024-10-14",
        "price": 346.63,
        "movingAverage": 342.86
      },
      {
        "date": "2024-10-15",
        "price": 339.56,
        "movingAverage": 342.62
      },
      {
        "date": "2024-10-16",
        "price": 341.27,
        "movingAverage": 342.58
      },
      {
        "date": "2024-10-17",
        "price": 337.5,
        "movingAverage": 342.14
      },
      {
        "date": "2024-10-18",
        "price": 340.35,
        "movingAverage": 341.88
      },
      {
        "date": "2024-10-19",
        "price": 340.35,
        "movingAverage": 341.69
      },
      {
        "date": "2024-10-20",
        "price": 340.35,
        "movingAverage": 341.98
      },
      {
        "date": "2024-10-21",
        "price": 332.94,
        "movingAverage": 342.02
      },
      {
        "date": "2024-10-22",
        "price": 330.49,
        "movingAverage": 341.98
      },
      {
        "date": "2024-10-23",
        "price": 333.8,
        "movingAverage": 341.48
      },
      {
        "date": "2024-10-24",
        "price": 324.67,
        "movingAverage": 340.5
      },
      {
        "date": "2024-10-25",
        "price": 328.58,
        "movingAverage": 339.59
      },
      {
        "date": "2024-10-26",
        "price": 328.58,
        "movingAverage": 338.46
      },
      {
        "date": "2024-10-27",
        "price": 328.58,
        "movingAverage": 337.55
      },
      {
        "date": "2024-10-28",
        "price": 333.8,
        "movingAverage": 336.81
      },
      {
        "date": "2024-10-29",
        "price": 328.18,
        "movingAverage": 335.88
      },
      {
        "date": "2024-10-30",
        "price": 330.16,
        "movingAverage": 334.97
      },
      {
        "date": "2024-10-31",
        "price": 325.27,
        "movingAverage": 334.16
      },
      {
        "date": "2024-11-01",
        "price": 321.37,
        "movingAverage": 333.57
      },
      {
        "date": "2024-11-02",
        "price": 321.37,
        "movingAverage": 333.16
      },
      {
        "date": "2024-11-03",
        "price": 321.37,
        "movingAverage": 332.53
      },
      {
        "date": "2024-11-04",
        "price": 325.34,
        "movingAverage": 332.03
      },
      {
        "date": "2024-11-05",
        "price": 330.89,
        "movingAverage": 331.71
      },
      {
        "date": "2024-11-06",
        "price": 329.04,
        "movingAverage": 331.89
      },
      {
        "date": "2024-11-07",
        "price": 344.45,
        "movingAverage": 332.43
      },
      {
        "date": "2024-11-08",
        "price": 335.12,
        "movingAverage": 332.57
      },
      {
        "date": "2024-11-09",
        "price": 335.12,
        "movingAverage": 332.51
      },
      {
        "date": "2024-11-10",
        "price": 335.12,
        "movingAverage": 332.57
      },
      {
        "date": "2024-11-11",
        "price": 338.89,
        "movingAverage": 332.75
      },
      {
        "date": "2024-11-12",
        "price": 348.62,
        "movingAverage": 333.26
      },
      {
        "date": "2024-11-13",
        "price": 359.33,
        "movingAverage": 333.68
      },
      {
        "date": "2024-11-14",
        "price": 368.99,
        "movingAverage": 334.66
      },
      {
        "date": "2024-11-15",
        "price": 372.76,
        "movingAverage": 335.71
      },
      {
        "date": "2024-11-16",
        "price": 372.76,
        "movingAverage": 336.89
      },
      {
        "date": "2024-11-17",
        "price": 372.76,
        "movingAverage": 337.97
      },
      {
        "date": "2024-11-18",
        "price": 371.37,
        "movingAverage": 339.0
      },
      {
        "date": "2024-11-19",
        "price": 370.04,
        "movingAverage": 339.99
      },
      {
        "date": "2024-11-20",
        "price": 390.61,
        "movingAverage": 341.91
      },
      {
        "date": "2024-11-21",
        "price": 395.05,
        "movingAverage": 344.07
      },
      {
        "date": "2024-11-22",
        "price": 403.78,
        "movingAverage": 346.4
      },
      {
        "date": "2024-11-23",
        "price": 403.78,
        "movingAverage": 349.03
      },
      {
        "date": "2024-11-24",
        "price": 403.78,
        "movingAverage": 351.54
      },
      {
        "date": "2024-11-25",
        "price": 407.88,
        "movingAverage": 354.18
      },
      {
        "date": "2024-11-26",
        "price": 412.9,
        "movingAverage": 357.0
      },
      {
        "date": "2024-11-27",
        "price": 431.42,
        "movingAverage": 360.25
      },
      {
        "date": "2024-11-28",
        "price": 431.42,
        "movingAverage": 363.69
      },
      {
        "date": "2024-11-29",
        "price": 425.47,
        "movingAverage": 366.87
      },
      {
        "date": "2024-11-30",
        "price": 425.47,
        "movingAverage": 370.21
      },
      {
        "date": "2024-12-01",
        "price": 425.47,
        "movingAverage": 373.68
      },
      {
        "date": "2024-12-02",
        "price": 395.77,
        "movingAverage": 376.16
      },
      {
        "date": "2024-12-03",
        "price": 393.79,
        "movingAverage": 378.57
      },
      {
        "date": "2024-12-04",
        "price": 404.7,
        "movingAverage": 381.22
      },
      {
        "date": "2024-12-05",
        "price": 417.66,
        "movingAverage": 384.11
      },
      {
        "date": "2024-12-06",
        "price": 439.82,
        "movingAverage": 387.8
      },
      {
        "date": "2024-12-07",
        "price": 439.82,
        "movingAverage": 390.98
      },
      {
        "date": "2024-12-08",
        "price": 439.82,
        "movingAverage": 394.47
      },
      {
        "date": "2024-12-09",
        "price": 439.56,
        "movingAverage": 397.95
      },
      {
        "date": "2024-12-10",
        "price": 443.99,
        "movingAverage": 401.58
      },
      {
        "date": "2024-12-11",
        "price": 425.54,
        "movingAverage": 404.47
      },
      {
        "date": "2024-12-12",
        "price": 426.73,
        "movingAverage": 407.07
      },
      {
        "date": "2024-12-13",
        "price": 424.41,
        "movingAverage": 409.24
      },
      {
        "date": "2024-12-14",
        "price": 424.41,
        "movingAverage": 411.09
      },
      {
        "date": "2024-12-15",
        "price": 424.41,
        "movingAverage": 412.81
      },
      {
        "date": "2024-12-16",
        "price": 434.86,
        "movingAverage": 414.88
      },
      {
        "date": "2024-12-17",
        "price": 430.5,
        "movingAverage": 416.81
      },
      {
        "date": "2024-12-18",
        "price": 440.68,
        "movingAverage": 419.12
      },
      {
        "date": "2024-12-19",
        "price": 428.25,
        "movingAverage": 421.06
      },
      {
        "date": "2024-12-20",
        "price": 429.9,
        "movingAverage": 422.37
      },
      {
        "date": "2024-12-21",
        "price": 429.9,
        "movingAverage": 423.53
      },
      {
        "date": "2024-12-22",
        "price": 429.9,
        "movingAverage": 424.4
      },
      {
        "date": "2024-12-23",
        "price": 432.88,
        "movingAverage": 425.37
      },
      {
        "date": "2024-12-24",
        "price": 434.66,
        "movingAverage": 426.4
      },
      {
        "date": "2024-12-25",
        "price": 434.66,
        "movingAverage": 427.29
      },
      {
        "date": "2024-12-26",
        "price": 429.44,
        "movingAverage": 427.84
      },
      {
        "date": "2024-12-27",
        "price": 426.79,
        "movingAverage": 427.69
      },
      {
        "date": "2024-12-28",
        "price": 426.79,
        "movingAverage": 427.53
      },
      {
        "date": "2024-12-29",
        "price": 426.79,
        "movingAverage": 427.58
      },
      {
        "date": "2024-12-30",
        "price": 424.61,
        "movingAverage": 427.55
      },
      {
        "date": "2024-12-31",
        "price": 422.96,
        "movingAverage": 427.47
      },
      {
        "date": "2025-01-01",
        "price": 422.96,
        "movingAverage": 428.37
      },
      {
        "date": "2025-01-02",
        "price": 432.35,
        "movingAverage": 429.66
      },
      {
        "date": "2025-01-03",
        "price": 421.5,
        "movingAverage": 430.22
      },
      {
        "date": "2025-01-04",
        "price": 421.5,
        "movingAverage": 430.35
      },
      {
        "date": "2025-01-05",
        "price": 421.5,
        "movingAverage": 429.73
      },
      {
        "date": "2025-01-06",
        "price": 421.43,
        "movingAverage": 429.12
      },
      {
        "date": "2025-01-07",
        "price": 423.95,
        "movingAverage": 428.59
      },
      {
        "date": "2025-01-08",
        "price": 418.59,
        "movingAverage": 427.89
      },
      {
        "date": "2025-01-09",
        "price": 421.3,
        "movingAverage": 427.14
      },
      {
        "date": "2025-01-10",
        "price": 428.38,
        "movingAverage": 427.23
      },
      {
        "date": "2025-01-11",
        "price": 428.38,
        "movingAverage": 427.29
      },
      {
        "date": "2025-01-12",
        "price": 428.38,
        "movingAverage": 427.42
      },
      {
        "date": "2025-01-13",
        "price": 431.16,
        "movingAverage": 427.64
      },
      {
        "date": "2025-01-14",
        "price": 425.87,
        "movingAverage": 427.69
      },
      {
        "date": "2025-01-15",
        "price": 437.11,
        "movingAverage": 427.77
      },
      {
        "date": "2025-01-16",
        "price": 432.74,
        "movingAverage": 427.84
      },
      {
        "date": "2025-01-17",
        "price": 434.33,
        "movingAverage": 427.63
      },
      {
        "date": "2025-01-18",
        "price": 434.33,
        "movingAverage": 427.83
      },
      {
        "date": "2025-01-19",
        "price": 434.33,
        "movingAverage": 427.98
      },
      {
        "date": "2025-01-20",
        "price": 434.33,
        "movingAverage": 428.13
      },
      {
        "date": "2025-01-21",
        "price": 433.6,
        "movingAverage": 428.25
      },
      {
        "date": "2025-01-22",
        "price": 452.19,
        "movingAverage": 428.9
      },
      {
        "date": "2025-01-23",
        "price": 454.97,
        "movingAverage": 429.57
      },
      {
        "date": "2025-01-24",
        "price": 459.73,
        "movingAverage": 430.41
      },
      {
        "date": "2025-01-25",
        "price": 459.73,
        "movingAverage": 431.42
      },
      {
        "date": "2025-01-26",
        "price": 459.73,
        "movingAverage": 432.52
      },
      {
        "date": "2025-01-27",
        "price": 461.91,
        "movingAverage": 433.69
      },
      {
        "date": "2025-01-28",
        "price": 472.89,
        "movingAverage": 435.22
      },
      {
        "date": "2025-01-29",
        "price": 484.86,
        "movingAverage": 437.23
      },
      {
        "date": "2025-01-30",
        "price": 493.92,
        "movingAverage": 439.6
      },
      {
        "date": "2025-01-31",
        "price": 499.81,
        "movingAverage": 442.16
      },
      {
        "date": "2025-02-01",
        "price": 499.81,
        "movingAverage": 444.41
      },
      {
        "date": "2025-02-02",
        "price": 499.81,
        "movingAverage": 447.02
      },
      {
        "date": "2025-02-03",
        "price": 503.84,
        "movingAverage": 449.76
      },
      {
        "date": "2025-02-04",
        "price": 507.08,
        "movingAverage": 452.62
      },
      {
        "date": "2025-02-05",
        "price": 526.13,
        "movingAverage": 456.11
      },
      {
        "date": "2025-02-06",
        "price": 534.33,
        "movingAverage": 459.79
      },
      {
        "date": "2025-02-07",
        "price": 534.86,
        "movingAverage": 463.66
      },
      {
        "date": "2025-02-08",
        "price": 534.86,
        "movingAverage": 467.45
      },
      {
        "date": "2025-02-09",
        "price": 534.86,
        "movingAverage": 471.0
      },
      {
        "date": "2025-02-10",
        "price": 567.53,
        "movingAverage": 475.64
      },
      {
        "date": "2025-02-11",
        "price": 546.9,
        "movingAverage": 479.59
      },
      {
        "date": "2025-02-12",
        "price": 571.17,
        "movingAverage": 484.25
      },
      {
        "date": "2025-02-13",
        "price": 580.56,
        "movingAverage": 489.41
      },
      {
        "date": "2025-02-14",
        "price": 555.23,
        "movingAverage": 493.35
      },
      {
        "date": "2025-02-15",
        "price": 555.23,
        "movingAverage": 497.43
      },
      {
        "date": "2025-02-16",
        "price": 555.23,
        "movingAverage": 501.46
      },
      {
        "date": "2025-02-17",
        "price": 555.23,
        "movingAverage": 505.49
      },
      {
        "date": "2025-02-18",
        "price": 554.24,
        "movingAverage": 509.49
      },
      {
        "date": "2025-02-19",
        "price": 552.79,
        "movingAverage": 513.44
      },
      {
        "date": "2025-02-20",
        "price": 523.49,
        "movingAverage": 516.43
      },
      {
        "date": "2025-02-21",
        "price": 529.11,
        "movingAverage": 519.0
      },
      {
        "date": "2025-02-22",
        "price": 529.11,
        "movingAverage": 521.47
      },
      {
        "date": "2025-02-23",
        "price": 529.11,
        "movingAverage": 523.78
      },
      {
        "date": "2025-02-24",
        "price": 520.91,
        "movingAverage": 525.82
      },
      {
        "date": "2025-02-25",
        "price": 503.31,
        "movingAverage": 527.27
      },
      {
        "date": "2025-02-26",
        "price": 501.93,
        "movingAverage": 528.61
      },
      {
        "date": "2025-02-27",
        "price": 501.0,
        "movingAverage": 529.54
      },
      {
        "date": "2025-02-28",
        "price": 501.4,
        "movingAverage": 530.09
      },
      {
        "date": "2025-03-01",
        "price": 501.4,
        "movingAverage": 530.34
      },
      {
        "date": "2025-03-02",
        "price": 501.4,
        "movingAverage": 530.4
      },
      {
        "date": "2025-03-03",
        "price": 519.45,
        "movingAverage": 531.05
      },
      {
        "date": "2025-03-04",
        "price": 534.07,
        "movingAverage": 532.19
      },
      {
        "date": "2025-03-05",
        "price": 549.61,
        "movingAverage": 533.72
      },
      {
        "date": "2025-03-06",
        "price": 519.85,
        "movingAverage": 534.14
      },
      {
        "date": "2025-03-07",
        "price": 516.14,
        "movingAverage": 533.81
      },
      {
        "date": "2025-03-08",
        "price": 516.14,
        "movingAverage": 533.2
      },
      {
        "date": "2025-03-09",
        "price": 516.14,
        "movingAverage": 532.58
      },
      {
        "date": "2025-03-10",
        "price": 515.02,
        "movingAverage": 531.92
      },
      {
        "date": "2025-03-11",
        "price": 528.38,
        "movingAverage": 531.7
      },
      {
        "date": "2025-03-12",
        "price": 518.79,
        "movingAverage": 530.08
      },
      {
        "date": "2025-03-13",
        "price": 516.67,
        "movingAverage": 529.07
      },
      {
        "date": "2025-03-14",
        "price": 505.43,
        "movingAverage": 526.88
      },
      {
        "date": "2025-03-15",
        "price": 505.43,
        "movingAverage": 524.37
      },
      {
        "date": "2025-03-16",
        "price": 505.43,
        "movingAverage": 522.71
      },
      {
        "date": "2025-03-17",
        "price": 515.02,
        "movingAverage": 521.37
      },
      {
        "date": "2025-03-18",
        "price": 512.11,
        "movingAverage": 519.94
      },
      {
        "date": "2025-03-19",
        "price": 521.97,
        "movingAverage": 518.83
      },
      {
        "date": "2025-03-20",
        "price": 518.72,
        "movingAverage": 517.64
      },
      {
        "date": "2025-03-21",
        "price": 517.73,
        "movingAverage": 516.48
      },
      {
        "date": "2025-03-22",
        "price": 517.73,
        "movingAverage": 516.28
      },
      {
        "date": "2025-03-23",
        "price": 517.73,
        "movingAverage": 515.9
      },
      {
        "date": "2025-03-24",
        "price": 520.38,
        "movingAverage": 515.61
      },
      {
        "date": "2025-03-25",
        "price": 527.19,
        "movingAverage": 515.55
      },
      {
        "date": "2025-03-26",
        "price": 518.53,
        "movingAverage": 515.47
      },
      {
        "date": "2025-03-27",
        "price": 501.07,
        "movingAverage": 515.4
      },
      {
        "date": "2025-03-28",
        "price": 502.59,
        "movingAverage": 515.42
      },
      {
        "date": "2025-03-29",
        "price": 502.59,
        "movingAverage": 515.47
      },
      {
        "date": "2025-03-30",
        "price": 502.59,
        "movingAverage": 515.51
      },
      {
        "date": "2025-03-31",
        "price": 502.32,
        "movingAverage": 515.54
      },
      {
        "date": "2025-04-01",
        "price": 514.62,
        "movingAverage": 515.98
      },
      {
        "date": "2025-04-02",
        "price": 514.36,
        "movingAverage": 515.81
      },
      {
        "date": "2025-04-03",
        "price": 509.6,
        "movingAverage": 515.0
      },
      {
        "date": "2025-04-04",
        "price": 483.74,
        "movingAverage": 512.8
      },
      {
        "date": "2025-04-05",
        "price": 483.74,
        "movingAverage": 511.6
      },
      {
        "date": "2025-04-06",
        "price": 483.74,
        "movingAverage": 510.52
      },
      {
        "date": "2025-04-07",
        "price": 456.09,
        "movingAverage": 508.51
      },
      {
        "date": "2025-04-08",
        "price": 453.58,
        "movingAverage": 506.43
      },
      {
        "date": "2025-04-09",
        "price": 451.99,
        "movingAverage": 504.33
      },
      {
        "date": "2025-04-10",
        "price": 453.51,
        "movingAverage": 501.83
      },
      {
        "date": "2025-04-11",
        "price": 473.15,
        "movingAverage": 500.31
      },
      {
        "date": "2025-04-12",
        "price": 473.15,
        "movingAverage": 498.86
      },
      {
        "date": "2025-04-13",
        "price": 473.15,
        "movingAverage": 497.78
      },
      {
        "date": "2025-04-14",
        "price": 476.73,
        "movingAverage": 496.83
      },
      {
        "date": "2025-04-15",
        "price": 488.63,
        "movingAverage": 496.27
      },
      {
        "date": "2025-04-16",
        "price": 497.43,
        "movingAverage": 495.68
      },
      {
        "date": "2025-04-17",
        "price": 496.7,
        "movingAverage": 495.17
      },
      {
        "date": "2025-04-18",
        "price": 496.7,
        "movingAverage": 494.33
      },
      {
        "date": "2025-04-19",
        "price": 496.7,
        "movingAverage": 493.59
      },
      {
        "date": "2025-04-20",
        "price": 496.7,
        "movingAverage": 492.89
      },
      {
        "date": "2025-04-21",
        "price": 485.19,
        "movingAverage": 491.81
      },
      {
        "date": "2025-04-22",
        "price": 499.54,
        "movingAverage": 491.2
      },
      {
        "date": "2025-04-23",
        "price": 519.05,
        "movingAverage": 491.16
      },
      {
        "date": "2025-04-24",
        "price": 539.69,
        "movingAverage": 491.57
      },
      {
        "date": "2025-04-25",
        "price": 540.02,
        "movingAverage": 492.29
      },
      {
        "date": "2025-04-26",
        "price": 540.02,
        "movingAverage": 493.59
      },
      {
        "date": "2025-04-27",
        "price": 540.02,
        "movingAverage": 494.84
      },
      {
        "date": "2025-04-28",
        "price": 557.61,
        "movingAverage": 496.67
      },
      {
        "date": "2025-04-29",
        "price": 545.84,
        "movingAverage": 498.11
      },
      {
        "date": "2025-04-30",
        "price": 547.1,
        "movingAverage": 499.6
      },
      {
        "date": "2025-05-01",
        "price": 523.42,
        "movingAverage": 499.9
      },
      {
        "date": "2025-05-02",
        "price": 523.02,
        "movingAverage": 500.19
      },
      {
        "date": "2025-05-03",
        "price": 523.02,
        "movingAverage": 500.63
      },
      {
        "date": "2025-05-04",
        "price": 523.02,
        "movingAverage": 501.94
      },
      {
        "date": "2025-05-05",
        "price": 527.72,
        "movingAverage": 503.41
      },
      {
        "date": "2025-05-06",
        "price": 530.56,
        "movingAverage": 504.97
      },
      {
        "date": "2025-05-07",
        "price": 524.08,
        "movingAverage": 507.24
      },
      {
        "date": "2025-05-08",
        "price": 526.2,
        "movingAverage": 509.66
      },
      {
        "date": "2025-05-09",
        "price": 525.34,
        "movingAverage": 512.1
      },
      {
        "date": "2025-05-10",
        "price": 525.34,
        "movingAverage": 514.5
      },
      {
        "date": "2025-05-11",
        "price": 525.34,
        "movingAverage": 516.24
      },
      {
        "date": "2025-05-12",
        "price": 505.89,
        "movingAverage": 517.33
      },
      {
        "date": "2025-05-13",
        "price": 509.07,
        "movingAverage": 518.52
      },
      {
        "date": "2025-05-14",
        "price": 494.65,
        "movingAverage": 519.12
      },
      {
        "date": "2025-05-15",
        "price": 509.2,
        "movingAverage": 519.81
      },
      {
        "date": "2025-05-16",
        "price": 497.69,
        "movingAverage": 519.82
      },
      {
        "date": "2025-05-17",
        "price": 497.69,
        "movingAverage": 519.85
      },
      {
        "date": "2025-05-18",
        "price": 497.69,
        "movingAverage": 519.88
      },
      {
        "date": "2025-05-19",
        "price": 497.56,
        "movingAverage": 519.91
      },
      {
        "date": "2025-05-20",
        "price": 488.5,
        "movingAverage": 519.64
      },
      {
        "date": "2025-05-21",
        "price": 489.82,
        "movingAverage": 519.79
      },
      {
        "date": "2025-05-22",
        "price": 477.19,
        "movingAverage": 519.05
      },
      {
        "date": "2025-05-23",
        "price": 477.52,
        "movingAverage": 517.66
      },
      {
        "date": "2025-05-24",
        "price": 477.52,
        "movingAverage": 515.59
      },
      {
        "date": "2025-05-25",
        "price": 477.52,
        "movingAverage": 513.51
      },
      {
        "date": "2025-05-26",
        "price": 477.52,
        "movingAverage": 511.42
      },
      {
        "date": "2025-05-27",
        "price": 478.45,
        "movingAverage": 509.37
      },
      {
        "date": "2025-05-28",
        "price": 465.55,
        "movingAverage": 506.3
      },
      {
        "date": "2025-05-29",
        "price": 460.85,
        "movingAverage": 503.47
      },
      {
        "date": "2025-05-30",
        "price": 452.98,
        "movingAverage": 500.33
      },
      {
        "date": "2025-05-31",
        "price": 452.98,
        "movingAverage": 497.98
      },
      {
        "date": "2025-06-01",
        "price": 452.98,
        "movingAverage": 495.65
      },
      {
        "date": "2025-06-02",
        "price": 455.63,
        "movingAverage": 493.4
      },
      {
        "date": "2025-06-03",
        "price": 450.87,
        "movingAverage": 491.0
      },
      {
        "date": "2025-06-04",
        "price": 457.88,
        "movingAverage": 488.67
      },
      {
        "date": "2025-06-05",
        "price": 475.87,
        "movingAverage": 486.85
      },
      {
        "date": "2025-06-06",
        "price": 473.62,
        "movingAverage": 485.16
      },
      {
        "date": "2025-06-07",
        "price": 473.62,
        "movingAverage": 483.41
      },
      {
        "date": "2025-06-08",
        "price": 473.62,
        "movingAverage": 481.69
      },
      {
        "date": "2025-06-09",
        "price": 478.25,
        "movingAverage": 480.12
      },
      {
        "date": "2025-06-10",
        "price": 469.65,
        "movingAverage": 478.26
      },
      {
        "date": "2025-06-11",
        "price": 463.83,
        "movingAverage": 476.86
      },
      {
        "date": "2025-06-12",
        "price": 460.06,
        "movingAverage": 475.22
      },
      {
        "date": "2025-06-13",
        "price": 462.57,
        "movingAverage": 474.16
      },
      {
        "date": "2025-06-14",
        "price": 462.57,
        "movingAverage": 472.6
      },
      {
        "date": "2025-06-15",
        "price": 462.57,
        "movingAverage": 471.43
      },
      {
        "date": "2025-06-16",
        "price": 454.97,
        "movingAverage": 470.01
      },
      {
        "date": "2025-06-17",
        "price": 444.25,
        "movingAverage": 468.23
      },
      {
        "date": "2025-06-18",
        "price": 429.77,
        "movingAverage": 465.97
      },
      {
        "date": "2025-06-19",
        "price": 429.77,
        "movingAverage": 464.01
      },
      {
        "date": "2025-06-20",
        "price": 422.03,
        "movingAverage": 461.75
      },
      {
        "date": "2025-06-21",
        "price": 422.03,
        "movingAverage": 459.91
      },
      {
        "date": "2025-06-22",
        "price": 422.03,
        "movingAverage": 458.06
      },
      {
        "date": "2025-06-23",
        "price": 436.91,
        "movingAverage": 456.71
      },
      {
        "date": "2025-06-24",
        "price": 417.14,
        "movingAverage": 454.69
      },
      {
        "date": "2025-06-25",
        "price": 408.27,
        "movingAverage": 452.39
      },
      {
        "date": "2025-06-26",
        "price": 409.4,
        "movingAverage": 450.08
      },
      {
        "date": "2025-06-27",
        "price": 409.93,
        "movingAverage": 448.23
      },
      {
        "date": "2025-06-28",
        "price": 409.93,
        "movingAverage": 446.53
      },
      {
        "date": "2025-06-29",
        "price": 409.93,
        "movingAverage": 445.1
      },
      {
        "date": "2025-06-30",
        "price": 405.76,
        "movingAverage": 443.52
      },
      {
        "date": "2025-07-01",
        "price": 395.31,
        "movingAverage": 441.6
      },
      {
        "date": "2025-07-02",
        "price": 394.12,
        "movingAverage": 439.55
      },
      {
        "date": "2025-07-03",
        "price": 387.11,
        "movingAverage": 437.42
      },
      {
        "date": "2025-07-04",
        "price": 387.11,
        "movingAverage": 435.07
      },
      {
        "date": "2025-07-05",
        "price": 387.11,
        "movingAverage": 432.11
      },
      {
        "date": "2025-07-06",
        "price": 387.11,
        "movingAverage": 429.22
      },
      {
        "date": "2025-07-07",
        "price": 370.44,
        "movingAverage": 425.78
      },
      {
        "date": "2025-07-08",
        "price": 380.16,
        "movingAverage": 422.67
      },
      {
        "date": "2025-07-09",
        "price": 378.11,
        "movingAverage": 419.33
      }
    ]
  },
  "geospatial": {
    "priceThreshold": 220.92,
    "snapshotDate": "2025-07-09",
    "locationMap": [
      {
        "label": "Brazil, Espirito Santo Afonso",
        "lon": -40.974,
        "lat": -20.042,
        "precip": 2.98,
        "tempMax": 28.26,
        "cluster": 3
      },
      {
        "label": "Brazil, Espirito Santo Conceicao",
        "lon": -41.25,
        "lat": -20.363,
        "precip": 3.15,
        "tempMax": 27.34,
        "cluster": 3
      },
      {
        "label": "Brazil, Minas Gerais Aqua Boa",
        "lon": -42.391,
        "lat": -17.991,
        "precip": 2.71,
        "tempMax": 29.13,
        "cluster": 3
      },
      {
        "label": "Brazil, Minas Gerais Manhuacu",
        "lon": -46.163,
        "lat": -20.258,
        "precip": 3.36,
        "tempMax": 27.15,
        "cluster": 3
      },
      {
        "label": "Brazil, Minas Gerais Patrocinio",
        "lon": -46.992,
        "lat": -18.935,
        "precip": 3.33,
        "tempMax": 27.59,
        "cluster": 3
      },
      {
        "label": "Brazil, Minas Gerais Varginha",
        "lon": -45.43,
        "lat": -21.55,
        "precip": 3.37,
        "tempMax": 26.95,
        "cluster": 3
      },
      {
        "label": "Brazil, Sao Paulo Campinas",
        "lon": -47.058,
        "lat": -22.788,
        "precip": 3.44,
        "tempMax": 27.18,
        "cluster": 3
      },
      {
        "label": "Brazil, Sao Paulo Sao Jose",
        "lon": -47.583,
        "lat": -20.533,
        "precip": 3.67,
        "tempMax": 28.54,
        "cluster": 3
      },
      {
        "label": "China, Puer",
        "lon": 100.954,
        "lat": 22.655,
        "precip": 4.29,
        "tempMax": 24.47,
        "cluster": 2
      },
      {
        "label": "Colombia, Andes",
        "lon": -75.847,
        "lat": 5.696,
        "precip": 6.32,
        "tempMax": 22.15,
        "cluster": 1
      },
      {
        "label": "Colombia, Morelia",
        "lon": -75.674,
        "lat": 1.38,
        "precip": 4.19,
        "tempMax": 26.88,
        "cluster": 1
      },
      {
        "label": "Colombia, Santuario",
        "lon": -75.955,
        "lat": 5.061,
        "precip": 7.78,
        "tempMax": 25.28,
        "cluster": 1
      },
      {
        "label": "Colombia, Timbio",
        "lon": -76.696,
        "lat": 2.343,
        "precip": 2.88,
        "tempMax": 24.21,
        "cluster": 1
      },
      {
        "label": "Ethiopia, Aleto1",
        "lon": 38.406,
        "lat": 6.576,
        "precip": 4.31,
        "tempMax": 27.02,
        "cluster": 2
      },
      {
        "label": "Ethiopia, Aleto2",
        "lon": 35.334,
        "lat": 6.855,
        "precip": 4.42,
        "tempMax": 24.07,
        "cluster": 2
      },
      {
        "label": "Ethiopia, Bare",
        "lon": 35.212,
        "lat": 8.243,
        "precip": 6.07,
        "tempMax": 27.47,
        "cluster": 2
      },
      {
        "label": "Ethiopia, Limu Kosa",
        "lon": 36.825,
        "lat": 7.932,
        "precip": 4.84,
        "tempMax": 24.79,
        "cluster": 2
      },
      {
        "label": "Guatemala, Huehuetenango",
        "lon": -91.772,
        "lat": 15.563,
        "precip": 4.85,
        "tempMax": 23.28,
        "cluster": 1
      },
      {
        "label": "Guatemala, Jalapa",
        "lon": -89.987,
        "lat": 14.712,
        "precip": 3.4,
        "tempMax": 27.24,
        "cluster": 0
      },
      {
        "label": "Guatemala, San Marcos",
        "lon": -92.089,
        "lat": 15.113,
        "precip": 5.86,
        "tempMax": 23.88,
        "cluster": 1
      },
      {
        "label": "Honduras, Campamento",
        "lon": -86.635,
        "lat": 14.558,
        "precip": 3.29,
        "tempMax": 28.47,
        "cluster": 0
      },
      {
        "label": "Honduras, Danli",
        "lon": -86.288,
        "lat": 13.934,
        "precip": 3.08,
        "tempMax": 28.91,
        "cluster": 0
      },
      {
        "label": "Honduras, San Jose",
        "lon": -87.928,
        "lat": 14.22,
        "precip": 3.65,
        "tempMax": 28.81,
        "cluster": 0
      },
      {
        "label": "Mexico, Chiapas",
        "lon": -92.331,
        "lat": 15.176,
        "precip": 6.94,
        "tempMax": 30.23,
        "cluster": 0
      },
      {
        "label": "Peru, Jaen",
        "lon": -78.794,
        "lat": -5.698,
        "precip": 1.27,
        "tempMax": 28.89,
        "cluster": 3
      }
    ],
    "highPriceShifts": [
      {
        "label": "Colombia, Santuario",
        "precipShift": 1.43,
        "tempShift": -0.25
      },
      {
        "label": "Colombia, Andes",
        "precipShift": 1.17,
        "tempShift": -0.11
      },
      {
        "label": "Honduras, San Jose",
        "precipShift": 1.05,
        "tempShift": -0.65
      },
      {
        "label": "Colombia, Morelia",
        "precipShift": 1.01,
        "tempShift": -0.56
      },
      {
        "label": "Colombia, Timbio",
        "precipShift": 0.96,
        "tempShift": -0.45
      },
      {
        "label": "Honduras, Danli",
        "precipShift": 0.88,
        "tempShift": -0.7
      },
      {
        "label": "Ethiopia, Aleto1",
        "precipShift": 0.88,
        "tempShift": -0.48
      },
      {
        "label": "Ethiopia, Aleto2",
        "precipShift": 0.75,
        "tempShift": -0.35
      },
      {
        "label": "Honduras, Campamento",
        "precipShift": 0.7,
        "tempShift": -0.46
      },
      {
        "label": "Ethiopia, Bare",
        "precipShift": 0.56,
        "tempShift": -0.33
      }
    ],
    "modelComparison": [
      {
        "label": "Coordinates only",
        "auc": 0.495,
        "precision": 0.0,
        "recall": 0.0
      },
      {
        "label": "Coordinates + weather",
        "auc": 0.522,
        "precision": 0.0,
        "recall": 0.0
      }
    ],
    "kriging": {
      "variable": "precip",
      "label": "Precipitation kriging surface",
      "date": "2025-07-09",
      "nugget": 1.9514,
      "sill": 31.508,
      "range": 15.8302,
      "meanObserved": 5.214,
      "surfaceMin": 0.503,
      "surfaceMax": 23.806,
      "varianceMean": 35.8662,
      "gridLon": [
        -107.794,
        -99.49,
        -91.186,
        -82.882,
        -74.577,
        -66.273,
        -57.969,
        -49.665,
        -41.361,
        -33.057,
        -24.753,
        -16.449,
        -8.145,
        0.159,
        8.463,
        16.767,
        25.071,
        33.376,
        41.68,
        49.984,
        58.288,
        66.592,
        74.896,
        83.2,
        91.504,
        99.808,
        108.112,
        116.416
      ],
      "gridLat": [
        -26.424,
        -24.472,
        -22.519,
        -20.567,
        -18.614,
        -16.662,
        -14.709,
        -12.757,
        -10.805,
        -8.852,
        -6.9,
        -4.947,
        -2.995,
        -1.043,
        0.91,
        2.862,
        4.815,
        6.767,
        8.719,
        10.672,
        12.624,
        14.577,
        16.529,
        18.481,
        20.434,
        22.386,
        24.339,
        26.291
      ],
      "surface": [
        [
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.99,
          2.64,
          3.26,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.85,
          1.78,
          2.57,
          5.29,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.78,
          1.15,
          1.99,
          5.17,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          5.39,
          5.38,
          5.38,
          5.39,
          4.77,
          0.96,
          1.59,
          5.06,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          5.39,
          5.07,
          5.08,
          5.39,
          4.84,
          1.21,
          1.22,
          5.0,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          5.39,
          4.4,
          4.42,
          5.39,
          4.97,
          1.81,
          1.47,
          4.99,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          5.37,
          3.43,
          3.46,
          5.38,
          5.12,
          2.58,
          2.29,
          5.02,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          5.24,
          2.25,
          3.42,
          5.26,
          5.26,
          3.38,
          3.14,
          5.09,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          5.03,
          1.49,
          3.95,
          5.16,
          5.34,
          4.12,
          3.91,
          5.18,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          4.84,
          0.54,
          5.31,
          6.51,
          5.38,
          4.72,
          4.52,
          5.27,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          4.72,
          0.5,
          7.51,
          8.12,
          5.39,
          5.13,
          4.94,
          5.35,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.6,
          5.24,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          4.7,
          0.96,
          10.64,
          10.05,
          5.39,
          5.35,
          5.22,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.87,
          5.52,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          4.73,
          1.71,
          14.77,
          11.68,
          5.39,
          5.39,
          5.37,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.53,
          6.12,
          5.82,
          5.36,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          4.55,
          2.28,
          19.59,
          12.77,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.5,
          6.34,
          6.08,
          5.19,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.39,
          4.48,
          2.63,
          23.81,
          13.06,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.41,
          6.52,
          6.28,
          5.07,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.3,
          4.61,
          2.83,
          19.28,
          12.45,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.25,
          6.63,
          6.39,
          5.17,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          5.11,
          4.82,
          3.12,
          14.84,
          11.05,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.03,
          6.51,
          6.41,
          5.29,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          4.85,
          5.07,
          3.45,
          9.26,
          9.29,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.78,
          5.49,
          6.42,
          5.38,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39
        ],
        [
          5.39,
          4.58,
          5.08,
          3.76,
          6.91,
          7.55,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.56,
          3.76,
          6.42,
          5.43,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.46,
          5.39,
          5.39
        ],
        [
          5.39,
          4.32,
          4.79,
          4.13,
          5.34,
          6.13,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.42,
          3.66,
          6.21,
          5.44,
          5.39,
          5.39,
          5.39,
          5.39,
          5.4,
          5.68,
          5.46,
          5.39
        ],
        [
          5.39,
          4.13,
          4.4,
          4.83,
          4.4,
          5.22,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.38,
          3.93,
          5.9,
          5.44,
          5.39,
          5.39,
          5.39,
          5.39,
          5.48,
          6.03,
          5.64,
          5.39
        ],
        [
          5.38,
          4.05,
          4.18,
          5.76,
          4.13,
          4.92,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.45,
          4.15,
          5.63,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.63,
          6.48,
          5.89,
          5.39
        ],
        [
          5.38,
          4.1,
          4.34,
          6.59,
          4.56,
          5.01,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.63,
          4.35,
          5.46,
          5.37,
          5.39,
          5.39,
          5.39,
          5.39,
          5.81,
          7.01,
          6.17,
          5.39
        ],
        [
          5.39,
          4.27,
          4.42,
          6.26,
          5.01,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.06,
          4.56,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.98,
          7.6,
          6.45,
          5.39
        ],
        [
          5.39,
          4.54,
          4.59,
          6.2,
          5.27,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          4.8,
          5.41,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          6.11,
          8.21,
          6.65,
          5.39
        ],
        [
          5.39,
          4.86,
          4.76,
          5.9,
          5.46,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.11,
          5.42,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          6.17,
          8.67,
          6.75,
          5.39
        ],
        [
          5.39,
          5.14,
          4.94,
          5.67,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          6.14,
          8.37,
          6.69,
          5.39
        ],
        [
          5.39,
          5.28,
          5.12,
          5.49,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          5.39,
          6.02,
          7.77,
          6.51,
          5.39
        ]
      ],
      "variance": [
        [
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          36.62,
          23.05,
          25.05,
          35.66,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          36.12,
          17.38,
          19.17,
          34.33,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          35.77,
          13.53,
          12.21,
          33.13,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.95,
          37.94,
          37.95,
          37.95,
          35.67,
          12.28,
          3.28,
          32.46,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.95,
          37.7,
          37.71,
          37.95,
          35.86,
          14.27,
          6.18,
          32.58,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.95,
          36.96,
          36.99,
          37.95,
          36.29,
          19.0,
          10.93,
          33.39,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.94,
          35.44,
          35.5,
          37.94,
          36.85,
          24.52,
          19.01,
          34.58,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.84,
          32.85,
          33.03,
          37.85,
          37.39,
          29.35,
          25.77,
          35.82,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.66,
          29.29,
          29.76,
          37.69,
          37.76,
          33.11,
          30.88,
          36.91,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.47,
          25.5,
          25.96,
          37.44,
          37.93,
          35.75,
          34.43,
          37.6,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.34,
          22.59,
          22.43,
          37.07,
          37.95,
          37.27,
          36.57,
          37.91,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.78,
          37.8,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.32,
          22.08,
          20.21,
          36.53,
          37.95,
          37.86,
          37.66,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          36.94,
          37.08,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.43,
          23.78,
          18.34,
          35.87,
          37.95,
          37.95,
          37.94,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.88,
          35.24,
          35.5,
          37.93,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.61,
          25.72,
          14.4,
          35.24,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.57,
          32.45,
          32.91,
          37.8,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.95,
          37.53,
          26.79,
          8.61,
          34.77,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.01,
          28.35,
          29.25,
          37.53,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.85,
          36.66,
          27.06,
          9.34,
          34.58,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          36.34,
          22.92,
          24.71,
          37.21,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          37.42,
          34.72,
          26.72,
          8.74,
          34.65,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          35.73,
          16.58,
          20.31,
          36.96,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          36.53,
          31.47,
          25.73,
          11.14,
          34.99,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          35.37,
          11.69,
          18.51,
          36.88,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95
        ],
        [
          37.95,
          35.13,
          26.66,
          23.88,
          18.53,
          35.54,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          35.4,
          11.98,
          20.69,
          37.01,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.77,
          37.95,
          37.95
        ],
        [
          37.95,
          33.41,
          20.25,
          21.18,
          25.0,
          36.25,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          35.8,
          17.6,
          24.76,
          37.3,
          37.95,
          37.95,
          37.95,
          37.95,
          37.93,
          37.07,
          37.76,
          37.95
        ],
        [
          37.95,
          31.78,
          12.55,
          18.6,
          29.78,
          36.97,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          36.44,
          24.08,
          28.93,
          37.62,
          37.95,
          37.95,
          37.95,
          37.95,
          37.72,
          35.59,
          37.21,
          37.95
        ],
        [
          37.95,
          30.83,
          5.43,
          18.52,
          33.15,
          37.56,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.11,
          29.41,
          32.45,
          37.84,
          37.95,
          37.95,
          37.95,
          37.95,
          37.26,
          32.94,
          36.24,
          37.95
        ],
        [
          37.95,
          31.0,
          7.8,
          21.76,
          35.48,
          37.87,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.6,
          33.27,
          35.05,
          37.94,
          37.95,
          37.95,
          37.95,
          37.95,
          36.59,
          28.77,
          34.82,
          37.95
        ],
        [
          37.95,
          32.2,
          16.8,
          26.34,
          36.91,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.88,
          35.81,
          36.75,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          35.82,
          22.83,
          33.16,
          37.95
        ],
        [
          37.95,
          33.92,
          24.33,
          30.55,
          37.61,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.28,
          37.68,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          35.16,
          15.26,
          31.7,
          37.95
        ],
        [
          37.95,
          35.58,
          29.96,
          33.81,
          37.86,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.87,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          34.86,
          8.63,
          31.0,
          37.94
        ],
        [
          37.95,
          36.82,
          33.82,
          36.01,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          35.04,
          13.05,
          31.41,
          37.95
        ],
        [
          37.95,
          37.58,
          36.2,
          37.31,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          37.95,
          35.62,
          20.88,
          32.71,
          37.95
        ]
      ],
      "points": [
        {
          "lon": -40.974,
          "lat": -20.042,
          "value": 1.95,
          "label": "Brazil, Espirito Santo Afonso"
        },
        {
          "lon": -41.25,
          "lat": -20.363,
          "value": 1.63,
          "label": "Brazil, Espirito Santo Conceicao"
        },
        {
          "lon": -42.391,
          "lat": -17.991,
          "value": 0.33,
          "label": "Brazil, Minas Gerais Aqua Boa"
        },
        {
          "lon": -46.163,
          "lat": -20.258,
          "value": 0.0,
          "label": "Brazil, Minas Gerais Manhuacu"
        },
        {
          "lon": -46.992,
          "lat": -18.935,
          "value": 0.0,
          "label": "Brazil, Minas Gerais Patrocinio"
        },
        {
          "lon": -45.43,
          "lat": -21.55,
          "value": 0.02,
          "label": "Brazil, Minas Gerais Varginha"
        },
        {
          "lon": -47.058,
          "lat": -22.788,
          "value": 0.02,
          "label": "Brazil, Sao Paulo Campinas"
        },
        {
          "lon": -47.583,
          "lat": -20.533,
          "value": 0.0,
          "label": "Brazil, Sao Paulo Sao Jose"
        },
        {
          "lon": 100.954,
          "lat": 22.655,
          "value": 9.08,
          "label": "China, Puer"
        },
        {
          "lon": -75.847,
          "lat": 5.696,
          "value": 7.95,
          "label": "Colombia, Andes"
        },
        {
          "lon": -75.674,
          "lat": 1.38,
          "value": 25.32,
          "label": "Colombia, Morelia"
        },
        {
          "lon": -75.955,
          "lat": 5.061,
          "value": 15.94,
          "label": "Colombia, Santuario"
        },
        {
          "lon": -76.696,
          "lat": 2.343,
          "value": 5.25,
          "label": "Colombia, Timbio"
        },
        {
          "lon": 38.406,
          "lat": 6.576,
          "value": 6.51,
          "label": "Ethiopia, Aleto1"
        },
        {
          "lon": 35.334,
          "lat": 6.855,
          "value": 7.96,
          "label": "Ethiopia, Aleto2"
        },
        {
          "lon": 35.212,
          "lat": 8.243,
          "value": 3.0,
          "label": "Ethiopia, Bare"
        },
        {
          "lon": 36.825,
          "lat": 7.932,
          "value": 9.28,
          "label": "Ethiopia, Limu Kosa"
        },
        {
          "lon": -91.772,
          "lat": 15.563,
          "value": 4.14,
          "label": "Guatemala, Huehuetenango"
        },
        {
          "lon": -89.987,
          "lat": 14.712,
          "value": 4.79,
          "label": "Guatemala, Jalapa"
        },
        {
          "lon": -92.089,
          "lat": 15.113,
          "value": 3.49,
          "label": "Guatemala, San Marcos"
        },
        {
          "lon": -86.635,
          "lat": 14.558,
          "value": 6.4,
          "label": "Honduras, Campamento"
        },
        {
          "lon": -86.288,
          "lat": 13.934,
          "value": 7.67,
          "label": "Honduras, Danli"
        },
        {
          "lon": -87.928,
          "lat": 14.22,
          "value": 5.19,
          "label": "Honduras, San Jose"
        },
        {
          "lon": -92.331,
          "lat": 15.176,
          "value": 2.99,
          "label": "Mexico, Chiapas"
        },
        {
          "lon": -78.794,
          "lat": -5.698,
          "value": 1.44,
          "label": "Peru, Jaen"
        }
      ]
    }
  },
  "methodology": [
    "Daily weather variables were averaged across all coffee-growing locations for each trading date to create a market-level weather view.",
    "Correlations were measured with Pearson coefficients against the daily coffee close price in USD per 60 kg bag.",
    "The geospatial section compares regional weather patterns across high-price and low-price periods and includes an ordinary kriging interpolation over the latest daily snapshot.",
    "The forecast is a simple statistical baseline, not a causal or production trading model. It extends the recent 180-day trend and reports a residual-based uncertainty band."
  ]
};
