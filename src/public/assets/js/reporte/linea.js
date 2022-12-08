const ctxlinea = document.getElementById("linea");
const datosLinea = document.getElementById("datos-linea").value;
let d =  JSON.parse(datosLinea)
const labelsLinea = Object.keys(d) 
const valuesLinea = Object.values(d) 

new Chart(ctxlinea, {
  type: "line",
  data: {
    labels: labelsLinea,
    datasets: [
      {
        label: "# Número de veces que se reservó una habitación",
        data: valuesLinea,
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