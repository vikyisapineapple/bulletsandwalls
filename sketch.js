var bullet,bullet2, wall, speed, weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 150, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  bullet2 = createSprite(50, 250, 50, 20);
  bullet2.velocityX = speed;
  bullet2.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor =80,80,80;
  wall.shapeColor = color(80,80,80);

  function hasCollided(Lbullet,Lwall){

    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x
    if(bulletRightEdge>=wallLeftEdge){

      return true
    }
    return false
  }
}

function draw() {
  background(0);

  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;

    var deformation = (0.5 * weight * speed * speed)/22500;
    if(deformation < 100){
      bullet.shapeColor = "green";
    }
    if(deformation > 80 && deformation < 180){
      bullet.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      bullet.shapeColor = "red";
    }
  }


  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet2.velocityX = 0;

  var deformation = (0.5 * weight * speed * speed)/22500;
  if(deformation < 100){
    bullet2.shapeColor = "green";
  }
  if(deformation > 80 && deformation < 180){
    bullet2.shapeColor = color(230,230,0);
  }
  if(deformation > 180){
    bullet2.shapeColor = "red";
  }
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed *speed/(thickness *thickness *thickness);
    if(damage>10){

      wall.shapeColor=color(225,0,0);
    }
    if(damage<10){

      wall.shapeColor=color(0,225,0);
    }




  }
}



  drawSprites();
}
