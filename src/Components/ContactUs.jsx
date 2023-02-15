import React from "react";
import ContactForm from "./contactUs/ContactForm";
import ContactInfo from "./contactUs/ContactInfo";
import ContactLocationMap from "./contactUs/ContactLocationMap";
import Banner from "./reusables/Banner";
import Heading1 from "./Heading1";

const ContactUs = () => {
  return (
<<<<<<< Updated upstream
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
=======
    <DataContext.Provider value={{ setPageIsOpaque, setDisplayPopup }}>
      <div className="relative ">
        {displayPopup && (
          <div className="absolute ml-[35rem] mt-[30rem]  flex justify-center items-center z-10 ">
            <div className="w-6/6 h-2/3 bg-white p-10  ">
              <div className="flex justify-center items-center ">
                <img className="w-[100px] h-[100px]" src={envelope} />
              </div>
              <div className="font-permanentMarker text-center text-sm mb-1 text-darkBlue ">
                Thank you
              </div>
              <div className="text-grey text-[0.8rem] text-center font-montserrat">
                Your message has been sent!
              </div>
              <div className="mt-[-1.5rem] flex justify-center items-center">
                <ButtonOrange
                  displayName="GOT IT!"
                  onClick={navigateToContactUs}
                />
              </div>
            </div>
          </div>
        )}
        <div className="motion-safe:animate-fadeIn">
          <Banner
            img="src/assets/imagesContactUs/Contact-Banner.jpg"
            title="CONTACT US"
          />
          <div className={`${pageIsOpaque ? "opacity-25" : "opacity-100"}`}>
            <p className="tracking-wide text-center font-montserrat text-darkBlueFont text-sm md:text-xs mb-14">
              We'd love to hear from you! Please reach out to us here.
            </p>
            <div className="flex flex-col sm:mx-auto md:flex-row justify-between w-10/12 2xl:w-8/12 mb-40 ">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
            <Heading1 />
            <ContactLocationMap />
          </div>
>>>>>>> Stashed changes
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
