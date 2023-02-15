import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const CheckoutContact = () => {
  const { checkoutInput, handleInputChange } = useContext(DataContext);
  return (
    <div className=" text-darkBlueFont text-montserrat mb-6">
      <h1 className="tracking-widest text-2xl">Contact Information</h1>
      <div className="flex flex-col">
        {/* Phone */}
        <input
          type="tel"
          id="phone"
          name="phone"
          value={checkoutInput.phone}
          onChange={handleInputChange}
          placeholder="Your Phone Number"
          className="border-[1px] border-lightGrey/[0.5] focus:ring-2 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>

        {/* Email */}
        <input
          type="email"
          id="email"
          name="email"
          value={checkoutInput.email}
          onChange={handleInputChange}
          placeholder="Your Email Address"
          className="border-[1px] border-lightGrey/[0.5] focus:ring-2 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>

        {/* Subscription checkbox */}
        <div className="flex flex-row mt-5">
          <input
            type="checkbox"
            id="subscription"
            name="subscription"
            value={checkoutInput.subscription}
            onChange={handleInputChange}
            className="mr-2"
          ></input>
          <label
            htmlFor="subscription"
            className="text-lightGrey/[0.75] text-xxxs"
          >
            Email me with news and offer.
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContact;
