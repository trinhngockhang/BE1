class FoundationTrap8 {
  constructor(x,y){
    this.sprite = Nakama.foundGroup.create(x+158, y,'Foundation','Foundationhalf.png');
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;
    this.sprite2 = Nakama.foundGroup.create(x, y,'Foundation','Foundation1.png');
    Nakama.game.physics.arcade.enable(this.sprite2);
    this.sprite2.body.allowGravity = false;
    this.sprite2.body.immovable = true;
    this.text1 = Nakama.game.add.text(x, 600, Foundation.SIGN, { font: "60px Arial Black", fill: "#c51b7d" });
    Nakama.game.physics.arcade.enable(this.text1);
    this.text1.body.allowGravity = false;
    this.text1.body.immovable = true;
    //this.sprite.body.setSize(976.199,431.242-14,0,14);
  }
  update(){
  }
  move(){
    this.sprite.body.velocity.x = -Dinosarus.SPEED;
    this.sprite2.body.velocity.x = -Dinosarus.SPEED;
    this.text1.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.sprite.body.velocity.x = 0;
    this.sprite2.body.velocity.x = 0;
    this.text1.body.velocity.x = 0;
  }
}
//  Foundation.SPRITE = 'Foundation1.png';
// Foundation.SPEED=100;
