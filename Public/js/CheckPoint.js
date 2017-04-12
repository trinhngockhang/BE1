class CheckPoint{
  constructor(x,y){
    this.spriteFound1 = Nakama.foundGroup.create(x, 1200, 'Foundation', 'Foundation1.png');
    this.spriteChick = Nakama.disfound.create(x, 850, 'Foundation2', 'Checkpoint.png');

    Nakama.game.physics.arcade.enable(this.spriteFound1);
    Nakama.game.physics.arcade.enable(this.spriteChick);

    this.spriteFound1.body.allowGravity = false;
    this.spriteFound1.body.immovable = true;
    this.spriteChick.body.allowGravity = false;
    this.spriteChick.body.immovable = true;
    this.spriteChick.scale=new Phaser.Point(0.5,0.5);
    this.spriteChick.body.onCollide = new Phaser.Signal();
    this.spriteChick.body.onCollide.add(this.hitdis, this);
  }
  update(){
  Nakama.game.physics.arcade.collide(Nakama.playerGroup,Nakama.disfound);

  }
  move(){
    this.spriteFound1.body.velocity.x = -Dinosarus.SPEED;
    this.spriteChick.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.spriteFound1.body.velocity.x = 0;
    this.spriteChick.body.velocity.x = 0;
  }
  hitdis(){
    this.spriteChick.body.setSize(-99991,12,0,0);
    this.spriteChick.alpha=0;
    checkPoint(Nakama.playerGroup.getFirstAlive().position.x);
  }
}
