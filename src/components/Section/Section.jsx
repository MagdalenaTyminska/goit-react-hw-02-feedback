import React, { Component } from 'react';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <section>
        {title}
        {children}
      </section>
    );
  }
}
