import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import display from "./display";
import Snake from "./Snake";
import SnakeTests from "./SnakeTests";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import CanvasView from "./CanvasView";
interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <pre id="output">
          OUTPUT: <br />
        </pre>
        {}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

let snake = new Snake();
let world = new WorldModel(snake, 10, 10);
let sc = new SnakeController(world, snake);
let player = new AvoidWallsPlayer(sc);
let directions = ["", "Up", "Right", "Down", "Left"];
let view = new CanvasView(50);
world.view = view;
world.update(1);


