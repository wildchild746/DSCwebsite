import React from "react";
import "./Switch.css";

const Switch = (props) => (
  <div
    className={`switch mx-lg-5 ${
      props.dark === 1 ? "text-light" : "text-dark"
    }`}
  >
    <label>
      <label className="m-2">{props.LHS}</label>
      <input
        type="checkbox"
        defaultChecked={false}
        onClick={props.switchDarkMode}
      />
      <span className="lever" />
      <label className="m-2">{props.RHS}</label>
    </label>
  </div>
);

export default Switch;
