const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var star;
var fairy;
function preload()
{
  starI= loadImage("images/star.png")
  fairyI= loadImage("images/fairy1.png")
   //preload the images here
}

function setup() {
  createCanvas(800,750);
  engine = Engine.create();
  world = engine.world;
  var soptions ={
    isStatic:true,
    restitution:0.8
    
  } 
  var foptions ={
    isStatic:true,
    restitution:0.8
    
  } 
  star = Bodies.circle(700,50,50, soptions)
  World.add(world, star);
  fairy=Bodies.circle(100,400,300,foptions)
  World.add(world, fairy);
}


function draw() {
  background("black");
  Engine.update(engine);
  imageMode(CENTER);
  image(starI,star.position.x, star.position.y, 50,50);
 image(fairyI,fairy.position.x,fairy.position.y,300,300);
}

//to do
//create fairy and add image
//download supply mission, rename and keep...images also donwload.add
//download todays project....add a box and ground class to it.
function keyPressed(){
  
  if(keyCode===LEFT_ARROW){
    fairy.position.x=fairy.position.x-10;
  }
  else if(keyCode===RIGHT_ARROW){
    fairy.position.x=fairy.position.x+10;
  }
  else  if (keyCode===DOWN_ARROW){
    Matter.Body.setStatic(star,false);
    console.log(star.position.y)
  }

  }

  

  

  

  

  

  

  

  

  

  

  

  

  

  
