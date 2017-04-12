class FoundationTrap3{
  constructor(x, y){
    this.spriteFound1 = Nakama.foundGroup.create(x, y, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound1);
    this.spriteFound1.body.allowGravity = false;
    this.spriteFound1.body.immovable = true;

    this.spriteFoundTrap1 = Nakama.foundGroup.create(x+317, y, 'Foundation', 'Foundation5b.png');
    Nakama.game.physics.arcade.enable(this.spriteFoundTrap1);
    this.spriteFoundTrap1.body.allowGravity = false;
    this.spriteFoundTrap1.body.immovable = true;



    this.spriteFoundTrap2 = Nakama.foundGroup.create(x+400, y+10, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFoundTrap2);
    this.spriteFoundTrap2.body.allowGravity = false;
    this.spriteFoundTrap2.body.immovable = true;
    this.spriteTrap2 = Nakama.trapGroup.create(x+390, y+25, 'Foundation2', 'LongTrapVertical.png');
    Nakama.game.physics.arcade.enable(this.spriteTrap2);
    this.spriteTrap2.body.allowGravity = false;
    this.spriteTrap2.body.immovable = true;
    this.spriteTrap2.body.setSize(10,245,0,0);

    this.spriteTrap3 = Nakama.trapGroup.create(x+470, 0, 'Foundation', 'PikeBlack.png');
    Nakama.game.physics.arcade.enable(this.spriteTrap3);
    this.spriteTrap3.body.allowGravity = false;
    this.spriteTrap3.body.immovable = true;
  }
  update(){
    this.spriteTrap3.angle = -90;
    if(Nakama.playerGroup.getFirstAlive() != null){
      this.playerSprite=Nakama.playerGroup.getFirstAlive();
    }else {
      return;
    }

    if(this.spriteFound1.position.x-this.playerSprite.position.x<10){
      this.spriteFound1.body.velocity.y = -FoundationTrap1.SPEED;
    }
    if (this.spriteFound1.position.y<1210){
      this.spriteFound1.body.velocity.y = 0;
    }

    // if(this.spriteFoundTrap1.position.x-this.playerSprite.position.x<10){
    //   this.spriteFoundTrap1.body.velocity.y = FoundationTrap1.SPEED;
    // }

    if(this.spriteFoundTrap2.position.x-this.playerSprite.position.x<150){
      this.spriteFoundTrap2.body.velocity.y = -FoundationTrap1.SPEED;
      this.spriteTrap2.body.velocity.y= -FoundationTrap1.SPEED;
    }
    if (this.spriteFoundTrap2.position.y < 950){
      this.spriteFoundTrap2.body.velocity.y = 0;
      this.spriteTrap2.body.velocity.y= 0;
    }

    if (this.spriteTrap3.position.x-this.playerSprite.position.x<10){
      this.spriteTrap3.body.velocity.y = 5000;
    }
  }
  move(){
    this.spriteFound1.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFoundTrap1.body.velocity.x = -Dinosarus.SPEED;
    //this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
    this.spriteFoundTrap2.body.velocity.x = -Dinosarus.SPEED;
    this.spriteTrap2.body.velocity.x = -Dinosarus.SPEED;
    this.spriteTrap3.body.velocity.x = -Dinosarus.SPEED;


  }
  stop(){
    this.spriteFound1.body.velocity.x = 0;
    this.spriteFoundTrap1.body.velocity.x = 0;
    //this.spriteFound2.body.velocity.x = 0;
    this.spriteFoundTrap2.body.velocity.x = 0;
    this.spriteTrap2.body.velocity.x = 0;
    this.spriteTrap3.body.velocity.x = 0;
  }
}
