"use strict";
class SpinningBlockType2Controller {
  constructor(y,configs) {
    this.sprite = Nakama.linesGroup.create(
      Nakama.game.world.width/2,
      y,
      'Block2'
    );
    this.sprite.scale.setTo(1.5,1.5);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.angle = 0;
    this.turnRate = 0.5;
    this.sprite.body.velocity.y = Nakama.configs.linesSpeed;
  }

  update(){
    this.sprite.angle += this.turnRate;
  }
}
