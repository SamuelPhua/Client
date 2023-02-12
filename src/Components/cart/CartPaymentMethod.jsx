import React from "react";

const CartPaymentMethod = () => {
  return (
    <div className="px-10 py-8 text-montserrat">
      {/* Customer email */}
      <div>
        <p className="text-slate-700 mb-2">Email</p>
        <p>custEmail@gmail.com.sg</p>
        <hr className="mb-6" />
      </div>

      {/* Select payment method */}
      <div>
        <p className="text-slate-700 mb-2">Select Payment Method</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="border-[1px] rounded-md py-2">
            <input
              type="radio"
              id="paynow"
              name="paymentMethod"
              className="ml-5 mr-2"
            ></input>
            <label htmlFor="paynow" className="text-base">
              Paynow
            </label>
          </div>
          <div className="border-[1px] rounded-md py-2">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              className="ml-5 mr-2"
            ></input>
            <label htmlFor="creditCard" className="text-base">
              Card
            </label>
          </div>
          <div className="border-[1px] rounded-md py-2">
            <input
              type="radio"
              id="alipay"
              name="paymentMethod"
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
          className=" text-white text-xxxs bg-orange focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-3 lg:w-fit px-8 mx-auto"
        >
          Waiting for payment...
        </button>
      </div>
    </div>
  );
};

export default CartPaymentMethod;
