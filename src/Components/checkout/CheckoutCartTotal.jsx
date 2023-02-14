import React, { useContext } from "react";
import CheckoutCartItem from "./CheckoutCartItem";
import DataContext from "../context/DataContext";

// TODO: To prop down - 1. shopping cart array   2. delivery option
// define delivery charge based on delivery option.
const CheckoutCartTotal = () => {
  const { shoppingCart, checkoutInput } = useContext(DataContext);
  let deliveryCharge = checkoutInput.deliveryMethod === "delivery" ? 12 : 0;

  // fx: calculate cartTotal
  const sumCartTotal = (shoppingCart) => {
    let sum = shoppingCart.reduce((cartTotal, item) => {
      return cartTotal + item.itemTotal;
    }, 0);

    return (Math.round(sum * 100) / 100).toFixed(2);
  };

  let cartSum = sumCartTotal(shoppingCart);
  let deliverySum = Math.round((deliveryCharge * 100) / 100).toFixed(2);
  let totalSum = (
    Math.round((parseFloat(cartSum) + parseFloat(deliverySum)) * 100) / 100
  ).toFixed(2);

  return (
    <div className="bg-lightOrange h-full text-montserrat text-xxxs px-4 pt-16">
      {/* Return individual cart item */}
      {shoppingCart.map((item, index) => {
        return <CheckoutCartItem {...item} key={index} />;
      })}

      {/* Gift card & discount code */}
      <div className="flex flex-row space-x-4 justify-between items-center  border-t-[1px] border-t-lightGrey/[.5] pt-5 px-4">
        <input
          type="text"
          id="discountCode"
          name="discountCode"
          placeholder="Gift card or discount code"
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-md px-3.5 py-2.5 w-full text-base placeholder:text-xxxs"
        />

        {/* No logic defined for now. Discount can be by dollar amount or discount percentage */}
        <button
          type="button"
          className=" text-white text-xxxs bg-lightGrey/[.5] focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full lg:w-fit py-2.5 px-8"
        >
          Apply
        </button>
      </div>

      {/* Cart total */}
      <div className="flex flex-row justify-between mx-4 my-5">
        <p>Cart:</p>
        <p>${cartSum}</p>
      </div>

      {/* Delivery charges */}
      <div className="flex flex-row justify-between mx-4 my-5">
        <p>Delivery:</p>
        <p>${deliverySum}</p>
      </div>

      {/* Checkout total */}
      <div className="flex flex-row justify-between px-4 my-5 border-t-[1px] border-t-lightGrey/[.5] py-5">
        <p>Total:</p>
        <p>${totalSum}</p>
      </div>
    </div>
  );
};

export default CheckoutCartTotal;
