if (typeof window.SnakeGame === "undefined") {
  window.SnakeGame = {};
}

var Coord = window.SnakeGame.Coord = function(x, y) {
  this.x = x;
  this.y = y;
}

Coord.prototype.plus = function(coord) {
  this.x += coord.x;
  this.y += coord.y;
};

Coord.prototype.equals = function(coord) {
  return (this.x === coord.x) && (this.y === coord.y);
};

Coord.prototype.isOpposite = function(coord) {
  return (this.x === coord.x * -1) && (this.y === coord.y * -1);
};

var DIRS = ["N", "E", "S", "W"];

var Snake = window.SnakeGame.Snake = function () {
  this.dir = DIRS[Math.floor(Math.random()*4)];
  this.segments = [new Coord(4, 5), new Coord(4, 6), new Coord(4,7)];
}

Snake.prototype.move = function() {
  var movement = new Coord(0, 0);
  switch(this.dir) {
    case 'N':
      movement.x -= 1;
      break;
    case 'E':
      movement.y += 1;
      break;
    case 'S':
      movement.x += 1;
      break;
    case 'W':
      movement.y -= 1;
      break;
    default:
      console.log('bad direction');
  }
  for (var i = 0; i < this.segments.length; i++) {
    this.segments[i].plus(movement);
  }
};

Snake.prototype.turn = function(dir) {
  this.dir = dir;
};

var BOARDSIZE = 10;

var Board = window.SnakeGame.Board = function() {
  this.snake = new Snake();
  this.apples = [];
  this.setupBoard();
};

Board.prototype.setupBoard = function() {
  this.grid = [];
  for (var i = 0; i < BOARDSIZE; i++) {
    this.grid[i] = [];
    for (var j = 0; j < BOARDSIZE; j++) {
      var coord = new Coord(i, j);
      // first put a dot there
      this.grid[i].push(".");
      // if it's a snake segment overwrite the dot to S
      for (var k = 0; k < this.snake.segments.length; k++) {
        if (this.snake.segments[k].equals(coord)) {
          this.grid[i][j] = "S";
        }
      }
    }
  }
};

Board.prototype.render = function() {
  var string = "";
  for (var i = 0; i < this.grid.length; i++) {
    string = string + (this.grid[i]).join(' ') + "\n";
  }
  return string;
};

// module.exports = { Coord: Coord, Board: Board, Snake: Snake };
