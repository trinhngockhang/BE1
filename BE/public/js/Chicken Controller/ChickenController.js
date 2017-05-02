class ChickenController {
  constructor(x,y,configs){
    this.sprite = Nakama.chickenGroup.create(x, y, "chicken");
    this.configs = configs;

    this.sprite.scale.setTo(0.35, 0.35);
    this.sprite.anchor = new Phaser.Point(0.5 , 0.5);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.health = Nakama.configs.chickenHealth;

    this.chickenFramePerSecond = 6;
    this.sprite.animations.add('walk');

    this.timeChangeColor = 0;
    this.invulnerableState = false;

    this.shouldCheckBackgroundColor = 0;
    this.ctx = Nakama.game.canvas.getContext('2d');
    this.inPath = true;

    this.timeSinceStart = 0;
}

update(){
  //invulnerable during starting phase, 2s
  this.timeSinceStart += Nakama.game.time.physicsElapsed;
  if(this.timeSinceStart >= 2){
    if(this.inPath == false) this.damage();
  }

  //update position
  this.sprite.position = Nakama.game.input.activePointer;
  this.sprite.animations.play('walk',this.chickenFramePerSecond, true);

  //check in path
  this.shouldCheckBackgroundColor++;
  if(this.shouldCheckBackgroundColor == 1){
    if(this.ctx){
      var imgData = this.ctx.getImageData(this.sprite.position.x, this.sprite.position.y, 1, 1);
      this.inPath = true;
      for(var j = 0; j < 4; j++){
        if(imgData.data[j] != 255){
          this.inPath = false;
          break;
        }
      }
    }
    this.sprite.alpha = 1;
  } else if(this.shouldCheckBackgroundColor == 10){
    this.shouldCheckBackgroundColor = 0;
    this.sprite.alpha = 0;
  }
  // console.log(this.inPath);

  //destroy when die
  if(this.sprite.health == 0){
    this.sprite.destroy();
  }

  //change color while invulnerable
  if(this.invulnerableState == false){
    this.sprite.tint = 0xffffff;
  } else if(this.invulnerableState == true){
    this.sprite.tint = 0xff0000;
  }
}


  damage(){
    if(this.invulnerableState == false){
      if(this.sprite.alive) Nakama.chickenSound.play();
      this.sprite.health -= 1;
      this.toggleInvulnerable();
      Nakama.game.time.events.add(1000, this.toggleInvulnerable, this);
    }
  }

  toggleInvulnerable(){
    this.invulnerableState = !this.invulnerableState;
  }
}
