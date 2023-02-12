import React from "react";
// import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header text-darkBlueFont text-montserrat text-xxs flex flex-row justify-around my-5">
      <Link to="/">
        <div>
          <img
            src="src/assets/FlourPowerLogo.png"
            alt="logo"
            className="w-32 h-16 lg:w-44 lg:h-20"
          ></img>
        </div>
      </Link>

      <div className="headerLeft flex flex-row justify-between items-center tracking-widest">
        <Link to="/shop" style={{ textDecoration: "none" }} className="pl-10">
          <span>SHOP</span>
        </Link>
        <Link
          to="/about-us"
          style={{ textDecoration: "none" }}
          className="pl-10"
        >
          <span>ABOUT US</span>
        </Link>
        <Link
          to="/bulk-orders"
          style={{ textDecoration: "none" }}
          className="pl-10"
        >
          <span>BULK ORDERS</span>
        </Link>
        <Link
          to="contact-us"
          style={{ textDecoration: "none" }}
          className="pl-10"
        >
          <span>CONTACT US</span>
        </Link>
        <Link
          to="/cart"
          style={{ textDecoration: "none" }}
          className="pl-10 text-2xl"
        >
          <span>
            <AiOutlineShoppingCart />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
