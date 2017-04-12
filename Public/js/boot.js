var bootState = {
  create: function() {
    Nakama.game.scale.minWidth = Nakama.configs.MIN_WIDTH;
    Nakama.game.scale.minHeight = Nakama.configs.MIN_HEIGHT;
    Nakama.game.scale.maxWidth = Nakama.configs.MAX_WIDTH;
    Nakama.game.scale.maxHeight = Nakama.configs.MAX_HEIGHT;
    Nakama.game.scale.pageAlignHorizontally = true;
    Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    Nakama.game.time.advancedTiming = true;
    Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
    console.log("boot")
    Nakama.game.physics.arcade.gravity.y = 3000;
    Nakama.game.state.start("load")
  }
}
