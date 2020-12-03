import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    return (
      <div>
        <div className="btn">
          <button onClick={this.props.previous}>Previous</button>
          <button onClick={this.props.submit}>submit</button>
          <button onClick={this.props.next}>Next</button>
          <button onClick={this.props.submit}>show Answer</button>
        </div>
      </div>
    );
  }
}

export default Buttons;
