function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath(); //desidimos dibujar un camino 
    lienzo.strokeStyle = color; //se defino que color se usaria 
    lienzo.moveTo(xinicial, yinicial); //se movio al punto 
    lienzo.lineTo(xfinal, yfinal); //se creo una linea diagonal hasta las ultimas coordenadas 
    lienzo.stroke(); //se cierra la linea 
    lienzo.closePath(); //se termina de dibujar
}

function dibujoPorClick() {

    var lineas = parseInt(texto.value);
    var l = 0;
    var xi, yi, yi, xf;
    var colorsi = "#FAA";
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("White", 0, yi, xf, 300);
    }

    for (l = 0; l < lineas; l++) {
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea("gree", xi, 0, 300, yf);
    }
    for (l = 0; l < lineas; l++) {
        yf = espacio * (l + 1);
        xi = espacio - (l * espacio);
        dibujarLinea("blue", xi, 0, 0, yf);
    }
    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = 300 - (l * espacio);
        dibujarLinea("red", 300, yi, xf, 300);
    }
    dibujarLinea(colorsi, 1, 1, 1, 299);
    dibujarLinea(colorsi, 1, 1, 299, 1);
    dibujarLinea(colorsi, 299, 299, 299, 1);
    dibujarLinea(colorsi, 1, 299, 299, 299);
    dibujarLinea(colorsi, 1, 1, 1, 299);
    dibujarLinea(colorsi, 1, 1, 299, 1);
    dibujarLinea(colorsi, 299, 299, 299, 1);
    dibujarLinea(colorsi, 1, 299, 299, 299);
    dibujarLinea(colorsi, 1, 1, 1, 299);
    dibujarLinea(colorsi, 1, 1, 299, 1);
    dibujarLinea(colorsi, 299, 299, 299, 1);
    dibujarLinea(colorsi, 1, 299, 299, 299);
}

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;