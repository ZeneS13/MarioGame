var PLAY = 1;
var END = 0;
var WIN=2;
var START=3;
var gameState = PLAY;

var invGround,mario,peach;
var groundGroup,enemyGroup,coinsGroup;
var blockimg,coinimg,marioimg,peachimg,enemyimg;
var bg,bgimg;
var score=0;


var gameOver, restart;


function preload(){
marioimg=loadImage("Pics/mario.png");
peachimg=loadImage("Pics/princess.png");
bgimg=loadImage("Pics/bg.jpg");
blockimg=loadImage("Pics/block.png");
coinimg=loadImage("Pics/coin.png");
enemyimg=loadImage("Pics/enemy.png");
level1img=loadImage("Pics/level1.png");
level2img=loadImage("Pics/level2.png");
}

function setup() {
  createCanvas(1200,400);
  bg=createSprite(600,200,1200,400);
  bg.addImage("bg",bgimg);
  bg.scale=0.5;

 invGround=createSprite(200,150,495,10);
 //invGround.debug=true;
 invGround.velocityX=-3;
 invGround.addImage("tile1",blockimg);

 mario=createSprite(100,150,10,50);
// mario.debug=true;
 mario.addImage("image",marioimg);
 mario.scale=0.07;


 
 groundGroup=new Group();
 coinsGroup=new Group();
 enemyGroup= new Group();
}

function draw() {
  background(0);
  drawSprites();
  if(gameState===START){



  }
if(gameState===PLAY){
  mario.collide(invGround);
 if(keyDown(32) && mario.y>30){
   mario.velocityY=-9;
 }
 mario.velocityY=mario.velocityY+0.4

 
 
 spawnGround();
 spawnCoins();
 spawnEnemy();

 for(var i=0;i<coinsGroup.length;i++){
  var coinG=coinsGroup.get(i);
  if( mario.isTouching(coinG)){
    coinG.destroy();
    score+=1;
  }
 }
 if(score===5){
   coinsGroup.velocityX=-12;
   groundGroup.velocityX=-12;
   enemyGroup.velocityX=-12;
 }
if(score===15){
  gameState=WIN;
 
}

 if(mario.x<0 || mario.y<0 || mario.x>1200 || mario.y>400|| enemyGroup.isTouching(mario)){
gameState=END
 }


}
if(gameState===WIN){
  
  groundGroup.setVelocityXEach(0);
  coinsGroup.setVelocityXEach(0);
  enemyGroup.setVelocityXEach(0);

  mario.velocityY=0;

  peach=createSprite(120,150,30,30);
  peach.addImage("img",peachimg);
  peach.scale=0.09;

  text("You win level 1",600,200);


}

if(gameState===END){
groundGroup.setVelocityXEach(0);
coinsGroup.setVelocityXEach(0);
enemyGroup.setVelocityXEach(0);


}

 mario.collide(groundGroup);
 
  
  text("Your score is "+score,1100,20);
  text("You have to get 15 coins to win",10,300);
}


function spawnGround(){
  if(frameCount %55===0){
var ground=createSprite(1200,random(150,350),100,40);
ground.addImage("tile",blockimg);
ground.velocityX=-9;
ground.scale=0.6;
groundGroup.add(ground);
}
}

function spawnCoins(){
  if(frameCount %30===0){
var coins=createSprite(1200,random(90,150),20,20);
 coins.addImage("coins",coinimg);
 coins.velocityX=-9;
 coins.scale=0.09;
 coinsGroup.add(coins);

  }
}

function spawnEnemy(){
if(frameCount %70===0){
var enemy= createSprite(1200,340,30,100);
enemy.addImage("img",enemyimg);
enemy.velocityX=-9;
enemy.scale=0.3;
enemyGroup.add(enemy);
}


}