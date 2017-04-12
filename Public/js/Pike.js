class Pike{
  constructor(position,position2,type){
    if(type == 1){
      this.sprite = Nakama.trapGroup.create(position.x, position.y, 'Foundation', Pike.SPRITENAME1);
    }else{
      this.sprite = Nakama.trapGroup.create(position.x, position.y, 'Foundation', Pike.SPRITENAME2);
    }
    this.position2 = position2;
    var direction = new Phaser.Point(0,0);
    this.sprite.angle = Math.atan2(direction.x, -direction.y) * (180/Math.PI);
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.scale = new Phaser.Point(0.5,0.5);
    // this.sprite.body.velocity = direction.setMagnitude(Pike.PIKE_SPEED = 1000);
    this.sprite.body.allowGravity = false;
    Nakama.trap.push(this);
    this.sprite.onKilled = this.onKilled;
    this.sprite.body.velocity = this.sprite.body.velocity.setMagnitude(Pike.PIKE_SPEED = 1000);
    this.sprite.damage = Pike.DAMAGE;
  }

  update(){
    // Call update of parent class
    // if(!this.sprite.alive){
    //   var index = Nakama.trap.indexOf(this);
    //   if(index != -1) Nakama.trap.splice(index, 1);
    // }
    // 1. Get a target if doesn't have target
    if(!this.target || !this.target.alive){
      this.getNewTarget();
    }

    // 2. If no target is available keep on going straight
    if(!this.target) return;

    // 3. Get direction toward target
    var direction = Phaser.Point.subtract(this.target.position, this.sprite.position);

    // 4. Turn slowly if the angle is too large
    var currentAngle = Nakama.game.math.radToDeg(
      Nakama.game.math.angleBetween(
        0,
        0,
        this.sprite.body.velocity.x,
        this.sprite.body.velocity.y
      )
    );
      var directionAngle = Nakama.game.math.radToDeg(
      Nakama.game.math.angleBetween(
        0,
        0,
        direction.x,
        direction.y
      )
    );

    var deltaAngle = directionAngle - currentAngle;

    // Ensure deltaAngle is between -180 & 180
    if(deltaAngle > 180) deltaAngle -= 360;
    if(deltaAngle < -180) deltaAngle += 360;

    // Ensure deltaAngle does not exceed max turn rate
    var maxDelta = Pike.TURN_RATE * Nakama.game.time.physicsElapsed;
    if(deltaAngle > maxDelta) deltaAngle = maxDelta;
    if(deltaAngle < -maxDelta) deltaAngle = -maxDelta;

    // Apply new direction based on new angle
    var newAngle = currentAngle + deltaAngle;
    var newDirection = new Phaser.Point(
      Math.cos(Nakama.game.math.degToRad(newAngle)),
      Math.sin(Nakama.game.math.degToRad(newAngle))
    );

    // 5. Set new velocity
    this.sprite.body.velocity = newDirection.setMagnitude(Pike.PIKE_SPEED = 1000);
    this.sprite.angle = 180-(Math.atan2(newDirection.x, -newDirection.y) * (180/Math.PI))+30;
  }

  getNewTarget(){
    this.target = this.position2;
  }
}

Pike.PIKE_SPEED = 1000;
Pike.TURN_RATE = 300;
Pike.SPRITENAME1 = "PikeWhite.png";
Pike.SPRITENAME2 = "PikeBlack.png";
Pike.DAMAGE = 3;
