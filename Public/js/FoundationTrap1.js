  class FoundationTrap1 {
    constructor(x, y){

      this.sprite1 = Nakama.foundGroup.create(x, y,'Foundation','Foundation1.png' );

      this.sprite2 = Nakama.foundGroup.create(x+316, 1200,'Foundation','Foundation1b.png' );
      // Nakama.game.add(this.sprite);
      Nakama.game.physics.arcade.enable(this.sprite1);
      Nakama.game.physics.arcade.enable(this.sprite2);
      //this.sprite.body.collideWorldBounds = true;
      // this.configs = configs;
      this.sprite1.body.allowGravity = false;
      this.sprite2.body.allowGravity = false;
      this.sprite1.body.immovable = true;
      this.sprite2.body.immovable = true;
    //  this.sprite.body.setSize(135.199,431.242-14,0,14);

    }
    update(){

      if(Nakama.playerGroup.getFirstAlive() != null){
        this.playerSprite=Nakama.playerGroup.getFirstAlive();
      }else {
        return;
      }

      if((this.sprite1.position.x-50-this.playerSprite.position.x)<0){
        this.sprite1.body.velocity.y = FoundationTrap1.SPEED;
      //  this.sprite2.body.velocity.y = FoundationTrap1.SPEED;

      }
    }
    move(){
      this.sprite1.body.velocity.x = -Dinosarus.SPEED;
      this.sprite2.body.velocity.x = -Dinosarus.SPEED;
    }
    stop(){
      this.sprite1.body.velocity.x = 0;
      this.sprite2.body.velocity.x = 0;
    }
  }
  FoundationTrap1.SPEED=900;
