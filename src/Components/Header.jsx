import React from "react";
// import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <span>Shop</span>
        </Link>
        <Link to="/about-us" style={{ textDecoration: "none" }}>
          <span>About us</span>
        </Link>
        <Link to="/bulk-orders" style={{ textDecoration: "none" }}>
          <span>Bulk Orders</span>
        </Link>
        <Link to="/contact-us" style={{ textDecoration: "none" }}>
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
