var fixedRect,movingRect;

var temporary

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor="red";

  movingRect=createSprite(200,300,80,30);
  movingRect.shapeColor="red";

  BounceOffRect1=createSprite(100,300,80,30)
  BounceOffRect1.velocityX=3
  BounceOffRect2=createSprite(700,300,80,30)
  BounceOffRect2.velocityX=-3

  temporary=createSprite(300,200,50,50)
  temporary.shapeColor="green";
}

function draw() {
  background(0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(is_touching(temporary,movingRect)){
    temporary.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    temporary.shapeColor="green";
    movingRect.shapeColor="red";
  }

  bounce_off(BounceOffRect1,BounceOffRect2);

  drawSprites();
}

