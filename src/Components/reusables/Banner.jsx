import React from "react";

const Banner = ({ img, title }) => {
  // TODO : set up props to get background image and header from parent/ url
  return (
    <div
      className={`flex justify-center items-center bg-${img} h-[300px] mb-6 bg-cover bg-no-repeat`}
    >
      <h1 className="font-permanentMarker text-darkBlueFont tracking-wider text-5xl">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
