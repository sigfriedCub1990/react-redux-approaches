import React, { Component } from "react";
import { connect } from "react-redux";

import { INCREMENT, DECREMENT } from "../actions";

import "./Counter.css";

class Counter extends Component {
  handleIncrement = () => {
    this.props.dispatch({ type: INCREMENT });
  };

  handleDecrement = () => {
    this.props.dispatch({ type: DECREMENT });
  };

  render() {
    return (
      <div className="counter">
        <span className="counter__value">{this.props.counter}</span>
        <div className="counter__buttons">
          <button className="button" onClick={this.handleIncrement}>
            +
          </button>
          <button className="button" onClick={this.handleDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Counter);
