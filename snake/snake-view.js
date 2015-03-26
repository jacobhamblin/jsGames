if (typeof window.SnakeGame === "undefined") {
  window.SnakeGame = {};
}

var View = window.SnakeGame.View = function($el) {
  debugger
  this.board = new window.SnakeGame.Board();
  this.$el = $el;
  this.bindListener();
  setInterval(this.step.bind(this), 500);
};

View.prototype.bindListener = function() {
  $(".stack").keydown(function (event) {
    var code = event.keyCode;
    switch(code) {
      case 38:
        this.board.snake.turn('N');
        break;
      case 39:
        this.board.snake.turn('E');
        break;
      case 40:
        this.board.snake.turn('S');
        break;
      case 37:
        this.board.snake.turn('W');
        break;
      default:
        console.log("ha bad key teehee");
    }
  });
};

View.prototype.step = function() {
  this.board.snake.move();
  // this.board.grid
  this.render();
};

View.prototype.render = function() {
  this.$el.html("<pre>" + this.board.render() + "</pre>");
};
