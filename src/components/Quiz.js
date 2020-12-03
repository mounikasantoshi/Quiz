import React, { Component } from "react";
import Questions from "./Questions";
import Options from "./Options";
import Buttons from "./Buttons";

export class Quiz extends Component {
  state = {
    data: [
      {
        question: "what is the current year",
        ans: [2020, 2012, 2014, 2021],
        choice: 2020,
      },
      {
        question: "what is the current month",
        ans: ["july", "may", "dec", "april"],
        choice: "dec",
      },
      {
        question: "what is ur name",
        ans: ["july", "mounika", "lavanya", "santoshi"],
        choice: "mounika",
      },
      {
        question: "what is the name of the current file",
        ans: ["Quiz", "App", "Button", "Object"],
        choice: "Quiz",
      },
    ],
    i: 0,
  };

  previous = () => {
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    }
  };

  next = () => {
    if (this.state.i < this.state.data.length - 1)
      this.setState({ i: this.state.i + 1 });
  };

  submit = () => {
    alert(this.state.data[this.state.i].choice);
  };

  render() {
    // console.log(this.state.data[this.state.i].ans[1]);
    // console.log(this.state.data[this.state.i].question);

    return (
      <div>
        <Questions i={this.state.i} data={this.state.data} />

        <Options i={this.state.i} data={this.state.data} />
        <Buttons
          previous={this.previous}
          next={this.next}
          submit={this.submit}
        />
      </div>
    );
  }
}

export default Quiz;
