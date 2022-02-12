
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
	ground = Bodies.rectangle(0, height - 30, width * 2, 20, { isStatic: true });
	World.add(world, ground);


	
	ball = Bodies.circle(20, height - 35, 20)
	World.add(world, ball);
  
	box1 = Bodies.rectangle(650,height -80,10,100, { isStatic: true })
	World.add(world, box1);

	box2 = Bodies.rectangle(700,height -80,10,100, { isStatic: true })
	World.add(world, box2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  rect(ground.position.x, ground.position.y, width * 2, 20);
  ellipse(ball.position.x, ball.position.y, 20,20)
  rect(box1.position.x,box1.position.y,10,100)
  rect(box2.position.x,box2.position.y,10,100)
  if(keyCode == RIGHT_ARROW){
     Matter.Body.applyForce(ball,ball.position,{x:10,y:-10})
  }
  drawSprites();
 
}



