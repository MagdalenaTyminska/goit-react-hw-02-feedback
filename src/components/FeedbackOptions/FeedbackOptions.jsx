import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const stateOptions = Object.keys(options);
    return (
      <>
        <div>
          {stateOptions.map(option => (
            <button type="button" onClick={onLeaveFeedback} name={option}>
              {option}
            </button>
          ))}
        </div>
      </>
    );
  }
}
