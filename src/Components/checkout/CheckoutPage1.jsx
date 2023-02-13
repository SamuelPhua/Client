import React, { useState, useEffect } from "react";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CheckoutContact from "./CheckoutContact";
import CheckoutDeliveryMethod from "./CheckoutDeliveryMethod";
import CheckoutFooter from "./CheckoutFooter";
import CheckoutCartTotal from "./CheckoutCartTotal";

const CheckoutPage1 = ({ setShowShipAlert, setShowNav, setShowFooter }) => {
  useEffect(() => {
    setShowShipAlert(false);
    setShowNav(false);
    setShowFooter(false);
  }, []);
  return (
    <div>
      <div className="motion-safe:animate-fadeIn">
        <div className="grid grid-cols-3 h-screen">
          {/* Page header */}
          <div className="relative col-span-2 mx-36">
            <CheckoutHeader />
            <CheckoutProgressBar />

            {/* Checkout form - Contact Info & Delivery method */}
            <form>
              <CheckoutContact />
              <CheckoutDeliveryMethod />
              <button
                type="button"
                id="cartContactNext"
                className=" text-white text-xxxs bg-orange focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-3 lg:w-fit px-8 mx-auto"
              >
                NEXT
              </button>
            </form>

            {/* Page footer */}
            <CheckoutFooter />
          </div>

          {/* Display cart */}
          <div className="col-span-1">
            <CheckoutCartTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage1;
