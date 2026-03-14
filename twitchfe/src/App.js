import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    counter: 0,
  };

  handleDoubleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <div>Counter: {this.state.counter}</div>
        <button onDoubleClick={this.handleDoubleClick}>+1</button>
      </>
    );
  }
}

export default App;
