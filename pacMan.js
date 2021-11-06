class PacMan {
  static image = {
    "up": "v",
    "down": "^",
    "left": ">",
    "right": "<",
  };
  static direction = {
    "up": [-1, 0],
    "down": [1, 0],
    "left": [0, -1],
    "right": [0, 1],
  }
  constructor() {
    this.prevCoordinates = [2, 1];
    this.currentCoordinates = [2, 1];
    this.nextMove = "right";
  }
}

export {PacMan};
