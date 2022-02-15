var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30
var player, exit, playerImg,exitImg
function preload() {
  playerImg = loadImage("Theif Pic.png")
  exitImg = loadImage("Money Bag.png")
}
function setup() {
  createCanvas(1200,900);
  player = createSprite(100,200,50,50) 
  player.addImage(playerImg)
  player.scale = 0.15
  exit = createSprite(1000,375,50,50)
  exit.addImage(exitImg)
  exit.scale = 0.15
  w1 = createSprite(100,550,10,600)
  w1.shapeColor = 'white'
  w2 = createSprite(545,850,900,10)
  w2.shapeColor = 'white'
  w3 = createSprite(1000,655,10,400)
  w3.shapeColor = 'white'
  w4 = createSprite(1000,200,10,200)
  w4.shapeColor = 'white'
  w5 = createSprite(550,100,910,10)
  w5.shapeColor = 'white'
  w6 = createSprite(100,120,10,50)
  w6.shapeColor = 'white'
  w7 = createSprite(145,150,100,10)
  w7.shapeColor = 'white'
  w8 = createSprite(280,205,10,200)
  w8.shapeColor = 'white'
  w9 = createSprite(420,150,10,100)
  w9.shapeColor = 'white'
  w10 = createSprite(600,225,10,260)
  w10.shapeColor = 'white'
  w11 = createSprite(800,155,10,100)
  w11.shapeColor = 'white'
  w12 = createSprite(235,300,100,10)
  w12.shapeColor = 'white'
  w13 = createSprite(190,342,10,75)
  w13.shapeColor = 'white'
  w14 = createSprite(235,375,100,10)
  w14.shapeColor = 'white'
  w15 = createSprite(170,475,150,10)
  w15.shapeColor = 'white'
  w16 = createSprite(550,100,910,10)
  w16.shapeColor = 'white'
  w17 = createSprite(155,665,100,10)
  w17.shapeColor = 'white'
  w18 = createSprite(945,220,100,10)
  w18.shapeColor = 'white'
  w19 = createSprite(850,600,10,100)
  w19.shapeColor = 'white'
  w20 = createSprite(500,320,10,100)
  w20.shapeColor = 'white'
  w21 = createSprite(500,600,150,10)
  w21.shapeColor = 'white'
  w22 = createSprite(800,600,150,10)
  w22.shapeColor = 'white'
  w23 = createSprite(400,800,150,10)
  w23.shapeColor = 'white'
  w24 = createSprite(500,320,10,100)
  w24.shapeColor = 'white'
  w25 = createSprite(500,320,10,100)
  w25.shapeColor = 'white'
  w26 = createSprite(500,320,10,100)
  w26.shapeColor = 'white'
  w27 = createSprite(500,320,10,100)
  w27.shapeColor = 'white'
  w28 = createSprite(500,320,10,100)
  w28.shapeColor = 'white'
  w29 = createSprite(500,320,10,100)
  w29.shapeColor = 'white'
  w30 = createSprite(500,320,10,100)
  w30.shapeColor = 'white'
  
}

function draw() 
{
  background('#808080');
  if(keyDown(LEFT_ARROW)) {
    player.x = player.x-5
  }
  if(keyDown(RIGHT_ARROW)) {
    player.x = player.x+5
  }
  if(keyDown(DOWN_ARROW)) {
    player.y = player.y+5
  }
  if(keyDown(UP_ARROW)) {
    player.y = player.y-5
  }

  player.bounceOff(w1)
  player.bounceOff(w2)
  player.bounceOff(w3)
  player.bounceOff(w4)
  player.bounceOff(w5)
  player.bounceOff(w6)
  player.bounceOff(w7)
  player.bounceOff(w8)
  player.bounceOff(w9)
  player.bounceOff(w10)
  player.bounceOff(w11)
  player.bounceOff(w12)
  player.bounceOff(w13)
  player.bounceOff(w14)
  player.bounceOff(w15)
  player.bounceOff(w16)
  player.bounceOff(w17)
  player.bounceOff(w18)
  player.bounceOff(w19)
  player.bounceOff(w20)
  player.bounceOff(w21)
  player.bounceOff(w22)
  player.bounceOff(w23)
  player.bounceOff(w24)
  player.bounceOff(w25)
  player.bounceOff(w26)
  player.bounceOff(w27)
  player.bounceOff(w28)
  player.bounceOff(w29)
  player.bounceOff(w30)
drawSprites()
if (player.isTouching(exit)) {
  fill("red")
  textSize(30)
  text("You Win",300,400)
}
}




