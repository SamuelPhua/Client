import React, { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";

import CartHeader from "./cart/CartHeader";
import CartProgressBar from "./cart/CartProgressBar";
import CartContactInfo from "./cart/CartContactInfo";
import CartDeliveryMethod from "./cart/CartDeliveryMethod";
import CartDeliveryAddress from "./cart/CartDeliveryAddress";
import CartFooter from "./cart/CartFooter";
import CartTotal from "./cart/CartTotal";
import CartPaymentTotal from "./cart/CartPaymentTotal";
import CartPaymentMethod from "./cart/CartPaymentMethod";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Checkout = ({ setShowShipAlert, setShowNav, setShowFooter }) => {
  const { fetchData, isLoading, data, error } = useFetch();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [checkoutInputs, setCheckoutInputs] = useState({
    firstName: "Mervin",
    lastName: "Ng",
    email: "mervin.test@mail.com",
    phone: "+65 4321 0987",
    deliveryMethod: "express",
    address: "General assembly Road",
    apartment: "20-02",
    postalCode: "123456",
    deliveryCountry: "Singapore",
    orderCurrency: "SGD",
    discountCode: "123456",
    deliveryCharge: "1.00",
    checkoutAmount: "60.00",
    paymentMethod: "Paylah",
    paymentAmount: "61.00",
    orderStatus: "confirmed",
    cart: [
      {
        name: "Chocolate Chip Cookies",
        weight: "100g",
        packaging: "Kraft pouch",
        price: "5.80",
        quantity: "1",
        itemTotal: "5.80",
      },
      {
        name: "Macademia Chocolate Cookies",
        weight: "200g",
        packaging: "Bottle",
        price: "9.30",
        quantity: "2",
        itemTotal: "18.60",
      },
    ],
  });

  useEffect(() => {
    setShowShipAlert(false);
    setShowNav(false);
    setShowFooter(false);
  }, []);

  const [step, setStep] = useState(1);
  const [checkoutInput, setCheckoutInput] = useState({
    custPhone: "",
    custEmail: "",
    subscription: "",
    deliveryMethod: "",
    deliveryCountry: "",
    custFirstName: "",
    custLastName: "",
    deliveryAddress: "",
    deliveryApartment: "",
    deliveryPostal: "",
    // TODO: Pending cart and payment method page
  });

  // PUT: when checkout form is submitted
  useEffect(() => {
    // call PUT API here
    const fetchURL = "http://127.0.0.1:5001/checkout/createOrder";
    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: Json.stringify(checkoutInputs),
    };

    if (hasSubmitted) fetchData(fetchURL, fetchOptions);
  }, [hasSubmitted]);

  const handleCheckoutSubmission = (event) => {
    event.preventDefault();
    setHasSubmitted(true);
  };

  return (
    // First two checkout pages

    <div className="motion-safe:animate-fadeIn">
      <div className="grid grid-cols-3 h-screen">
        <div className="relative col-span-2 mx-36">
          <CartHeader />
          <CartProgressBar />
          {/* First checkout page */}
          <form>
            <CartContactInfo />
            <CartDeliveryMethod />
            <button
              type="button"
              id="cartContactNext"
              className=" text-white text-xxxs bg-orange focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-3 lg:w-fit px-8 mx-auto"
            >
              NEXT
            </button>
          </form>

          {/* Second checkout page */}
          {/* <form>
            <CartDeliveryAddress />
            <button
              type="button"
              id="cartDeliveryNext"
              className=" text-white text-xxxs bg-orange focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-3 lg:w-fit px-8 mx-auto"
            >
              CONTINUE TO PAYMENT
            </button>
          </form> */}

          <CartFooter />
        </div>
        <div className="col-span-1">
          <CartTotal />
        </div>
      </div>
    </div>

    // Third checkout page - Payment
    // <div className="grid grid-cols-3 h-screen">
    //   <div className="relative px-auto bg-darkOrange flex flex-col ">
    //     <Link
    //       to="/cart"
    //       className="flex flex-row justify-start items-center pl-5 py-8"
    //     >
    //       <BiArrowBack className="stroke-2 mr-2 cursor-pointer" />
    //       <span className="cursor-pointer">Back to merchant</span>
    //     </Link>

    //     <div className="text-center flex justify-center absolute top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4">
    //       <CartPaymentTotal />
    //     </div>
    //   </div>
    //   <div className="col-span-2">
    //     <CartPaymentMethod />
    //   </div>
    // </div>
  );
};

export default Checkout;
