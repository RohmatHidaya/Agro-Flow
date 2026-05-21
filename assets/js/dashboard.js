// ANALISIS Perbandingan Harga Antar Kecamatan
const wilayahCtx = document.getElementById("wilayahChart");

new Chart(wilayahCtx, {
  type: "bar",

  data: {
    labels: ["Lampung", "Jawa Barat", "Banten", "Sumatera Selatan", "Bengkulu"],

    datasets: [
      {
        label: "Harga Beras",

        data: [13350, 13500, 13900, 13950, 14050],

        backgroundColor: [
          "rgba(139, 195, 74, 0.9)",
          "rgba(76, 175, 125, 0.9)",
          "rgba(46, 125, 50, 0.85)",
          "rgba(56, 142, 60, 0.85)",
          "rgba(27, 94, 32, 0.85)",
        ],

        borderRadius: 0,
      },
    ],
  },

  options: {
    indexAxis: "y",

    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,

        text: "Average Rice Price in Lampung and Surrounding Provinces",

        color: "#222",

        font: {
          size: 20,
          weight: "normal",
        },
      },
    },

    scales: {
      x: {
        beginAtZero: true,

        grid: {
          color: "rgba(0,0,0,0.15)",

          borderDash: [5, 5],
        },

        title: {
          display: true,

          text: "Average Price",

          color: "#222",

          font: {
            size: 14,
          },
        },

        ticks: {
          color: "#222",

          callback: function (value) {
            return value;
          },
        },
      },

      y: {
        grid: {
          display: false,
        },

        title: {
          display: true,

          text: "Province Name",

          color: "#222",

          font: {
            size: 14,
          },
        },

        ticks: {
          color: "#222",
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

new Chart(histogramCtx, {
  data: {
    labels: [
      "9k",
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
      "20k",
    ],

    datasets: [
      // HISTOGRAM BAR
      {
        type: "bar",

        label: "Frekuensi",

        data: [
          100, 400, 2200, 1400, 3000, 3400, 4950, 3300, 2100, 950, 450, 80,
        ],

        backgroundColor: "rgba(46, 125, 50, 0.5)",
        borderColor: "rgba(46, 125, 50, 1)",

        borderWidth: 1,

        barPercentage: 1,

        categoryPercentage: 1,
      },

      // KDE LINE
      {
        type: "line",

        label: "Distribusi",

        data: [50, 350, 2100, 1300, 2700, 3200, 4050, 2600, 2050, 900, 300, 40],

        borderColor: "#2e7d32",

        borderWidth: 2.5,

        tension: 0.45,

        pointRadius: 0,

        fill: false,
      },
    ],
  },

  options: {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,

        text: "Distribusi Harga Beras",

        color: "#222",

        font: {
          size: 20,
          weight: "normal",
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        grid: {
          color: "rgba(0,0,0,0.15)",

          borderDash: [5, 5],
        },

        title: {
          display: true,

          text: "Frequency",

          color: "#222",

          font: {
            size: 14,
          },
        },

        ticks: {
          color: "#222",
        },
      },

      x: {
        grid: {
          display: false,
        },

        title: {
          display: true,

          text: "Price",

          color: "#222",

          font: {
            size: 14,
          },
        },

        ticks: {
          color: "#222",
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

const trendCtx = document.getElementById("trendHargaChart");

new Chart(trendCtx, {
  type: "line",

  data: {
    labels: [
      "2022-01",
      "2022-03",
      "2022-05",
      "2022-07",
      "2022-09",
      "2022-11",

      "2023-01",
      "2023-03",
      "2023-05",
      "2023-07",
      "2023-09",
      "2023-11",

      "2024-01",
      "2024-03",
      "2024-05",
      "2024-07",
      "2024-09",
      "2024-11",

      "2025-01",
      "2025-03",
      "2025-05",
      "2025-07",
      "2025-09",
      "2025-11",

      "2026-01",
    ],

    datasets: [
      {
        label: "Harga Beras",

        data: [
          11780, 11800, 11750, 11770, 12150, 12250,

          12750, 13300, 13450, 13550, 13620, 14580,

          14800, 15950, 15400, 15330, 15320, 15220,

          15200, 15220, 15300, 15520, 15930, 15720,

          15760,
        ],

        borderColor: "#2e7d32",

        backgroundColor: "rgba(46, 125, 50, 0.1)",

        borderWidth: 2.5,

        tension: 0.2,

        pointRadius: 0,

        fill: false,
      },
    ],
  },

  options: {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,

        text: "Monthly Average Rice Price Trend",

        color: "#222",

        font: {
          size: 20,
          weight: "normal",
        },
      },
    },

    scales: {
      y: {
        grid: {
          color: "rgba(0,0,0,0.15)",

          borderDash: [5, 5],
        },

        title: {
          display: true,

          text: "Average Price",

          color: "#222",
        },

        ticks: {
          color: "#222",

          callback: function (value) {
            return value;
          },
        },
      },

      x: {
        grid: {
          color: "rgba(0,0,0,0.1)",

          borderDash: [5, 5],
        },

        title: {
          display: true,

          text: "Month and Year",

          color: "#222",
        },

        ticks: {
          color: "#222",

          maxRotation: 50,

          minRotation: 50,
        },
      },
    },
  },
});
