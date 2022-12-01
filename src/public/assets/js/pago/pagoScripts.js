function solonumeros(e) {

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