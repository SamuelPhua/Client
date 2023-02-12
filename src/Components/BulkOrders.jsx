import React from "react";
import Banner from "./reusables/Banner";
import Button from "./reusables/OrangeButton";

const BulkOrders = () => {
  const handleCLick = () => {
    console.log("routing to contact-us page");
  };

  return (
    <div className="motion-safe:animate-fadeIn">
      <Banner
        img="src/assets/imagesBulkOrders/Corporate-HeaderBanner.jpg"
        title="BULK ORDERS"
      />

      <div className="w-auto mx-auto mb-16">
        <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-14">
          WHAT{" "}
          <span className="underline underline-offset-22 decoration-orange">
            CAN WE DO FOR
          </span>{" "}
          YOU?
        </h2>
        <p className="tracking-wide text-center font-montserrat text-darkBlueFont text-xs md:text-xs mb-1">
          Planning a corporate event, wedding, birthday party, or any other
          special event?
        </p>
        <p className="tracking-wide text-center font-montserrat text-darkBlueFont text-xs md:text-xs mb-8">
          We'd love to be a part of it!
        </p>
        <p className="tracking-wide text-center font-montserrat text-darkBlueFont text-xs md:text-xs mb-20">
          Speak with us to customise our sweet treats as gifts for any occasion!
        </p>
      </div>

      <div className="w-auto mx-auto mb-16">
        <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-14">
          CU
          <span className="underline underline-offset-22 decoration-orange">
            STOMISATION OPTIO
          </span>
          NS
        </h2>
        {/* <div className="w-1/5 text-center mx-auto border-orange border-t-4" /> */}
      </div>

      <div className="w-auto mx-auto mb-16">
        <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-14">
          OUR PR
          <span className="underline underline-offset-22 decoration-orange">
            EVIOUS CUSTOM
          </span>
          ISATIONS
        </h2>
        {/* <div className="w-1/5 text-center mx-auto border-orange border-t-4" /> */}
      </div>

      <div className="w-auto mx-auto mb-16">
        <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-10">
          LIKE WHAT YOU SEE? CONTACT US HERE!
        </h2>
        <div className="mx-auto">
          <Button displayName="CONTACT US" onClick={handleCLick} />
        </div>
      </div>
    </div>
  );
};

export default BulkOrders;
