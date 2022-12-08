const ctxb = document.getElementById("barra");
const datosBarra = document.getElementById("datos-barra").value;
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
console.log(JSON.parse(datosBarra));

new Chart(ctxb, {
  type: "bar",
  data: {
    labels: MESES,
    datasets: [
      {
        label: "# de reservaciones por mes",
        data: JSON.parse(datosBarra),
        borderWidth: 1,
        backgroundColor: "orange"
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