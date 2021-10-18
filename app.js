import {PacMan} from './pacMan.js';
import {Field} from './field.js';

class Game {
  constructor() {
    this.field = new Field();
    this.pacMan = new PacMan();
    this.timer;
  }
  render({field, pacManY, pacManX, pacManDirY, pacManDirX, nextMove}) {
    console.clear();
    console.log(field[pacManY - pacManDirY][pacManX - pacManDirX]);
    field[pacManY - pacManDirY][pacManX - pacManDirX] = "_"; //I have to fix borber render
    field[pacManY][pacManX] = PacMan.image[nextMove];
    for (let line of field) {
      console.log(line.join());
    }
  }

  move({field, pacManY, pacManX, pacManDirY, pacManDirX, nextMove}) {
    if (field[pacManY + pacManDirY][pacManX + pacManDirX] == "#") {
      this.stop();
    } else {
      this.pacMan.coordinates[0] += pacManDirY;
      this.pacMan.coordinates[1] += pacManDirX;
    }
  }

  start() {
    console.log("hi there, soon I'll be the Pac-Man game");
    let t = this;
    setTimeout(function run() {
      let options = {
        field: t.field.grid,
        pacManY: t.pacMan.coordinates[0],
        pacManX: t.pacMan.coordinates[1],
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
