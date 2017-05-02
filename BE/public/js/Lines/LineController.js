class LineController {
	constructor(y, key, spriteName, anchor){
		this.sprite = Nakama.linesGroup.create(Nakama.game.world.width/2, y, key, spriteName);
		this.sprite.anchor = anchor;
		this.sprite.body.velocity.y = Nakama.configs.linesSpeed;
		this.sprite.scale.setTo(0.75, 0.75);
	}
}
