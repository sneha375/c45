var player; //playerImg;
var ball, ballImg;
var edges;
var brick,bricksGroup,brickImg;
var gameState="serve"


function preload(){
ballImg=loadImage("ball.png")
playerImg=loadImage("player.png")
//brickImg=loadImage("brick.png")
}

function setup(){
createCanvas(windowWidth, windowHeight)

player=createSprite(windowWidth/2,windowHeight-100,100,20)
ball=createSprite(windowWidth/2,windowHeight-200)
ball.addImage(ballImg)
ball.scale=0.5
player.addImage(playerImg)
edges=createEdgeSprites();
player.shapeColor=("black")
ball.shapeColor=("red")
player.setCollider("rectangle",0,0,60,140)
player.debug=false;
bricksGroup=new Group()

}
function draw(){
background("grey")
drawSprites()

//console.log (player.x)
if (gameState=="serve"){
  fill ("black")
  textSize(30)
  text("Click on Ball to Play",width/2-150, height/2)
  ball.velocityX=0;
  ball.velocityY=0;
  ball.x=windowWidth/2;
  ball.y=windowHeight-200
}
else if(gameState=="end"){
    text("Game Over", width/2-150,height/2);
    ball.remove;
  }
  else {
    gamePlay()
  }
  





  createBrickRow(65,"blue")
  createBrickRow(130,"red")
  createBrickRow(195,"purple")
  createBrickRow(260,"pink")


}



function createBrickRow(y,color){
for(var i=0; i<20; i++){
  brick=createSprite(100+54*i,y,50,30)
  brick.shapeColor=color
  bricksGroup.add(brick)
  //brick.setCollider("rectangle",0,0,40,50)
 //brick.debug=true
}
}

function gamePlay(){
  player.x=mouseX;
  if(player.x<=50){
    player.x=50
    }
    if(player.x>=1300){
      player.x=1300
      }
ball.bounceOff(edges[0])
ball.bounceOff(edges[1])
ball.bounceOff(edges[2])
ball.bounceOff(player);
ball.bounceOff(bricksGroup);

function mouseClicked(){
  ball.velocityX=7
  ball.velocityY=5
  }
}