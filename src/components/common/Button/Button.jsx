import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="primary-button" onClick={props.onClick}>
      Create Task
    </button>
  );
};

export default Button;
