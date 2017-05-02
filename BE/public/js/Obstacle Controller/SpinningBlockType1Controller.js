"use strict";
class SpinningBlockType1Controller {
  constructor(y,configs) {
    this.sprite = Nakama.linesGroup.create(
      Nakama.game.world.width/2,
      y,
      "sheet2",
      "Block.png"
    );
    this.sprite.scale.setTo(1.5,1.5);
    this.sprite.anchor = new Phaser.Point(0.5 , 0.5);
    this.sprite.angle = 0;
    this.timeSinceLastSpin = 0;
    this.sprite.body.velocity.y = Nakama.configs.linesSpeed;
  }

  update(){
      this.timeSinceLastSpin += Nakama.game.time.physicsElapsed;
      //Change angle every 1.3s
      if(this.timeSinceLastSpin >= 1.3) {
        this.sprite.angle += 90;
        this.timeSinceLastSpin = 0;
    }
  }
}
