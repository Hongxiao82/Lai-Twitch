import logo from "./logo.svg";
import "./App.css";
import React from "react";

const ChildA = (props) => {
  return <div>ChildA: {props.num}</div>;
};

const ChildB = (props) => {
  return (
    <>
      <button onDoubleClick={props.handleButtonClick}>+1</button>
      <div>ChildB: {props.num}</div>
    </>
  );
};

class App extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log("App", "Did Mount");
  }

  handleButtonClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("App", "Rendering");
    return (
      <>
        <div>Counter: {this.state.counter}</div>
        <ChildA num={this.state.counter} />
        <ChildB
          num={this.state.counter}
          handleButtonClick={this.handleButtonClick}
        />
      </>
    );
  }
}

export default App;
