import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Counter.css";

const Counter = props => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <span className="counter__value">{counter}</span>
      <div className="counter__buttons">
        <button
          className="button"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
