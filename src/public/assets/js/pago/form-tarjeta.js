const $datosVacios = true;
const $fecha = new Date();
const $formTarjeta = (() => {

    const $cancelar = document.getElementById("formTarjeta"); {
        const $btnCancelar = document.getElementById("btnCancelar");
        $btnCancelar.addEventListener("click", () => {
            // Poner los campos en blanco para introducir nuevos datos
            $numTarjeta = document.getElementById("numeroTarjeta").value = "";
            $nombreTarjeta = document.getElementById("nombreTarjeta").value = "";
            $mes = document.getElementById("mesSelected").value = 0;
            $anio = document.getElementById("anioSelected").value = 0;
        });
    }

    const $pagar = document.getElementById("formTarjeta"); {
        const $btnAgregar = document.getElementById("btnAgregar");
        $btnAgregar.addEventListener("click", () => {

            // Validar los datos ingresados: Formato del nombre y que la fecha ingresada no sea menor a la actual
            $mesVigencia = document.getElementById("mesSelected").value;
            $mesActual = ($fecha.getMonth() + 1);
            $anioVigencia = document.getElementById("anioSelected").value;
            $anioActual = ($fecha.getFullYear());
            $diaActual = ($fecha.getDate());
            $numDiasMes = new Date($anioActual, $mesActual, 0).getDate();

            if ($anioActual == $anioVigencia) {

                if ($mesVigencia > $mesActual) {

                    // console.log("Tarjeta aceptable");

                } else if ($mesVigencia == $mesActual) {

                    if ($diaActual == $numDiasMes) {

                        window.alert("Tarjeta inválida");
                    } else {

                        // console.log("Tarjeta aceptable");

                    }
                } else if ($mesVigencia < $mesActual) {

                    window.alert("Tarjeta inválida");

                }
            } else {

                // console.log("Tarjeta aceptable");

            }

        });
    }

    const $monto = document.getElementById("lblMonto"); {
        const $lblMonto = document.getElementById("lblMonto");
    }

})();