class FoundationTrap20 {
  constructor(x, y){
    this.sprite1 = Nakama.foundGroup.create(x, y,'Foundation','Foundation1.png' );
    this.sprite2 = Nakama.foundGroup.create(x+140, y,'Foundation','Foundation1.png' );
    this.sprite3 = Nakama.foundGroup.create(x+140*2, y,'Foundation','Foundation1.png' );
    this.sprite4 = Nakama.foundGroup.create(x+140*3, y,'Foundation','Foundation1.png' );
    this.sprite5 = Nakama.foundGroup.create(x+140*4, y,'Foundation','Foundation1.png' );
    this.sprite6 = Nakama.foundGroup.create(x+140*5, y,'Foundation','Foundation1.png' );
    this.sprite7 = Nakama.foundGroup.create(x+140*6, y,'Foundation','Foundation1.png' );

    this.sprite1.alpha = 0;
    this.sprite2.alpha = 0;
    this.sprite3.alpha = 0;
    this.sprite4.alpha = 0;
    this.sprite5.alpha = 0;
    this.sprite6.alpha = 0;
    this.sprite7.alpha = 0;
    // Nakama.game.add(this.sprite);
    Nakama.game.physics.arcade.enable(this.sprite1);
    Nakama.game.physics.arcade.enable(this.sprite2);
    Nakama.game.physics.arcade.enable(this.sprite3);
    Nakama.game.physics.arcade.enable(this.sprite4);
    Nakama.game.physics.arcade.enable(this.sprite5);
    Nakama.game.physics.arcade.enable(this.sprite6);
    Nakama.game.physics.arcade.enable(this.sprite7);
    this.sprite1.body.allowGravity = false
    this.sprite2.body.allowGravity = false;
    this.sprite3.body.allowGravity = false;
    this.sprite4.body.allowGravity = false;
    this.sprite5.body.allowGravity = false;
    this.sprite6.body.allowGravity = false;
    this.sprite7.body.allowGravity = false;
    this.sprite1.body.immovable = true;
    this.sprite2.body.immovable = true;
    this.sprite3.body.immovable = true;
    this.sprite4.body.immovable = true;
    this.sprite5.body.immovable = true;
    this.sprite6.body.immovable = true;
    this.sprite7.body.immovable = true;
    this.spritetext1 = Nakama.game.add.text(x+100, 750, "Don't scare!", { font: "60px Arial Black", fill: "#c51b7d" });
    Nakama.game.physics.arcade.enable(this.spritetext1);
    this.spritetext1.body.allowGravity = false;
    this.spritetext1.body.immovable = true;
  //  this.sprite.body.setSize(135.199,431.242-14,0,14)

  }
  update(){

    if(Nakama.playerGroup.getFirstAlive() != null){
      this.playerSprite=Nakama.playerGroup.getFirstAlive();
    }else {
      return;
    }
    //if (this.sprite2.position.x - this.playerSprite.position.x < 2){
    //   this.sprite2.body.velocity.y =  FoundationTrap20.SPEED;
    // }
    // if (this.sprite3.position.x - this.playerSprite.position.x < 2){
    //   this.sprite4.body.velocity.y =  FoundationTrap20.SPEED;
    //   this.sprite5.body.velocity.y =  FoundationTrap20.SPEED;
    //   this.sprite6.body.velocity.y = FoundationTrap20.SPEED;
    // }

  }
  move(){

    this.sprite1.body.velocity.x = -Dinosarus.SPEED;
    this.sprite2.body.velocity.x = -Dinosarus.SPEED;
    this.sprite3.body.velocity.x = -Dinosarus.SPEED;
    this.sprite4.body.velocity.x = -Dinosarus.SPEED;
    this.sprite5.body.velocity.x = -Dinosarus.SPEED;
    this.sprite6.body.velocity.x = -Dinosarus.SPEED;
    this.sprite7.body.velocity.x = -Dinosarus.SPEED;
    this.spritetext1.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.sprite1.body.velocity.x = 0;
    this.sprite2.body.velocity.x = 0;
    this.sprite3.body.velocity.x = 0;
    this.sprite4.body.velocity.x = 0;
    this.sprite5.body.velocity.x = 0;
    this.sprite6.body.velocity.x = 0;
    this.sprite7.body.velocity.x = 0;
    this.spritetext1.body.velocity.x = 0;
  }
}
FoundationTrap20.SPEED=2000;
