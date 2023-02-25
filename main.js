
function initCanvas(){
 //referencio el canvas
 let ctx = document.getElementById('mi_canvasJS').getContext('2d');
 //creo instancia del objeto Image
 let backgroundImage = new Image();
 let naveImage = new Image();
 let enemigo1 = new Image();
 let enemigo2 = new Image();

 /*-------------------------------------------------------------subo imágenes-------------------------*/
 backgroundImage.src = "spaceBackground.jpg";
 naveImage.src = "spaceship.png";
 enemigo1.src = "enemigo1.png";
 enemigo2.src = "enemigo2.png";

 /*------------------------------------------------------------referencia tamaño del canvas-----------*/
 let cW = ctx.canvas.width;
 let cH = ctx.canvas.height;

 /*--------------------------------------función q' retorna el objeto nave enemiga: la configuración de c/nave enemiga---*/
 let enemyTemplate = function(options){
    return {
        id: options.id || '', //obtengo el id del objeto
        x: options.x || '',  //obtengo coord. 'x' e 'y' o una cadena vacía.
        y: options.y || '',
        w: options.w || '',  //obtengo ancho y alto de la nave o una cadena vacía.
        h: options.h || '',
        image: options.image || enemigo1 //p/asignarle una determinada imagen a dicho enemigo o enemigo1.png
    }
}

/*------------------------------------------------Array p/almacenar la cantidad de naves enemigas*/
//creo instancia de la función enemyTemplate y le paso un objeto y de esa manera poder configurar a la nave enemiga.
let enemies = [
    new enemyTemplate({id: "enemy1", x: 100, y: 20, w: 50, h: 30 })  //jugar con las coord.
     
   ];

   /*-----------------------------------------------------------------------función p/mostrar enemigos----*/
  let renderEnemies = function (enemyList){
    for (let i = 0; i < enemyList.length; i++) { //itero el array
        //-------------------creo referencias
        let enemy = enemyList[i];
        ctx.drawImage(enemy.image, enemy.x, enemy.y, enemy.w, enemy.h);//subo img
              
    }
}
/*p/mostrar las img de una manera más limpia*/
function animar(){
    ctx.clearRect(0, 0, cW, cH);
    renderEnemies(enemies);
}

let animateInterval= setInterval(animar, 6);

}

window.addEventListener('load', function(event){ /*q' cuando la página cargue, q' se ejecute la función initCanvas();*/
    initCanvas();
});