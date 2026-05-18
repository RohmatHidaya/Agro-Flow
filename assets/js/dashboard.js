// ANALISIS Perbandingan Harga Antar Kecamatan
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

// PIE CHART Distribusi Komoditas Terlaris
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

//line chart Grafik Tren Harga Komoditas
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
        display: false,
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

const histogramCtx = document.getElementById("histogramChart");

const labels = [
  "10k",
  "11k",
  "12k",
  "13k",
  "14k",
  "15k",
  "16k",
  "17k",
  "18k",
  "19k",
];

const histogramData = [400, 1800, 1400, 3000, 3500, 4200, 2000, 1200, 500, 100];

const smoothLine = [200, 2100, 1300, 2700, 3400, 4000, 1800, 1400, 350, 50];

new Chart(histogramCtx, {
  type: "bar",

  data: {
    labels: labels,

    datasets: [
      {
        type: "bar",

        label: "Frekuensi",

        data: histogramData,

        backgroundColor: "rgba(46, 125, 50, 0.5)",

        borderColor: "rgba(46, 125, 50, 1)",

        borderWidth: 1,

        borderRadius: 4,

        barPercentage: 1.0,

        categoryPercentage: 1.0,
      },
      {
        type: "line",
        label: "Distribusi",
        data: smoothLine,
        borderColor: "rgba(46, 125, 50, 1)",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        fill: false,
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
        text: "Distribusi Harga Komoditas per Kecamatan",
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          stepSize: 1,
        },

        title: {
          display: true,
          text: "Frequensi",
        },
      },

      x: {
        title: {
          display: true,
          text: "harga(Rp)",
        },
      },
    },
  },
});

fetch("../../assets/data/harga-beras2026.json")
  .then((response) => response.json())

  .then((dataPrediksi) => {
    // Ambil 1 data tiap bulan
    const dataBulanan = [];

    const bulanSudahAda = new Set();

    dataPrediksi.forEach((item) => {
      const date = new Date(item.tanggal);

      const key = date.getFullYear() + "-" + (date.getMonth() + 1);

      if (!bulanSudahAda.has(key)) {
        bulanSudahAda.add(key);

        dataBulanan.push(item);
      }
    });

    // Label bulan
    const labels = dataBulanan.map((item) => {
      const date = new Date(item.tanggal);

      return date.toLocaleDateString("id-ID", {
        month: "short",
        year: "numeric",
      });
    });

    // Harga aktual
    const hargaAktual = dataBulanan.map((item) => item.harga_aktual);

    // Harga prediksi
    const hargaPrediksi = dataBulanan.map((item) => item.harga_prediksi);

    const prediksiCtx = document.getElementById("prediksiChart");

    new Chart(prediksiCtx, {
      type: "line",

      data: {
        labels: labels,

        datasets: [
          {
            label: "Harga Aktual",

            data: hargaAktual,

            borderColor: "#2e7d32",

            backgroundColor: "rgba(46,125,50,0.15)",

            fill: true,

            tension: 0.4,

            pointRadius: 5,

            pointBackgroundColor: "#2e7d32",
          },

          {
            label: "Prediksi Harga",

            data: hargaPrediksi,

            borderColor: "#ff9800",

            borderDash: [8, 5],

            tension: 0.4,

            pointRadius: 5,

            pointBackgroundColor: "#ff9800",

            fill: false,
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
            text: "Prediksi Harga Musiman Komoditas",
          },
        },

        scales: {
          y: {
            beginAtZero: false,

            ticks: {
              callback: function (value) {
                return "Rp " + value.toLocaleString("id-ID");
              },
            },
          },
        },
      },
    });
  })

  .catch((error) => {
    console.error("Gagal memuat data JSON:", error);
  });

const scatterCtx = document.getElementById("scatterChart");

new Chart(scatterCtx, {
  type: "scatter",

  data: {
    datasets: [
      {
        label: "Curah Hujan vs Harga Beras",

        data: [
          { x: 120, y: 11800 },
          { x: 140, y: 12000 },
          { x: 160, y: 12300 },
          { x: 180, y: 12600 },
          { x: 200, y: 12900 },
          { x: 220, y: 13200 },
          { x: 240, y: 13600 },
          { x: 260, y: 13900 },
          { x: 280, y: 14200 },
        ],

        backgroundColor: "rgba(46,125,50,0.8)",

        borderColor: "#2e7d32",

        pointRadius: 7,

        pointHoverRadius: 10,
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
        text: "Scatter Plot Curah Hujan dan Harga Beras",
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            return (
              "Curah Hujan: " +
              context.raw.x +
              " mm | Harga: Rp " +
              context.raw.y.toLocaleString("id-ID")
            );
          },
        },
      },
    },

    scales: {
      x: {
        title: {
          display: true,
          text: "Curah Hujan (mm)",
        },
      },

      y: {
        title: {
          display: true,
          text: "Harga Beras (Rp/kg)",
        },

        ticks: {
          callback: function (value) {
            return "Rp " + value.toLocaleString("id-ID");
          },
        },
      },
    },
  },
});
