class EnemyBulletController{
  constructor(position, direction, configs){
    this.sprite = Nakama.bulletGroup.create(
      position.x,
      position.y,
      "assets",
      "BulletType1.png"
  );
  this.configs = configs;
  this.sprite.anchor = new Phaser.Point(0.5 , 0.5);
  this.sprite.angle = Math.atan2(direction.x, -direction.y) * (180/Math.PI);
  this.sprite.checkWorldBounds = true;
  this.sprite.outOfBoundsKill = true;
  this.sprite.body.velocity = direction.setMagnitude(Nakama.configs.enemyBulletSpeed);
  }
}
