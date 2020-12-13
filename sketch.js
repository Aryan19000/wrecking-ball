
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine, ground, ball, sling;
var ground, box;

function setup() {
	createCanvas(1100, 550);
	engine=Engine.create();
	world=engine.world;
  ball=new Ball(300, 250, 50);
  sling=new SlingShot(ball.body, {x:300, y:50});
  ground=new Ground(550, 500, 1100, 20);
  box1=new Box(600, 100);
  box2=new Box(600, 100);
  box3=new Box(600, 100);
  box4=new Box(600, 100);
  box5=new Box(600, 100);
  box6=new Box(600, 100);
  box7=new Box(700, 100);
  box8=new Box(700, 100);
  box9=new Box(700, 100);
  box10=new Box(700, 100);
  box11=new Box(700, 100);
  box12=new Box(700, 100);
  box13=new Box(500, 100);
  box14=new Box(500, 100);
  box15=new Box(500, 100);
  box16=new Box(500, 100);
  box17=new Box(500, 100);
  box18=new Box(500, 100);
  box19=new Box(500, 100);
  box20=new Box(500, 100);
  /*for(var i=500; i<=900; i=i+200){
    for(var j=450; j>=50; j=j-50){
      box=new Box(i, j);
    }
  }*/
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("black");
  ball.display();
  sling.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:0.5, y:0});
  }
}
