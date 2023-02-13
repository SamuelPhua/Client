import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./reusables/Banner";
import Button from "./reusables/OrangeButton";

const BulkOrders = () => {
  // Navigate to the contact us page
  const navigate = useNavigate();
  const navigateToContactUs = () => {
    navigate("/contact-us");

    return (
      <div className="motion-safe:animate-fadeIn">
        <Banner
          img="src/assets/imagesBulkOrders/Corporate-HeaderBanner.jpg"
          title="BULK ORDERS"
        />

        {/* #1 INTRO - what can we do for you? */}
        <div className="w-auto mt-24 mx-auto mb-16">
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
            Speak with us to customise our sweet treats as gifts for any
            occasion!
          </p>
        </div>

        {/* #2 - Customisation Options (3 divs side by side) */}
        <div className="w-auto mt-24 mx-auto mb-16">
          <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-14">
            CU
            <span className="underline underline-offset-22 decoration-orange">
              STOMISATION OPTIO
            </span>
            NS
          </h2>
          {/* <div className="w-1/5 text-center mx-auto border-orange border-t-4" /> */}

          {/* images */}
          <div className="flex flex-wrap justify-evenly w-10/12 mt-20 mx-auto">
            <div className="w-4/12 px-10">
              <img src="src/assets/imagesBulkOrders/Corporate-Image1.png" />
            </div>
            <div className="w-4/12 px-10">
              <img src="src/assets/imagesBulkOrders/Corporate-Image2.png" />
            </div>
            <div className="w-4/12 px-10">
              <img src="src/assets/imagesBulkOrders/Corporate-Image3.png" />
            </div>
          </div>
          {/* text */}
          <div className="flex flex-wrap justify-evenly w-10/12 mx-auto">
            <div className="w-4/12 px-10">
              <h4 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-2xl md:text-2xl mt-14 mb-5">
                Personalised Packaging
              </h4>
              <p className="tracking-wide text-center font-montserrat text-darkBlueFont text-xxs md:text-xxs mb-1">
                Personalise your cookie gifts with your company logo or other
                customised labels!
              </p>
            </div>
            <div className="w-4/12 px-10">
              <h4 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-2xl md:text-2xl mt-14 mb-5">
                Gift Hamper Packaging
              </h4>
              <p className="tracking-wide text-center font-montserrat text-darkBlueFont text-xxs md:text-xxs mb-1">
                Work with us to curate a gift hamper featuring our lovely bakes
                just for your event.
              </p>
            </div>
            <div className="w-4/12 px-10">
              <h4 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-2xl md:text-2xl mt-14 mb-5">
                Dietary Requirements
              </h4>
              <p className="tracking-wide text-center font-montserrat text-darkBlueFont text-xxs md:text-xxs mb-1">
                Customise our cookie recipes to meet dietary needs, such as
                gluten-free or lactose-free.
              </p>
            </div>
          </div>
        </div>

        {/* #3 Previous customisations grid display */}
        <div className="w-auto mt-24 mx-auto mb-16">
          <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-14">
            OUR PR
            <span className="underline underline-offset-22 decoration-orange">
              EVIOUS CUSTOM
            </span>
            ISATIONS
          </h2>
          {/* <div className="w-1/5 text-center mx-auto border-orange border-t-4" /> */}

          {/* row 1 images */}
          <div className="flex flex-wrap justify-evenly w-10/12 mt-20 mx-auto">
            <div className="w-4/12 px-10">
              <img src="src/assets/imagesBulkOrders/Corporate-Customisation1.png " />
            </div>
            <div className="w-4/12 px-10">
              <img src="src/assets/imagesBulkOrders/Corporate-Customisation2.png" />
            </div>
            <div className="w-4/12 px-10">
              <img src="src/assets/imagesBulkOrders/Corporate-Customisation3.png" />
            </div>
          </div>
          {/* row 2 images */}
          <div className="flex flex-wrap justify-evenly w-10/12 mt-20 mx-auto">
            <div className="w-4/12 px-10">
              <img src="src/assets/imagesBulkOrders/Corporate-Customisation4.png" />
            </div>
            <div className="w-4/12 px-10">
              <img src="src/assets/imagesBulkOrders/Corporate-Customisation5.png" />
            </div>
            <div className="w-4/12 px-10">
              <img src="src/assets/imagesBulkOrders/57.png" />
            </div>
          </div>
        </div>

        {/* #4 contact us - button route */}
        <div className="w-auto mt-24 mx-auto mb-16">
          <h2 className="tracking-wide text-center font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-10">
            LIKE WHAT YOU SEE? CONTACT US HERE!
          </h2>
          <div className="text-center mx-auto">
            <Button
              displayName="CONTACT US"
              width="10rem"
              onClick={navigateToContactUs}
            />
          </div>
        </div>
      </div>
    );
  };
};

export default BulkOrders;
