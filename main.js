// Crea la variable de referncia del lienzo usando fabric.Canvas()
var canvas = new fabric.Canvas("myCanvas")

//Define el ancho inicial y el alto del cloque de imágenes 
var medida = 30;

//Define el inicio de las coordenadas x y Y del jugador 
var x = 50;
var y = 50;


// Define una variable llamada player_object para almacenar la imagen del jugador
var jugador = "";
var bloque = "";

// Agrega una función llamada player_update() para agregar la imagen del jugador 
function dibujarJugador(){
    fabric.Imagen.fromURL("player.png", function(img){
jugador = img;
jugador.scaleToWidth(150);
jugador.scaleToHeight(140);
jugador.set({top:y, left:x});
canvas.add(jugador);
    })
}
window.addEventListener("keydown", teclaPulsada);
// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.
function nuevoBloque(imagen){
    fabric.Imagen.fromURL(imagen, function(img){
bloque = img;
bloque.scaleToWidth(medida);
bloque.scaleToHeight(medida);
bloque.set({top:y, left:x});
canvas.add(bloque);
    })
}

function teclaPulsada(e){
tecla = e.keyCode;
if(tecla == "39"){
x = x + medida;
dibujarJugador();
}
if(tecla == "49"){
nuevoBloque("ground.png");
}
}