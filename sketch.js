/*var a;
var circles=[];
function setup() {
  createCanvas(1200,700);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} */

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygonImg

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup(){
  createCanvas(1200, 700);
	engine = Engine.create();
  world = engine.world;
  //Making bodies here:
  bigStand = new Holder(610,550,240,20);
  smallStand = new Holder(700,200,200,10);
  //bottom level
  fill("lightred");
  bBlock1 = new Box(700,520,30,40);
  bBlock2 = new Box(670,520,30,40);
  bBlock3 = new Box(640,520,30,40);
  bBlock4 = new Box(610,520,30,40);
  bBlock5 = new Box(590,520,30,40);
  bBlock6 = new Box(560,520,30,40);
  bBlock7 = new Box(530,520,30,40);
  //middle level
  fill("lightBlue");
  mBlock1 = new Box(670,480,30,40);
  mBlock2 = new Box(640,480,30,40);
  mBlock3 = new Box(610,480,30,40);
  mBlock4 = new Box(590,480,30,40);
  mBlock5 = new Box(560,480,30,40);
  //top level
  tBlock1 = new Box(640,440,30,40);
  tBlock2 = new Box(610,440,30,40);
  tBlock3 = new Box(590,440,30,40);
  //final level
  fBlock1 = new Box(610,400,30,40);
  //the projectile
  polygon = Bodies.circle(200,370,20);
  World.add(world,polygon);
  //polygon.isStatic = "false";
  //shooting
  shooting = new Shooting(this.polygon,{x:200,y:370});
  //making the second tower
  //level one
  blocks1 = new Box(640,175,30,40);
  blocks2 = new Box(670,175,30,40);
  blocks3 = new Box(700,175,30,40);
  blocks4 = new Box(730,175,30,40);
  blocks5 = new Box(760,175,30,40);
  //level two
  blocks6 = new Box(670,135,30,40);
  blocks7 = new Box(700,135,30,40);
  blocks8 = new Box(730,135,30,40);
  //top
  blocks9 = new Box(700,95,30,40);


  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(125);
  //displaying the bodies here:
  bigStand.display();
  //bottom level display
  bBlock1.display();
  bBlock2.display();
  bBlock3.display();
  bBlock4.display();
  bBlock5.display();
  bBlock6.display();
  bBlock7.display();
  //middle level display
  mBlock1.display();
  mBlock2.display();
  mBlock3.display();
  mBlock4.display();
  mBlock5.display();
  //top level display
  tBlock1.display();
  tBlock2.display();
  tBlock3.display();
  //final level display
  fBlock1.display();
  //projectile
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  //second tower 
  //level one
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  //level two
  blocks6.display();
  blocks7.display();
  blocks8.display();
  //level three
  blocks9.display();
  //stand
  smallStand.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  shooting.fly();
}

