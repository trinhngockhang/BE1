class FoundationTrap6{
  constructor(x,y){
  this.spriteFound = Nakama.foundGroup.create(x,y,'Foundation','Foundation1.png');
  Nakama.game.physics.arcade.enable(this.spriteFound);
  this.spriteFound.body.allowGravity = false;
  this.spriteFound.body.immovable = true;
  this.spriteFound2 = Nakama.foundGroup.create(x+157,y,'Foundation','Foundationhalf.png');
  Nakama.game.physics.arcade.enable(this.spriteFound2);
  this.spriteFound2.body.allowGravity = false;
  this.spriteFound2.body.immovable = true;
  this.spritePike=Nakama.trapGroup.create(x+700,1150,'Foundation','PikeWhiteShort.png');
  Nakama.game.physics.arcade.enable(this.spritePike);
  this.spritePike.body.allowGravity = false;
  this.spritePike.body.immovable = true;
  this.spritePike2=Nakama.trapGroup.create(x+250,1150,'Foundation','PikeWhiteShort.png');
  Nakama.game.physics.arcade.enable(this.spritePike2);
  this.spritePike2.body.allowGravity = false;
  this.spritePike2.body.immovable = true;
  this.spritePike.alpha=0;
  }
  update(){
    var hitTrap= Nakama.game.physics.arcade.overlap(Nakama.playerGroup,Nakama.trapGroup);
    if(Nakama.playerGroup.getFirstAlive()!=null){
      this.playerSprite=Nakama.playerGroup.getFirstAlive();
    }else{
      return;
    }
    if(hitTrap){
      this.spritePike.alpha=1;
    }
  }
  move(){
    this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
    this.spritePike.body.velocity.x = -Dinosarus.SPEED;
    this.spritePike2.body.velocity.x = -Dinosarus.SPEED;

  }
  stop(){
    this.spriteFound.body.velocity.x = 0;
    this.spriteFound2.body.velocity.x = 0;
    this.spritePike.body.velocity.x = 0;
    this.spritePike2.body.velocity.x = 0;
  }
}
