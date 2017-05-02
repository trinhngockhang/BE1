class EnemyType1Controller{
  constructor(x,y,directionType,configs){
    this.sprite = Nakama.enemyGroup.create(
      x,
      y,
      "assets",
      "EnemyType1.png"
    );
//every enemy has 2 directionType, 1 and 2 which stand for moving up:down or left:right.
    this.directionType = directionType;
    this.direction = (directionType == 1)?(new Phaser.Point(0,1)):
                                          (new Phaser.Point(0,-1));
    this.configs = configs;
    this.sprite.anchor = new Phaser.Point(0.5 , 0.5);
    this.timeSpriteAlive = 0;
    this.sprite.body.velocity = this.direction.setMagnitude(Nakama.configs.enemyType1Speed);
    this.sprite.body.collideWorldBounds = true;
  }

  update(){
    this.timeSpriteAlive += Nakama.game.time.physicsElapsed;
    //kill this enemy after 2s.
    if(this.timeSpriteAlive >= 2) {
      this.sprite.kill();
      Nakama.enemies.splice(Nakama.enemies.indexOf(this), 1);
    }
    if(this.sprite.alive && this.timeSpriteAlive >= 1)
      this.fire();
  }

  createLaser(angle, anchor, configs){
    Nakama.enemyLaser.push(new EnemyLaserController(
      this.sprite.position,
      angle,
      anchor,
      this.sprite,
      configs
    ));
  }

  fire(){
    if(Nakama.enemyLaser.length == 0){
      this.createLaser(90 , new Phaser.Point(0.5, 0));
    }
  }
}
