var canvas,backgroundImg;
var gameState = 0;
var playerCount ,database;
var form,game,player;
var allPlayers;
var fighter1,fighter2;
var fighter1Img, fighter2Img
var fighter1PunchImg;
var fighter1KickImg;
var background;
var fighter ;


function preload (){
  fighter1Img = loadAnimation("still.png");
  backgroundImg = loadImage("bb.png");
  fighter1PunchImg = loadAnimation("punch0.png","punch1.png","punch2.png","punch3.png","punch4.png","fighter5.png","fighter6.png");
  fighter1KickImg = loadAnimation("fighterkick1.png","fighterkick2.png","fighterkick4.png","fighterkick5.png");

  fighter2Img = loadImage("fighter2.png");
  fighter2PunchImg = loadAnimation("fighterP2.png","punch4.png","punch0.png");
}
function setup(){
  canvas = createCanvas(displayWidth/2+250,displayHeight/2+250);
database = firebase.database();

game = new Game();
game.getState();
game.start();

}

function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
}
