const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine, object, world;
var block8,block9,block10,block11,block12;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 object = new Ground (300, 200, 200, 10);
 block8 = new Box(330,235,30,40)
 block9 = new Box(360,235,30,40)
 block10 = new Box(390,235,30,40)
 block11 = new Box(420,235,30,40)
 block12 = new Box(450,235,30,40)


}

function draw() {
  background(0,0,0);  
  object.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  drawSprites();
}