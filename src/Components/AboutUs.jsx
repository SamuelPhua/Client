import React from "react";
import banner from "../assets/imagesAboutUs/AboutUs-Banner.png";
import cookieCrafter from "../assets/imagesAboutUs/AboutUs-ManBaking.png";
import inclusiveHiring from "../assets/imagesAboutUs/AboutUs-InclusiveHiring.png";
import training from "../assets/imagesAboutUs/AboutUs-Training.png";
import ingredients from "../assets/imagesAboutUs/AboutUs-QualityIngredients.png";
import recipe from "../assets/imagesAboutUs/AboutUs-InnovativeRecipie.png";
import packaging from "../assets/imagesAboutUs/AboutUs-SustainablePackaging.png";
import apac from "../assets/imagesAboutUs/Featured-APAC.png";
import fairmarch from "../assets/imagesAboutUs/Featured-Fairmarch.png";
import philstar from "../assets/imagesAboutUs/Featured-Philstar.png";
import logos from "./LogosData";

const AboutUs = () => {
  return (
    <div>
      {/* Banner */}
      <div className="mb-20 relative h-[300px] w-full bg-cover bg-center bg-[url(src/assets/imagesAboutUs/AboutUs-Banner.png)]">
        <h1 className="absolute text-lg font-permanentMarker text-darkBlue  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          About Us
        </h1>
      </div>
      {/* Cookie Crafters */}
      <div className="mt-20 ml-72 w-4/5 flex h-screen justify-center">
        <div className="basis-1/2">
          <img className="h-2/3" src={cookieCrafter} />
        </div>

        <div className="basis-1/2 mt-[150px]">
          <div className="mb-11 text-sm font-permanentMarker text-darkBlue text-left underline underline-offset-22 decoration-orange">
            Cookie Crafters
          </div>

          <div className="mb-3 w-4/6 text-xs font-montserrat text-lightBlue text-left leading-8">
            Flour Power is a homegrown bakery that is passionate about creating
            delicious handcrafted bakes.
          </div>
          <div className="mt-8 w-4/6 text-xs font-montserrat text-lightBlue text-left leading-8">
            We specialise in cookie creations, but we love to explore and dabble
            in other baked goods like cakes too!
          </div>
        </div>
      </div>
      {/* Inclusive Hiring */}
      <div className="mt-[-300px] ml-80 w-4/5 flex h-screen justify-center">
        <div className="basis-1/2 mt-[110px]">
          <div className="mb-11 text-sm font-permanentMarker text-darkBlue text-left underline underline-offset-22 decoration-orange">
            Inclusive Hiring
          </div>

          <div className="mb-3 w-4/6 text-xs font-montserrat text-lightBlue text-left leading-8">
            Founded in 2016, we are a social enterprise that advocates for
            inclusive practices in the workplace and society at large.
          </div>
          <div className="mt-8 w-4/6 text-xs font-montserrat text-lightBlue text-left leading-8">
            At Flour Power, we work alongside individuals with special needs or
            those recovering from mental illness to create our deletable bakes.
          </div>
        </div>

        <div className="basis-1/2">
          <img className="h-3/5" src={inclusiveHiring} />
        </div>
      </div>
      {/* Training and Workshops */}
      <div className="mt-[-300px] ml-72 w-4/5 flex h-screen justify-center">
        <div className="basis-1/2">
          <img className="h-2/3" src={training} />
        </div>

        <div className="basis-1/2 mt-[150px]">
          <div className="mb-11 text-sm font-permanentMarker text-darkBlue text-left underline underline-offset-22 decoration-orange">
            Training and Workshops
          </div>

          <div className="mb-3 w-4/6 text-xs font-montserrat text-lightBlue text-left leading-8">
            When we're not baking up a storm in the kitchen, we're busy
            designing and running workshops for partner beneficiaries or
            corporate clients.
          </div>
          <div className="mt-8 w-4/6 text-xs font-montserrat text-lightBlue text-left leading-8">
            Through this programmers, we work to educate emplpyers and learners
            on how to build an inclusive workplace and community at large.
          </div>
        </div>
      </div>

      {/* About Our Cookies */}
      <div className="text-center mt-[-200px] text-sm font-permanentMarker text-darkBlue underline underline-offset-22 decoration-orange">
        About Our Cookies
      </div>
      <div className="mt-20 mb-20 ml-48 w-4/5 flex h-screen justify-center space-x-10">
        <div className="relative">
          <img className="h-4/5" src={ingredients} />
          <h1 className="absolute w-80 text-xs font-montserrat text-lightBlue text-center font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            QUALITY INGREDIENTS
          </h1>
          <p className="absolute w-80 text-center text-xs font-montserrat text-lightBlue top-[550px] left-1/2 -translate-x-1/2 -translate-y-1/2">
            Our cookies are made from ingredients which are carefully sourced by
            us to ensure the best quality and flavour.
          </p>
        </div>

        <div className="relative">
          <img className="h-4/5" src={recipe} />
          <h1 className="absolute w-80 text-xs font-montserrat text-lightBlue text-center font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            INNOVATIVE RECIPES
          </h1>
          <p className="absolute w-80 text-center text-xs font-montserrat text-lightBlue top-[565px] left-1/2 -translate-x-1/2 -translate-y-1/2">
            There's no such thing as a "perfect" recipe. We are always improving
            our recipes so that we continue bringing you the best quality
            cookies possible.
          </p>
        </div>

        <div className="relative">
          <img className="h-4/5" src={packaging} />
          <h1 className="absolute w-80 text-xs font-montserrat text-lightBlue text-center font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            SUSTAINABLE PACKAGING
          </h1>
          <p className="absolute w-80 text-center text-xs font-montserrat text-lightBlue top-[565px] left-1/2 -translate-x-1/2 -translate-y-1/2">
            Our packaging is sustainable and preserves the freshness of our
            cookies. You can enjoy them as fresh as hwen they were taken out of
            the oven!
          </p>
        </div>
      </div>
      {/* As Featured On */}
      <div className="mt-[-100px] text-center text-sm font-permanentMarker text-darkBlue underline underline-offset-22 decoration-orange">
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
      <div className="mt-[-250px] text-center text-sm font-permanentMarker text-darkBlue underline underline-offset-22 decoration-orange">
        Our Past clients
      </div>
      <div className="grid grid-cols-5 gap-2 mt-20">
        {logos.map((logo, index) => {
          return (
            <div key={index}>
              <img src={logo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
