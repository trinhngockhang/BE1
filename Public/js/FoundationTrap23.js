class FoundationTrap23 {
  constructor(x, y){

    this.sprite1 = Nakama.foundGroup.create(x, y,'Foundation','Foundation1.png' );
    this.sprite2 = Nakama.foundGroup.create(x+140, y-200,'Foundation2','SmallBox.png' );
    this.sprite3 = Nakama.foundGroup.create(x+700, y-300,'Foundation2','SmallBox.png' );
    this.sprite4 = Nakama.foundGroup.create(x+500, y,'Foundation2','Foundation1.png' );
    this.sprite4.alpha = 0;
    // Nakama.game.add(this.sprite);

    Nakama.game.physics.arcade.enable(this.sprite1);
    Nakama.game.physics.arcade.enable(this.sprite2);
    Nakama.game.physics.arcade.enable(this.sprite3);
    Nakama.game.physics.arcade.enable(this.sprite4);
    this.sprite1.body.allowGravity = false;
    this.sprite2.body.allowGravity = false;
    this.sprite3.body.allowGravity = false;
    this.sprite4.body.allowGravity = false;
    this.sprite1.body.immovable = true;
    this.sprite2.body.immovable = true;
    this.sprite3.body.immovable = true;
    this.sprite4.body.immovable = true;
    this.text1 = Nakama.game.add.text(x+150, 750, 'The Invisible!', { font: "60px Arial Black", fill: "#c51b7d" });
  //  this.sprite.body.setSize(135.199,431.242-14,0,14)
  Nakama.game.physics.arcade.enable(this.text1);
  this.text1.body.allowGravity = false;
  this.text1.body.immovable = true;
  }
  update(){

    if(Nakama.playerGroup.getFirstAlive() != null){
      this.playerSprite=Nakama.playerGroup.getFirstAlive();
    }else {
      return;
    }
    if (this.sprite2.position.x - this.playerSprite.position.x < 50){
      this.sprite2.body.velocity.x = 1000;
    }
    if (this.sprite2.position.x > 1070){
      this.sprite2.alpha = 0;
      this.sprite2.body.velocity.y=100000;
    }

  }
  move(){
    this.sprite1.body.velocity.x = -Dinosarus.SPEED;
    this.sprite2.body.velocity.x = -Dinosarus.SPEED;
    this.sprite3.body.velocity.x = -Dinosarus.SPEED;
    this.sprite4.body.velocity.x = -Dinosarus.SPEED;

    this.text1.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.text1.body.velocity.x = 0;
    this.sprite1.body.velocity.x = 0;
    this.sprite2.body.velocity.x = 0;
    this.sprite3.body.velocity.x = 0;
    this.sprite4.body.velocity.x = 0;
  }
}
