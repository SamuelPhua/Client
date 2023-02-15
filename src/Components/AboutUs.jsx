import React from "react";
import cookieCrafter from "../assets/imagesAboutUs/AboutUs-ManBaking.png";
import inclusiveHiring from "../assets/imagesAboutUs/AboutUs-InclusiveHiring.png";
import training from "../assets/imagesAboutUs/AboutUs-Training.png";
import ingredients from "../assets/imagesAboutUs/AboutUs-QualityIngredients.png";
import recipe from "../assets/imagesAboutUs/AboutUs-InnovativeRecipie.png";
import packaging from "../assets/imagesAboutUs/AboutUs-SustainablePackaging.png";
import img1 from "../assets/imagesAboutUs/AboutUs-DBSLogo.png";
import img2 from "../assets/imagesAboutUs/AboutUs-AppleLogo.png";
import img3 from "../assets/imagesAboutUs/AboutUs-MindefLogo.png";
import img4 from "../assets/imagesAboutUs/AboutUs-CPFfLogo.png";
import img5 from "../assets/imagesAboutUs/AboutUs-IRASLogo.png";
import img6 from "../assets/imagesAboutUs/AboutUs-NUSLogo.png";
import img7 from "../assets/imagesAboutUs/AboutUs-MetaLogo.png";
import img8 from "../assets/imagesAboutUs/ AboutUs-MandarinOrientalLogo.png";
import img9 from "../assets/imagesAboutUs/AboutUs-FrasersHospitalityLogo.png";
import img10 from "../assets/imagesAboutUs/AboutUs-NTULogo.png";
import img11 from "../assets/imagesAboutUs/AboutUs-STEngineeringLogo.png";
import img12 from "../assets/imagesAboutUs/AboutUs-MSFLogo.png";
import img13 from "../assets/imagesAboutUs/AboutUs-SMULogo.png";
import img14 from "../assets/imagesAboutUs/AboutUs-KPMGLogo.png";
import img15 from "../assets/imagesAboutUs/About Us-NationalUniversityHospital.png";
import Carousel from "./Carousel";

const AboutUs = () => {
  return (
    <div className="motion-safe:animate-fadeIn">
      {/* Banner */}
      <div className=" mb-20 relative h-[300px] w-full bg-cover bg-center bg-[url(src/assets/imagesAboutUs/AboutUs-Banner.png)]">
        <h1 className="absolute text-lg font-permanentMarker text-darkBlue  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          About Us
        </h1>
      </div>

      {/* Cookie Crafters */}
      <div className="mt-20 ml-48 w-4/5 flex h-screen justify-center gap-18">
        <div className="basis-1/2">
          <img className="h-3/5" src={cookieCrafter} />
        </div>

        <div className="basis-1/2 mt-[100px]">
          <div className="mb-8 text-sm font-permanentMarker text-darkBlue text-left">
            <span className="underline underline-offset-22 decoration-orange">
              Cookie Crafte
            </span>
            rs
          </div>

          <div className="mb-3 w-5/6 text-xs font-montserrat text-lightBlue text-left leading-7">
            Flour Power is a homegrown bakery that is passionate about creating
            delicious handcrafted bakes.
          </div>
          <div className="mt-8 w-5/6 text-xs font-montserrat text-lightBlue text-left leading-7">
            We specialise in cookie creations, but we love to explore and dabble
            in other baked goods like cakes too!
          </div>
        </div>
      </div>

      {/* Inclusive Hiring */}
      <div className="mt-[-350px] ml-[220px] w-6/6 flex h-screen justify-center">
        <div className="basis-1/2 mt-[110px]">
          <div className="mb-8 text-sm font-permanentMarker text-darkBlue text-left">
            <span className="underline underline-offset-22 decoration-orange">
              Inclusive Hiri
            </span>
            ng
          </div>

          <div className="mb-3 w-5/6 text-xs font-montserrat text-lightBlue text-left leading-7">
            Founded in 2016, we are a social enterprise that advocates for
            inclusive practices in the workplace and society at large.
          </div>
          <div className="mt-8 w-5/6 text-xs font-montserrat text-lightBlue text-left leading-7">
            At Flour Power, we work alongside individuals with special needs or
            those recovering from mental illness to create our deletable bakes.
          </div>
        </div>

        <div className="basis-1/2">
          <img className="h-3/6 ml-[-10px] mt-[60px]" src={inclusiveHiring} />
        </div>
      </div>

      {/* Training and Workshops */}
      <div className="mt-[-300px] ml-52 w-4/5 flex h-screen justify-center">
        <div className="basis-1/2">
          <img className="h-3/5" src={training} />
        </div>

        <div className="basis-1/2 mt-[60px]">
          <div className="mb-8 text-sm font-permanentMarker text-darkBlue text-left">
            <span className="underline underline-offset-22 decoration-orange">
              Training and Works
            </span>
            hops
          </div>

          <div className="mb-3 w-5/6 text-xs font-montserrat text-lightBlue text-left leading-7">
            When we're not baking up a storm in the kitchen, we're busy
            designing and running workshops for partner beneficiaries or
            corporate clients.
          </div>
          <div className="mt-8 w-5/6 text-xs font-montserrat text-lightBlue text-left leading-7">
            Through this programmers, we work to educate employers and learners
            on how to build an inclusive workplace and community at large.
          </div>
        </div>
      </div>

      {/* About Our Cookies */}
      <div className="text-center mt-[-200px] text-sm font-permanentMarker text-darkBlue">
        A
        <span className="underline underline-offset-22 decoration-orange">
          bout Our Cooki
        </span>
        es
      </div>
      <div className="mt-20 mb-20 ml-40 w-4/5 flex h-screen justify-center space-x-10">
        <div className="relative">
          <img className="h-4/5" src={ingredients} />
          <h1 className="mt-14 absolute w-72 text-xs font-montserrat text-lightBlue text-center font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            QUALITY INGREDIENTS
            <br />
            <p className="mt-7 font-light">
              Our cookies are made from ingredients which are carefully sourced
              by us to ensure the best quality and flavour.
            </p>
          </h1>
        </div>

        <div className="relative">
          <img className="h-4/5" src={recipe} />
          <h1 className="mt-16 absolute w-72 text-xs font-montserrat text-lightBlue text-center font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            INNOVATIVE RECIPES
            <br />
            <p className="mt-8 font-light">
              There's no such thing as a "perfect" recipe. We are always
              improving our recipes so that we continue bringing you the best
              quality cookies possible.
            </p>
          </h1>
        </div>

        <div className="relative">
          <img className="h-4/5" src={packaging} />
          <h1 className="mt-16 absolute w-72 text-xs font-montserrat text-lightBlue text-center font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            SUSTAINABLE PACKAGING
            <br />
            <p className="mt-8 font-light">
              Our packaging is sustainable and preserves the freshness of our
              cookies. You can enjoy them as fresh as when they were taken out
              of the oven!
            </p>
          </h1>
        </div>
      </div>
      {/* As Featured On */}
      <div className="mt-[-150px] text-center text-sm font-permanentMarker text-darkBlue">
        A
        <span className="underline underline-offset-22 decoration-orange">
          s Featured O
        </span>
        n
      </div>
      <Carousel />

      {/* Our Past Clients */}
      <div className="mt-[50px] text-center text-sm font-permanentMarker text-darkBlue">
        O
        <span className="underline underline-offset-22 decoration-orange">
          ur Past Client
        </span>
        s
      </div>
      <div className="grid grid-cols-7 mt-20">
        <div className="col-start-2 flex justify-center items-center">
          <img className="w-40 h-16" src={img1} />
        </div>
        <div className="col-start-3 flex justify-center items-center">
          <img className="w-28 h-24" src={img2} />
        </div>
        <div className="col-start-4 flex justify-center items-center">
          <img className="w-48 h-20" src={img3} />
        </div>
        <div className="col-start-5 flex justify-center items-center">
          <img className="w-32 h-32" src={img4} />
        </div>
        <div className="col-start-6 flex justify-center items-center">
          <img className="w-28 h-28" src={img5} />
        </div>
      </div>
      <div className="grid grid-cols-7 mt-20">
        <div className="col-start-2 flex justify-center items-center">
          <img className="w-32 h-16" src={img6} />
        </div>
        <div className="col-start-3 flex justify-center items-center">
          <img className="w-48 h-10" src={img7} />
        </div>
        <div className="col-start-4 flex justify-center items-center">
          <img className="w-24 h-20" src={img8} />
        </div>
        <div className="col-start-5 flex justify-center items-center">
          <img className="w-32 h-24" src={img9} />
        </div>
        <div className="col-start-6 flex justify-center items-center">
          <img className="w-40 h-16" src={img10} />
        </div>
      </div>
      <div className="grid grid-cols-7 mt-20">
        <div className="col-start-2 flex justify-center items-center">
          <img className="w-52 h-10" src={img11} />
        </div>
        <div className="col-start-3 flex justify-center items-center">
          <img className="w-32 h-32" src={img12} />
        </div>
        <div className="col-start-4 flex justify-center items-center">
          <img className="w-32 h-16" src={img13} />
        </div>
        <div className="col-start-5 flex justify-center items-center">
          <img className="w-28 h-32" src={img14} />
        </div>
        <div className="col-start-6 flex justify-center items-center">
          <img className="w-48 h-16" src={img15} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
