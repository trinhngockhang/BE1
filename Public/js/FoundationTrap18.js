class FoundationTrap18 {
constructor(x,y){
  this.spriteFound = Nakama.foundGroup.create(x,y,'Foundation','Foundationhalf.png');
  Nakama.game.physics.arcade.enable(this.spriteFound);
  this.spriteFound.body.allowGravity = false;
  this.spriteFound.body.immovable = true;
  this.spriteFound2 = Nakama.foundGroup.create(x+865,y,'Foundation','Foundation1.png');
  Nakama.game.physics.arcade.enable(this.spriteFound2);
  this.spriteFound2.body.allowGravity = false;
  this.spriteFound2.body.immovable = true;
  this.spritePike=Nakama.trapGroup.create(x+1000,1150,'Foundation','PikeWhite.png');
  Nakama.game.physics.arcade.enable(this.spritePike);
  this.spritePike.body.allowGravity = false;
  this.spritePike.body.immovable = true;
  this.spritePike.alpha=0;
  this.sprite3 = Nakama.trapGroup.create(x+90, 0,'Foundation2','Box.png');
  Nakama.game.physics.arcade.enable(this.sprite3);
  this.sprite3.body.allowGravity = false;
  this.sprite3.body.immovable = true;
  this.sprite3.alpha=0;
  this.spritePike2=Nakama.trapGroup.create(x+700,1150,'Foundation','PikeWhiteShort.png');
  Nakama.game.physics.arcade.enable(this.spritePike2);
  this.spritePike2.body.allowGravity = false;
  this.spritePike2.body.immovable = true;
  this.spritePike2.alpha=0;
  }
  update(){
    if(Nakama.playerGroup.getFirstAlive() != null){
      this.playerSprite=Nakama.playerGroup.getFirstAlive();
    }else {
      return;
    }
    if((this.spriteFound.position.x-100-this.playerSprite.position.x)<0||(kt2==1)){
     this.spritePike.body.velocity.x = -1000;
     this.spritePike.alpha=1;
     kt2=1;
    }
    if((this.sprite3.position.x-50-this.playerSprite.position.x)<0){
      this.sprite3.body.velocity.y=4000;
      this.sprite3.alpha=1;
    }
    var hitTrap= Nakama.game.physics.arcade.overlap(Nakama.playerGroup,Nakama.trapGroup);
    if(hitTrap){
      this.spritePike2.alpha=1;
    }
}
  move(){
    this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
    this.spritePike.body.velocity.x = -Dinosarus.SPEED;
    this.sprite3.body.velocity.x = -Dinosarus.SPEED;
    this.spritePike2.body.velocity.x = -Dinosarus.SPEED;

  }
  stop(){
    this.spriteFound.body.velocity.x = 0;
    this.spriteFound2.body.velocity.x = 0;
    this.spritePike.body.velocity.x = 0;
    this.spritePike2.body.velocity.x = 0;
    this.sprite3.body.velocity.x = 0;
  }
}
let kt2=0;
