const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var Blow;
var blowMouth;
var ball
var btn;

function setup() 
{
  createCanvas(800,400);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  Blow = new Blower(500,200,250,200);
  blowMouth = new Blower(250,290,250,20);
ball = new Ball(250,250,50,50);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background('#3B3B3B');
  Blow.show();
  blowMouth.show();
  ball.show();
  Engine.update(engine);
    blowbutton()
}
function blowbutton(){
  btn = createButton("CLICK TO BLOW")
  btn.position(500,350);
 // btn.size(120,20)
  btn.class("blowbutton")
  btn.mouseClicked(airblow);
}
function airblow(){
  Mater.body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}
