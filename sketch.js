
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function setup() {
  createCanvas(1200, 600);
  
  roof = new Roof(300, 180, 100, 30);


	engine = Engine.create();
	world = engine.world;
  
}


function draw() {
  background(0);
  Engine.update(engine)

  roof.display();  


 
}



