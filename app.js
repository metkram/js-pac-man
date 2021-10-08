class Game {
  constructor() {
    this.field = new Field();
    this.pacMan = new PacMan();
    this.timer;
  }
  render() {
    console.clear()
    console.log(this.field.grid[this.pacMan.coordinates[0] + PacMan.direction[this.pacMan.nextMove][0]][this.pacMan.coordinates[1] + PacMan.direction[this.pacMan.nextMove][1]]);
    this.field.grid[this.pacMan.coordinates[0] - PacMan.direction[this.pacMan.nextMove][0]][this.pacMan.coordinates[1] - PacMan.direction[this.pacMan.nextMove][1]] = "_";
    this.field.grid[this.pacMan.coordinates[0]][this.pacMan.coordinates[1]] = PacMan.image[this.pacMan.nextMove];
    for (let line of this.field.grid) {
      console.log(line.join());
    }
  }

  move() {
    if (this.field.grid[this.pacMan.coordinates[0] + PacMan.direction[this.pacMan.nextMove][0]][this.pacMan.coordinates[1] + PacMan.direction[this.pacMan.nextMove][1]] == "#") {
      this.stop();
    } else {
      this.pacMan.coordinates[0] += PacMan.direction[this.pacMan.nextMove][0];
      this.pacMan.coordinates[1] += PacMan.direction[this.pacMan.nextMove][1];
    }
  }

  start() {
    console.log("hi there, soon I'll be the Pac-Man game");
    let t = this;
    setTimeout(function run() {
      t.move();
      t.render();
      setTimeout(run, 1000);// here is the problem setTimeout runs itself and this.stop method doesn't work
    }, 1000);
  }

  stop() {

  }
}

class PacMan {
  static image = {
    "up": "v",
    "down": "^",
    "left": ">",
    "right": "<",
  };
  static direction = {
    "up": [1, 0],
    "down": [-1, 0],
    "left": [0, -1],
    "right": [0, 1],
  }
  constructor() {
    this.coordinates = [2, 1];
    this.nextMove = "right";
  }
}

class Field {
  constructor() {
    this.grid = [
      ["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"],
      ["#","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","_","_","_","_","_","#","_","_","_","_","_","_","_","_","_","_","_","_","#"],
      ["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"]
    ];
  }
}

let game = new Game();
game.start();
