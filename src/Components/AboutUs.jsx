import React from "react";

const AboutUs = () => {
  return <div></div>;
};

export default AboutUs;
import React from "react";
import banner from "../assets/imagesAboutUs/About Us-Banner.png";
import cookieCrafter from "../assets/imagesAboutUs/FP-Image3.png";
import inclusiveHiring from "../assets/imagesAboutUs/FP Team Photo.jpeg";
import training from "../assets/imagesAboutUs/FP Workshops.jpeg";
import ingredients from "../assets/imagesAboutUs/Abt Cookie_Img 1.png";
import recipe from "../assets/imagesAboutUs/Abt Cookie_Img 2.png";
import packaging from "../assets/imagesAboutUs/Abt Cookie_Img 3.jpeg";
import apac from "../assets/imagesAboutUs/Featured-APAC.png";
import fairmarch from "../assets/imagesAboutUs/Featured-Fairmarch.png";
import philstar from "../assets/imagesAboutUs/Featured-Philstar.png";

const AboutUs = () => {
  return (
    <div>
      {/* Banner */}
      <div className="mb-20 relative w-full max-h-96 overflow-hidden">
        <img className="mt-largeNegative" src={banner} />
        <h1 class="absolute text-lg font-permanentMarker text-darkBlue  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          About Us
        </h1>
      </div>
      {/* Cookie Crafters */}
      <div className="flex flex-row gap-x-24">
        <div className="basis-1/2">
          <img className="rounded-full" src={cookieCrafter} />
        </div>

        <div className="basis-1/2 self-center">
          <div className="mb-11 text-sm font-permanentMarker text-darkBlue text-left underline underline-offset-22 decoration-orange">
            Cookie Crafters
          </div>
          <div className="mb-3 text-xs font-montserrat text-lightBlue text-left">
            Flour Power is a homegrown bakery that is passionate about creating
            delicious handcrafted bakes.
          </div>
          <div className="text-xs font-montserrat text-lightBlue text-left">
            We specialise in cookie creations, but we love to explore and dabble
            in other baked goods like cakes too!
          </div>
        </div>
      </div>

      {/* Inclusive Hiring */}
      <div className="flex flex-row gap-x-24">
        <div className="basis-1/2 self-center">
          <div className="mb-11 text-sm font-permanentMarker text-darkBlue text-left underline underline-offset-22 decoration-orange">
            Inclusive Hiring
          </div>
          <div className="mb-3 text-xs font-montserrat text-lightBlue text-left">
            Founded in 2016, we are a social enterprise that advocates for
            inclusive practices in the workplace and society at large.
          </div>
          <div className="text-xs font-montserrat text-lightBlue text-left">
            At Flour Power, we work alongside individuals with special needs or
            those recovering from mental illness to create our deletable bakes.
          </div>
        </div>

        <div className="basis-1/2">
          <img className="rounded-full" src={inclusiveHiring} />
        </div>
      </div>

      {/* Training and Workshops */}
      <div className="flex flex-row gap-x-24">
        <div className="basis-1/2">
          <img className="rounded-full" src={training} />
        </div>

        <div className="basis-1/2 self-center">
          <div className="mb-11 text-sm font-permanentMarker text-darkBlue text-left underline underline-offset-22 decoration-orange">
            Training and Workshops
          </div>
          <div className="mb-3 text-xs font-montserrat text-lightBlue text-left">
            Flour Power is a homegrown bakery that is passionate about creating
            delicious handcrafted bakes.
          </div>
          <div className="text-xs font-montserrat text-lightBlue text-left">
            We specialise in cookie creations, but we love to explore and dabble
            in other baked goods like cakes too!
          </div>
        </div>
      </div>

      {/* About Our Cookies */}
      <div className="text-center mt-20 text-sm font-permanentMarker text-darkBlue underline underline-offset-22 decoration-orange">
        About Our Cookies
      </div>

      <div className="mt-20 grid grid-cols-3 grid-rows-2">
        <div>
          <img
            className="rounded-tl-extraLarge rounded-tr-large w-10/12 h-3/5 overflow-hidden"
            src={ingredients}
          />
        </div>

        <div>
          <img
            className="rounded-tl-extraLarge rounded-tr-large w-10/12 h-3/5 overflow-hidden"
            src={recipe}
          />
        </div>

        <div>
          <img
            className="rounded-tl-extraLarge rounded-tr-large w-10/12 h-3/5 overflow-hidden"
            src={packaging}
          />
        </div>

        <div className="px-8 mr-14 text-center text-xs font-montserrat text-lightBlue">
          <p className="mt-mediumNegative mb-6 text-xs font-montserrat text-lightBlue text-center font-bold">
            QUALITY INGREDIENTS
          </p>
          Our cookies are made from ingredients which are carefully sourced by
          us to ensure the best quality and flavour.
        </div>

        <div className="px-8 mr-14 text-center text-xs font-montserrat text-lightBlue">
          <p className="mt-mediumNegative mb-6 text-xs font-montserrat text-lightBlue text-center font-bold">
            INNOVATIVE RECIPES
          </p>
          There's no such thing as a "perfect" recipe. We are always improving
          our recipes so that we continue bringing you the best quality cookies
          possible.
        </div>

        <div className="px-8 mr-14 text-center text-xs font-montserrat text-lightBlue">
          <p className="mt-mediumNegative mb-6 text-xs font-montserrat text-lightBlue text-center font-bold">
            SUSTAINABLE PACKAGING
          </p>
          Our packaging is sustainable and preserves the freshness of our
          cookies. You can enjoy them as fresh as hwen they were taken out of
          the oven!
        </div>
      </div>

      {/* As Featured On */}
      <div className="mt-superLargeNegative text-center text-sm font-permanentMarker text-darkBlue underline underline-offset-22 decoration-orange">
        As Featured On
      </div>
      <div className="mt-20 grid grid-cols-3 grid-rows-2">
        <div>
          <img className="w-12/12 h-5/5 overflow-hidden" src={apac} />
        </div>

        <div>
          <img className=" w-12/12 h-5/5 overflow-hidden" src={fairmarch} />
        </div>

        <div>
          <img className="w-12/12 h-5/5 overflow-hidden" src={philstar} />
        </div>

        <div className="text-xs font-montserrat text-black text-center">
          APAC BUSINESS INSIDER
        </div>

        <div className="text-xs font-montserrat text-black text-center ">
          FAIRMARCH
        </div>

        <div className="text-xs font-montserrat text-black text-center">
          PHILSTAR GLOBAL
        </div>
      </div>

      {/* Our Past Clients */}
      <div className="mt-mediumNegative text-center text-sm font-permanentMarker text-darkBlue underline underline-offset-22 decoration-orange">
        Our Past clients
      </div>
    </div>
  );
};

export default AboutUs;
