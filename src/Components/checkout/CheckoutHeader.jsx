import React from "react";
import { Link } from "react-router-dom";

const CheckoutHeader = () => {
  return (
    <div className="my-5">
      <Link to="/">
        <img
          src="src/assets/FlourPowerLogo.png"
          alt="logo"
          className="w-20 h-12 lg:w-36 lg:h-16"
        ></img>
      </Link>
    </div>
  );
};

export default CheckoutHeader;
