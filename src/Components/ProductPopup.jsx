import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonOrange from "./reusables/ButtonOrange";

const ProductPopup = ({ productImage, name, packaging, weight, quantity }) => {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <div className="underline underline-offset-8">
        Just added to your cart
      </div>
      <div className="flex">
        <div className="flex-none">
          <img className="w-48 h-48" src={productImage} />
        </div>

        <div className="flex-auto-64">
          <div className="font-montserrat text-[1.2rem] font-bold">{name}</div>
          <div className="font-montserrat text-[1.2rem]">
            `{packaging} {weight}`
          </div>
          <div className="font-montserrat text-[1.2rem]">{quantity}</div>
        </div>
      </div>
      <div className="w-6/6 h-2/3 bg-white p-10">
        <ButtonOrange displayName="VIEW CART (1)!" onClick={navigateToCart} />
      </div>
    </div>
  );
};

export default ProductPopup;
