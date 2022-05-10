import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

class Counter extends React.Component {
  

  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  }

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  }
  reset = () => {
    this.props.dispatch({ type: "reset" });
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div style={{backgroundColor:"white"}}>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Counter);