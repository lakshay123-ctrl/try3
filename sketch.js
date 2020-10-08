
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box = new Box(200,200,20,20);

  box1 = new Box1(100,100,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box.display();
  box1.display();

  detectollision(box,box1);
 
  drawSprites();

 
}

function detectollision(box,box1){
  box1BodyPosition = box1.body.position;
  boxBodyPosition = box.body.position;

  var distance = dist(boxBodyPosition.x,boxBodyPosition.y,box1BodyPosition.x,box1BodyPosition.y);
  if (distance<=box1.r+box.r){
    Matter.Body.setStatic(box1.body,false);
  }
}




