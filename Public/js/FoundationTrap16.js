class FoundationTrap16 {
  constructor(x,y){
    this.sprite = Nakama.foundGroup.create(x+157, y,'Foundation','Foundationhalf.png');
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;
    this.sprite3 = Nakama.trapGroup.create(x+158, 0,'Foundation2','Box.png');
    Nakama.game.physics.arcade.enable(this.sprite3);
    this.sprite3.body.allowGravity = false;
    this.sprite3.body.immovable = true;
    this.sprite2 = Nakama.foundGroup.create(x, y,'Foundation','Foundation1.png');
    Nakama.game.physics.arcade.enable(this.sprite2);
    this.sprite2.body.allowGravity = false;
    this.sprite2.body.immovable = true;
    this.text1 = Nakama.game.add.text(x, 600, Foundation.SIGN, { font: "60px Arial Black", fill: "#c51b7d" });
    Nakama.game.physics.arcade.enable(this.text1);
    this.text1.body.allowGravity = false;
    this.text1.body.immovable = true;
    this.sprite3.alpha=0;
    this.spritePike2=Nakama.trapGroup.create(x+350,1150,'Foundation','PikeWhiteShort.png');
    Nakama.game.physics.arcade.enable(this.spritePike2);
    this.spritePike2.body.allowGravity = false;
    this.spritePike2.body.immovable = true;
    this.spritePike2.alpha=0;
  }
  update(){
      var hitTrap= Nakama.game.physics.arcade.overlap(Nakama.playerGroup,Nakama.trapGroup);
    if(Nakama.playerGroup.getFirstAlive()!==null){
      this.playerSprite=Nakama.playerGroup.getFirstAlive();
    }else{
      return;
    }
    if((this.sprite3.position.x-50-this.playerSprite.position.x)<0){
      this.sprite3.body.velocity.y=FoundationTrap16.SPEED;
      this.sprite3.alpha=1;
    }
    if(hitTrap){
      this.spritePike2.alpha=1;
    }
  }
  move(){
    this.sprite.body.velocity.x = -Dinosarus.SPEED;
    this.spritePike2.body.velocity.x = -Dinosarus.SPEED;
    this.sprite2.body.velocity.x = -Dinosarus.SPEED;
    this.sprite3.body.velocity.x = -Dinosarus.SPEED;
    this.text1.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.sprite.body.velocity.x = 0;
    this.sprite2.body.velocity.x = 0;
    this.spritePike2.body.velocity.x = 0;
    this.sprite3.body.velocity.x = 0;
    this.text1.body.velocity.x = 0;
  }
}
//  Foundation.SPRITE = 'Foundation1.png';
// Foundation.SPEED=100;
FoundationTrap16.SPEED=4000;
