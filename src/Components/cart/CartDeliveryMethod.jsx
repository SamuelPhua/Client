import React from "react";

const CartDeliveryMethod = () => {
  return (
    <div className="text-darkBlueFont text-montserrat">
      <h1 className="tracking-widest text-3xl">Delivery Methods</h1>
      <section className="text-lightGrey/[0.75]">
        <div className="px-3.5 pt-5">
          <input
            type="radio"
            id="selfPickUp"
            name="deliveryMethod"
            className="ml-5 mr-2"
          ></input>
          <label htmlFor="selfPickUp" className="text-base">
            Self Pickup (Wednesday, 10am - 4pm)
          </label>
        </div>
        <div className="px-3.5 pt-5">
          <input
            type="radio"
            id="delivery"
            name="deliveryMethod"
            className="ml-5 mr-2"
          ></input>
          <label htmlFor="delivery" className="text-base">
            Delivery ($12.00)
          </label>
        </div>
        <p className="text-xxxs pt-5">
          As our Bakes are bake to order with love, please allow 3-5 days buffer
          for both delivery or self collection.
        </p>
      </section>
    </div>
  );
};

export default CartDeliveryMethod;
