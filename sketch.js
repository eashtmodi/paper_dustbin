const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var paper;
var bg;

function preload(){
    bg=loadImage("download.jpg")
}


function setup(){
    
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(400,380,900,20);
    dustbinObj1 = rect(595,300,20,140);
    dustbinObj2 = rect (655,362,100,140);
    dustbinObj3 = rect(715,300,20,140);

    dustbinObj4 = new Dustbin(655,362,100,140);
    paper = new Paper(80,20);

    chain=new  Chain(paper.body,{x:200,y:0});

    
      
}

function draw(){
    background(bg);
    
   Engine.update(engine);
   paper.display();
   ground.display();
   dustbinObj4.display();
   chain.display();
   
    
}

function keyPressed(){
    if(keyCode === UP_ARROW){
     //console.log(trash)
        Matter.Body.applyForce(paper.body,paper.body.position,{x:33,y:-50})
    }
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mousePressed(){
    chain.fly();
}