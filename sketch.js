//CREATE THE VARIABLES
var car,wall;
var speed,weight;

function setup() {
//CREATE CANVAS
createCanvas(800,400);
//RANDOM NO. FOR SPEED&WEIGHT
speed=random(55,90);
weight=random(400,1500);
//CREATES SPRITES
car=createSprite(50,200,50,50);
wall=createSprite(700,200,60,height/2);
//GIVES COLOUR&VELOCITY TO CAR
wall.shapeColor=color(80,80,80);
car.velocityX=speed;
}

function draw() {
//BACKGROUND COLOUR
background(255,255,255);

//IS TOUCHING ALGORITHM
if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  //DEFORMATION CALCULATION & COLOUR CHANGE OF CAR BASED ON THAT
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
//DISPLAY THE SPRITES
drawSprites();
}
}
