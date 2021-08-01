class ComputerArcher  {
    constructor(x, y, width, height, ) {
      var options = {
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/ComputerArcher.png");
      World.add(world, this.body);
    }
  
   display() {

    if(keyIsDown("UP") && ComputerArcher.body.angle< 1.77){
        this.angle=0.1;
    }else{
        this.angle=-0.1
    }
    
    if(keyIsDown("DOWN") && ComputerArcher.body.angle>1.47){
        this.angle=-0.1
    }else{
        this.angle=0.1
    }
    
      var pos = this.body.position;
      var angle = this.body.angle;
    Matter.Body.setAngle(this.body,-PI/2)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }