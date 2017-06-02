(function() {

  var ctx = document.getElementById("profit__canvas").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [{
            data: [8.8, 18.4, 25.6, 33.8, 42.5, 58.7, 79.1, 88.8],
            fill: false,
            backgroundColor: "#d3d8dc",
            borderColor: "#d3d8dc",
            tension: 0,
            borderWidth: 2,
            radius: 4

        },
        {
            data: [9.5, 17.9, 24.3, 35.8, 44.9, 48.8, 68.3, 86.0],
            fill: false,
            backgroundColor: "#cf456c",
            borderColor: "#cf456c",
            tension: 0,
            borderWidth: 2,
            radius: 4
        },
        {
            data: [20.04, 32.74, 35.38, 45.63, 55.31, 65.39, 79.86, 94.65],
            fill: false,
            backgroundColor: "#3390d6",
            borderColor: "#3390d6",
            tension: 0,
            borderWidth: 2,
            radius: 4
        }
      ]
    },
    options: {
      legend: {
            display: false
      },

      layout: {
        padding: {
          left: 20,
          right: 40,
          top: 0,
          bottom: 0
        }
      },

      title: {
          display: false
      },

      scales: {
        yAxes: [{
          gridLines: {
            display: false
            }
        }]
      }
    }
});
})();