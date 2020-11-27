var ground;
var boxr;
var boxl;
var boxb;
var ball1;
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
  

	
    
    //ball=new Ball(100,320,30,30);
    ball1=new Ball(100,600,20);
    ground = new Ground(width/2,620,width,20);
    boxb=new Box(width/2+20,600,100,20);
    

    boxl=new Box(width/2-40,550,20,100);
    

    boxr=new Box(width/2+80,550,20,100);

   
    

	
  
}


function draw() {
  
  background(0);
  Engine.update(engine)
  
  ball1.display();
  ground.display();
  boxb.display();
  boxl.display();
  boxr.display();

  
}
function keyPressed(){
  if(keyCode===UP_ARROW)
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0.5,y:-0.05});

}


