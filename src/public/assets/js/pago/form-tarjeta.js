const $formTarjeta = (() => {

    const $cancelar = document.getElementById("formTarjeta"); {
        const $btnCancelar = document.getElementById("btnCancelar");
        $btnCancelar.addEventListener("click", () => {
            // Poner los campos en blanco para introducir nuevos datos
            console.log("Cancelado");
            $numTarjeta = document.getElementById("numeroTarjeta").value = "";
            $nombreTarjeta = document.getElementById("nombreTarjeta").value = "";
            $mes = document.getElementById("mesSelected").value = 0;
            $anio = document.getElementById("anioSelected").value = 0;
        });
    }

    const $pagar = document.getElementById("formTarjeta"); {
        const $btnAgregar = document.getElementById("btnAgregar");
        $btnAgregar.addEventListener("click", () => {
            // Validar los datos ingresados: 16 dígitos en la tarjeta, el formato del nombre y que la fecha ingresada no sea menor a la actual
            console.log("Agregado");
        });
    }

    const $monto = document.getElementById("lblMonto"); {
        const $lblMonto = document.getElementById("lblMonto");
        $lblMonto.addEventListener("click", () => {
            // Proyectar el monto a pagar
            console.log("Agregado");
        });
    }

    

})();