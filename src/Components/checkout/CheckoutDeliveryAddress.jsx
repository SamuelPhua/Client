import React, {useContext} from "react";
import DataContext from "../context/DataContext";

const CheckoutDeliveryAddress = () => {
  const { checkoutInput, handleInputChange } = useContext(DataContext);
  return (
    <div className=" text-darkBlueFont text-montserrat mb-10">
      <h1 className="tracking-widest text-2xl">Delivery Address</h1>
      <div className="flex flex-col">
        {/* Delivery country */}
        <select
          type="deliveryCountry"
          id="deliveryCountry"
          name="deliveryCountry"
          placeholder="Singapore"
          disabled
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-xxxs text-lightGrey/[0.75] placeholder:text-xxxs"
        >
          <option value="sg">Singapore</option>
        </select>

        <div className="flex flex-col md:flex-row">
          {/* First name */}
          <input
            type="text"
            id="custFirstName"
            name="custFirstName"
            placeholder="First Name"
            value={checkoutInput.custFirstName}
            onChange={handleInputChange}
            className="basis-1/2 mr-2 border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
          ></input>

          {/* Last name */}
          <input
            type="text"
            id="custLastName"
            name="custLastName"
            placeholder="LastName"
            value={checkoutInput.custLastName}
            onChange={handleInputChange}
            className="basis-1/2 ml-2 border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
          ></input>
        </div>

        {/* Delivery address */}
        <input
          type="text"
          id="deliveryAddress"
          name="deliveryAddress"
          placeholder="Address"
          value={checkoutInput.deliveryAddress}
          onChange={handleInputChange}
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>

        {/* Delivery apartment */}
        <input
          type="text"
          id="deliveryApartment"
          name="deliveryApartment"
          placeholder="Apartment, Suite, etc. (Optional)"
          value={checkoutInput.deliveryApartment}
          onChange={handleInputChange}
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>

        {/* Delivery postal */}
        <input
          type="text"
          id="deliveryPostal"
          name="deliveryPostal"
          placeholder="Postal Code"
          value={checkoutInput.deliveryPostal}
          onChange={handleInputChange}
          className="border-[1px] border-lightGrey/[0.5] focus:ring-4 focus:bg-slate-200 rounded-2xl px-3.5 py-2.5 mt-5 w-full text-base placeholder:text-xxxs"
        ></input>
      </div>

      {/* Remarks */}
      <p className="text-lightGrey/[0.75] text-smallNote mt-8">
        To make payment, you will be redirected to HitPay Payment Gateway to
        complete your purchase securely to Flour Power under our Registered
        Business Name "Seeteey Pte Ltd".
      </p>
    </div>
  );
};

export default CheckoutDeliveryAddress;
