var $botones = document.getElementsByTagName('button');
var $parrafos = document.getElementsByTagName('p');
var $monto = document.getElementById('lblMonto');
var $idBoton;
var $precioHabitacion;

//Validar los datos ingresados: 16 dígitos en la tarjeta

function soloNumeros(e) {

    key = e.keyCode || e.wich;

    teclado = String.fromCharCode(key);

    numeros = "0123456789";

    especiales = "8-37-38-46";

    teclado_especial = false;

    for (var i in especiales) {

        if (key == especiales[i]) {
            teclado_especial = true;
        }

    }

    if (numeros.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }

}

//Validar los datos ingresados: sólo letras en el nombrede la tarjeta

function soloLetras(e) {

    key = e.keyCode || e.wich;

    teclado = String.fromCharCode(key).toUpperCase();

    letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";

    especiales = "8-37-38-46-164";

    teclado_especial = false;

    for (var i in especiales) {

        if (key == especiales[i]) {

            teclado_especial = true; break;
        }

    }

    if (letras.indexOf(teclado) == -1 && !teclado_especial) {

        return false;

    }

}
