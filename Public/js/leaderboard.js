var leaderBoardState = {
  create : function() {
    Nakama.foundGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.trapGroup = Nakama.game.add.physicsGroup();
    keysSorted = Object.keys(leaderPlayer).sort(function(a,b){return leaderPlayer[b]-leaderPlayer[a]});
    map = Nakama.game.add.sprite(0,0,'background');
    this.game.add.image(0,1200, "Foundation", "Foundation2.png");
    this.game.add.image(900,1200, "Foundation", "Foundation2.png");
    this.game.add.image(1800,1200, "Foundation", "Foundation2.png");
    var playButton = this.game.add.button(1023,950,"homeButton",this.backMenu,this);
		    playButton.anchor.setTo(0.5,0.5);
        playButton.scale = new Phaser.Point(0.3,0.3);
    this.game.add.text(900,1050, "MAIN MENU", {font: '45px Arial', fill: "#000000"});
    this.game.add.text(250,100, "PEOPLE WANT TO DIE SO HARDDD", {font: '100px Arial', fill: "#000000"});
    this.game.add.text(750,250, "PLAYER" , {font: '50px Arial', fill: "#000000"});
    this.game.add.text(1150,250, "SCORE" , {font: '50px Arial', fill: "#000000"});
    for (var j = 0; j <10; j ++) {
      if(keysSorted[j] != undefined) {
        this.game.add.text(750,350+(100*j), keysSorted[j] , {font: '50px Arial', fill: "#000000"});
        this.game.add.text(1150,350+(100*j), leaderPlayer[keysSorted[j]] , {font: '50px Arial', fill: "#000000"});
      }
    }
  },
  backMenu: function() {
    this.game.state.start("menu")
  }
}
