class FoundationTrap7 {
constructor(x,y){
  this.spriteFound = Nakama.foundGroup.create(x,y,'Foundation','Foundationhalf.png');
  Nakama.game.physics.arcade.enable(this.spriteFound);
  this.spriteFound.body.allowGravity = false;
  this.spriteFound.body.immovable = true;
  this.spriteFound2 = Nakama.foundGroup.create(x+865,y,'Foundation','Foundation1.png');
  Nakama.game.physics.arcade.enable(this.spriteFound2);
  this.spriteFound2.body.allowGravity = false;
  this.spriteFound2.body.immovable = true;
  this.spritePike=Nakama.trapGroup.create(x+400,1150,'Foundation','PikeWhite.png');
  Nakama.game.physics.arcade.enable(this.spritePike);
  this.spritePike.body.allowGravity = false;
  this.spritePike.body.immovable = true;
  }
  update(){

  }
  move(){
    this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
    this.spritePike.body.velocity.x = -Dinosarus.SPEED;

  }
  stop(){
    this.spriteFound.body.velocity.x = 0;
    this.spriteFound2.body.velocity.x = 0;
    this.spritePike.body.velocity.x = 0;
  }
}
