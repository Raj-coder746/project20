var bullet,wall;
var speed,weight,thickness;

function setup() 
{
createCanvas(1600,400);
background("black");
 
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,200,50,5);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="gray";

bullet.velocityX = speed;
}

function draw() {
  background("white");  
  bullet.debug=true;
  wall.debug=true;

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/22509;
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
     
    }
  
  
  drawSprites();
}

function hasCollided(bullet1,wall1){
    
  bulletRightEdge=bullet1.x +bullet1.width;
  wallLeftEdge=wall1.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
      return true
  }
  return false;

}