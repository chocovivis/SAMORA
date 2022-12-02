var $botones = document.getElementsByTagName('button');

for (const boton of $botones) {

  if (boton.innerText == "true") {
    boton.innerText = "Disponible"
  } if (boton.innerText == "false") {
    boton.innerText = "Ocupado"
  }

  boton.addEventListener("click", () => {

    if (boton.outerText == "Disponible") {
      location.href = "/pago";
    } if (boton.outerText == "Ocupado") {
      alert("Esta habitación no se puede reservar");
    }
  });

}