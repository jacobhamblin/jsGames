(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var BOARDSIZE = 9;

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    var self = this;
    $(".tic-tac-toe").on("click", ".cell", function (event) {
      self.makeMove($(event.currentTarget))
    });
  };

  View.prototype.makeMove = function ($square) {
    var pos = $square.data('pos');
    if (this.game.board.isEmptyPos(pos)) {
      var mark = this.game.currentPlayer;
      $square.addClass(mark);
      $square.text(mark);
      this.game.playMove(pos);
    } else {
      alert('Invalid Move!');
    }
    if (this.game.isOver()) {
      var $message = $("<h2>It's a draw!</h2>");
      if (this.game.winner() !== null) {
        $message = $("<h2>You've won, " + this.game.winner() + "!</h2>");
        $("." + this.game.winner()).addClass("winning");
      }
      this.$el.after($message);
      this.$el.off();
    }
  };

  View.prototype.setupBoard = function () {
    for (var i = 0; i < BOARDSIZE/3; i++) {
      var $row = $("<div></div>");
      for (var j = 0; j < BOARDSIZE/3; j++) {
        var $cell = $("<div></div>");
        $cell.addClass("cell");
        $cell.data("pos", [i, j]);
        $row.append($cell);
      }
      $row.addClass("row group");
      this.$el.append($row);
    }
  };
})();
