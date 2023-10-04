import React, { useState } from "react";
import "../css/switch.css";

const Switch = () => {
  const [theme, setTheme] = useState(0);
  const handleClick = () => {
    setTheme(!theme);
  };
  return (
    <div className="toggle-slide" onClick={handleClick}>
      <div className={`switch ${theme ? "slide " : ""}`}></div>
    </div>
  );
};

export default Switch;
