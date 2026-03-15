import logo from "./logo.svg";
import "./App.css";
import React from "react";

class ChildA extends React.Component {
  componentDidMount() {
    console.log("ChildA", "Did Mount");
    this.intervalId = setInterval(() => {
      console.log("interval run");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("ChildA", "Will Unmount");
    clearInterval(this.intervalId);
  }

  render() {
    return <div>ChildA: {this.props.num}</div>;
  }
}

class ChildB extends React.Component {
  render() {
    return <div>ChildB: {this.props.num}</div>;
  }
}

class App extends React.Component {
  state = {
    counter: 0,
    showChild: false,
  };

  componentDidMount() {
    console.log("App", "Did Mount");
  }

  handleButtonClick = () => {
    this.setState({
      showChild: !this.state.showChild,
    });
  };

  render() {
    console.log("App", "Rendering");
    return (
      <>
        {this.state.showChild && <ChildA num={this.state.counter} />}
        <button onClick={this.handleButtonClick}>Toggle Child</button>
        <ChildB num={this.state.counter} />
      </>
    );
  }
}

export default App;
