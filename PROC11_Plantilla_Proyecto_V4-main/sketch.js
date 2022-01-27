var ship,sea;
var shipImg,seaImg;



function preload(){

  seaImg= loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png");
}


function setup(){
  createCanvas(400,400);
  background("blue");
 sea= createSprite(400,200);
 sea.addImage(seaImg);
 sea.scale=0.4;
 sea.velocityX=-6;
 ship=createSprite(130,200,40,40);
 ship.addAnimation("movingShip",shipImg1);
 ship.scale=0.25;
}



function draw() {
  background(0);
 sea.velocityX=-3;
  drawSprites();
}