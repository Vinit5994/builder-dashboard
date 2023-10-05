import React from "react";
import Box from "./Box";
import Button from "./Button";
import '../css/box.css'
import '../css/button.css'

const Boxes = () => {
  return (
    <div className="boxes">
      <Box title="Total Signages" bColor="#452983" value="138" />
      <Box title="To be revised" bColor="#ED8E37" value="16" color="#ED8E37" />
      <Box
        title="Accuracy last 7 days"
        bColor="#452983"
        value="73%"
        color="#452983"
      />
      <Button cName={"b3"} text="Upload" />
    </div>
  );
};

export default Boxes;
