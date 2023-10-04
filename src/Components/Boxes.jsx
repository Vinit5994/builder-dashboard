import React from "react";
import Box from "./Box";

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
    </div>
  );
};

export default Boxes;
