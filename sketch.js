var fixedRectangle, movingRectangle, gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(400, 200, 50, 80);
  fixedRectangle.shapeColor = "green";
  fixedRectangle.debug = true;
  movingRectangle = createSprite(400, 400, 80, 30);
  movingRectangle.shapeColor = "green";
  movingRectangle.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0); 
   movingRectangle.x = mouseX;
   movingRectangle.y = mouseY;
   console.log(movingRectangle.x - fixedRectangle.x);

   if (isTouching(movingRectangle, gameObject2)){
    movingRectangle.shapeColor = "red";
    gmeObject2.shapeColor = "red";
   }

   else{
    movingRectangle.shapeColor = "green";
    gameObject2.shapeColor = "green";
   }
   bounceOff(movingRectangle, fixedRectangle);
   drawSprites();
}

