class FoundationTrap12{
  constructor(x,y){
    this.spriteFound = Nakama.foundGroup.create(x,y,'Foundation','Foundationhalf.png');
    Nakama.game.physics.arcade.enable(this.spriteFound);
    this.spriteFound.body.allowGravity = false;
    this.spriteFound.body.immovable = true;
    this.spriteFound2 = Nakama.foundGroup.create(x+865,y,'Foundation','Foundation1.png');
    Nakama.game.physics.arcade.enable(this.spriteFound2);
    this.spriteFound2.body.allowGravity = false;
    this.spriteFound2.body.immovable = true;
    this.spriteFoundBox = Nakama.foundGroup.create(x+405,870,'Foundation2','Box2.png');
    Nakama.game.physics.arcade.enable(this.spriteFoundBox);
    this.spriteFoundBox.body.allowGravity = false;
    this.spriteFoundBox.body.immovable = true;
    this.x=Math.floor((Math.random() * 2) + 2);
    this.spritePike=Nakama.trapGroup.create(x+480,800,'Foundation','PikeWhite.png');
    Nakama.game.physics.arcade.enable(this.spritePike);
    this.spritePike.body.allowGravity = false;
    this.spritePike.body.immovable = true;
    this.spritePike.alpha=0;
    }
    update(){
      var hitTrap= Nakama.game.physics.arcade.overlap(Nakama.playerGroup,Nakama.trapGroup);
      if(Nakama.playerGroup.getFirstAlive() != null){
        this.playerSprite=Nakama.playerGroup.getFirstAlive();
      }else {
        return;
      }

      if((this.spriteFoundBox.position.x+25-this.playerSprite.position.x)<0){
        this.spriteFoundBox.body.velocity.y=FoundationTrap12.SPEED;

    }
    if(hitTrap){
        this.spritePike.alpha=1;
    }
  }
    move(){
      this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFoundBox.body.velocity.x = -Dinosarus.SPEED;
      this.spritePike.body.velocity.x = -Dinosarus.SPEED;

    }
    stop(){
      this.spriteFound.body.velocity.x = 0;
      this.spritePike.body.velocity.x = 0;
      this.spriteFoundBox.body.velocity.x = 0;
      this.spriteFound2.body.velocity.x = 0;

    }
  }
FoundationTrap12.SPEED=500;
