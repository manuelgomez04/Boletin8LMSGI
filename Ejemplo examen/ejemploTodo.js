function sortear(arr) {

    let desde = 0;
    let hasta = arr.length;

    let numAleatorio = Math.floor(desde + Math.random() * hasta);

    return arr[numAleatorio];
}

function camelize(str) {
    // Primero quitar los guiones y separar por palabras

    let palabrasSueltas = str.split('-');

    //Cambiar la pirimera letra de cada palabra a mayúscula (A partir de la segunda)

    for (let i = 1; i < palabrasSueltas.length; i++) {

        let primeraEnMayuscula = palabrasSueltas[i].charAt(0).toUpperCase();
        palabrasSueltas[i] = primeraEnMayuscula + palabrasSueltas[i].substring(1);

    }

    //Unir las palabras

    return palabrasSueltas.join('');

}

function pedirNombres() {

    let resultado = new Array();


    let texto = prompt("Introduzca un texto");


    while (isNaN(texto)) {
        resultado.push(texto);
        texto = prompt("Introduzca un texto");
    }


    return resultado;

}


function principal() {

    let propiedadesCss = pedirNombres();

    for (let i = 0; i < propiedadesCss.length; i++) {
        propiedadesCss[i] = camelize(propiedadesCss[i]);

    }

    alert ("El escogido es "+ sortear(propiedadesCss));
}

principal()