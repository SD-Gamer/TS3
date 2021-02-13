const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var bg = "white.png";
var backgroundImg;

function preload(){
   getBgImg();
}

function setup() {
  createCanvas(1000,400);
   
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(650,200,20,30);
  box2 = new Box(670,200,20,30);
  box3 = new Box(690,200,20,30);
  box4 = new Box(710,200,20,30);
  box5 = new Box(730,200,20,30);
  box6 = new Box(750,200,20,30);

  box7 = new Box(660,180,20,30);
  box8 = new Box(680,180,20,30);
  box9 = new Box(700,180,20,30);
  box10 = new Box(720,180,20,30);
  box11 = new Box(740,180,20,30);

  box12 = new Box(670,150,20,30);
  box13 = new Box(690,150,20,30);
  box14 = new Box(710,150,20,30);
  box15 = new Box(730,150,20,30);

  box16 = new Box(680,120,20,30);
  box17 = new Box(700,120,20,30);
  box18 = new Box(720,120,20,30);

  box19 = new Box(690,90,20,30);
  box20 = new Box(710,90,20,30);

  box21 = new Box(700,60,20,30);

  box22 = new Box(150,200,20,30);
  box23 = new Box(170,200,20,30);
  box24 = new Box(190,200,20,30);
  box25 = new Box(210,200,20,30);
  box26 = new Box(230,200,20,30);
  box27 = new Box(250,200,20,30);

  box28 = new Box(160,180,20,30);
  box29 = new Box(180,180,20,30);
  box30 = new Box(200,180,20,30);
  box31 = new Box(220,180,20,30);
  box32 = new Box(240,180,20,30);

  box33 = new Box(170,150,20,30);
  box34 = new Box(190,150,20,30);
  box35 = new Box(210,150,20,30);
  box36 = new Box(230,150,20,30);

  box37 = new Box(180,120,20,30);
  box38 = new Box(200,120,20,30);
  box39 = new Box(220,120,20,30);

  box40 = new Box(190,90,20,30);
  box41 = new Box(210,90,20,30);

  box42 = new Box(200,60,20,30);

  ground1 = new Ground(700,250,300,30);
  ground2 = new Ground(200,250,300,30);

  ball = new Ball(450,100,30);

  sling = new Sling(ball.body,{x:450,y:50});

  ground = new Ground(500,395,1000,20);

}

function draw() {
   if(backgroundImg)
      background(bg);
   Engine.update(engine); 

   fill("red");
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   fill("yellow")
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   fill("blue")
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   fill("green");
   box16.display();
   box17.display();
   box18.display();
   fill("pink");
   box19.display();
   box20.display();
   fill("black");
   box21.display();
   fill("red");
   box22.display();
   box23.display();
   box24.display();
   box25.display();
   box26.display();
   box27.display();
   fill("yellow");
   box28.display();
   box29.display();
   box30.display();
   box31.display();
   box32.display();
   fill("blue");
   box33.display();
   box34.display();
   box35.display();
   box36.display();
   fill("green");
   box37.display();
   box38.display();
   box39.display();
   fill("pink");
   box40.display();
   box41.display();
   fill("black");
   box42.display();

   ball.display();
  
   ground.display();
  
   sling.display();
   ground1.display();
   ground2.display();

}
function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
   sling.fly();
}
function keyPressed(){
   if(keyCode === 32){
      Matter.Body.setPosition(ball.body,{x:450,y:100});
      sling.attach(ball.body);
   }
}
async function getBgImg(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour >= 6 && hour <= 18){
        bg = "white.png";
    }
    else{
        bg = "dark.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}