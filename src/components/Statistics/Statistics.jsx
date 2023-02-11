import React, { Component } from 'react';
// import ReactDOM from "react-dom";

export class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
    positiveFeedback: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleGoodButton = () => {
    this.setState(state => ({
      good: state.good + 1,
    }));
  };

  handleNeutralButton = () => {
    this.setState(state => ({
      neutral: state.neutral + 1,
    }));
  };

  handleBadButton = () => {
    this.setState(state => ({
      bad: state.bad + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage(totalFeedback) {
    const positiveFeedback = Math.round(
      (this.state.good * 100) / totalFeedback
    );
    return totalFeedback === 0 ? totalFeedback : positiveFeedback;
  }

  render() {
    // const { totalFeedback, positiveFeedback } = this.props;
    const total = this.countTotalFeedback();
    return (
      <>
        <section>
          <p>Please leave feedback</p>
          <button onClick={this.handleGoodButton} type="button">
            Good
          </button>
          <button onClick={this.handleNeutralButton} type="button">
            Neutral
          </button>
          <button onClick={this.handleBadButton} type="button">
            Bad
          </button>
        </section>
        <section>
          <p>Statistics</p>
          <div>
            <span> Good: {this.state.good} </span>
            <span> Neutral: {this.state.neutral} </span>
            <span> Bad: {this.state.bad} </span>
            <span> Total: {total} </span>
            <span>
              {' '}
              Positive feedback: {this.countPositiveFeedbackPercentage(total)}
              {'% '}
            </span>
          </div>
        </section>
      </>
    );
  }
}
