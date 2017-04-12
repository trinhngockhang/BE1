class FoundationTrapWithPike{
  constructor(x, y){
    this.spriteFound = Nakama.foundGroup.create(x,y,'Foundation','Foundation2.png');
    Nakama.game.physics.arcade.enable(this.spriteFound);
    this.spritePlayer = Nakama.playerGroup.getFirstAlive();

    //set attribute spritePike
    this.timeSinceLastFire = 0
    //set attribute spriteFound
    this.spriteFound.body.allowGravity = false;
    this.spriteFound.body.immovable = true;
    this.spriteFound.body.setSize(976.199,431.242-14,0,14);
    //Listenner Collide
    this.spriteFound.body.onCollide = new Phaser.Signal();
    this.spriteFound.body.onCollide.add(this.dkm, this);

  }
  update(){
    Nakama.game.physics.arcade.collide(this.spritePlayer,this.spriteFound);
  }
  dkm(){
    this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
    if(this.timeSinceLastFire >= FoundationTrapWithPike.cooldown){
      new Pike(
        new Phaser.Point(this.spriteFound.body.position.x+1000, this.spriteFound.body.position.y-1000),
        this.spritePlayer,
        1
      )
      this.timeSinceLastFire = 0;
    }
    console.log("phi");

  }
  move(){
    this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.spriteFound.body.velocity.x = 0;
  }
}
FoundationTrapWithPike.PIKE_SPEED = 1000;
FoundationTrapWithPike.cooldown = 2;
// Foundation.SPRITE = 'Foundation1.png';
