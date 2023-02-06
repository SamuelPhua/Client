import React from "react";
import ContactDetails from "./ContactDetails";

const ContactInfo = () => {
  return (
    <div className="relative bg-orange rounded-3xl px-10 md:px-14">
      <div>
        <h1 className="font-permanentMarker text-darkBlueFont text-lg md:text-4xl pt-10 mb-2 md:mb-5">
          INFO
        </h1>
        <ContactDetails />
      </div>

      <img
        src="src/assets/imagesContactUs/Contact-Coral.png"
        alt="coral shape"
        className="w-28 h-36  absolute bottom-4 -right-[50px] rotate-[120deg]"
      ></img>
      <img
        src="src/assets/imagesContactUs/Contact-SignatureChocolateChipCookie.png"
        alt="Signature chocolate chip cookie"
        className="w-44 h-44 md:w-60 md:h-60 absolute -bottom-32 right-6" // TODO: responsive image size
      ></img>
    </div>
  );
};

export default ContactInfo;
