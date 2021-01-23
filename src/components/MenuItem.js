import React from "react";
import "./MenuItem.css";

const MenuItem = ({ id, title, category, price, img, desc }) => {
  return (
    <div className="menu-item">
      <img className="img" src={img} alt="img" />
      <div className="info">
        <div className="title-price">
          <h2 className="title">{title}</h2>
          <h3 className="price">${price}</h3>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
