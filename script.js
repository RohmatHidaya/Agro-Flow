  const ctx = document.getElementById("hargaChart");

  new Chart(ctx, {
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
      ],

      datasets: [
        {
          label: "Beras",
          data: [12000, 12300, 12500, 12800, 13000, 13200, 13500],
          borderColor: "#198754",
          backgroundColor: "rgba(25, 135, 84, 0.2)",
          fill: true,
          tension: 0.4,
        },

        {
          label: "Jagung",
          data: [5000, 5200, 5400, 5600, 5800, 6000, 6200],
          borderColor: "#ffc107",
          backgroundColor: "rgba(255, 193, 7, 0.2)",
          fill: true,
          tension: 0.4,
        },

        {
          label: "Singkong",
          data: [3000, 3100, 2950, 2900, 2850, 2820, 2800],
          borderColor: "#dc3545",
          backgroundColor: "rgba(220, 53, 69, 0.2)",
          fill: true,
          tension: 0.4,
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
          text: "Prediksi Harga Komoditas Bulanan",
        },
      },

      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function (value) {
              return "Rp " + value;
            },
          },
        },
      },
    },
  });

  const wilayahCtx = document.getElementById("wilayahChart");

  new Chart(wilayahCtx, {
    type: "bar",

    data: {
      labels: [
        "Kota Bengkulu",
        "Curup",
        "Manna",
        "Argamakmur",
        "Mukomuko",
      ],

      datasets: [
        {
          label: "Harga Beras (Rp/kg)",

          data: [
            13500,
            12800,
            11900,
            13200,
            12500,
          ],

          backgroundColor: [
            "#198754",
            "#20c997",
            "#dc3545",
            "#0d6efd",
            "#ffc107",
          ],

          borderRadius: 12,
        },
      ],
    },

    options: {
      responsive: true,

      plugins: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "Perbandingan Harga Antar Wilayah",
        },
      },

      scales: {
        y: {
          beginAtZero: false,

          ticks: {
            callback: function (value) {
              return "Rp " + value;
            },
          },
        },
      },
    },
  });