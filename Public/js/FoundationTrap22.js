class FoundationTrap22{
  constructor(x,y){
    this.spriteFound1 = Nakama.foundGroup.create(x, y, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound1);
    this.spriteFound1.body.allowGravity = false;
    this.spriteFound1.body.immovable = true;
    this.spriteFound2 = Nakama.foundGroup.create(x+157, y, 'Foundation', 'Foundation710.png');
    Nakama.game.physics.arcade.enable(this.spriteFound2);
    this.spriteFound2.body.allowGravity = false;
    this.spriteFound2.body.immovable = true;
    this.spriteFound3 = Nakama.foundGroup.create(x+157+710, y, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound3);
    this.spriteFound3.body.allowGravity = false;
    this.spriteFound3.body.immovable = true;
    this.text1 = Nakama.game.add.text(x+100, 600, Foundation.SIGN, { font: "60px Arial Black", fill: "#c51b7d" });
    Nakama.game.physics.arcade.enable(this.text1);
    this.text1.body.immovable = true;
    this.text1.body.allowGravity = false;
    this.spriteFound4 = Nakama.trapGroup.create(x, -500, 'Foundation', 'Foundation710.png');
    Nakama.game.physics.arcade.enable(this.spriteFound4);
    this.spriteFound4.body.allowGravity = false;
    this.spriteFound4.body.immovable = true;
    this.spriteFound5 = Nakama.trapGroup.create(x+157+710, -500, 'Foundation', 'Foundation710.png');
    Nakama.game.physics.arcade.enable(this.spriteFound5);
    this.spriteFound5.body.allowGravity = false;
    this.spriteFound5.body.immovable = true;
  }
  update(){this.playerSprite=Nakama.playerGroup.getFirstAlive();
  if(Nakama.playerGroup.getFirstAlive()!==null){
    this.playerSprite=Nakama.playerGroup.getFirstAlive();
  }else{
    return;
  }
  if((this.spriteFound1.position.x+10-this.playerSprite.position.x)<0){
    this.spriteFound1.body.velocity.y =-2000;



   }
   if((this.spriteFound3.position.x+10-this.playerSprite.position.x)<0){
     this.spriteFound3.body.velocity.y =-2000;



    }
  }
  move(){
    this.spriteFound1.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound3.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound4.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFound5.body.velocity.x = -Dinosarus.SPEED;
    this.text1.body.velocity.x = -Dinosarus.SPEED;
  //  this.spriteStone.body.velocity.x = -Dinosarus.SPEED;
  //  this.spritePike2.body.velocity.x = -Dinosarus.SPEED;

  }
  stop(){
    this.spriteFound1.body.velocity.x = 0;
    this.text1.body.velocity.x = 0;
    this.spriteFound2.body.velocity.x = 0;
    this.spriteFound3.body.velocity.x = 0;
    this.spriteFound4.body.velocity.x = 0;
    this.spriteFound5.body.velocity.x = 0;
    //this.spriteStone.body.velocity.x = 0;
    // this.spritePike.body.velocity.x = 0;
    // this.spritePike2.body.velocity.x = 0;
  }
}
