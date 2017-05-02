class EnemyLaserController {
  constructor(position, angle, anchor, enemy, configs){
    this.sprite = Nakama.laserGroup.create(
      position.x,
      position.y,
      "assets",
      "BulletType3.png"
    );
    this.sprite.scale.setTo(1,1.5);
    this.enemy = enemy;
    this.sprite.angle = angle;
    this.sprite.anchor = anchor;
    this.timeExists = 0;
  }

  update() {
    this.timeExists += Nakama.game.time.physicsElapsed;
    if(this.timeExists > 1.5|| !this.enemy.alive){
      this.sprite.kill();
      Nakama.enemyLaser.splice(Nakama.enemyLaser.indexOf(this), 1);
    }
    //Make the laser move with enemy
    this.sprite.position.x = this.enemy.position.x;
    this.sprite.position.y = this.enemy.position.y;
  }
}
