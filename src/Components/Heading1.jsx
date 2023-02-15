import React from "react";

const Heading1 = () => {
  return (
    <div className="relative">
      <div className="flex flex-row justify-center items-center before:block before:absolute before:left-8 before:-bottom-1 before:w-14 before:h-6 before:rounded-[50%]  before:bg-slate-200">
        <img
          src="src/assets/imagesContactUs/Contact-LocationIcon.png"
          className="w-28 h-24 -rotate-12"
        ></img>
        <span className="text-4xl font-permanentMarker text-darkBlueFont font-thin">
          LOCATE US
        </span>
      </div>
    </div>
  );
};

export default Heading1;
