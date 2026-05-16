const wilayahCtx = document.getElementById("wilayahChart");

new Chart(wilayahCtx, {
  type: "bar",

  data: {
    labels: [
      "Kedaton",
      "Panjang",
      "Tanjungkarang Pusat",
      "Way Halim",
      "Rajabasa",
      "Sukarame",
      "Kemiling",
    ],

    datasets: [
      {
        label: "Harga Beras (Rp/kg)",

        data: [13500, 12500, 12000, 14000, 14000, 14200, 14500],

        backgroundColor: ["#2e7d32"],

        borderRadius: 12,
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: "Perbandingan Harga Antar Wilayah",
      },
    },

    scales: {
      y: {
        beginAtZero: false,
        min: 10000,
        ticks: {
          callback: function (value) {
            return "Rp " + value;
          },
        },
      },
    },
  },
});

const pieCtx = document.getElementById("komoditasPieChart");

new Chart(pieCtx, {
  type: "pie",

  data: {
    labels: ["Beras", "Jagung", "Singkong"],

    datasets: [
      {
        data: [45, 30, 25],

        backgroundColor: ["#2f7d32", "#f4b400", "#db4437"],

        borderWidth: 0,
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});

const marketCtx = document.getElementById("marketChart");

new Chart(marketCtx, {
  type: "line",

  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],

    datasets: [
      {
        label: "Harga Beras (Rp/kg)",

        data: [12000, 12500, 13200, 12800, 13500, 14000],

        borderColor: "#2e7d32",

        backgroundColor: "rgba(46, 125, 50, 0.15)",

        fill: true,

        tension: 0.4,

        pointBackgroundColor: "#2e7d32",

        pointBorderColor: "#fff",

        pointRadius: 5,

        pointHoverRadius: 7,
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: "top",
      },

      title: {
        display: true,
        text: "Grafik Tren Harga Komoditas",
      },
    },

    scales: {
      y: {
        beginAtZero: false,

        min: 10000,

        ticks: {
          callback: function (value) {
            return "Rp " + value;
          },
        },
      },
    },
  },
});
