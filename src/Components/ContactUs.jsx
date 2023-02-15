import React, { useContext, useState } from "react";
import ContactForm from "./contactUs/ContactForm";
import ContactInfo from "./contactUs/ContactInfo";
import ContactLocationMap from "./contactUs/ContactLocationMap";
import Banner from "./reusables/Banner";
import Heading1 from "./Heading1";
import DataContext from "./context/DataContext";

const ContactUs = () => {
  const [pageIsOpaque, setPageIsOpaque] = useState(false);
  console.log(pageIsOpaque);
  return (
    <DataContext.Provider value={{ pageIsOpaque, setPageIsOpaque }}>
      <div className="motion-safe:animate-fadeIn">
        <Banner
          img="src/assets/imagesContactUs/Contact-Banner.jpg"
          title="CONTACT US"
        />
        <div className={`${pageIsOpaque ? "opacity-25" : "opacity-100"}`}>
          <p className="tracking-wide text-center font-montserrat text-darkBlueFont text-sm md:text-xs mb-14">
            We'd love to hear from you! Please reach out to us here.
          </p>
          <div className="flex flex-col sm:mx-auto md:flex-row justify-between w-10/12 2xl:w-8/12 mb-40">
            <ContactForm className={`${!pageIsOpaque && "opacity-100"}`} />
            <ContactInfo />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
          <Heading1 />
          <ContactLocationMap />
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default ContactUs;
