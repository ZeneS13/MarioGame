var PLAY = 1;
var END = 0;
var WIN=2;
var gameState=PLAY;
var mario, princess;
var blockimg,coinimg,marioimg,peachimg,enemyimg;
var coin1,coin2, coin3, coin4, coin5;
var enemy1, enemy2, enemy3, enemy4;
var bg, bg2;
var wall, wall1, wall2, wal3, wall4, wall5, wall6, wall7, wall8, wall9,wall10;
var  wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19;
var wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31,wall32,wall33;

function preload(){
    marioimg=loadImage("Pics/mario.png");
    peachimg=loadImage("Pics/princess.png");
    bg2=loadImage("Pics/bg2.jpg");
    blockimg=loadImage("Pics/block.png");
    coinimg=loadImage("Pics/coin.png");
    enemyimg=loadImage("Pics/enemy2.png");
}
function setup() {
    createCanvas(1200,600);
    bg=createSprite(600,300,1200,400);
    bg.addImage("bg",bg2);
    bg.scale=0.6;

    mario=createSprite(840,500,0,0);
    mario.addImage("mario",marioimg);
    mario.scale=0.03;
    mario.debug=true;

    princess=createSprite(310,100,0,0);
    princess.addImage("peach",peachimg);
    princess.scale=0.08;
     
//border walls
var wall=createSprite(600,10,0,0);
wall.addImage("wall",blockimg);
wall.scale=2;

var wall1=createSprite(600,590,0,0);
wall1.addImage("wall",blockimg);
wall1.scale=2;

var wall2=createSprite(270,300,20,1200);
//wall2.addImage("wall",blockimg);
wall2.scale=2;

var wall3=createSprite(947,300,20,1200);
//wall3.addImage("wall",blockimg);
wall3.scale=2;

//inside walls
var wall4=createSprite(800,515,20,40);

var wall5=createSprite(680,515,20,40);

var wall6=createSprite(530,370,10,340);

var wall7=createSprite(730,85,10,60);

var wall8=createSprite(620,90,10,70);

var wall9=createSprite(350,130,10,150);

var wall10=createSprite(545,110,160,10);

var wall11=createSprite(460,280,10,350);
    
var wall12=createSprite(435,460,60,10);

var wall13=createSprite(410,440,10,50);

var wall14=createSprite(330,300,90,10);

var wall15=createSprite(370,330,10,60);

var wall16=createSprite(920,240,90,10);

var wall17=createSprite(880,280,10,90);

var wall18=createSprite(850,330,70,10);

var wall19=createSprite(820,365,10,80);

var wall20=createSprite(910,480,50,10);

var wall21=createSprite(780,400,200,10);

var wall22=createSprite(880,390,10,30);

var wall23=createSprite(750,425,10,60);

var wall24=createSprite(880,390,10,30);

var wall25=createSprite(560,460,60,10);

var wall26=createSprite(580,380,90,10);

var wall27=createSprite(580,300,100,10);

var wall28=createSprite(640,230,230,10);

var wall29=createSprite(680,190,10,90);

var wall30=createSprite(720,300,70,10);

var wall31=createSprite(760,250,10,150);

var wall32=createSprite(795,180,80,10);

var wall33=createSprite(830,150,10,80);

} 
function draw(){
  background(0);
  
  mario.bounceOff(wall);
  move();
  
 
    drawSprites();
} 

function move(){
 if(keyDown(UP_ARROW)){
   mario.velocityY=-2;
 }
 if(keyDown(DOWN_ARROW)){
    mario.velocityY=2;
    }
 if(keyDown(37)){
        mario.velocityX=-2;
        }

        if(keyDown(39)){
            mario.velocityX=2;
            }
}

function wallCollide(){
    //mario.bouneoff(wall);
    mario.collide(wall1);
    mario.collide(wall2);
    mario.collide(wall3);
    mario.collide(wall4);
    mario.collide(wall5);
    mario.collide(wall6);
    mario.collide(wall7);
    mario.collide(wall8);
    mario.collide(wall9);
    mario.collide(wall10);
    mario.collide(wall11);
    mario.collide(wall12);
    mario.collide(wall13);
    mario.collide(wall14);
    mario.collide(wall15);
    mario.collide(wall16);
    mario.collide(wall17);
    mario.collide(wall18);
    mario.collide(wall19);
    mario.collide(wall20);
    mario.collide(wall21);
    mario.collide(wall22);
    mario.collide(wall23);
    mario.collide(wall24);
    mario.collide(wall25);
    mario.collide(wall26);
    mario.collide(wall27);
    mario.collide(wall28);
    mario.collide(wall29);
    mario.collide(wall30);
    mario.collide(wall31);
    mario.collide(wall32);
    mario.collide(wall33);
    
}
    