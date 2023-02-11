import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <div>
          <span> Good: {good} </span>
          <span> Neutral: {neutral} </span>
          <span> Bad: {bad} </span>
          <span> Total: {total} </span>
          <span>Positive feedback: {positivePercentage}% </span>
        </div>
      </>
    );
  }
}
