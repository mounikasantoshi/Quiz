import React from "react";

export default function Buttons(props) {
  return (
    <div>
      <div className="btn">
        <button onClick={props.previous}>Previous</button>
        <button onClick={props.submit}>submit</button>
        <button onClick={props.next}>Next</button>
        <button onClick={props.submit}>show Answer</button>
      </div>
    </div>
  );
}
