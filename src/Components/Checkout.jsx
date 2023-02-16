import React, { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import CheckoutPage1 from "./checkout/CheckoutPage1";
import CheckoutPage2 from "./checkout/CheckoutPage2";
import CheckoutPage3 from "./checkout/CheckoutPage3";
import CheckoutPage4 from "./checkout/CheckoutPage4";
import DataContext from "./context/DataContext";
import { useNavigate } from "react-router-dom";

const Checkout = ({
  shoppingCart,
  setShoppingCart,
  setShowShipAlert,
  setShowNav,
  setShowFooter,
}) => {
  const { fetchData, data } = useFetch();
  const navigate = useNavigate();
  const [hasSubmitted, setHasSubmitted] = useState(false);

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

  const navigateToReceipt = () => {
    navigate("/receipt");
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

  function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }

  useEffect(() => {
    if (isObject(data)) {
      if (data?.status === "OK") {
        setShoppingCart([]);
        navigateToReceipt();
      } else {
        // alert(data.message);
        alert(data?.message);
      }
    }
  }, [data]);

  const handlePaymentConfirmation = (event) => {
    event.preventDefault();
    setCheckoutInput((prevCheckoutInput) => {
      return { ...prevCheckoutInput, cart: shoppingCart };
    });
    setHasSubmitted(true);
  };

  const handlePrevious = (event) => {
    setStep((prevStep) => {
      return prevStep - 1;
    });
  };

  const handleNext = (event) => {
    setStep((prevStep) => {
      return prevStep + 1;
    });
  };

  console.log("checkout step", step);
  const checkStep = (currStep) => {
    if (currStep === step) return true;
  };

  return (
    <DataContext.Provider
      value={{
        step,
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
          handlePrevious={handlePrevious}
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
