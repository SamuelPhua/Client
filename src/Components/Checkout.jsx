import React, { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";

import CartHeader from "./cart/CartHeader";
import CartProgressBar from "./cart/CartProgressBar";
import CartContactInfo from "./cart/CartContactInfo";
import CartDeliveryMethod from "./cart/CartDeliveryMethod";
import CartDeliveryAddress from "./cart/CartDeliveryAddress";
import CartFooter from "./cart/CartFooter";
import CartTotal from "./cart/CartTotal";

const Shipping = ({ setShowShipAlert, setShowNav, setShowFooter }) => {
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
