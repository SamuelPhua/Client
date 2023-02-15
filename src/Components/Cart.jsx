import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonOrange from "./reusables/ButtonOrange";
import CartProduct from "./CartProduct";
import { groupShoppingCart } from "../helper/groupShoppingCart";

const Cart = ({
  shoppingCart,
  setShowShipAlert,
  setShowNav,
  setShowFooter,
}) => {
  useEffect(() => {
    setShowShipAlert(true);
    setShowNav(true);
    setShowFooter(true);
  }, []);

  // let groupedCart = groupShoppingCart(shoppingCart);

  // Navigate to the checkout page
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  // Total price of all the added items
  const sumCartTotal = (shoppingCart) => {
    let sum = shoppingCart.reduce((cartTotal, item) => {
      return cartTotal + item.itemTotal;
    }, 0);

    return sum.toFixed(2);
  };

  let cartSum = sumCartTotal(shoppingCart);

  return (
    <div className="motion-safe:animate-fadeIn">
      {/* Start of CSS for View Cart with Items */}
      <div className="relative h-[15rem] w-full bg-cover bg-center">
        <div className="absolute text-lg font-permanentMarker text-darkBlue  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Cart
        </div>
      </div>

      {/* First Row */}
      <div className="mt-[-2rem] w-11/12 grid grid-cols-7 ml-20 p-6 border-b-2 border-[#999999] ">
        <div className="col-start-1 flex justify-start items-center">
          <div className="text-[2.3rem] font-montserrat text-lightBlue">
            Product
          </div>
        </div>
        <div className="col-start-5 flex justify-center items-center">
          <div className="text-[2.3rem] font-montserrat text-lightBlue">
            Qty
          </div>
        </div>
        <div className="col-start-7 flex justify-end items-center">
          <div className="text-[2.3rem] font-montserrat text-lightBlue">
            Total
          </div>
        </div>
      </div>

      {/* Second Row */}
      {shoppingCart.map((product, index) => {
        return <CartProduct key={index} {...product} index={index} />;
      })}

      {/* Third Row */}
      <div className="w-11/12 grid grid-cols-7 p-10">
        <div className="col-start-1 col-end-9 flex justify-start items-center ml-10">
          <div className="text-[1.2rem] font-montserrat text-lightBlue">
            Note: As our Bakes are baked to order with love, please allow 3-5
            days buffer for both delivery or self collection.
          </div>
        </div>
      </div>
      {/* Fourth Row */}
      <div className="w-11/12 grid grid-cols-7 ml-20 p-10">
        <div className="col-start-7 flex justify-end items-center">
          <div className="text-[1.3rem] font-montserrat text-lightBlue font-bold mt-[-5rem]">
            {cartSum}
          </div>
        </div>
      </div>

      {/* Last Row */}
      <div className="w-11/12 grid grid-cols-7 ml-20 p-10">
        <div className="col-start-7 flex justify-end items-center mr-[-5.8rem] mt-[-6.5rem]">
          <ButtonOrange
            displayName="CHECKOUT"
            onClick={navigateToCheckout}
            disabled={shoppingCart.length === 0 ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
