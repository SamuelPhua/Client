import React from "react";
import { Link } from "react-router-dom";

const CartHeader = () => {
  return (
    <div className="my-5">
      <Link to="/">
        <img
          src="src/assets/FlourPowerLogo.png"
          alt="logo"
          className="w-32 h-16 lg:w-44 lg:h-20"
        ></img>
      </Link>
    </div>
  );
};

export default CartHeader;
