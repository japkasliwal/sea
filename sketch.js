var bg;
var ship
var sea
var pirate;




function preload(){
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
bg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,20,20)
  pirate = createSprite(100,220,20,20)
  sea.addImage("ocean",bg)
pirate.addAnimation("ships",ship)
pirate.scale=0.2
sea.scale=0.5
sea.velocityX=-4
}

function draw() {
  
  background(220);
  drawSprites()
  if (sea.x<0){
    sea.x=sea.width/4
  }
}
