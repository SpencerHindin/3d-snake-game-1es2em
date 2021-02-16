import Snake from "./Snake";

class SnakeController {
   _World: WorldModel;
   _Snake: Snake;
   snakeWorld: snakeWorld;
   slitherer: slitherer;

constructor(w: WorldModel, s: Snake) {
  this._World = w
  this._Snake = s
}
turnSnakeLeft() {
slitherer.snake.turnSnakeLeft;
}
turnSnakeRight() {
slitherer.snake.turnSnakeRight;
}
get snakePosition() {
  return this.snakePosition;
}
get snakeDirection() {
  return this.direction;
}
get WorldWidth() {
  return this.width;
}
get WorldHeight() {
  return this.height;
}
}
export default SnakeController;