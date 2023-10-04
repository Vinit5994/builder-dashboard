import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import "../css/choice.css";

const Choice = () => {
  return (
    <div className="choice">
      <Filter />
      <Search />
    </div>
  );
};

export default Choice;
