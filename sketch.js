var btn_red;
var btn_green;
var btn_blue;
var btn_yellow;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red=createButton("RED");
  btn_red.position(120,50);
  btn_red.mousePressed(red_bg);

  btn_green=createButton("GREEN");
  btn_green.position(200,50);
  btn_green.mousePressed(green_bg);

  btn_blue=createButton("BLUE");
  btn_blue.position(300,50);
  btn_blue.mousePressed(blue_bg);

  btn_pink=createButton("YELLOW");
  btn_pink.position(20,50);
  btn_pink.mousePressed(yellow_bg);

}

function draw() {
  background(r,g,b);
}
function red_bg()
{
  r=225;
  g=0;
  b=0;
}
function green_bg()
{
  r=0;
  g=225;
  b=0;
}
function blue_bg()
{
  r=0;
  g=0;
  b=225;
}
function yellow_bg()
{
r=225;
g=225;
b=0;
}