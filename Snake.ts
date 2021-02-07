import display from './display';

// place your code on line 5 above the export statement below

class Snake {
  public currentPosition: number;
  public currentDirection: number;
  constructor() {
    this.currentPosition = 0;
    this.currentDirection = 1;
  }
public move(squares:number){
this.currentPosition += this.currentDirection * squares;
}
public turn() {
 this.currentPosition *= -1;
}
public get position() {
  return this.currentPosition;
}
 }

export default Snake;