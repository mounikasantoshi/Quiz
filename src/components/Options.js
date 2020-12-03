import React, { Component } from "react";

export class Options extends Component {
  render() {
    return (
      <div>
        <div className="options">
          {this.props.data[this.props.i].ans.map((option) => (
            <div>
              <input value={option} type="radio" name="radio"></input>
              <label>{option}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Options;
