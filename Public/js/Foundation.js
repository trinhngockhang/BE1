class Foundation{
  constructor(x, y){
    this.sprite = Nakama.foundGroup.create(x, y,'Foundation','Foundation5b.png');
    Nakama.game.physics.arcade.enable(this.sprite);
    this.spritePlayer = Nakama.playerGroup.getFirstAlive();
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;

    //this.sprite.body.setSize(976.199,431.242-14,0,14);
  }
  update(){
    Nakama.game.physics.arcade.collide(this.spritePlayer,this.spriteFound);
  }
  move(){
    this.sprite.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.sprite.body.velocity.x = 0;
  }
}
//  Foundation.SPRITE = 'Foundation1.png';
Foundation.SPEED=100;
Foundation.SAFE='White pike is safe';
Foundation.SIGN="Slow down!It's dangerous! "
Foundation.STONE="Be carefull!Stone can fall!"
