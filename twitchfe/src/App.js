import logo from "./logo.svg";
import "./App.css";
import React from "react";

class ChildA extends React.Component {
  componentDidMount() {
    console.log("ChildA", "Did Mount");
  }

  render() {
    return <div>ChildA: {this.props.num}</div>;
  }
}

class ChildB extends React.Component {
  componentDidMount() {
    console.log("ChildB", "Did Mount");
  }

  render() {
    return <div>ChildB: {this.props.num}</div>;
  }
}

class App extends React.Component {
  state = {
    counter: 0,
    loading: true,
  };

  componentDidMount() {
    console.log("App", "Did Mount");
    setTimeout(() => {
      this.setState({
        counter: 5,
        loading: false,
      });
    }, 3000);
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
        {this.state.loading && <div>Loading...</div>}
        {!this.state.loading && <div>App Counter: {this.state.counter}</div>}
        <ChildA num={this.state.counter} />
        <ChildB num={this.state.counter} />
      </>
    );
  }
}

export default App;
