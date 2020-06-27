var PLAY = 1;
var END = 0;
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
  

  mario.collide(invGround);
 if(keyDown(32) && mario.x<300){
   mario.velocityY=-9;
 }
 mario.velocityY=mario.velocityY+0.4

 
 
 spawnGround();
 spawnCoins();
 spawnEnemy();
 mario.collide(groundGroup);
 //groundGroup.collide(invGround);
  drawSprites();
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
  if(frameCount %40===0){
var coins=createSprite(1200,random(150,250),20,20);
 coins.addImage("coins",coinimg);
 coins.velocityX=-9;
 coins.scale=0.09;
 coinsGroup.add(coins);

  }
}

function spawnEnemy(){
if(frameCount %63===0){
var enemy= createSprite(1200,360,30,100);
enemy.addImage("img",enemyimg);
enemy.velocityX=-9;
enemy.scale=0.2;
enemyGroup.add(enemy);
}


}