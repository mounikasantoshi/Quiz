import React, { Component } from "react";

export class Questions extends Component {
  render() {
    return (
      <div>
        <div className="question">{this.props.data[this.props.i].question}</div>
      </div>
    );
  }
}

export default Questions;
