import React from "react";

export default function Options(props) {
  return (
    <div>
      <div className="options">
        {props.data[props.i].ans.map((option) => (
          <div>
            <input value={option} type="radio" name="radio"></input>
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
