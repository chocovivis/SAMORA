const ctxb = document.getElementById("barra");

new Chart(ctxb, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Números de veces de habitaciones reservadas",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor:"orange"
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