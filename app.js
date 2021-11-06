import {PacMan} from './pacMan.js';
import {Field} from './field.js';

class Game {
  constructor() {
    this.field = new Field();
    this.pacMan = new PacMan();
    this.timer;
  }
  render({field, pacManY, pacManX, prevPacManY, prevPacManX, pacManDirY, pacManDirX, nextMove}) {
    console.clear();
    console.log(field[pacManY - pacManDirY][pacManX - pacManDirX]);
    console.log(this.pacMan.nextMove);
    console.log(this.pacMan.prevCoordinates);
    console.log(this.pacMan.currentCoordinates);
    field[prevPacManY][prevPacManX] = "_"; //I have to fix it, it replaces one step away field
    field[pacManY][pacManX] = PacMan.image[nextMove];
    for (let line of field) {
      console.log(line.join());
    }
  }

  move({field, pacManY, pacManX, pacManDirY, pacManDirX, nextMove}) {
    if (field[pacManY + pacManDirY][pacManX + pacManDirX] == "#") {
      this.stop();
    } else {
      this.pacMan.prevCoordinates[0] = this.pacMan.currentCoordinates[0];
      this.pacMan.prevCoordinates[1] = this.pacMan.currentCoordinates[1];
      this.pacMan.currentCoordinates[0] += pacManDirY;
      this.pacMan.currentCoordinates[1] += pacManDirX;
    }
  }

  start() {
    console.log("hi there, soon I'll be the Pac-Man game");
    let t = this;
    let changeDirection = function(event) {
      switch (event.key) {
        case "ArrowUp":
          t.pacMan.nextMove = "up";
          break;
        case "ArrowDown":
          t.pacMan.nextMove = "down";
          break;
        case "ArrowLeft":
          t.pacMan.nextMove = "left";
          break;
        case "ArrowRight":
          t.pacMan.nextMove = "right";
          break;
      }
    }
    document.addEventListener("keydown", changeDirection);
    setTimeout(function run() {
      let options = {
        field: t.field.grid,
        pacManY: t.pacMan.currentCoordinates[0],
        pacManX: t.pacMan.currentCoordinates[1],
        prevPacManY: t.pacMan.prevCoordinates[0],
        prevPacManX: t.pacMan.prevCoordinates[1],
        pacManDirY: PacMan.direction[t.pacMan.nextMove][0],
        pacManDirX: PacMan.direction[t.pacMan.nextMove][1],
        nextMove: t.pacMan.nextMove,
      };
      t.move(options);
      t.render(options);
      setTimeout(run, 1000);// here is the problem setTimeout runs itself and this.stop method doesn't work
    }, 1000);
  }

  stop() {

  }
}

let game = new Game();
game.start();
