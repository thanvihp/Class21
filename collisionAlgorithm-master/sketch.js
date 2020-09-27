var fixedRect, movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}
function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  //else{
    //movingRect.shapeColor = "green";
    //gameObject1.shapeColor = "green";
  //}

  else if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  bounceOff(movingRect,fixedRect)
  drawSprites();
}
