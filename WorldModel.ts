import Snake from "./Snake";
import View from "./View";

class WorldModel {
  _snake : Snake;
  width : number
  height : number

  constructor(s: Snake) {
    this._snake = s;
  }
  update(steps: number) {
    this._snake.move(steps);
  }
  get snake() {
    return this._snake;
  }
  get width() {
    return this.width;
  }
  get height() {
    return this.height;
  }
  view() {
    this.view = null;
  }
  set view(newView: display) {
    return newView;
  }
}

export default WorldModel;