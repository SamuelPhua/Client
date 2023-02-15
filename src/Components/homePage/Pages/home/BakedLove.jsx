import React from "react";
import cookieBackgroundOrange from "../../Assets/Images/home-image/Home-BakedWithLoveOrangeWave.png";
import coral from "../../Assets/Images/home-image/Home-Coral.png";
import ingredients from "../../Assets/Images/home-image/Home-Ingredients.png";
import love from '../../Assets/Images/home-image/Home-Heart.png';
import packaging from '../../Assets/Images/home-image/Home-Packaging.png';
import recepie from '../../Assets/Images/home-image/Home-Recipes.png';
import "./Home.css"

 const BakedLove = () => {
  return (
    <div className="">
      <div
        className="relative min-h-screen"
      >
        <img src={cookieBackgroundOrange} className="absolute w-full h-full z-[-1]" alt="bg"  />
        <div className="relative z-10 w-full h-full">
        <h1 className="bounce text-center uppercase pt-24 text-[#3670AD]  text-5xl pb-6 tracking-wider font-['Permanent_Marker'] ">
    Baked With Love</h1>  
          <img
            width={200}
            className="bounce absolute ml-12 -rotate-12 left-96 top-2"
            src={coral}
            alt="cookie-image"
          />
          <img
            width={118}
            className="absolute -bottom-80 -rotate-12 right-80"
            src={love}
            alt="cookie-image"
          />
      
        {/* catagories */}
        <div className="w-full h-full">
          <div className="flex items-center justify-between px-16 pt-12">
            <div className="relative ">
              <img
                width={246}
                src={ingredients}
                className=""
                alt="ingredient-image"
              />
              <h2 className="top-20 left-40  uppercase absolute font-['Permanent_Marker'] tracking-wider font-normal text-4xl bg-white w-[282px] text-center align-middle ">
                Ingredients
              </h2>
              <p className="absolute w-[191px] -ml-3 text-xs font-medium tracking-wider top-32 left-72">Our ingredients are carefully sourced to ensure the best quality and flavour of our cookies. </p>
            </div>
            <div className="absolute mr-28 right-96 top-50">
              <img
                width={246}
                src={packaging}
                className=""
                alt="ingredient-image"
              />
              <h2 className=" top-20 left-40 uppercase absolute font-['Permanent_Marker'] tracking-wider font-normal text-4xl bg-white w-[282px] text-center align-middle ">
              Packaging
              </h2>
              <p className="absolute w-[191px] text-xs font-medium tracking-wider -right-56 top-32">Our packaging is  designed with sustainability and preserving the freshness of our cookies in mind. </p>
            </div>
            <div className="absolute mt-24 ml-20 top-96 left-96">
              <img
                width={246}
                src={recepie}
                className=""
                alt="ingredient-image"
              />
              <h2 className="top-20 left-40 uppercase absolute font-['Permanent_Marker'] tracking-wider font-normal text-4xl bg-white w-[282px] text-center align-middle ">
              Recipes
              </h2>
              <p className="absolute w-[191px] text-xs font-medium tracking-wider -right-56 top-32">We are constantly improving our recipes to bring you the best quality bakes possible. </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default BakedLove;