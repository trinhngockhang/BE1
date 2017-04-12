class FoundationTrap11{
  constructor(x1,y1){
    //coppy TRap5
    this.sprite1 = Nakama.foundGroup.create(x1+867, 1200,'Foundation','Foundation1.png' );
    this.sprite2 = Nakama.foundGroup.create(x1+317, 1200,'Foundation','Foundation1.png' );
    Nakama.game.physics.arcade.enable(this.sprite1);
    Nakama.game.physics.arcade.enable(this.sprite2);
    this.sprite1.body.allowGravity = false;
    this.sprite2.body.allowGravity = false;
    this.sprite1.body.immovable = true;
    this.sprite2.body.immovable = true;
    this.sprite3 = Nakama.foundGroup.create(x1+392, 1200,'Foundation','Foundation1.png' );
    // Nakama.game.add(this.sprite);
    this.sprite3.body.allowGravity = false;
    Nakama.game.physics.arcade.enable(this.sprite3);

    //this.sprite1.body.collideWorldBounds = true;
    // this.configs = configs;
    this.sprite3.body.immovable = true;
    //this.sprite.body.setSize(135.199,431.242-14,0,14);
  }
  update(){


    // this.playerSprite=Nakama.playerGroup.getFirstAlive();
    // if((this.sprite1.position.x-10-this.playerSprite.position.x)<0 &&(this.sprite1.position.y>1200)){
    //   this.sprite1.body.velocity.y = -FoundationTrap5.SPEED;
    //   //this.sprite2.body.velocity.y = -FoundationTrap5.SPEED;
    //   this.sprite2.body.velocity.y = FoundationTrap5.SPEED;
    // }
    // if(this.sprite1.position.y<1215){
    //   this.sprite1.body.velocity.y=0;
    //   this.sprite2.body.velocity.y=0;
    // }
  }
  move(){
    this.sprite1.body.velocity.x = -Dinosarus.SPEED;
    this.sprite2.body.velocity.x = -Dinosarus.SPEED;
    this.sprite3.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.sprite1.body.velocity.x = 0;
    this.sprite2.body.velocity.x = 0;
    this.sprite3.body.velocity.x = 0;
  }
}
