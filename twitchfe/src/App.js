import logo from "./logo.svg";
import "./App.css";
import React from "react";

const ChildA = (props) => {
  return <div>ChildA: {props.num}</div>;
};
const ChildB = (props) => {
  return <div>ChildB: {props.num}</div>;
};

class App extends React.Component {
  state = {
    counter: 0,
  };

  handleButtonClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <div>Counter: {this.state.counter}</div>
        <button onDoubleClick={this.handleButtonClick}>+1</button>
        <ChildA num={this.state.counter} />
        <ChildB num={this.state.counter} />
      </>
    );
  }
}

export default App;
