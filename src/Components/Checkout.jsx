import React, { useState, useEffect, useContext } from "react";
import useFetch from "../customHooks/useFetch";

import CheckoutHeader from "./checkout/CheckoutHeader";
import CheckoutProgressBar from "./checkout/CheckoutProgressBar";
import CheckoutContact from "./checkout/CheckoutContact";
import CheckoutDeliveryMethod from "./checkout/CheckoutDeliveryMethod";
import CheckoutDeliveryAddress from "./checkout/CheckoutDeliveryAddress";
import CheckoutFooter from "./checkout/CheckoutFooter";
import CheckoutCartTotal from "./checkout/CheckoutCartTotal";
import CheckoutPaymentTotal from "./checkout/CheckoutPaymentTotal";
import CheckoutPaymentMethod from "./checkout/CheckoutPaymentMethod";

import CheckoutPage1 from "./checkout/CheckoutPage1";
import CheckoutPage2 from "./checkout/CheckoutPage2";
import CheckoutPage3 from "./checkout/CheckoutPage3";
import CheckoutPage4 from "./checkout/CheckoutPage4";

import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const Checkout = ({
  shoppingCart,
  setShowShipAlert,
  setShowNav,
  setShowFooter,
}) => {
  const { fetchData, isLoading, data, error } = useFetch();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  // const [checkoutInputs, setCheckoutInputs] = useState({
  //   firstName: "Mervin",
  //   lastName: "Ng",
  //   email: "mervin.test@mail.com",
  //   phone: "+65 4321 0987",
  //   deliveryMethod: "express",
  //   address: "General assembly Road",
  //   apartment: "20-02",
  //   postalCode: "123456",
  //   deliveryCountry: "Singapore",
  //   orderCurrency: "SGD",
  //   discountCode: "123456",
  //   deliveryCharge: "1.00",
  //   checkoutAmount: "60.00",
  //   paymentMethod: "Paylah",
  //   paymentAmount: "61.00",
  //   orderStatus: "confirmed",
  // cart: [
  //   {
  //     name: "Chocolate Chip Cookies",
  //     weight: "100g",
  //     packaging: "Kraft pouch",
  //     price: "5.80",
  //     quantity: "1",
  //     itemTotal: "5.80",
  //   },
  //     {
  //       name: "Macademia Chocolate Cookies",
  //       weight: "200g",
  //       packaging: "Bottle",
  //       price: "9.30",
  //       quantity: "2",
  //       itemTotal: "18.60",
  //     },
  //   ],
  // });

  useEffect(() => {
    // setShowShipAlert(false);
    // setShowNav(false);
    // setShowFooter(false);
  }, []);

  const [step, setStep] = useState(1);
  const [checkoutInput, setCheckoutInput] = useState({
    phone: "",
    email: "",
    subscription: "",
    deliveryMethod: "delivery",
    deliveryCharge: 12,
    deliveryCountry: "Singapore",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    postalCode: "",
    paymentMethod: "paynow",
    orderCurrency: "SGD",
    discountCode: "",
    checkoutAmount: "",
    paymentAmount: "",
    orderStatus: "O",
    // TODO: Pending cart and payment method page
  });

  // Control form input
  const handleInputChange = (e) => {
    setCheckoutInput((prevState) => {
      console.log("input change", checkoutInput);
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // PUT: when checkout form is submitted
  useEffect(() => {
    // call PUT API here
    console.log("useEffect", checkoutInput);
    const fetchURL = "http://127.0.0.1:5001/checkout/createOrder";
    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(checkoutInput),
    };

    if (hasSubmitted) fetchData(fetchURL, fetchOptions);
  }, [hasSubmitted]);

  const handlePaymentConfirmation = (event) => {
    event.preventDefault();
    setCheckoutInput((prevCheckoutInput) => {
      return { ...prevCheckoutInput, cart: shoppingCart };
    });
    setHasSubmitted(true);
  };

  const handleNext = (event) => {
    setStep((prevStep) => {
      return prevStep + 1;
    });
  };

  const checkStep = (currStep) => {
    if (currStep === step) return true;
  };

  return (
    <DataContext.Provider
      value={{
        checkoutInput,
        handleInputChange,
        shoppingCart,
        handlePaymentConfirmation,
      }}
    >
      {checkStep(1) && (
        <CheckoutPage1
          setShowShipAlert={setShowShipAlert}
          setShowNav={setShowNav}
          setShowFooter={setShowFooter}
          handleNext={handleNext}
        />
      )}
      {checkStep(2) && (
        <CheckoutPage2
          setShowShipAlert={setShowShipAlert}
          setShowNav={setShowNav}
          setShowFooter={setShowFooter}
          handleNext={handleNext}
        />
      )}
      {checkStep(3) && (
        <CheckoutPage3
          setShowShipAlert={setShowShipAlert}
          setShowNav={setShowNav}
          setShowFooter={setShowFooter}
          handleNext={handleNext}
        />
      )}
      {checkStep(4) && <CheckoutPage4 />}
    </DataContext.Provider>
  );
};

export default Checkout;
