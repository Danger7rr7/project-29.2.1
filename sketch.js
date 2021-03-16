
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
 
var holder,ball,ground;
var stand1,stand2;
var slingshot;
var polygon_img;

function preload(){
    //polygon_image = loadImage("polygon.png");
    //backgroundimg = loadImage("bg.png");
}

function setup(){
    engine = Engine.create();
    world = enginee.world;
    

    createCanvas(900,400);

    ground = new Ground
    stand1 = new Stand(380,300,270,10);
    stand2 = new Stand(700,200,200,10);

    //set1
    //first floor
    block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);
    block3 = new Block(340,275,30,40); 
    block4 = new Block(370,275,30,40);
    block5 = new Block(400,275,30,40);
    block6 = new Block(430,275,30,40);
    block7 = new Block(460,275,30,40);
    block8 = new Block(490,275,30,40);
    //second floor
    block9  = new Block(310,235,30,40);
    block10 = new Block(340,235,30,40);
    block11 = new Block(370,235,30,40);
    block12 = new Block(400,235,30,40);
    block13 = new Block(430,235,30,40);
    block14 = new Block(460,235,30,40);
    //third floor
    block15 = new Block(340,195,30,40);
    block16 = new Block(370,195,30,40);
    block17 = new Block(400,195,30,40);
    block18 = new Block(430,195,30,40);
    //fourth floor
    block19 = new Block(370,155,30,40);
    block20 = new Block(400,155,30,40);
    //fifth floor
    block21 = new Block(385,115,30,40);

    //set2
    //first floor
    block1 = new Block(640,155,30,40);
    block2 = new Block(670,155,30,40);
    block3 = new Block(700,155,30,40);
    block4 = new Block(730,155,30,40);
    block5 = new Block(760,155,30,40);
    //second floor
    block6 = new Block(670,135,30,40);
    block7 = new Block(700,135,30,40);
    block8 = new Block(730,135,30,40);
    //third floor
    block9 = new Block(700,95,30,40);


    ball = Bodies.circle(50,200,20);
    World.add(world.ball);

    slingshot = new SlingShot(this.ball,{x:200,y:200});


   
}
function draw(){
    background("white");
     Engine.update(engine);

     //ground display
     strokeWeight(2);
     stroke(15);

     stand1.display();
     stand2.display();
     
     stroke(15);
     fill("black");
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     stroke(15);
     fill("orange");
     block9.display();
     block10.display();
     block11.display();
     block12.display();
     block13.display();
     block14.display();
     stroke(15);
     fill("blue");
     block15.display();
     block16.display();
     block17.display();
     block18.display();
       stroke(15);
       fill("green");
     block19.display();
     block20.display();
     stroke(15);
     fill("pink");
     block21.display();

     stroke(15);
     fill("red");
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     stroke(15);
     fill("yellow");
     block6.display();
     block7.display();
     block8.display();
     stroke(15);
     fill("cyan");
     block9.display();


     ellipse(ball.position.x,ball.position.y,20);
     slingshot.display();
     
} 

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}