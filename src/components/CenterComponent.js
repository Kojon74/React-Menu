import React, { useState } from "react";
import MenuItem from "./MenuItem";
import menuItems from "../data";
import "./CenterComponent.css";

const CenterComponent = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="center-component">
      <h1 className="title">
        Our Menu
        <div className="underline" />
      </h1>
      <div className="button-container">
        <button className="btn" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="btn" onClick={() => setFilter("breakfast")}>
          Breakfast
        </button>
        <button className="btn" onClick={() => setFilter("lunch")}>
          Lunch
        </button>
        <button className="btn" onClick={() => setFilter("shakes")}>
          Shakes
        </button>
      </div>
      <div className="menu-container">
        {menuItems
          .filter(
            (menuItem) => filter === "all" || menuItem.category === filter
          )
          .map((menuItem) => {
            return <MenuItem key={menuItem.id} {...menuItem} />;
          })}
      </div>
    </div>
  );
};

export default CenterComponent;
