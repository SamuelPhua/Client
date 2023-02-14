import React from "react";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CheckoutDeliveryAddress from "./CheckoutDeliveryAddress";
import CheckoutFooter from "./CheckoutFooter";
import CheckoutCartTotal from "./CheckoutCartTotal";
import { MdArrowBackIosNew } from "react-icons/md";

const CheckoutPage2 = ({
  setShowShipAlert,
  setShowNav,
  setShowFooter,
  handlePrevious,
  handleNext,
}) => {
  return (
    <div>
      <div className="motion-safe:animate-fadeIn">
        <div className="grid grid-cols-3 h-screen">
          {/* Page header */}
          <div className="relative col-span-2 mx-36">
            <CheckoutHeader />
            <CheckoutProgressBar />

            {/* Checkout form - Delivery address */}
            <form>
              <CheckoutDeliveryAddress />
              <div
                className="flex flex-row justify-between items-center"
                // onClick={handlePrevious}
              >
                <div
                  className="flex flex-row text-darkBlueFont space-x-4 items-center cursor-pointer"
                  onClick={handlePrevious}
                >
                  <MdArrowBackIosNew />
                  <p>Back to previous</p>
                </div>
                <button
                  type="button"
                  id="cartDeliveryNext"
                  onClick={handleNext}
                  className=" text-white text-xxxs bg-orange focus:outline-none focus:ring-2 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-3 lg:w-fit px-8"
                >
                  CONTINUE TO PAYMENT
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

export default CheckoutPage2;
