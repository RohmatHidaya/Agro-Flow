// TREN OMZET & PROFIT
const profitCtx = document.getElementById("profitChart");

new Chart(profitCtx, {
  type: "line",

  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],

    datasets: [
      // OMZET
      {
        label: "Omzet",

        data: [
          3500000, 4200000, 4800000, 5000000, 5600000, 6200000, 7100000,
          7800000, 8500000, 9100000, 8700000, 8300000,
        ],

        borderColor: "rgba(46,125,50,1)",

        backgroundColor: "rgba(46,125,50,0.18)",

        fill: true,

        tension: 0.4,

        pointRadius: 5,

        pointBackgroundColor: "rgba(46,125,50,1)",
      },

      // PROFIT
      {
        label: "Profit",

        data: [
          1200000, 1500000, 1800000, 1900000, 2200000, 2600000, 3000000,
          3400000, 3800000, 4200000, 4000000, 3700000,
        ],

        borderColor: "rgba(255,152,0,1)",

        backgroundColor: "rgba(255,152,0,0.12)",

        fill: true,

        tension: 0.4,

        pointRadius: 5,

        pointBackgroundColor: "rgba(255,152,0,1)",
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Grafik Tren Omzet & Profit",
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          callback: function (value) {
            return "Rp " + value.toLocaleString("id-ID");
          },
        },
      },
    },
  },
});

// PRODUK PALING CUAN
const profitDonutCtx = document.getElementById("profitDonutChart");

if (profitDonutCtx) {
  new Chart(profitDonutCtx, {
    type: "doughnut",

    data: {
      labels: ["Beras Premium", "Jagung Pipil", "Singkong Segar"],

      datasets: [
        {
          data: [45, 30, 25],

          backgroundColor: [
            "rgba(46,125,50,0.9)",
            "rgba(255,152,0,0.9)",
            "rgba(244,67,54,0.9)",
          ],

          borderWidth: 0,

          hoverOffset: 12,
        },
      ],
    },

    options: {
      responsive: true,

      cutout: "65%",

      plugins: {
        legend: {
          position: "bottom",
        },

        title: {
          display: true,

          text: "Kontribusi Profit Produk",
        },

        tooltip: {
          callbacks: {
            label: function (context) {
              return context.label + ": " + context.raw + "%";
            },
          },
        },
      },
    },
  });
}
