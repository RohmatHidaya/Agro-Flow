const ADM4_BANDAR_LAMPUNG = "18.71.05.1002";

async function loadWeatherBMKG() {
  try {
    const response = await fetch(
      `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${ADM4_BANDAR_LAMPUNG}`,
    );

    const result = await response.json();

    console.log(result);

    const wilayah = result.data[0];

    const current = wilayah.cuaca[0][0];

    // =========================
    // CUACA HARI INI
    // =========================

    document.getElementById("temperature").textContent = current.t + "°C";

    document.getElementById("weather-desc").textContent = current.weather_desc;

    document.getElementById("humidity").textContent = current.hu + "%";

    document.getElementById("wind").textContent = current.ws + " Km/h";

    document.getElementById("rain").textContent = current.tp + "%";

    // simulasi sunrise karena BMKG tidak menyediakannya
    document.getElementById("sunrise").textContent = "06:10";

    // =========================
    // ALERT
    // =========================

    let alertText = "Cuaca relatif aman untuk aktivitas pertanian.";

    if (current.tp > 50) {
      alertText =
        "Potensi hujan tinggi, pertimbangkan penjadwalan ulang aktivitas lapangan.";
    }

    document.getElementById("weatherAlert").textContent = alertText;

    // =========================
    // FORECAST 5 HARI
    // =========================

    console.log(document.getElementById("forecastContainer"));
    const container = document.getElementById("forecastContainer");

    container.innerHTML = "";

    wilayah.cuaca.forEach((hari, index) => {
      const dataHari = hari[0];

      const date = new Date(dataHari.local_datetime);

      const namaHari = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"][
        date.getDay()
      ];

      let icon = "bi-cloud-fill";

      if (dataHari.weather_desc.toLowerCase().includes("cerah")) {
        icon = "bi-sun-fill text-warning";
      } else if (dataHari.weather_desc.toLowerCase().includes("hujan")) {
        icon = "bi-cloud-rain-fill text-primary";
      }

      container.innerHTML += `
      <div class="col-md">
          <div class="text-center p-4 bg-light rounded-4">
              <h6>${namaHari}</h6>

              <i class="bi ${icon} fs-1"></i>

              <h4 class="mt-3">
                ${dataHari.t}°C
              </h4>

              <small class="text-muted">
                ${dataHari.weather_desc}
              </small>
          </div>
      </div>
      `;
    });

    // =========================
    // CHART SUHU
    // =========================

    createChart(wilayah.cuaca);
    createHumidityChart(wilayah.cuaca);
  } catch (error) {
    console.error(error);
  }
}

function createChart(cuaca) {
  const labels = [];
  const temperatures = [];

  cuaca.forEach((hari) => {
    const dataHari = hari[0];

    const date = new Date(dataHari.local_datetime);

    labels.push(
      ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"][date.getDay()],
    );

    temperatures.push(dataHari.t);
  });

  const ctx = document.getElementById("weatherChart");

  new Chart(ctx, {
    type: "line",

    data: {
      labels: labels,

      datasets: [
        {
          label: "Suhu (°C)",

          data: temperatures,

          tension: 0.4,

          fill: true,
        },
      ],
    },

    options: {
      responsive: true,
    },
  });
}

function createHumidityChart(cuaca) {
  const labels = [];
  const humidityData = [];

  cuaca.forEach((hari) => {
    const dataHari = hari[0];

    const date = new Date(dataHari.local_datetime);

    labels.push(
      ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"][date.getDay()],
    );

    humidityData.push(dataHari.hu);
  });

  const ctx = document.getElementById("humidityChart");

  new Chart(ctx, {
    type: "bar",

    data: {
      labels: labels,

      datasets: [
        {
          label: "Kelembapan (%)",
          data: humidityData,
        },
      ],
    },

    options: {
      responsive: true,
    },
  });
}

loadWeatherBMKG();
