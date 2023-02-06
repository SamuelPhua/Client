import React from "react";
import Banner from "./reusables/Banner";
import Button from "./reusables/Button";

const BulkOrders = () => {
  const handleCLick = () => {
    console.log("routing to contact-us page");
  };

  return (
    <div className="motion-safe:animate-fadeIn">
      <Banner img="bulk-orders" title="BULK ORDERS" />

      <div className="w-auto mx-auto mb-16">
        <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-2">
          WHAT CAN WE DO FOR YOU?
        </h2>
        <div className="w-1/5 text-center mx-auto border-orange border-t-4" />
      </div>

      <div className="w-auto mx-auto mb-16">
        <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-2">
          CUSTOMISATION OPTIONS
        </h2>
        <div className="w-1/5 text-center mx-auto border-orange border-t-4" />
      </div>

      <div className="w-auto mx-auto mb-16">
        <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-2">
          OUR PREVIOUS CUSTOMISATIONS
        </h2>
        <div className="w-1/5 text-center mx-auto border-orange border-t-4" />
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
