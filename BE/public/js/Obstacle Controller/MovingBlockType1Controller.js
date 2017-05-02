class MovingBlockType1Controller{
  constructor(y, directionType, configs){
    this.sprite = Nakama.linesGroup.create(
      Nakama.game.world.width/2,
      y,
      "sheet2",
      "Block4.1.png"
    );
    //this property decides if the sprite moves left or right first when started
    //moving
    this.sprite.anchor.set(0.5);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.directionType = directionType;
    this.directionIndex = (this.directionType == 1)?(1):(-1);
    this.configs = configs;
    this.timeSinceLastSpawn = 0;
    this.timeMoving = 0;
    this.timeDelay = 0;
    this.configs.centerX = (this.configs.minX + this.configs.maxX)/2;
    this.configs.movementDistance = (this.configs.maxX - this.configs.minX)/2;
    this.sprite.body.velocity.y = Nakama.configs.linesSpeed;
    this.sprite.scale.setTo(1.52,1.52);
  }

  update(){
    //this.timeMoving property used to calculate if the sprite has moved half of
    //the way or not.
    if(!this.sprite.alive) this.sprite.destroy();
    this.timeMoving += Nakama.game.time.physicsElapsed;
    //Check if this.timeMoving = T/4 (tweenTime/2) : harmonic motion.
    if(this.timeMoving >= this.configs.tweenTime/2) {
      this.timeSinceLastSpawn += 0;
      this.sprite.position.x = this.configs.minX + this.configs.movementDistance;
      this.timeDelay += Nakama.game.time.physicsElapsed;
      //delay time for player to pass through this block.
      if(this.timeDelay >= this.configs.timeDelay) {
        this.timeMoving = 0;
        this.timeDelay = 0;
      }
    }
    else{
      //Harmonic motion algorithm in Phaser
      this.timeSinceLastSpawn += Nakama.game.time.physicsElapsed;
      this.sprite.position.x = this.configs.centerX + this.configs.movementDistance *
      Math.sin(this.timeSinceLastSpawn/this.configs.tweenTime * Math.PI * 2) *
      this.directionIndex;
    }
  }
}
