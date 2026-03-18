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

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function lerp(start, end, amount) {
    return start + (end - start) * amount;
  }

  function mixColor(value, min, max, start, end) {
    var ratio = max === min ? 0.5 : clamp((value - min) / (max - min), 0, 1);
    var r = Math.round(lerp(start[0], end[0], ratio));
    var g = Math.round(lerp(start[1], end[1], ratio));
    var b = Math.round(lerp(start[2], end[2], ratio));
    return "rgb(" + r + "," + g + "," + b + ")";
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

  function buildTable(targetId, columns, rows, className) {
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
      '<div class="table-wrapper"><table' +
      (className ? ' class="' + className + '"' : "") +
      "><thead><tr>" +
      thead +
      "</tr></thead><tbody>" +
      tbody +
      "</tbody></table></div>";
  }

  function makePath(points, width, height, minY, maxY, xAccessor, yAccessor) {
    if (!points.length) {
      return "";
    }

    var range = maxY - minY || 1;
    return points
      .map(function (point, index) {
        var x = xAccessor(point, index, points, width);
        var y = height - ((yAccessor(point) - minY) / range) * height;
        return (index === 0 ? "M" : "L") + x.toFixed(2) + " " + y.toFixed(2);
      })
      .join(" ");
  }

  function buildLineChart(targetId, options) {
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

    function xAccessor(_, index, points, chartWidth) {
      return (index / Math.max(points.length - 1, 1)) * chartWidth;
    }

    var content =
      '<div class="chart-header">' +
      "<div><h3>" + options.title + "</h3><p class=\"chart-caption\">" + options.subtitle + "</p></div>" +
      "<p>" + options.summary + "</p>" +
      "</div>" +
      '<svg class="chart-svg" viewBox="0 0 ' + width + " " + height + '" role="img" aria-label="' + options.title + '">';

    if (options.band) {
      var topPath = makePath(options.band.upper, width, height, minY, maxY, xAccessor, function (point) {
        return point.value;
      });
      var bottomPath = options.band.lower
        .slice()
        .reverse()
        .map(function (point, index, array) {
          var sourceIndex = array.length - 1 - index;
          var x = (sourceIndex / Math.max(options.band.lower.length - 1, 1)) * width;
          var y = height - ((point.value - minY) / (maxY - minY || 1)) * height;
          return "L" + x.toFixed(2) + " " + y.toFixed(2);
        })
        .join(" ");
      content += '<path class="chart-band" d="' + topPath + " " + bottomPath + ' Z"></path>';
    }

    options.series.forEach(function (series, index) {
      if (series.area) {
        var areaPath = makePath(series.points, width, height, minY, maxY, xAccessor, function (point) {
          return point.value;
        });
        content +=
          '<path class="chart-area" d="' + areaPath + " L " + width + " " + height + " L 0 " + height + ' Z"></path>';
      }

      content +=
        '<path class="' +
        (index === 0 ? "chart-line" : index === 1 ? "chart-line-alt" : "chart-line-third") +
        '" d="' +
        makePath(series.points, width, height, minY, maxY, xAccessor, function (point) {
          return point.value;
        }) +
        '"></path>';
    });

    content += "</svg>";

    if (options.legend) {
      content +=
        '<div class="legend-row">' +
        options.legend
          .map(function (item) {
            return '<span class="legend-item ' + item.className + '">' + item.label + "</span>";
          })
          .join("") +
        "</div>";
    }

    target.innerHTML = content;
  }

  function buildHeatmap(targetId, labels, matrix) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    var values = [];
    matrix.forEach(function (row) {
      row.forEach(function (value) {
        values.push(value);
      });
    });

    var table =
      '<div class="table-wrapper"><table class="heatmap-table"><thead><tr><th></th>' +
      labels
        .map(function (label) {
          return "<th>" + label + "</th>";
        })
        .join("") +
      "</tr></thead><tbody>";

    matrix.forEach(function (row, rowIndex) {
      table += "<tr><th>" + labels[rowIndex] + "</th>";
      row.forEach(function (value) {
        var background = mixColor(value, -1, 1, [35, 67, 98], [115, 201, 141]);
        table += '<td style="background:' + background + '; color:#fff;">' + number(value, 2) + "</td>";
      });
      table += "</tr>";
    });

    table += "</tbody></table></div>";
    target.innerHTML = table;
  }

  function buildMiniScatter(targetId, plots) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    target.innerHTML = plots
      .map(function (plot) {
        var width = 320;
        var height = 190;
        var xs = plot.points.map(function (point) { return point.x; });
        var ys = plot.points.map(function (point) { return point.y; });
        var minX = Math.min.apply(null, xs);
        var maxX = Math.max.apply(null, xs);
        var minY = Math.min.apply(null, ys);
        var maxY = Math.max.apply(null, ys);

        function toX(value) {
          return ((value - minX) / (maxX - minX || 1)) * width;
        }

        function toY(value) {
          return height - ((value - minY) / (maxY - minY || 1)) * height;
        }

        var pointsMarkup = plot.points
          .map(function (point) {
            return '<circle class="scatter-point" cx="' + toX(point.x).toFixed(2) + '" cy="' + toY(point.y).toFixed(2) + '" r="3.1"></circle>';
          })
          .join("");

        var trendStartY = plot.trend.slope * minX + plot.trend.intercept;
        var trendEndY = plot.trend.slope * maxX + plot.trend.intercept;

        var trendLine =
          '<line x1="' + toX(minX).toFixed(2) + '" y1="' + toY(trendStartY).toFixed(2) + '" x2="' + toX(maxX).toFixed(2) +
          '" y2="' + toY(trendEndY).toFixed(2) + '" stroke="#ffd17c" stroke-width="2.5"></line>';

        return (
          '<section class="mini-chart">' +
          "<h4>" + plot.title + "</h4>" +
          "<p>" + plot.xLabel + " vs " + plot.yLabel + "</p>" +
          '<svg class="chart-svg" viewBox="0 0 ' + width + " " + height + '">' +
          pointsMarkup +
          trendLine +
          "</svg>" +
          "</section>"
        );
      })
      .join("");
  }

  function buildMiniHistograms(targetId, charts) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    target.innerHTML = charts
      .map(function (chart) {
        var width = 320;
        var height = 170;
        var maxCount = Math.max.apply(
          null,
          chart.bins.map(function (bin) {
            return bin.count;
          })
        );
        var barWidth = width / Math.max(chart.bins.length, 1);
        var bars = chart.bins
          .map(function (bin, index) {
            var barHeight = (bin.count / (maxCount || 1)) * height;
            var x = index * barWidth;
            var y = height - barHeight;
            return '<rect class="bar-fill" x="' + x.toFixed(2) + '" y="' + y.toFixed(2) + '" width="' + Math.max(barWidth - 1.5, 1).toFixed(2) + '" height="' + barHeight.toFixed(2) + '"></rect>';
          })
          .join("");

        return (
          '<section class="mini-chart">' +
          "<h4>" + chart.title + "</h4>" +
          "<p>Histogram profile</p>" +
          '<svg class="chart-svg" viewBox="0 0 ' + width + " " + height + '">' +
          bars +
          "</svg>" +
          "</section>"
        );
      })
      .join("");
  }

  function buildBarChart(targetId, options) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    var width = 520;
    var rowHeight = 36;
    var height = Math.max(options.rows.length * rowHeight + 30, 120);
    var maxValue = Math.max.apply(
      null,
      options.rows.map(function (row) {
        return Math.abs(row.value);
      })
    );

    var bars = options.rows
      .map(function (row, index) {
        var y = index * rowHeight + 8;
        var barWidth = ((Math.abs(row.value) / (maxValue || 1)) * (width - 190));
        var colorClass = row.value >= 0 ? "bar-fill" : "bar-fill-alt";
        return (
          '<text x="0" y="' + (y + 16) + '" fill="rgba(255,255,255,0.82)" font-size="11">' + row.label + "</text>" +
          '<rect class="' + colorClass + '" x="190" y="' + y + '" width="' + barWidth.toFixed(2) + '" height="18"></rect>' +
          '<text x="' + (190 + barWidth + 8).toFixed(2) + '" y="' + (y + 14) + '" fill="rgba(255,255,255,0.9)" font-size="11">' + row.display + "</text>"
        );
      })
      .join("");

    target.innerHTML =
      '<div class="chart-header"><div><h3>' +
      options.title +
      '</h3><p class="chart-caption">' +
      options.subtitle +
      '</p></div></div><svg class="chart-svg" viewBox="0 0 ' +
      width +
      " " +
      height +
      '">' +
      bars +
      "</svg>";
  }

  function buildSpatialMap(targetId, options) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    var width = 540;
    var height = 320;
    var lons = options.points.map(function (point) { return point.lon; });
    var lats = options.points.map(function (point) { return point.lat; });
    var values = options.points.map(function (point) { return point[options.colorKey]; });
    var minLon = Math.min.apply(null, lons);
    var maxLon = Math.max.apply(null, lons);
    var minLat = Math.min.apply(null, lats);
    var maxLat = Math.max.apply(null, lats);
    var minValue = Math.min.apply(null, values);
    var maxValue = Math.max.apply(null, values);

    function toX(value) {
      return 20 + ((value - minLon) / (maxLon - minLon || 1)) * (width - 40);
    }

    function toY(value) {
      return height - 20 - ((value - minLat) / (maxLat - minLat || 1)) * (height - 40);
    }

    var circles = options.points
      .map(function (point, index) {
        var fill = options.useDiscrete
          ? options.palette[point[options.colorKey] % options.palette.length]
          : mixColor(point[options.colorKey], minValue, maxValue, [47, 102, 144], [115, 201, 141]);
        var label = index < 8 ? '<text class="map-annotation" x="' + (toX(point.lon) + 5).toFixed(2) + '" y="' + (toY(point.lat) - 5).toFixed(2) + '">' + point.label + "</text>" : "";
        return (
          '<circle class="map-point" cx="' +
          toX(point.lon).toFixed(2) +
          '" cy="' +
          toY(point.lat).toFixed(2) +
          '" r="6.5" fill="' +
          fill +
          '"></circle>' +
          label
        );
      })
      .join("");

    var badges = options.badges
      .map(function (badge) {
        return '<span class="badge">' + badge + "</span>";
      })
      .join("");

    target.innerHTML =
      '<div class="chart-header"><div><h3>' +
      options.title +
      '</h3><p class="chart-caption">' +
      options.subtitle +
      '</p></div></div><svg class="chart-svg" viewBox="0 0 ' +
      width +
      " " +
      height +
      '">' +
      circles +
      '</svg><div class="badge-row">' +
      badges +
      "</div>";
  }

  function buildSurface(targetId, options) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    var width = 520;
    var height = 320;
    var rows = options.matrix.length;
    var cols = options.matrix[0].length;
    var flat = [];
    options.matrix.forEach(function (row) {
      row.forEach(function (value) {
        flat.push(value);
      });
    });
    var minValue = Math.min.apply(null, flat);
    var maxValue = Math.max.apply(null, flat);
    var cellWidth = width / cols;
    var cellHeight = height / rows;

    var cells = options.matrix
      .map(function (row, rowIndex) {
        return row
          .map(function (value, colIndex) {
            var fill = mixColor(value, minValue, maxValue, [35, 67, 98], [115, 201, 141]);
            return (
              '<rect class="surface-cell" x="' +
              (colIndex * cellWidth).toFixed(2) +
              '" y="' +
              (rowIndex * cellHeight).toFixed(2) +
              '" width="' +
              cellWidth.toFixed(2) +
              '" height="' +
              cellHeight.toFixed(2) +
              '" fill="' +
              fill +
              '"></rect>'
            );
          })
          .join("");
      })
      .join("");

    var lons = options.points.map(function (point) { return point.lon; });
    var lats = options.points.map(function (point) { return point.lat; });
    var minLon = Math.min.apply(null, lons);
    var maxLon = Math.max.apply(null, lons);
    var minLat = Math.min.apply(null, lats);
    var maxLat = Math.max.apply(null, lats);

    function toX(lon) {
      return ((lon - minLon) / (maxLon - minLon || 1)) * width;
    }

    function toY(lat) {
      return height - ((lat - minLat) / (maxLat - minLat || 1)) * height;
    }

    var overlays = options.points
      .map(function (point) {
        return '<circle class="map-point" cx="' + toX(point.lon).toFixed(2) + '" cy="' + toY(point.lat).toFixed(2) + '" r="4.3" fill="rgba(255,255,255,0.92)"></circle>';
      })
      .join("");

    var badges = options.badges
      .map(function (badge) {
        return '<span class="badge">' + badge + "</span>";
      })
      .join("");

    target.innerHTML =
      '<div class="chart-header"><div><h3>' +
      options.title +
      '</h3><p class="chart-caption">' +
      options.subtitle +
      '</p></div></div><svg class="chart-svg" viewBox="0 0 ' +
      width +
      " " +
      height +
      '">' +
      cells +
      overlays +
      '</svg><div class="badge-row">' +
      badges +
      "</div>";
  }

  function init() {
    var project = data.project;
    var summary = data.summary;
    var insights = data.insights;
    var forecast = data.forecast;
    var visuals = data.visuals;
    var geospatial = data.geospatial;

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

    buildLineChart("history-chart", {
      title: "Monthly Coffee Price History",
      subtitle: "Average monthly close price over the most recent 36 months in the dataset.",
      summary: "Latest 30-day moving average: " + currency(summary.movingAverage30),
      series: [
        {
          area: true,
          points: data.series.history36Months.map(function (point) {
            return { value: point.price };
          }),
        },
      ],
      legend: [{ className: "legend-actual", label: "Monthly average close price" }],
    });

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

    buildLineChart("recent-price-chart", {
      title: "Recent Daily Price Trend",
      subtitle: "Latest 365 trading days with a 30-day moving average overlay.",
      summary: "Current trailing 30-day average: " + currency(summary.trailing30Average),
      series: [
        {
          points: visuals.recentPrice.map(function (point) {
            return { value: point.price };
          }),
        },
        {
          points: visuals.recentPrice.map(function (point) {
            return { value: point.movingAverage };
          }),
        },
      ],
      legend: [
        { className: "legend-actual", label: "Daily close price" },
        { className: "legend-forecast", label: "30-day moving average" },
      ],
    });

    buildHeatmap("correlation-heatmap", visuals.correlationHeatmap.labels, visuals.correlationHeatmap.matrix);
    buildMiniScatter("scatter-grid", visuals.scatterPlots);
    buildMiniHistograms("distribution-grid", visuals.distributions);

    buildMetrics("geo-metrics", [
      {
        label: "High-Price Threshold",
        value: currency(geospatial.priceThreshold),
        detail: "Dates above this threshold are treated as high-price regimes",
      },
      {
        label: "Snapshot Date",
        value: geospatial.snapshotDate,
        detail: "Latest daily spatial slice used for mapping and kriging",
      },
      {
        label: "Coordinate-Only AUC",
        value: number(geospatial.modelComparison[0].auc, 3),
        detail: "Predictive value from longitude and latitude alone",
      },
      {
        label: "Coords + Weather AUC",
        value: number(geospatial.modelComparison[1].auc, 3),
        detail: "Geography is more meaningful when combined with local weather",
      },
    ]);

    buildSpatialMap("location-map", {
      title: "Coffee-Growing Locations",
      subtitle: "Locations colored by average precipitation across the full dataset.",
      points: geospatial.locationMap,
      colorKey: "precip",
      useDiscrete: false,
      badges: [
        "Variable: average precipitation",
        "Point count: " + geospatial.locationMap.length,
        "Coordinate span across major producing regions",
      ],
    });

    buildSpatialMap("cluster-map", {
      title: "Spatial Clusters",
      subtitle: "Locations grouped by longitude, latitude, temperature, humidity, and precipitation.",
      points: geospatial.locationMap,
      colorKey: "cluster",
      useDiscrete: true,
      palette: ["#73c98d", "#ffd17c", "#7bc0ff", "#f48fb1"],
      badges: [
        "Four-cluster KMeans grouping",
        "Cluster labels are descriptive, not causal",
      ],
    });

    buildBarChart("regime-bar-chart", {
      title: "High-Price Regime Shifts",
      subtitle: "Locations with the biggest precipitation increase during high-price periods.",
      rows: geospatial.highPriceShifts.map(function (row) {
        return {
          label: row.label,
          value: row.precipShift,
          display: signed(row.precipShift, 2, " mm"),
        };
      }),
    });

    buildBarChart("model-bar-chart", {
      title: "Geospatial Model Comparison",
      subtitle: "AUC from classifying whether the market is in a high-price regime.",
      rows: geospatial.modelComparison.map(function (row) {
        return {
          label: row.label,
          value: row.auc,
          display: number(row.auc, 3) + " AUC",
        };
      }),
    });

    buildSurface("kriging-surface", {
      title: "Kriging Surface",
      subtitle: "Ordinary kriging interpolation of precipitation on " + geospatial.kriging.date + ".",
      matrix: geospatial.kriging.surface,
      points: geospatial.kriging.points,
      badges: [
        "Nugget: " + number(geospatial.kriging.nugget, 4),
        "Sill: " + number(geospatial.kriging.sill, 4),
        "Range: " + number(geospatial.kriging.range, 4),
        "Observed mean: " + number(geospatial.kriging.meanObserved, 3),
      ],
    });

    buildSurface("kriging-variance", {
      title: "Kriging Variance",
      subtitle: "Residual uncertainty pattern across the same interpolated surface.",
      matrix: geospatial.kriging.variance,
      points: geospatial.kriging.points,
      badges: [
        "Surface min: " + number(geospatial.kriging.surfaceMin, 3),
        "Surface max: " + number(geospatial.kriging.surfaceMax, 3),
        "Variance mean: " + number(geospatial.kriging.varianceMean, 4),
      ],
    });

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

    buildLineChart("forecast-chart", {
      title: "Recent Trend and 30-Day Forecast",
      subtitle: forecast.method,
      summary: "Recent slope: " + signed(forecast.slopePerDay, 3, " USD/day"),
      series: [
        {
          points: data.series.recent60Days.map(function (point) {
            return { value: point.price };
          }),
        },
        {
          points: forecast.points.map(function (point) {
            return { value: point.predictedPrice };
          }),
        },
      ],
      band: {
        lower: forecast.points.map(function (point) {
          return { value: point.lowerBound };
        }),
        upper: forecast.points.map(function (point) {
          return { value: point.upperBound };
        }),
      },
      legend: [
        { className: "legend-actual", label: "Actual recent close price" },
        { className: "legend-forecast", label: "Projected baseline" },
        { className: "legend-band", label: "Residual uncertainty band" },
      ],
    });

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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
