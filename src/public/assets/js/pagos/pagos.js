var $botones = document.getElementsByTagName('button');
var habid ;

for (const boton of $botones) {
  if (boton.innerText == "true") {
    boton.innerText = "Disponible";
  } if (boton.innerText == "false") {
    boton.innerText = "Ocupado";
  }

  boton.addEventListener("click", (event) => {
    console.log("*******bid havitacion");
    if (boton.outerText == "Disponible") {
      location.href = `/pago/${event.target.id}`;
      boton.innerText="Ocupado";
    } if (boton.outerText == "Ocupado") {
      alert("Esta habitación no se puede reservar");
    }
  });
  
}

