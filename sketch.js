const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;


var ground;
var box;
var slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);
    box1 = new Box(330,235,30,40)
    box2 = new Box(360,235,20,40)
    box3 = new Box(390,235,30,40)
    box4 = new Box(420,235,30,40)
    box5 = new Box(450,235,30,40)

    box6 = new Box(360,195,30,40)
    box7 = new Box(390,195,30,40)
    box8 = new Box(420,195,30,40)

    box9 = new Box(390,155,30,40)
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    //strokeWeight(4);
    noStroke()
    textSize(35)
    fill(255)
    text("score:"+score,width-300,50)
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
slingshot.attach(bird.body)
}
}

async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    var datetime =  responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=6&&hour<=19){
        bg = backgroundImg
    }
    backgroundImg = loadImage(bg)
}