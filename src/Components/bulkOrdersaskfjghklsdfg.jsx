import React from "react";
import Banner from "./Banner";

const BulkOrders = () => {
  return (
    <div className="motion-safe:animate-fadeIn">
      <Banner
        img="src/assets/imagesBulkOrders/Corporate-HeaderBanner.jpg"
        title="BULK ORDERS"
      />
      <div>
        <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-sm md:text-xs mb-14">
          WHAT CAN WE DO FOR YOU?
        </h2>
      </div>
    </div>
  );
};

export default BulkOrders;
