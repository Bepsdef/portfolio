// REALIZZATO CON EDITOR ONLINE P5.JS E GRAZIE A TANTI TUTORIAL DI THE CODING TRAIN



let r =100;
let b=255;
let g =255;
let circledime = 60;
var col = 0;


function setup () {
  createCanvas (displayWidth,displayHeight)
  background (255,0,0)
}


// assegnato posizione coordinate x,y del cerchio a coordinate posizione mouse  e utilizzato funzione mappa per collegare
function mouseDragged () {

  fill (r,g,b,)
  circle(mouseX,mouseY,circledime)

  col = map (mouseX,0,980,0,255)

}

// ogni volta che si clicca una volta il mouse, i cerchi acquisiscono dimensione random compresa fra 30 e 80 e colore random compreso fra 0 e 255 per R G B
function mouseClicked () {
circledime = random (30,80)
  r,g,b = random (0,255)

// background ritorna vuoto con doubleclick
}
function doubleClicked () {
  background(0,0,220);
 }
