import React from "react";
import logo from "../../Assets/Images/home-image/Flour Power Logo.png";
import cart from "../../Assets/Images/home-image/Add to Cart.png";

const Nav = () => {
  return (
    <div>
      {/* navigation bar */}
      <div className="flex justify-between  items-center py-12 absolute bg-white w-full  ">
        <div className="pl-16">
          <img width={196} src={logo} />
        </div>
        <div className="flex gap-8 items-center justify-center pr-16">
          <a className="font-2xl font-medium text-[#3670AD] pl-16 tracking-wider hover:underline-offset-8 hover:underline">
            Shop
          </a>
          <a className="font-2xl font-medium text-[#3670AD] pl-16 tracking-wider hover:underline-offset-8 hover:underline">
            About Us
          </a>
          <a className="font-2xl font-medium text-[#3670AD] pl-16 tracking-wider hover:underline-offset-8 hover:underline">
            Bulk Orders
          </a>
          <a className="font-2xl font-medium text-[#3670AD] pl-16 tracking-wider hover:underline-offset-8 hover:underline">
            Contuct Us
          </a>
          <img
            width={40}
            className=" text-[#3670AD] pl-4"
            src={cart}
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;