import React, { Component } from 'react';
// import ReactDOM from "react-dom";

export class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt);
    console.log('this.props: ', this.props);
  };

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt);
    console.log('this.props: ', this.props);
  };

  render() {
    const { step } = this.props;

    return (
      <>
        <section>
          <p>Please leave feedback</p>
          <button type="button">Good {step}</button>
          <button type="button">Neutral {step}</button>
          <button type="button">Bad {step}</button>
        </section>
        <section>
          <p>Statistics</p>
          <div>
            <span> Good: {this.state.good} </span>
            <span> Neutral: {this.state.neutral} </span>
            <span> Bad: {this.state.bad} </span>
            <span>Total: </span>
            <span>Positive feedback: </span>
          </div>
        </section>
      </>
    );
  }
}

// ReactDOM.render(<Counter step={5} />, document.getElementById("root"));
