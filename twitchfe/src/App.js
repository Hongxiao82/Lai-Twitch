import logo from "./logo.svg";
import "./App.css";
import React from "react";

class ChildA extends React.Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log("ChildA", "Did Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ChildA", "Did Update", prevProps, prevState);
    if (prevState.counter === this.state.counter) {
      console.log("ChildA", "Did Update: state unchanged");
    }

    if (prevProps.num === this.props.num) {
      console.log("ChildA", "Did Update: props unchanged");
    }
  }

  render() {
    return <div>ChildA: {this.props.num}</div>;
  }
}

class ChildB extends React.Component {
  componentDidMount() {
    console.log("ChildB", "Did Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ChildB", "Did Update", prevProps, prevState);
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
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App", "Did Update", prevProps, prevState);
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
        {!this.state.loading && (
          <button onClick={this.handleButtonClick}>+1</button>
        )}
        <ChildA num={this.state.counter} />
        <ChildB num={this.state.counter} />
      </>
    );
  }
}

export default App;
