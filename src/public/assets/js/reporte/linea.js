const ctxlinea = document.getElementById("linea");

new Chart(ctxlinea, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# de reservaciones por mes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 3,
        borderColor:"purple",
        backgroundColor:"purple",
        fill:false
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});