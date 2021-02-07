import display from './display';

// place your code on line 5 above the export statement below

class Point {
private xcoord: number;
private ycoord: number;
public constuctor() {
this.xcoord = xcoord;
this.ycoord = ycoord;
}
  public get Point() {
  return (this.xcoord, this.ycoord);
  }
}
class Snake {
  private currentPosition: number;
  private currentDirection: number;
  constructor() {
    this.currentPosition = 0;
    this.currentDirection = 1;
  }
public move(squares:number){
this.currentPosition += this.currentDirection * squares;
if (this.position = new Point(this.position.x, this.position.y))
}
public turn() {
 this.currentPosition *= -1;
}
public get position() {
  return this.currentPosition;
  }
  set newPoint (initalPoint:number) {
    this.xcoord = 0;
    this.ycoord = 0;
  }
  public turnLeft () {
    if (this.xcoord < 0) display ("Left");
    else if (this.ycoord < 0) display ("Down");
    else if (this.xcoord > 0) display ("Right")
    else display ("Up")
  }
  public turnRight () {
    if (this.xcoord > 0) display ("Right")
    else if (this.xcoord < 0) display ("Left")
    else if (this.ycoord < 0) display ("Down")
    else display ("Up")
  }
}

export default Snake;