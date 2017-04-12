var loadState = {
  preload: function() {
    Nakama.game.load.atlasJSONHash('Dino', 'Assets/assets.png', 'Assets/Dino.json');
    Nakama.game.load.atlasJSONHash('Foundation','Assets/assets.png', 'Assets/Foundation.json');
    Nakama.game.load.atlasJSONHash('Foundation2','Assets/assets2.png', 'Assets/Foundation2.json');
    Nakama.game.load.image('background', 'Assets/background.png');
    Nakama.game.load.image('playButton' , 'Assets/playButton.png');
    Nakama.game.load.image('replayButton' , 'Assets/replayButton.png');
    Nakama.game.load.image('gameOver' , 'Assets/gameOver.png');
    Nakama.game.load.image('gameTiles' , 'Assets/gameTiles.png');
    Nakama.game.load.image('boardButton' , 'Assets/leaderBoard.png');
    Nakama.game.load.audio('gameplay', ['assets/audio/gameplaymusic.mp3', 'assets/audio/gameplaymusic.ogg']);
    Nakama.game.load.audio('die', ['assets/audio/Chet.wav', 'assets/audio/Chet.ogg']);
    Nakama.game.load.audio('jump', ['assets/audio/Nhayv2.ogg', 'assets/audio/Nhayv2.ogg']);
    Nakama.game.load.audio('checkpoint', ['assets/audio/Quaman.wav', 'assets/audio/Quaman.ogg']);
    Nakama.game.load.image('homeButton' , 'Assets/homeButton.png');

    console.log("create");
    Nakama.player = [];
    Nakama.trap = [];
    Nakama.found = [];


  },
  create: function() {
    console.log("create2");


    Nakama.game.state.start("menu");
  }
}
