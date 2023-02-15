import React, { useState, useEffect } from "react";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CheckoutContact from "./CheckoutContact";
import CheckoutDeliveryMethod from "./CheckoutDeliveryMethod";
import CheckoutFooter from "./CheckoutFooter";
import CheckoutCartTotal from "./CheckoutCartTotal";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const CheckoutPage1 = ({
  setShowShipAlert,
  setShowNav,
  setShowFooter,
  handleNext,
}) => {
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
              <div className="flex flex-row justify-between items-center mt-5 mb-5 md:mt-10">
                <Link to="/cart">
                  <div className="flex flex-row items-center space-x-4 text-darkBlueFont">
                    <MdArrowBackIosNew />
                    <p>Return to cart</p>
                  </div>
                </Link>
                <button
                  type="button"
                  id="cartContactNext"
                  onClick={handleNext}
                  className=" text-white text-xxxs bg-orange focus:outline-none  hover:bg-darkOrange focus:bg-darkOrange rounded-full  py-3 lg:w-fit px-8"
                >
                  NEXT
                </button>
              </div>
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
