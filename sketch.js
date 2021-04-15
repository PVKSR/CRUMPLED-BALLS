
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1250, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1100,650);
	papper1 = new papper(300,660,100)
    //papper1.scale = 0.001
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  papper1.display();
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(papper1.body,papper1.body.position,{x:130,y:-145});

}


}

