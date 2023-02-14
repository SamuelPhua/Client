import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const CheckoutPaymentMethod = () => {
  const { checkoutInput, handleInputChange, handlePaymentConfirmation } =
    useContext(DataContext);
  return (
    <div className="px-10 py-8 text-montserrat">
      {/* Customer email */}
      <div>
        <p className="text-slate-700 mb-2">Email</p>
        <p>{checkoutInput.custEmail}</p>
        <hr className="mb-6" />
      </div>

      {/* Select payment method */}
      <div>
        <p className="text-slate-700 mb-2">Select Payment Method</p>
        <div className="grid grid-cols-3 gap-2">
          {/* Paynow */}
          <div
            className={`border-[1px] rounded-md py-2 ${
              checkoutInput.paymentMethod === "paynow" ? "bg-gray-300" : ""
            }`}
          >
            <input
              type="radio"
              id="paynow"
              name="paymentMethod"
              value="paynow"
              checked={checkoutInput.paymentMethod === "paynow"}
              onChange={handleInputChange}
              className="ml-5 mr-2"
            ></input>
            <label htmlFor="paynow" className="text-base">
              Paynow
            </label>
          </div>

          {/* Credit card */}
          <div
            className={`border-[1px] rounded-md py-2 ${
              checkoutInput.paymentMethod === "creditCard" ? "bg-gray-300" : ""
            }`}
          >
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={checkoutInput.paymentMethod === "creditCard"}
              onChange={handleInputChange}
              className="ml-5 mr-2"
            ></input>
            <label htmlFor="creditCard" className="text-base">
              Card
            </label>
          </div>

          {/* Alipay */}
          <div
            className={`border-[1px] rounded-md py-2 ${
              checkoutInput.paymentMethod === "alipay" ? "bg-gray-300" : ""
            }`}
          >
            <input
              type="radio"
              id="alipay"
              name="paymentMethod"
              value="alipay"
              checked={checkoutInput.paymentMethod === "alipay"}
              onChange={handleInputChange}
              className="ml-5 mr-2"
            ></input>
            <label htmlFor="alipay" className="text-base">
              Alipay
            </label>
          </div>
        </div>
      </div>

      {/* Paynow QR and static messages */}
      <img
        src="src/assets/imagesCheckout/PaymentHitpay-QR.png"
        alt="QR Code"
        className="mx-auto my-4"
      ></img>

      <div className="text-center text-xxxs">
        <p>Scan above QR code image using your internet banking app</p>
        <img
          src="src/assets/imagesCheckout/PaymentBankApp.png"
          alt="bank-apps"
          className="mx-auto my-2"
        ></img>
        <p>
          Payment will be made to{" "}
          <span className="font-semibold">
            "HITPAY PAYMENTS - CUSTOMERS' ACCOUNT"
          </span>{" "}
          on behalf of <span className="font-bold">"Seeteey Pte Ltd"</span>
        </p>

        {/* Button does nothing */}
        <button
          type="button"
          className=" text-white text-xxxs bg-orange focus:outline-none hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-3 lg:w-fit px-8 mx-auto"
          onClick={handlePaymentConfirmation}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CheckoutPaymentMethod;
