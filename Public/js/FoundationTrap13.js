  class FoundationTrap13{
    constructor(x,y){
      this.spriteFound = Nakama.foundGroup.create(x,y,'Foundation','FoundationTrap350.png');
      Nakama.game.physics.arcade.enable(this.spriteFound);
      this.spriteFound.body.allowGravity = false;
      this.spriteFound.body.immovable = true;
      this.spriteFound2 = Nakama.foundGroup.create(x+673,y,'Foundation','FoundationTrap350.png');
      Nakama.game.physics.arcade.enable(this.spriteFound2);
      this.spriteFound2.body.allowGravity = false;
      this.spriteFound2.body.immovable = true;
      //foundbox1
      this.spriteFoundBox = Nakama.foundGroup.create(x+59.31,750,'Foundation2','Box3.png');
      Nakama.game.physics.arcade.enable(this.spriteFoundBox);
      this.spriteFoundBox.body.allowGravity = false;
      this.spriteFoundBox.body.immovable = true;
     //foundbox2
      this.spriteFoundBox2 = Nakama.foundGroup.create(x,1000,'Foundation2','Box3.png');
      Nakama.game.physics.arcade.enable(this.spriteFoundBox2);
      this.spriteFoundBox2.body.allowGravity = false;
      this.spriteFoundBox2.body.immovable = true;
      //foundbox3
      this.spriteFoundBox3 = Nakama.foundGroup.create(x+670,750,'Foundation2','Box3.png');
      Nakama.game.physics.arcade.enable(this.spriteFoundBox3);
      this.spriteFoundBox3.body.allowGravity = false;
      this.spriteFoundBox3.body.immovable = true;
      //foundbox4
      this.spriteFoundBox4 = Nakama.foundGroup.create(x+700,1000,'Foundation2','Box3.png');
      Nakama.game.physics.arcade.enable(this.spriteFoundBox4);
      this.spriteFoundBox4.body.allowGravity = false;
      this.spriteFoundBox4.body.immovable = true;
      //chuong ngai vat box 5
      this.spriteFoundBox5 = Nakama.invifoundGroup2.create(x+520,800,'Foundation2','Box4.png');
      Nakama.game.physics.arcade.enable(this.spriteFoundBox5);
      this.spriteFoundBox5.body.allowGravity = false;
      this.spriteFoundBox5.body.immovable = true;
      this.spriteFoundBox5.alpha=0;
    }
    update(){
     var hitInviFound2=Nakama.game.physics.arcade.overlap(Nakama.playerGroup,Nakama.invifoundGroup2);
     if(hitInviFound2){
       this.spriteFoundBox5.alpha=1;
     }
    }
    move(){
      this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFoundBox.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFoundBox2.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFoundBox3.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFoundBox4.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFoundBox5.body.velocity.x = -Dinosarus.SPEED;
    //  this.spritePike.body.velocity.x = -Dinosarus.SPEED;

    }
    stop(){
      this.spriteFound.body.velocity.x = 0;
    //  this.spritePike.body.velocity.x = 0;
      this.spriteFoundBox.body.velocity.x = 0;
      this.spriteFoundBox2.body.velocity.x = 0;
      this.spriteFoundBox3.body.velocity.x = 0;
      this.spriteFoundBox4.body.velocity.x = 0;
      this.spriteFoundBox5.body.velocity.x = 0;
      this.spriteFound2.body.velocity.x = 0;

    }
  }
