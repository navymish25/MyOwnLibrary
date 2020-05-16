var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(600,350,50,50);
  rect1.shapeColor="green";
  rect1.debug = true;
  rect2 = createSprite(600,750,50,50);
  rect2.shapeColor = "green";
  rect2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  rect2.x = mouseX;
  rect2.y = mouseY;
  

  bounceOff(movingRect,fixedRect);
  

  if(isTouching(rect1,rect2)){
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
    
  }

  else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
    
  }
 
  drawSprites();
}

