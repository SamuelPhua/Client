import React from "react";
import ContactForm from "./contactUs/ContactForm";
import ContactInfo from "./contactUs/ContactInfo";
import ContactLocationMap from "./contactUs/ContactLocationMap";
import Banner from "./reusables/Banner";
import Heading1 from "./Heading1";

const ContactUs = () => {
  return (
    <div className="motion-safe:animate-fadeIn">
      <Banner
        img="src/assets/imagesContactUs/Contact-Banner.jpg"
        title="CONTACT US"
      />
      <div>
        <p className="tracking-wide text-center font-montserrat text-darkBlueFont text-sm md:text-xs mb-14">
          We'd love to hear from you! Please reach out to us here.
        </p>
        <div className="flex flex-col sm:mx-auto md:flex-row justify-between w-10/12 2xl:w-8/12 mb-40">
          <ContactForm />

          <ContactInfo />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
        <Heading1 />
        <ContactLocationMap />
      </div>
    </div>
  );
};

export default ContactUs;
