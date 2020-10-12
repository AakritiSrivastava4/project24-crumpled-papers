
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=createSprite(600,665,1200,10);
   ground1.shapeColor="yellow"

	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	bottom=createSprite(800,650,200,20);
	bottom.shapeColor="red";

	bottomsupport= Bodies.rectangle(800,635,200,20,{isStatic:true});
	World.add(world,bottomsupport);

	leftsprite=createSprite(690,610,20,100);
	leftsprite.shapeColor="red";

	rightsprite=createSprite(910,610,20,100);
	rightsprite.shapeColor='red';

	ball=Bodies.circle(200,650,20,{isStatic:true});
	World.add(world,ball);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill ("magenta")
  ellipse(ball.position.x,ball.position.y,20,20);
 
  drawSprites();

 
}



