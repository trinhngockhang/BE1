  class FoundationTrap21{
    constructor(x,y){
      this.spriteFound1 = Nakama.foundGroup.create(x, y, 'Foundation', 'Foundation5b.png');
      Nakama.game.physics.arcade.enable(this.spriteFound1);
      this.spriteFound1.body.allowGravity = false;
      this.spriteFound1.body.immovable = true;
      this.spriteFound2 = Nakama.foundGroup.create(x+549, y, 'Foundation', 'Foundation1.png');
      Nakama.game.physics.arcade.enable(this.spriteFound2);
      this.spriteFound2.body.allowGravity = false;
      this.spriteFound2.body.immovable = true;
      this.spriteFound3 = Nakama.foundGroup.create(x+550+157, y, 'Foundation', 'Foundation315.png');
      Nakama.game.physics.arcade.enable(this.spriteFound3);
      this.spriteFound3.body.allowGravity = false;
      this.spriteFound3.body.immovable = true;
      this.spriteStone = Nakama.foundGroup.create(x+550+157, 200, 'Foundation', 'Stone.png');
      Nakama.game.physics.arcade.enable(this.spriteStone);
      this.spriteStone.body.allowGravity = false;
      this.spriteStone.body.immovable = true;
      this.spritetext1 = Nakama.game.add.text(x+100, 750, Foundation.STONE, { font: "60px Arial Black", fill: "#c51b7d" });
      Nakama.game.physics.arcade.enable(this.spritetext1);
      this.spritetext1.body.allowGravity = false;
      this.spritetext1.body.immovable = true;
    }
    update(){this.playerSprite=Nakama.playerGroup.getFirstAlive();
    if(Nakama.playerGroup.getFirstAlive()!=null){
      this.playerSprite=Nakama.playerGroup.getFirstAlive();
    }else{
      return;
    }
    // if((this.spriteFound2.position.x+25-this.playerSprite.position.x)<0){
    //   this.spriteFound2.body.velocity.y =2000;
    //
    //
    // }
    if((this.spriteStone.position.x-this.playerSprite.position.x)<0){
      this.spriteStone.body.velocity.y =5000;

    }


    }
    move(){
      this.spriteFound1.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFound3.body.velocity.x = -Dinosarus.SPEED;
      this.spriteStone.body.velocity.x = -Dinosarus.SPEED;
      this.spritetext1.body.velocity.x = -Dinosarus.SPEED;
    //  this.spritePike2.body.velocity.x = -Dinosarus.SPEED;

    }
    stop(){
      this.spriteFound1.body.velocity.x = 0;
      this.spriteFound2.body.velocity.x = 0;
      this.spriteFound3.body.velocity.x = 0;
      this.spriteStone.body.velocity.x = 0;
      this.spritetext1.body.velocity.x = 0;
      // this.spritePike.body.velocity.x = 0;
      // this.spritePike2.body.velocity.x = 0;
    }
  }
