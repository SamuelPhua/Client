import React from "react";
import background from "../../Assets/Images/home-image/Hero-Banner-1.jpg";

 const Hero = () => {
  return (
    // hero or banner section
    <div className="">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className=" bg-cover bg-center bg-no-repeat w-full min-h-screen pl-20 "
      >
        <div className="absolute pt-[392px]">
          <h1 className="text-white drop-shadow-lg text-6xl pb-6 tracking-wider font-['Permanent_Marker']">
            Baked With Love.
          </h1>
          <p className="text-white pb-7 drop-shadow-lg text-xl font-semibold leading-6 uppercase tracking-wider">
            Our cookies are handcrafted and baked with love! <br /> Different on
            the outside, goodness within!
          </p>
          <button className="text-white bg-[#FF7C40] hover:bg-[#FF6347]  rounded-full px-14 py-6 text-xl font-bold">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;