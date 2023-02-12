import React from "react";

const Banner = ({ img, title, titleColor }) => {
  // TODO : set up props to get background image and header from parent/ url
  return (
    <div
      className={`flex justify-center items-center h-[300px] mb-6 bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1
        className="font-permanentMarker tracking-wider text-5xl text-darkBlueFont"
        style={{ color: titleColor }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Banner;
