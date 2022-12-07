var $botones = document.getElementsByTagName('button');

for (const boton of $botones) {
  if (boton.innerText == "true") {
    boton.innerText = "Disponible"
  } if (boton.innerText == "false") {
    boton.innerText = "Ocupado"
  }

  boton.addEventListener("click", (event) => {
    console.log("*******bid havitacion");
    console.log(event.target.id);
    if (boton.outerText == "Disponible") {
      location.href = `/pago/${event.target.id}`;
    } if (boton.outerText == "Ocupado") {
      alert("Esta habitación no se puede reservar");
    }
  });

}

function test() {
  let array = document.getElementById("lista-reservaciones").value
  let reservaciones = JSON.parse(array);

  let fechaInicio = document.getElementById("fechaInicio")
  let fechaFin = document.getElementById("fechaFin")

  console.log(reservaciones);

  const validate = dateString => {
    const d = (new Date(dateString));
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let date = `${(Number(da) + 1)}-${mo}-${ye}`
    
    reservaciones.forEach(element,index => {
      let inicio = element.fechaInicio;
      let final = element.fechaFin;

      

    });

    fechaInicio

    if (day == 0 || day == 6) {
      return false;
    }
    return true;
  }

  document.getElementById("fechaInicio").onchange = evt => {
    if (!validate(evt.target.value)) {
      evt.target.value = '';
    }
  }
}

test();
