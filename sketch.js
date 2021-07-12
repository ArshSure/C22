const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball1, ball2, ball3;
var ground;
var con1, con2;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball1_options = {
    restitution: 0.8
  }
  
  
  ball1 = Bodies.circle(200,50,10,ball1_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(100, 100, 25, {restitution:0.8});
  World.add(world, ball2);

  ball3 = Bodies.circle(300,300,40, ball1_options);
  World.add(world, ball3);

  
  
  con1 = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball1,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });

        con2 = Matter.Constraint.create({
          bodyA:ball1,
          bodyB:ball2,
          length:100,
          stiffness:0.5
        })

        con3 = Matter.Constraint.create({
          bodyA:ball2,
          bodyB:ball3,
          length:100,
          stiffness:0.01
         })

        
  
      World.add(world,con1);
      World.add(world, con2);
      World.add(world, con3);      
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x, ball2.position.y, 25);
  ellipse(ball3.position.x, ball3.position.y, 40);
  

  push();
  strokeWeight(2);
  stroke(255);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.bodyA.position.x,con2.bodyA.position.y, con2.bodyB.position.x,con2.bodyB.position.y);
  line(ball2.position.x, ball2.position.y, ball3.position.x, ball3.position.y);
  pop();


  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0});
    }
}

