const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball,ground,log1,log2,log3,log4,stone1,stone2,stone3,backgroundIMG,woodIMG,star1,star2,star3,star4,star5,star6,starIMG,start,roof
var gameState="play"
var gameState="start"
var engine, world;
var ball
var ground
var count=0
var hero,heroIMG

function preload(){
  background2IMG=loadImage("background2.jpg")
  background1IMG=loadImage("background.jpg")
  startIMG=loadImage("start.png")

}

function setup() {
  createCanvas(1600,700);
  rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
   
   
   

    
    ground=new Ground(width/2,670,width,20);
    roof=new Ground(width/2,10,width,20)
    log1=new Logs(150,510,290,300)
    log2=new Logs(1100,500,width/7,20)
    log3=new Logs(600,200,width/7,20)
    log4=new Logs(1450,510,290,300)
   
  

  
 
   
  
  Engine.run(engine);
 
}

function draw() {
 
  background (background1IMG, 0,-displayHeight,displayWidth*4, displayHeight*5);
  Engine.update(engine);

 

  if(gameState==="start"){
    background(background2IMG)
     start=createSprite(500,300,20,20)
     start.addImage(startIMG)
     start.display()
    
  }

 if(gameState==="play"){
  
  ground.display()
  roof.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
 
 
  
 }

 if(mousePressedOver(start)){
  
  gameState="play"
 
 }
  
  
}

