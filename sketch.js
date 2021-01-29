
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
ground=new Ground(0,600,1650,20)
stone=new Stone(100,300,50,50)
hammer=new Hammer(500,300,70,30)
rubber=new Rubber(350,300,25)
sand1=new Sand(300,100,5)
sand2=new Sand(200,100,5)
sand3=new Sand(410,130,5)
sand4=new Sand(500,100,5)
sand5=new Sand(175,130,5)
iron=new Iron(400,175,100,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine)
 
  ground.display()
  stone.display()
  rubber.display()
  sand1.display()
  sand2.display()
  sand3.display()
  iron.display()
  hammer.display()
  

  



  

  
 
}



