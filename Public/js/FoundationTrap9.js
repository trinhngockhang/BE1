class FoundationTrap9{
  constructor(x,y){

    this.spriteFound = Nakama.foundGroup.create(x,y,'Foundation','Foundation2.png');
    Nakama.game.physics.arcade.enable(this.spriteFound);
    this.spriteFound.body.allowGravity = false;
    this.spriteFound.body.immovable = true;
    this.spriteFound2 = Nakama.foundGroup.create(x+975,y,'Foundation','Foundation49.png');
    Nakama.game.physics.arcade.enable(this.spriteFound2);
    this.spriteFound2.body.allowGravity = false;
    this.spriteFound2.body.immovable = true;
    this.spritePike1=Nakama.trapGroup.create(x+200,1150,'Foundation','PikeBlackShort.png');
    this.spritePike2=Nakama.trapGroup.create(x+200,850,'Foundation','PikeWhiteShort.png');
    Nakama.game.physics.arcade.enable(this.spritePike1);
    Nakama.game.physics.arcade.enable(this.spritePike2);
    this.spritePike1.body.allowGravity = false;
    this.spritePike2.body.allowGravity = false;
    this.spritePike1.body.immovable = true;
    this.spritePike2.body.immovable = true;
    this.text1 = Nakama.game.add.text(x+100, 600, Foundation.SAFE, { font: "60px Arial Black", fill: "#c51b7d" });
    Nakama.game.physics.arcade.enable(this.text1);
    this.text1.body.immovable = true;
    this.text1.body.allowGravity = false;
    this.spritePike2.body.setSize(-121231,0,0,0);
    }
    update(){

    }
    move(){
      this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
      this.spritePike1.body.velocity.x = -Dinosarus.SPEED;
      this.spritePike2.body.velocity.x = -Dinosarus.SPEED;
      this.text1.body.velocity.x = -Dinosarus.SPEED;

    }
    stop(){
      this.spriteFound.body.velocity.x = 0;
      this.spriteFound2.body.velocity.x = 0;
      this.text1.body.velocity.x = 0;
      this.spritePike1.body.velocity.x = 0;
      this.spritePike2.body.velocity.x = 0;
    }
  }
