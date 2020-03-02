var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
//es un metodo que nos trae un elemento de html atraves de su id 
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorsito = "blue";
    movimiento = 10;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorsito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            console.log("arriba");
            break;
        case teclas.DOWN:
            console.log("abajo");
            dibujarLinea(colorsito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            console.log("izquierda");
            dibujarLinea(colorsito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorsito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            console.log("derecha");
            break;
    }
}