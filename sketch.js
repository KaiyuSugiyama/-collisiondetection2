var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  object1 = createSprite(100,300,20,20);
  object2 = createSprite(500,400,50,20);
  object3 = createSprite(300,200,50,20);
  object4 = createSprite(200,400,50,20);
  object1.shapeColor = "yellow";
  object2.shapeColor = "green";
  object3.shapeColor = "pink";
  object4.shapeColor = "purple";

}
function draw() {
  background(0,0,0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect, fixedRect)){
     movingRect.shapeColor = "red";
     fixedRect.shapeColor = "red";
  }else{
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
  }
  
  if(isTouching(movingRect, object4)) {
    movingRect.shapeColor = "red";
    object4.shapeColor = "red";
  }else{
      movingRect.shapeColor = "green";
      object4.shapeColor = "purple";
  }
  
  drawSprites();
}
