import React, { useEffect } from "react";
import CartHeader from "./cart/CartHeader";
import CartProgressBar from "./cart/CartProgressBar";
import CartContactInfo from "./cart/CartContactInfo";
import CartDeliveryMethod from "./cart/CartDeliveryMethod";
import CartDeliveryAddress from "./cart/CartDeliveryAddress";
import CartFooter from "./cart/CartFooter";
import CartTotal from "./cart/CartTotal";

const Shipping = ({ setShowShipAlert, setShowNav, setShowFooter }) => {
  useEffect(() => {
    setShowShipAlert(false);
    setShowNav(false);
    setShowFooter(false);
  });

  return (
    <div className="motion-safe:animate-fadeIn">
      <div className="grid grid-cols-3 h-screen">
        <div className="relative col-span-2 mx-36">
          <CartHeader />
          <CartProgressBar />
          <form>
            <CartDeliveryAddress />
            <button
              type="button"
              id="cartDeliveryNext"
              className=" text-white text-xxxs bg-orange focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-3 lg:w-fit px-8 mx-auto"
            >
              CONTINUE TO PAYMENT
            </button>
          </form>
          {/* <form>
            <CartContactInfo />
            <CartDeliveryMethod />
            <button
              type="button"
              id="cartContactNext"
              className=" text-white text-xxxs bg-orange focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-3 lg:w-fit px-8 mx-auto"
            >
              NEXT
            </button>
          </form> */}
          <CartFooter />
        </div>
        <div className="col-span-1">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
