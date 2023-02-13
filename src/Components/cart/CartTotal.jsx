import React from "react";
import CartItem from "./CartItem";

const CartTotal = () => {
  let shoppingCart = [
    {
      name: "Chocolate Chip Cookies",
      weight: "100g",
      packaging: "Kraft Pouch",
      price: 5.8,
      quantity: 2,
      itemTotal: 11.6,
    },
    {
      name: "Seasalt Chocolate Chip Cookies",
      weight: "150g",
      packaging: "Bottle",
      price: 8.3,
      quantity: 2,
      itemTotal: 16.6,
    },
    {
      name: "Seasalt Chocolate Chip Cookies",
      weight: "150g",
      packaging: "Bottle",
      price: 8.3,
      quantity: 2,
      itemTotal: 16.6,
    },
  ];

  // calculate cartTotal
  const sumCartTotal = (shoppingCart) => {
    let sum = shoppingCart.reduce((cartTotal, item) => {
      return cartTotal + item.itemTotal;
    }, 0);

    return (Math.round(sum * 100) / 100).toFixed(2);
  };

  let cartSum = sumCartTotal(shoppingCart);

  return (
    <div className="bg-lightOrange h-full text-montserrat text-xxxs px-4 pt-16">
      {/* Return individual cart item */}
      {shoppingCart.map((item, index) => {
        return <CartItem {...item} key={index} />;
      })}

      {/* Calculate checkout total */}
      <div className="flex flex-row space-x-4 justify-between items-center  border-t-[1px] border-t-lightGrey/[.5] pt-5 px-4">
        <input
          type="text"
          id="discountCode"
          name="discountCode"
          placeholder="Gift card or discount code"
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-md px-3.5 py-2.5 w-full text-base placeholder:text-xxxs"
        />
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
        <p>$12.00</p>
      </div>

      {/* Checkout total */}
      <div className="flex flex-row justify-between px-4 my-5 border-t-[1px] border-t-lightGrey/[.5] py-5">
        <p>Total:</p>
        <p>$17.80</p>
      </div>
    </div>
  );
};

export default CartTotal;
