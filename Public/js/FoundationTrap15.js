class FoundationTrap15{
  constructor(x,y){

    this.sprite0 = Nakama.foundGroup.create(x, y,'Foundation2','Foundation1.png');
    Nakama.game.physics.arcade.enable(this.sprite0);
    this.sprite0.body.allowGravity = false;
    this.sprite0.body.immovable = true;

    this.sprite1 = Nakama.foundGroup.create(x+200, y-200,'Foundation2','SmallBox.png');
    Nakama.game.physics.arcade.enable(this.sprite1);
    this.sprite1.body.allowGravity = false;
    this.sprite1.body.immovable = true;

    this.sprite2 = Nakama.foundGroup.create(x+450, y-200,'Foundation2','SmallBox.png');
    Nakama.game.physics.arcade.enable(this.sprite2);
    this.sprite2.body.allowGravity = false;
    this.sprite2.body.immovable = true;

    this.sprite3 = Nakama.foundGroup.create(x+700, y-200,'Foundation2','SmallBox.png');
    Nakama.game.physics.arcade.enable(this.sprite3);
    this.sprite3.body.allowGravity = false;
    this.sprite3.body.immovable = true;

    this.sprite4 = Nakama.foundGroup.create(x+950, y-200,'Foundation2','SmallBox.png');
    Nakama.game.physics.arcade.enable(this.sprite4);
    this.sprite4.body.allowGravity = false;
    this.sprite4.body.immovable = true;

  }
  update(){
    if(Nakama.playerGroup.getFirstAlive() != null){
      this.playerSprite=Nakama.playerGroup.getFirstAlive();
    }else {
      return;
    }

    if ((this.sprite1.position.x - this.playerSprite.position.x) < 1){
        if (this.sprite1.position.y >= 1000){
          this.sprite1.body.velocity.y = -700;
        }
        if (this.sprite1.position.y < 300){
          this.sprite1.body.velocity.y = 700;
        }
        if (this.sprite2.position.y < 300){
          this.sprite2.body.velocity.y = 800;
        }
        if (this.sprite2.position.y >= 1000){
          this.sprite2.body.velocity.y = -800;
        }
        if (this.sprite3.position.y < 300){
          this.sprite3.body.velocity.y = 900;
        }
        if (this.sprite3.position.y >= 1000){
          this.sprite3.body.velocity.y = -900;
        }
        if (this.sprite4.position.y < 300){
          this.sprite4.body.velocity.y = 1000;
        }
        if (this.sprite4.position.y >= 1000){
          this.sprite4.body.velocity.y = -1000;
        }
    }
    if ((this.sprite3.position.x - this.playerSprite.position.x) < 1){
      this.sprite3.body.velocity.y = 900;
    
    }
  }
  move(){
    this.sprite0.body.velocity.x = -Dinosarus.SPEED;
    this.sprite1.body.velocity.x = -Dinosarus.SPEED;
    this.sprite2.body.velocity.x = -Dinosarus.SPEED;
    this.sprite3.body.velocity.x = -Dinosarus.SPEED;
    this.sprite4.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.sprite0.body.velocity.x = 0;
    this.sprite1.body.velocity.x = 0;
    this.sprite2.body.velocity.x = 0;
    this.sprite3.body.velocity.x = 0;
    this.sprite4.body.velocity.x = 0;
  }
}
FoundationTrap15.SPEED=500;
