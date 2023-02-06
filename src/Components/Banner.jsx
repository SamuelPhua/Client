import React from "react";

const Banner = () => {
  // TODO : set up props to get background image and header from parent/ url
  return (
    <div className="flex justify-center items-center bg-[url(src/assets/imagesContactUs/Contact-Banner.jpg)] h-[300px] mb-6 bg-cover bg-no-repeat">
      <h1 className="font-permanentMarker text-darkBlueFont tracking-wider text-5xl">
        CONTACT US
      </h1>
    </div>
  );
};

export default Banner;
