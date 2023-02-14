import React, { useEffect, useContext } from "react";
import oven from "../../assets/imagesCheckout/OrderConfirmation-Oven.gif";
import DataContext from "../context/DataContext";

const CheckoutReceipt = () => {
  const { setShowShipAlert, setShowNav, setShowFooter } =
    useContext(DataContext);
  useEffect(() => {
    setShowShipAlert(true);
    setShowNav(true);
    setShowFooter(true);
  }, []);
  return (
    <div className="motion-safe:animate-fadeIn font-montserrat text-lightBlue text-center tracking-wide ">
      <div className="mt-10 mb-10 text-2xl font-bold">
        We've Received Your Order!
      </div>
      <div>
        An email with details of your order (#1025) will be sent to you.
      </div>
      <div className="mb-10">
        Please allow up to 3-5 days (excluding weekends, holidays) lead-time as
        our products are all bake to order with love.
      </div>
      <div>
        <img className="mx-auto mb-10" src={oven} />
      </div>
      <div>Thank you and we are excited for you to enjoy our bakes!</div>
    </div>
  );
};

export default CheckoutReceipt;
