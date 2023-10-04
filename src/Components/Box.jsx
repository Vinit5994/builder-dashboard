import React from "react";
import "../css/box.css";
const Box = ({ title, value, color, bColor }) => {
  return (
    <div className="box" style={{ borderColor: `${bColor}` }}>
      <div className="title">
        <span style={color ? { color: `${color}` } : { color: "black" }}>
          {title}
        </span>
      </div>
      <div className="value">
        <span style={bColor ? { color: `${color}` } : { color: "black" }}>
          {value}
        </span>
      </div>
    </div>
  );
};

export default Box;
