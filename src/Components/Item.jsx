import React from "react";
import "../css/items.css";
const Item = () => {
  return (
    <tr className="card">
      <td width={"1%"}>
        <div className="section">
          <div className="item-btns">
            <button className="i-btn i-b1">No</button>
            <button className="i-btn i-b2">Edit</button>
          </div>
          <div className="item-img">
            <img src="../../card.png" alt="" />
          </div>
        </div>
      </td>
      <td width={"1%"}>
        <div className="type">
          <div className="t-img">
            <img src="../../group1.png" alt="" />
          </div>
          <div className="t-desc">
            <span>Truck/Van</span>
          </div>
        </div>
      </td>
      <td>
        <div className="time-date">
          <div>
            <div className="date">
              <span>May 26, 2019</span>
            </div>
            <div className="time">
              <span>6:30 PM</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="location">
          <div>
            <div className="l-desc">
              <span>725 East 96th Street Brooklyn, NY 11221</span>
            </div>
            <div className="l-point">
              <span>40.7708789,-73.9872223</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="c-details">
          <div className="cname">
            <span>spanB. P. Elevator Company,212-807-8200</span>
          </div>
          <div className="c-web">Address,Website</div>
        </div>
      </td>
      <td>
        <div className="services">
          <span>Iron, Steel, Banisters, Security Doors, Gates</span>
        </div>
      </td>
    </tr>
  );
};

export default Item;
