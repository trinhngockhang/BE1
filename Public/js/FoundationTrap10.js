  class FoundationTrap10{
    constructor(x,y){
      this.spriteFound = Nakama.foundGroup.create(x, y,'Foundation','Foundation1.png');
      Nakama.game.physics.arcade.enable(this.spriteFound);
      this.spriteFound.body.allowGravity = false;
      this.spriteFound.body.immovable = true;
      this.sprite = Nakama.invifoundGroup.create(x+90, 900,'Foundation2','Box.png');
      Nakama.game.physics.arcade.enable(this.sprite);
      this.sprite.body.allowGravity = false;
      this.sprite.body.immovable = true;
      this.sprite.alpha=0;
      this.spriteFound2 = Nakama.foundGroup.create(x+474, 1200,'Foundation','Foundation5b.png' );
      Nakama.game.physics.arcade.enable(this.spriteFound2);
      this.spriteFound2.body.allowGravity = false;
      this.spriteFound2.body.immovable = true;
    }
    update(){
      var hitInvi= Nakama.game.physics.arcade.overlap(Nakama.playerGroup,Nakama.invifoundGroup);
      if(hitInvi){
        this.sprite.alpha=1;
      }
    }
    move(){
      this.sprite.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFound.body.velocity.x = -Dinosarus.SPEED;
      this.spriteFound2.body.velocity.x = -Dinosarus.SPEED;
    }
    stop(){
      this.spriteFound.body.velocity.x = 0;
      this.spriteFound2.body.velocity.x = 0;
      this.sprite.body.velocity.x = 0;
    }
  }
