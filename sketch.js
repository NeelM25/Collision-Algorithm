var fixRect;
var movRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(600, 400, 50, 80);
  fixRect.shapeColor = "green";
  fixRect.debug = true;

  movRect = createSprite(400, 200, 80, 30);
  movRect.shapeColor = "green";
  movRect.debug = true;

}

function draw() {
  background(0,0,0);

  movRect.x = World.mouseX;
  movRect.y = World.mouseY;

  if(movRect.x - fixRect.x <= movRect.width/2 + fixRect.width/2
    && fixRect.x - movRect.x <= movRect.width/2 + fixRect.width/2
    && fixRect.y - movRect.y <= movRect.height/2 + fixRect.height/2
    && movRect.y - fixRect.y <= movRect.height/2 + fixRect.height/2  
    ){
    movRect.shapeColor = "red";
    fixRect.shapeColor = "red";
  }
  else{
    movRect.shapeColor = "green";
    fixRect.shapeColor = "green";
  }

  drawSprites();
}