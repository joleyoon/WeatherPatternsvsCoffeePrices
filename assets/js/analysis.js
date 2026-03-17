(function () {
  var data = window.analysisData;

  if (!data) {
    return;
  }

  function currency(value) {
    return "$" + Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function number(value, digits) {
    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: digits || 0,
      maximumFractionDigits: digits || 0,
    });
  }

  function signed(value, digits, suffix) {
    var amount = Number(value);
    var sign = amount > 0 ? "+" : "";
    return sign + number(amount, digits || 0) + (suffix || "");
  }

  function buildMetrics(targetId, items) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    target.innerHTML = items
      .map(function (item) {
        return (
          '<section class="metric-card">' +
          '<div class="metric-label">' + item.label + "</div>" +
          '<div class="metric-value">' + item.value + "</div>" +
          '<p class="metric-detail">' + item.detail + "</p>" +
          "</section>"
        );
      })
      .join("");
  }

  function buildStory(targetId, items) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    target.innerHTML = items
      .map(function (item) {
        return (
          '<section class="story-card">' +
          "<h3>" + item.title + "</h3>" +
          "<p>" + item.detail + "</p>" +
          "</section>"
        );
      })
      .join("");
  }

  function buildTable(targetId, columns, rows) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    var thead = columns
      .map(function (column) {
        return "<th>" + column.label + "</th>";
      })
      .join("");

    var tbody = rows
      .map(function (row) {
        return (
          "<tr>" +
          columns
            .map(function (column) {
              return "<td>" + column.render(row) + "</td>";
            })
            .join("") +
          "</tr>"
        );
      })
      .join("");

    target.innerHTML =
      "<table><thead><tr>" +
      thead +
      "</tr></thead><tbody>" +
      tbody +
      "</tbody></table>";
  }

  function makePath(points, width, height, minY, maxY) {
    if (!points.length) {
      return "";
    }

    var range = maxY - minY || 1;
    return points
      .map(function (point, index) {
        var x = (index / Math.max(points.length - 1, 1)) * width;
        var y = height - ((point.value - minY) / range) * height;
        return (index === 0 ? "M" : "L") + x.toFixed(2) + " " + y.toFixed(2);
      })
      .join(" ");
  }

  function makeArea(points, width, height, minY, maxY) {
    if (!points.length) {
      return "";
    }

    var path = makePath(points, width, height, minY, maxY);
    return path + " L " + width + " " + height + " L 0 " + height + " Z";
  }

  function makeBand(lowerPoints, upperPoints, width, height, minY, maxY) {
    var topPath = makePath(upperPoints, width, height, minY, maxY);
    var bottomPath = lowerPoints
      .slice()
      .reverse()
      .map(function (point, index, arr) {
        var sourceIndex = arr.length - 1 - index;
        var x = (sourceIndex / Math.max(lowerPoints.length - 1, 1)) * width;
        var range = maxY - minY || 1;
        var y = height - ((point.value - minY) / range) * height;
        return "L" + x.toFixed(2) + " " + y.toFixed(2);
      })
      .join(" ");

    return topPath + " " + bottomPath + " Z";
  }

  function buildChart(targetId, options) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    var width = 860;
    var height = 280;
    var allValues = [];

    options.series.forEach(function (series) {
      series.points.forEach(function (point) {
        allValues.push(point.value);
      });
    });

    if (options.band) {
      options.band.lower.forEach(function (point) {
        allValues.push(point.value);
      });
      options.band.upper.forEach(function (point) {
        allValues.push(point.value);
      });
    }

    var minY = Math.min.apply(null, allValues);
    var maxY = Math.max.apply(null, allValues);
    var padding = (maxY - minY || 1) * 0.12;
    minY -= padding;
    maxY += padding;

    var content =
      '<div class="chart-header">' +
      "<div><h3>" + options.title + "</h3><p class=\"chart-caption\">" + options.subtitle + "</p></div>" +
      "<p>" + options.summary + "</p>" +
      "</div>";

    content += '<svg class="chart-svg" viewBox="0 0 ' + width + " " + height + '" role="img" aria-label="' + options.title + '">';

    if (options.band) {
      content +=
        '<path class="chart-band" d="' +
        makeBand(options.band.lower, options.band.upper, width, height, minY, maxY) +
        '"></path>';
    }

    options.series.forEach(function (series, index) {
      if (series.area) {
        content +=
          '<path class="chart-area" d="' +
          makeArea(series.points, width, height, minY, maxY) +
          '"></path>';
      }

      content +=
        '<path class="' +
        (index === 0 ? "chart-line" : "chart-line-alt") +
        '" d="' +
        makePath(series.points, width, height, minY, maxY) +
        '"></path>';
    });

    content += "</svg>";

    content +=
      '<div class="legend-row">' +
      options.legend
        .map(function (item) {
          return '<span class="legend-item ' + item.className + '">' + item.label + "</span>";
        })
        .join("") +
      "</div>";

    target.innerHTML = content;
  }

  function init() {
    var project = data.project;
    var summary = data.summary;
    var insights = data.insights;
    var forecast = data.forecast;

    var title = document.getElementById("project-title");
    var subtitle = document.getElementById("project-subtitle");
    if (title) {
      title.textContent = project.title;
    }
    if (subtitle) {
      subtitle.textContent = project.subtitle;
    }

    buildMetrics("overview-metrics", [
      {
        label: "Dataset Rows",
        value: number(summary.rowCount),
        detail: number(summary.locationCount) + " locations across " + number(summary.dateCount) + " trading dates",
      },
      {
        label: "Latest Price",
        value: currency(summary.latestPrice),
        detail: signed(summary.dailyChangePct, 2, "%") + " from the previous trading day",
      },
      {
        label: "Average Price",
        value: currency(summary.averagePrice),
        detail: "Long-run daily average close price",
      },
      {
        label: "Price Range",
        value: currency(summary.minPrice) + " to " + currency(summary.maxPrice),
        detail: summary.minPriceDate + " through " + summary.maxPriceDate,
      },
    ]);

    buildStory("overview-story", insights.priceStory);

    buildMetrics("forecast-metrics", [
      {
        label: "Forecast Window",
        value: forecast.horizonDays + " days",
        detail: forecast.forecastStart + " to " + forecast.forecastEnd,
      },
      {
        label: "Projected Average",
        value: currency(forecast.averageProjectedPrice),
        detail: "Mean projected close price during the forecast horizon",
      },
      {
        label: "Forecast Range",
        value: currency(forecast.minProjectedPrice) + " to " + currency(forecast.maxProjectedPrice),
        detail: "Baseline path before the uncertainty band is applied",
      },
      {
        label: "Model Uncertainty",
        value: currency(forecast.rmse),
        detail: "1-RMSE band from the recent 180-day fit",
      },
    ]);

    buildMetrics("method-metrics", [
      {
        label: "Date Range",
        value: summary.dateRange.start + " to " + summary.dateRange.end,
        detail: "Full historical window covered by the uploaded data",
      },
      {
        label: "30-Day Average",
        value: currency(summary.trailing30Average),
        detail: "Latest trailing average used for context on current pricing",
      },
      {
        label: "1-Year Average",
        value: currency(summary.trailing365Average),
        detail: "Reference line for the current regime assessment",
      },
      {
        label: "Missing Weather Values",
        value: number(summary.missingWeatherPoints),
        detail: "Sparse gaps skipped during the aggregation step",
      },
    ]);

    var methodList = document.getElementById("method-list");
    if (methodList) {
      methodList.innerHTML =
        "<ul>" +
        data.methodology
          .map(function (item) {
            return "<li>" + item + "</li>";
          })
          .join("") +
        "</ul>";
    }

    buildTable(
      "weather-table",
      [
        { label: "Variable", render: function (row) { return row.label; } },
        { label: "Same-Day r", render: function (row) { return signed(row.correlation, 2, ""); } },
        { label: "30-Day Lag r", render: function (row) { return signed(row.lag30Correlation, 2, ""); } },
        { label: "Recent Anomaly", render: function (row) { return signed(row.anomaly, 2, " " + row.unit); } },
      ],
      insights.weatherCorrelations
    );

    buildTable(
      "currency-table",
      [
        { label: "Currency", render: function (row) { return row.label; } },
        { label: "Correlation", render: function (row) { return signed(row.correlation, 2, ""); } },
        { label: "Latest Value", render: function (row) { return number(row.latest, 4); } },
      ],
      insights.currencyCorrelations
    );

    buildTable(
      "hot-locations",
      [
        { label: "Location", render: function (row) { return row.label; } },
        { label: "Avg Max Temp", render: function (row) { return number(row.temp_max, 2) + " C"; } },
        { label: "Humidity", render: function (row) { return number(row.humidity, 2) + "%"; } },
      ],
      insights.hottestLocations
    );

    buildTable(
      "wet-locations",
      [
        { label: "Location", render: function (row) { return row.label; } },
        { label: "Precipitation", render: function (row) { return number(row.precip, 2) + " mm"; } },
        { label: "Solar", render: function (row) { return number(row.solar, 2) + " MJ/m2"; } },
      ],
      insights.wettestLocations
    );

    buildTable(
      "forecast-table",
      [
        { label: "Date", render: function (row) { return row.date; } },
        { label: "Projected Price", render: function (row) { return currency(row.predictedPrice); } },
        { label: "Lower Band", render: function (row) { return currency(row.lowerBound); } },
        { label: "Upper Band", render: function (row) { return currency(row.upperBound); } },
      ],
      forecast.points.slice(0, 10)
    );

    buildChart("history-chart", {
      title: "Monthly Coffee Price History",
      subtitle: "Average monthly close price over the most recent 36 months in the dataset.",
      summary: "Latest 30-day moving average: " + currency(summary.movingAverage30),
      series: [
        {
          area: true,
          points: data.series.history36Months.map(function (point) {
            return { label: point.date, value: point.price };
          }),
        },
      ],
      legend: [{ className: "legend-actual", label: "Monthly average close price" }],
    });

    buildChart("forecast-chart", {
      title: "Recent Trend and 30-Day Forecast",
      subtitle: forecast.method,
      summary: "Recent slope: " + signed(forecast.slopePerDay, 3, " USD/day"),
      series: [
        {
          points: data.series.recent60Days.map(function (point) {
            return { label: point.date, value: point.price };
          }),
        },
        {
          points: forecast.points.map(function (point) {
            return { label: point.date, value: point.predictedPrice };
          }),
        },
      ],
      band: {
        lower: forecast.points.map(function (point) {
          return { label: point.date, value: point.lowerBound };
        }),
        upper: forecast.points.map(function (point) {
          return { label: point.date, value: point.upperBound };
        }),
      },
      legend: [
        { className: "legend-actual", label: "Actual recent close price" },
        { className: "legend-forecast", label: "Projected baseline" },
        { className: "legend-band", label: "Residual uncertainty band" },
      ],
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
