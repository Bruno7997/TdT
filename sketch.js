var canvas;
var p,x=0,y=0, X=0, Y=0
var m = []
function preload() {

  p = createSprite(windowWidth/2,windowHeight/2,100,100)
p.shapeColor = "gray"


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  p.setVelocity(x,y)
  background(200,200,200);
  if(keyIsDown(RIGHT_ARROW)){x=2}else if(keyIsDown(LEFT_ARROW)){x=-2}else(x=0)
  if(keyIsDown(DOWN_ARROW)){y=2}else if(keyIsDown(UP_ARROW)){y=-2}else(y=0)
if(keyIsDown(DOWN_ARROW)){
  mons= new Monster(windowWidth, windowHeight)
}
if (m.length>0){
  mons.speed(p.x,p.y)
}
  drawSprites()
  
}
function keyPressed() {
  
}