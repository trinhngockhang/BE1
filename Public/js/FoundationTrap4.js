class FoundationTrap4{
  constructor(x, y){
    this.spriteFound1 = Nakama.foundGroup.create(x, y-5, 'Foundation2', 'Foundation3.png');
    Nakama.game.physics.arcade.enable(this.spriteFound1);
    this.spriteFound1.body.allowGravity = false;
    this.spriteFound1.body.immovable = true;
    //this.sprite.body.setSize(166.027,336.013-14,0,14);

    this.spriteFoundTrap1 = Nakama.foundGroup.create(x+500, y-250, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFoundTrap1);
    this.spriteFoundTrap1.body.allowGravity = false;
    this.spriteFoundTrap1.body.immovable = true;
    this.spriteTrap1 = Nakama.trapGroup.create(x+490, y-240, 'Foundation2', 'LongTrapVertical.png');
    Nakama.game.physics.arcade.enable(this.spriteTrap1);
    this.spriteTrap1.body.allowGravity = false;
    this.spriteTrap1.body.immovable = true;

    this.spriteFound2 = Nakama.foundGroup.create(x+640, y-250 , 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound2);
    this.spriteFound2.body.allowGravity = false;
    this.spriteFound2.body.immovable = true;

    this.spriteFound3 = Nakama.foundGroup.create(x+640, y-500 , 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound3);
    this.spriteFound3.body.allowGravity = false;
    this.spriteFound3.body.immovable = true;

    this.spriteTrap3 = Nakama.trapGroup.create(x+2000, y-550, 'Foundation', 'PikeBlack.png');
    Nakama.game.physics.arcade.enable(this.spriteTrap3);
    this.spriteTrap3.body.allowGravity = false;
    this.spriteTrap3.body.immovable = true;
    this.spriteTrap3.alpha=0;
    this.spriteTrap4 = Nakama.trapGroup.create(x+2000, y-650, 'Foundation', 'PikeBlack.png');
    Nakama.game.physics.arcade.enable(this.spriteTrap4);
    this.spriteTrap4.body.allowGravity = false;
    this.spriteTrap4.body.immovable = true;

    this.spriteFound4 = Nakama.foundGroup.create(x+780, y, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound4);
    this.spriteFound4.body.allowGravity = false;
    this.spriteFound4.body.immovable = true;

    this.spriteFoundTrap3 = Nakama.foundGroup.create(x+920, y, 'Foundation', 'Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFoundTrap3);
    this.spriteFoundTrap3.body.allowGravity = false;
    this.spriteFoundTrap3.body.immovable = true;
    this.spriteFoundTrap3.body.setSize(166.027,336.013-20,0,+20);
    this.spriteTrap5 = Nakama.trapGroup.create(x+810, y+2, 'Foundation2', 'MediumTrap.png');
    Nakama.game.physics.arcade.enable(this.spriteTrap5);
    this.spriteTrap5.body.allowGravity = false;
    this.spriteTrap5.body.immovable = true;
    this.spriteTrap5.body.setSize(129.645, 13.284+10, 0, -10);

  }
  update(){
    if(Nakama.playerGroup.getFirstAlive() != null){
      this.playerSprite=Nakama.playerGroup.getFirstAlive();
    }else {
      return;
    }
    if (( this.spriteFound3.position.x - this.playerSprite.position.x < 500)){
      this.spriteTrap3.alpha = 1;
      this.spriteTrap3.body.velocity.x = -2000;
      this.spriteTrap4.body.velocity.x = -2000;
    }
  }
  move(){
    this.spriteFound1.body.velocity.x       = -Dinosarus.SPEED;
    this.spriteFoundTrap1.body.velocity.x   = -Dinosarus.SPEED;
    this.spriteTrap1.body.velocity.x        = -Dinosarus.SPEED;
    this.spriteFound2.body.velocity.x       = -Dinosarus.SPEED;
    this.spriteFound3.body.velocity.x       = -Dinosarus.SPEED;
    this.spriteTrap3.body.velocity.x        = -Dinosarus.SPEED;
    this.spriteTrap4.body.velocity.x        = -Dinosarus.SPEED;
    this.spriteFound4.body.velocity.x       = -Dinosarus.SPEED;
    this.spriteFoundTrap3.body.velocity.x   = -Dinosarus.SPEED;
    this.spriteTrap5.body.velocity.x        = -Dinosarus.SPEED;

  }
  stop(){
    this.spriteFound1.body.velocity.x = 0;
    this.spriteFoundTrap1.body.velocity.x= 0;
    this.spriteTrap1.body.velocity.x = 0;
    this.spriteFound2.body.velocity.x = 0;
    this.spriteFound3.body.velocity.x = 0;
    this.spriteTrap3.body.velocity.x = 0;
    this.spriteTrap4.body.velocity.x = 0;
    this.spriteFound4.body.velocity.x = 0;
    this.spriteFoundTrap3.body.velocity.x = 0;
    this.spriteTrap5.body.velocity.x = 0;

  }

}
