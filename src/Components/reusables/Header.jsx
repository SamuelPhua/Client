import React from "react";
// import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = ({ shoppingCart }) => {
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
        <Link
          to="/shop"
          style={{ textDecoration: "none" }}
          className="mx-5 pb-2 border-b-2 border-transparent hover:border-orange transition duration-700 ease-in-out"
        >
          <span className="font-montserrat">SHOP</span>
        </Link>
        <Link
          to="/about-us"
          style={{ textDecoration: "none" }}
          className="mx-5 pb-2 border-b-2 border-transparent hover:border-orange transition duration-700 ease-in-out"
        >
          <span className="font-montserrat">ABOUT US</span>
        </Link>
        <Link
          to="bulk-orders"
          style={{ textDecoration: "none" }}
          className="mx-5 pb-2 border-b-2 border-transparent hover:border-orange transition duration-700 ease-in-out"
        >
          <span className="font-montserrat">BULK ORDERS</span>
        </Link>
        <Link
          to="contact-us"
          style={{ textDecoration: "none" }}
          className="mx-5 pb-2 border-b-2 border-transparent hover:border-orange transition duration-700 ease-in-out"
        >
          <span className="font-montserrat">CONTACT US</span>
        </Link>
        <Link
          to="/cart"
          style={{ textDecoration: "none" }}
          className="relative pl-10 text-2xl pb-3"
        >
          <span
            className={
              shoppingCart.length > 0
                ? "after:block after:w-3 after:h-3 after:bg-red-500 after:absolute after:rounded-[50%] after:bottom-3 after:left-14"
                : ""
            }
          >
            <AiOutlineShoppingCart className="text-2xl" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
