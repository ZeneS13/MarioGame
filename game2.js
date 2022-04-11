
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
  var score=0;

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
      mario.scale=0.04;
      

      princess=createSprite(310,100,0,0);
      princess.addImage("peach",peachimg);
      princess.scale=0.08;

      enemy1=createSprite(375,220,0,0);
      enemy1.addImage("enemy",enemyimg);
      enemy1.scale=0.025;
      enemy1.velocityY=2;

      enemy2=createSprite(550,345,0,0);
      enemy2.addImage("enemy",enemyimg);
      enemy2.scale=0.025;
      enemy2.velocityX=-2;

      enemy3=createSprite(645,120,0,0);
      enemy3.addImage("enemy",enemyimg);
      enemy3.scale=0.025;
      enemy3.velocityY=1; 

      enemy4=createSprite(790,265,0,0);
      enemy4.addImage("enemy",enemyimg);
      enemy4.scale=0.025;
      enemy4.velocityX=-1;

      //coins 
      coin1=createSprite(905,280,0,0)
      coin1.addImage("coin",coinimg)
      coin1.scale=0.07

      coin2=createSprite(580,505,0,0)
      coin2.addImage("coin",coinimg)
      coin2.scale=0.07

      coin3=createSprite(570,270,0,0)
      coin3.addImage("coin",coinimg)
      coin3.scale=0.07

      coin4=createSprite(570,90,0,0)
      coin4.addImage("coin",coinimg)
      coin4.scale=0.07

      coin5=createSprite(435,427,0,0)
      coin5.addImage("coin",coinimg)
      coin5.scale=0.07

      


      
  //border walls
    wall=createSprite(600,10,0,0);
  wall.addImage("wall",blockimg);
  wall.scale=2;

  wall1=createSprite(600,590,0,0);
  wall1.addImage("wall",blockimg);
  wall1.scale=2;

  wall2=createSprite(270,300,20,1200);
  wall2.shapeColor=rgb(210, 130, 67)
  wall2.scale=2;

  wall3=createSprite(947,300,20,1200);
  wall3.shapeColor=rgb(210, 130, 67)
  wall3.scale=2;

  //inside walls
  wall4=createSprite(800,515,20,40);
  wall4.shapeColor=rgb(210, 130, 67);

  wall5=createSprite(680,515,20,40);
  wall5.shapeColor=rgb(210, 130, 67);

  wall6=createSprite(530,370,10,340);
  wall6.shapeColor=rgb(210, 130, 67);

  wall7=createSprite(730,85,10,60);
  wall7.shapeColor=rgb(210, 130, 67);

  wall8=createSprite(620,90,10,70);
  wall8.shapeColor=rgb(210, 130, 67);

  wall9=createSprite(350,130,10,150);
  wall9.shapeColor=rgb(210, 130, 67);

  wall10=createSprite(545,120,160,10);
  wall10.shapeColor=rgb(210, 130, 67);

  wall11=createSprite(460,290,10,350);
  wall11.shapeColor=rgb(210, 130, 67);
      
  wall12=createSprite(435,460,60,10);
  wall12.shapeColor=rgb(210, 130, 67);

  wall13=createSprite(410,440,10,50);
  wall13.shapeColor=rgb(210, 130, 67);

  wall14=createSprite(330,300,90,10);
  wall14.shapeColor=rgb(210, 130, 67);

  wall15=createSprite(370,330,10,60);
  wall15.shapeColor=rgb(210, 130, 67);

  wall16=createSprite(920,240,90,10);
  wall16.shapeColor=rgb(210, 130, 67);

  wall17=createSprite(880,280,10,90);
  wall17.shapeColor=rgb(210, 130, 67);

  wall18=createSprite(850,330,70,10);
  wall18.shapeColor=rgb(210, 130, 67);

  wall19=createSprite(820,365,10,80);
  wall19.shapeColor=rgb(210, 130, 67);

  wall20=createSprite(910,480,50,10);
  wall20.shapeColor=rgb(210, 130, 67);

  wall21=createSprite(780,400,200,10);
  wall21.shapeColor=rgb(210, 130, 67);

  wall22=createSprite(880,390,10,30);
  wall22.shapeColor=rgb(210, 130, 67);

  wall23=createSprite(750,425,10,60);
  wall23.shapeColor=rgb(210, 130, 67);

  wall24=createSprite(880,390,10,30);
  wall24.shapeColor=rgb(210, 130, 67);

  wall25=createSprite(560,460,60,10);
  wall25.shapeColor=rgb(210, 130, 67);

  wall26=createSprite(580,380,90,10);
  wall26.shapeColor=rgb(210, 130, 67);

  wall27=createSprite(580,300,100,10);
  wall27.shapeColor=rgb(210, 130, 67);

  wall28=createSprite(640,230,230,10);
  wall28.shapeColor=rgb(210, 130, 67);

  wall29=createSprite(680,190,10,90);
  wall29.shapeColor=rgb(210, 130, 67);

  wall30=createSprite(720,300,70,10);
  wall30.shapeColor=rgb(210, 130, 67);

  wall31=createSprite(760,250,10,150);
  wall31.shapeColor=rgb(210, 130, 67);

  wall32=createSprite(795,180,80,10);
  wall32.shapeColor=rgb(210, 130, 67);

  wall33=createSprite(830,150,10,70);
  wall33.shapeColor=rgb(210, 130, 67);
  } 


  function draw(){
    background(0);
    
    wallCollide();
    move();
    scoring();
    depleting();
    

    enemy1.bounceOff(wall14);
    enemy1.bounceOff(wall);
    enemy2.bounceOff(wall6);
    enemy2.bounceOff(wall19);
    enemy3.bounceOff(wall28);
    enemy3.bounceOff(wall);
    enemy4.bounceOff(wall31);
    enemy4.bounceOff(wall17);

    
  
      drawSprites();
      fill("white")
      textSize(12)
    text("Your score is "+score,110,20);
    winning();
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
      mario.collide(wall);
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
    
  function scoring(){
    if(mario.collide(coin1)){
      coin1.destroy()
      score+=1
    }
    if(mario.collide(coin2)){
      coin2.destroy()
      score+=1
    }
    if(mario.collide(coin3)){
      coin3.destroy()
      score+=1
    }
    if(mario.collide(coin4)){
      coin4.destroy()
      score+=1
    }
    if(mario.collide(coin5)){
      coin5.destroy()
      score+=1
    }
  }

  function depleting(){
    if(mario.isTouching(enemy1)){
      enemy1.destroy()
      
      if(score==0){
        score=0
      }
      else{
        score-=1
      }
      
    }
    if(mario.isTouching(enemy2)){
      enemy2.destroy()
      if(score==0){
        score=0
      }
      else{
        score-=1
      }
    }
    if(mario.isTouching(enemy3)){
      enemy3.destroy()
      if(score==0){
        score=0
      }
      else{
        score-=1
      }
      
      
    }
    if(mario.isTouching(enemy4)){
      enemy4.destroy()
      
      if(score==0){
        score=0
      }
      else{
        score-=1
      }
    }
  
  }

  function winning(){
    if(score>0 && mario.isTouching(princess) ){
      text("Congrats you won",500,100)
    }
    else if(mario.isTouching(princess)){
      text("You finished the game but did not win",500,100)
    }
  }
