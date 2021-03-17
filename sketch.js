var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "purple";
  movingRect = createSprite(600, 200, 80, 30);
  movingRect.shapeColor = "purple";
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x - fixedRect.x)

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2   &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2   &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2  &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2  )
  {
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";

  }
  else{
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";


  }
  drawSprites();
}