
var gameOverState = {
  create : function() {
    map = Nakama.game.add.sprite(0,0,'background');
    var playButtonCheckPoint = this.game.add.button(800,800,"playButton",this.playTheGameAtCheckPoint,this);
		    playButtonCheckPoint.anchor.setTo(0.5,0.5);
        playButtonCheckPoint.scale = new Phaser.Point(0.3,0.3)
    var playButtonNewGame = this.game.add.button(1200,800,"replayButton",this.playTheGameAtNew,this);
    	  playButtonNewGame.anchor.setTo(0.5,0.5);
        playButtonNewGame.scale = new Phaser.Point(0.3,0.3)
    var leaderBoardButton = this.game.add.button(1023,1050,"boardButton",this.saveScore,this);
        leaderBoardButton.anchor.setTo(0.5,0.5);
        leaderBoardButton.scale = new Phaser.Point(0.3,0.3);
    var winLabel = this.game.add.sprite(1023,500,"gameOver");
        winLabel.anchor.setTo(0.5,0.5);
        winLabel.scale = new Phaser.Point(2.2,2.2);
    var textPlayGame = this.game.add.text(650, 900, "CHECKPOINT", {font: '45px Arial', fill: "#00000"});
    var textNewGame= this.game.add.text(1050, 900, "NEW GAME", {font: '45px Arial', fill: "#00000"});
    var textLeaderBoard2= this.game.add.text(900, 1120, "Save Score", {font: '45px Arial', fill: "#00000"});
    var textTroll= this.game.add.text(720, 150, "DON'T CRY", {font: '120px Arial', fill: "#00000"});
    setTimeout(function() {
      loaded = true;
    }, 500);

  },
  playTheGameAtNew: function(){
    if (loaded) {
      music.destroy();
      again = false;
      Nakama.game.state.start("play",true,false,again);
      loaded = false
    }
	},
  playTheGameAtCheckPoint: function() {
    if (loaded) {
      music.destroy();
      again = true;
      Nakama.game.state.start("play",true,false,again);
      loaded = false
    }
  },
  leaderBoard : function() {
    this.game.state.start("leaderBoard");
  },
  saveScore : function() {
    var playerName = prompt("Please enter your name", "");
    keysSorted = Object.keys(leaderPlayer).sort(function(a,b){return leaderPlayer[b]-leaderPlayer[a]});
    if( playerName == null){
      playerName = "unknown";
      leaderPlayer[ playerName ] = score;
    }
    else {
      leaderPlayer[ playerName ] = score;
    }
    this.game.state.start("leaderBoard",true,false, keysSorted);
  }
}
