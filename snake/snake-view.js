(function () {
  if (typeof SG === "undefined") {
    window.SG = {};
  }

  var View = SG.View = function ($el) {
    this.$el = $el;

    this.board = new SG.Board(20);
    this.setupGrid();

    this.intervalId = window.setInterval(
      this.step.bind(this),
      View.pace
    );

    $(window).on("keydown", this.handleKeyEvent.bind(this));
  };

  View.KEYS = {
    38: "N",
    39: "E",
    40: "S",
    37: "W",
    87: "N",
    65: "W",
    83: "S",
    68: "E"
  };

  View.pace = 125;

  View.prototype.setPace = function () {
    window.clearInterval(this.intervalId);
    this.intervalId = window.setInterval(
      this.step.bind(this),
      View.pace
    );
  };

  View.prototype.handleKeyEvent = function (event) {
    if (View.KEYS[event.keyCode]) {
      this.board.snake.turn(View.KEYS[event.keyCode]);
    }
  };

  View.prototype.render = function () {

    this.updateClasses(this.board.snake.segments, "snake");
    this.updateClasses([this.board.apple.position], "apple");
  };

  View.prototype.updateClasses = function(coords, className) {
    this.$li.filter("." + className).removeClass();

    coords.forEach(function(coord){
      var flatCoord = (coord.i * this.board.dim) + coord.j;
      this.$li.eq(flatCoord).addClass(className);
    }.bind(this));
  };

  View.prototype.setupGrid = function () {
    var html = "";

    for (var i = 0; i < this.board.dim; i++) {
      html += "<ul>";
      for (var j = 0; j < this.board.dim; j++) {
        html += "<li></li>";
      }
      html += "</ul>";
    }

    this.$el.html(html);
    this.$li = this.$el.find("li");
  };

  View.prototype.step = function () {
    if (this.board.snake.segments.length > 0) {
      this.board.snake.move();
      this.render();
    } else {
      $('h4').show();
      window.setTimeout(function() {
        $(".play-again").show();
      }, 1000);
      window.clearInterval(this.intervalId);
    }
  };
})();
