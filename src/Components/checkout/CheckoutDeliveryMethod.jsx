import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const CheckoutDeliveryMethod = () => {
  const { checkoutInput, handleInputChange } = useContext(DataContext);
  return (
    <div className="text-darkBlueFont text-montserrat">
      <h1 className="tracking-normal text-2xl">Delivery Methods</h1>
      <section className="text-lightGrey/[0.75]">
        {/* Option: Self-pickup */}
        <div className="px-3.5 pt-5">
          <input
            type="radio"
            id="selfPickUp"
            name="deliveryMethod"
            value="selfPickUp"
            checked={checkoutInput.deliveryMethod === "selfPickUp"}
            onChange={handleInputChange}
            className="ml-5 mr-2"
          ></input>
          <label htmlFor="selfPickUp" className="text-xxs">
            Self Pickup (Wednesday, 10am - 4pm)
          </label>
        </div>

        {/* Option: Delivery */}
        <div className="px-3.5 pt-5">
          <input
            type="radio"
            id="delivery"
            name="deliveryMethod"
            value="delivery"
            checked={checkoutInput.deliveryMethod === "delivery"}
            onChange={handleInputChange}
            className="ml-5 mr-2"
          ></input>
          <label htmlFor="delivery" className="text-xxs">
            Delivery ($12.00)
          </label>
        </div>

        {/* Remarks */}
        <p className="text-xxxs pt-5">
          As our Bakes are bake to order with love, please allow 3-5 days buffer
          for both delivery or self collection.
        </p>
      </section>
    </div>
  );
};

export default CheckoutDeliveryMethod;
