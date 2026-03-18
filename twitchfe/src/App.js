import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

const ChildA = (props) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("amount");
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("after every render when dependencies have been changed");
  }, [props.num]);

  useEffect(() => {
    return () => {
      console.log("will unamount");
    };
  }, []);

  return (
    <>
      <div>ChildA: {counter}</div>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

const ChildB = (props) => {
  return <div>ChildB: {props.num}</div>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [showChild, setShowChild] = useState(false);

  const handleButtonClick = () => {
    setShowChild(!showChild);
  };

  const handleButtonClick2 = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      {showChild && <ChildA num={counter} />}
      <button onClick={handleButtonClick}>Toggle Child</button>
      <button onClick={handleButtonClick2}>app counter +1</button>
      <ChildB num={counter} />
    </>
  );
};

export default App;
