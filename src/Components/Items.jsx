import React from "react";
import "../css/items.css";
import Item from "./Item";
const Items = () => {
  return (
    <div className="items">
      <div className="item-title">
        <span>Signages</span>
      </div>
      <div className="tab">
        <table>
          <tr className="header">
            <th>Reviewed ?</th>
            <th style={{ textAlign: "center" }}>Type</th>
            <th style={{ textAlign: "center" }}>Date / Timestamp</th>
            <th>Spotted at Location</th>
            <th>Company Details</th>
            <th>Services</th>
          </tr>
          <Item />
          <Item />
          <Item />
          <Item />
        </table>
      </div>
    </div>
  );
};

export default Items;
