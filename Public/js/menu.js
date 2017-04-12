var menuState = {
  create : function() {
    Nakama.foundGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.trapGroup = Nakama.game.add.physicsGroup();
    map = Nakama.game.add.sprite(0,0,'background');
    var playButton = this.game.add.button(800,800,"playButton",this.playTheGame,this);
		    playButton.anchor.setTo(0.5,0.5);
        playButton.scale = new Phaser.Point(0.3,0.3);
    var leaderBoardButton = this.game.add.button(1200,800,"boardButton",this.leaderBoard,this);
    	  leaderBoardButton.anchor.setTo(0.5,0.5);
        leaderBoardButton.scale = new Phaser.Point(0.3,0.3);
    var gameTiles = this.game.add.image(1050,500, "gameTiles");
        gameTiles.anchor.setTo(0.5,0.5);
        this.game.add.image(200,1200, "Foundation2");
        this.game.add.image(400,1200, "Foundation2");
        this.game.add.image(600,1200, "Foundation2");
        this.game.add.image(800,1200, "Foundation2");
        this.game.add.image(0,1200, "Foundation2");
        this.game.add.image(1000,1200, "Foundation2");
        this.game.add.image(1200,1200, "Foundation2");
        this.game.add.image(1400,1200, "Foundation2");
        this.game.add.image(1600,1200, "Foundation2");
        this.game.add.image(1800,1200, "Foundation2");
        this.game.add.image(2000,1200, "Foundation2");
    var textPlayGame = this.game.add.text(650, 900, "PLAY GAME", {font: '45px Arial', fill: "#00000"});
    var textLeaderBoard= this.game.add.text(1050, 900, "WHO DIE MOST", {font: '45px Arial', fill: "#00000"});
    this.checkLastFall = 0;

  },
  update : function() {
    // Nakama.playerGroup.getFirstAlive().body.velocity.x = 200;
    // this.checkLastFall = Nakama.game.time.physicsElapsed;
    // if(this.checkLastFall >500) {
    //   Nakama.player.push(new Dinosarus(bot,{}));
    // }
  },
  playTheGame: function(){
		this.game.state.start("play");
	},
  leaderBoard: function () {
    keysSorted = Object.keys(leaderPlayer).sort(function(a,b){return leaderPlayer[b]-leaderPlayer[a]});
    this.game.state.start("leaderBoard",true,false, keysSorted)
  }
}
