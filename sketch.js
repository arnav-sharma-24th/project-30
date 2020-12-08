const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon,polygon_img;
var gameState;
var slingshot;

function preload(){
  polygon_img = loadImage("hello.png")

}

function setup() {
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
 Engine.run(engine);
  world = engine.world;

  polygon = Bodies.circle(50, 200, 20) ;
World.add (world, polygon) ;
slingshot = new SlingShot (this.polygon,{x: 100, y:200});


  ground1 = new Ground(390,270,300,20)
 

  block8 = new block(330, 235, 30, 40);
    block9 = new block(360, 235, 30, 40);
    block10 = new block(390, 235, 30, 40);

    block11 = new block(420, 235, 30, 40);
    block12 = new block(450, 235, 30, 40);

    //level three
    block13 = new block(360, 195, 30, 40);

    block14 = new block(390, 195, 30, 40);
    block15 = new block(420, 195, 30, 40);
    //top
    block16 = new block(390, 155, 30, 40);
 
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine); 
  //level two
  imageMode (CENTER)
  image (polygon_img , polygon.position.x, polygon.position.y, 40, 40) ;
  
  //polygon holder with slings


   
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   slingshot.display();
   ground1.display();
   drawSprites();
   textSize(20)
   text("Press Space To PLAY Again",300,50)
 

 
}

function mouseDragged(){
  
  if (gameState="unlaunched"){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
  
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
  
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon);
     gameState=="unlaunched"

  }
}
