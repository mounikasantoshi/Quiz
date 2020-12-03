import React from "react";

export default function Questions(props) {
  return (
    <div>
      <div className="question">{props.data[props.i].question}</div>
    </div>
  );
}
