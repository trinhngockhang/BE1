class GrowingBlockControllerType1 {
  constructor(y , configs){
    this.sprite = Nakama.linesGroup.create(
    Nakama.game.world.width/2,
    y,
    "sheet2",//png file here
    "Block3.png"
  );
    this.configs = configs;
    this.sprite.anchor = new Phaser.Point(0.5 , 0.5);
    this.timeToScale = 2;
    this.timeToScale2 = 4;
    this.timeExists = 0;
    this.sprite.body.velocity.y = Nakama.configs.linesSpeed;
  }

  update(){
    this.timeToScale += Nakama.game.time.physicsElapsed;
    this.timeExists += Nakama.game.time.physicsElapsed;
    if(this.timeExists <= this.configs.timeExists){
      if(this.timeToScale < 4)
        this.sprite.scale.setTo(this.timeToScale/3 , this.timeToScale/3);
      if(this.timeToScale >= 4) {
        this.timeToScale2 -= Nakama.game.time.physicsElapsed;
        this.sprite.scale.setTo(this.timeToScale2/3 , this.timeToScale2/3);
      }
    }
    else this.sprite.destroy();
  }
}
