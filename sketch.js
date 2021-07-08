var seaimg
var shipimg1

function preload(){
seaimg=loadImage("sea.png");
shipimg1=loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea.addimage(seaimg);
 
}

function draw() {
  background("blue");
  if(sea.x<0){sea.x=sea.width/2}
}
drawsprites();