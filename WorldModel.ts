import Snake from "./Snake";

class worldModel {
  _snake : snake;

  constructor(s: Snake) {
    this._snake = s;
  }
  update(steps: number) {
    this._snake.move(steps);
  }
  get snake() {
    return this._snake;
  }
}

export default WorldModel;