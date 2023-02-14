import React from "react";

const CheckoutCartItem = ({
  name,
  weight,
  packaging,
  price,
  quantity,
  itemTotal,
}) => {
  return (
    <div className="flex flex-row pb-8 px-3">
      <img
        src="src/assets/imagesAboutUs/CartPage-KraftPouch.jpg"
        alt={name}
        className="h-24 w-24 mr-2"
      ></img>
      <div className="flex-grow">
        <p>{name}</p>
        <div className="text-lightGrey/[.5] flex flex-row justify-between">
          <p>
            {packaging} {weight}
          </p>
          <p>${(Math.round(itemTotal * 100) / 100).toFixed(2)}</p>
        </div>
        <p className="text-lightGrey/[.5]">Qty: {quantity}</p>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
