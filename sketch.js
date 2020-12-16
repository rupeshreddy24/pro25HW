
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var paperImg;
var ground,binl,binb,binr;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

 paper = new Paper(100,600,40);
 ground = new Ground(500,650,1000,20);
 binl = new Dusbin(600,564,150,20,PI/2);
 binb = new Dusbin(692,630,200,20,0);
 
 binr = new Dusbin(800,564,150,20,PI/2);

 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(235);




  if(keyDown(UP_ARROW))
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-25})
  }
  
  drawSprites();

  ground.display();
  paper.display();
  binl.display();
  binb.display();
  binr.display();
}



