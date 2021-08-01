const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase,playerarcher,playerarrow;
var computer, computerBase,computerarcher,computerarow;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
    playerarcher=new PlayerArcher(
      width-1000,
      playerBase.body.position.y-54,120,120
);
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerarcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  playerarrow=new PlayerArrow(playerarcher.x,playerarcher.y)
  computerarrow=new PlayerArrow(computerarcher.x,computerarcher.y)
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerarcher.display();
  computerarcher.display()


  //Display arrow();
  playerarrow.display();
  computerarrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
arrow.shoot(playerarcher.body.angle)

  }
}



