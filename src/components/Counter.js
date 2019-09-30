import React, { Component } from "react";
import { connect } from "react-redux";

import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ACTION,
  DECREMENT_ACTION
} from "../actions";

import "./Counter.css";

class Counter extends Component {
  handleIncrement = () => {
    this.props.incrementCounter();
  };

  handleDecrement = () => {
    this.props.decrementCounter();
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

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch({ type: INCREMENT }),
  decrementCounter: () => dispatch({ type: DECREMENT })
});

const mapDispatchToPropsObject = {
  incrementCounter: () => INCREMENT_ACTION(),
  decrementCounter: () => DECREMENT_ACTION()
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  mapDispatchToPropsObject
)(Counter);
