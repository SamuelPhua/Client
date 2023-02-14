import React from "react";

const ButtonWhite = ({ displayName, width, padding, onClick }) => {
  return (
    <button
      className="text-darkBlueFont bg-white focus:outline-none focus:ring-4 hover:text-xl hover:bg-lightGreen hover:border-lightGrey focus:bg-buttonHoverOrange rounded-full mt-5 mb-5 md:mt-10 font-bold py-4 tracking-wider w-28 md:w-32 lg:w-36 mx-auto"
      id={displayName}
      style={{ width: width, padding: padding }}
      onClick={(event) => onClick(event)}
    >
      {displayName}
    </button>
  );
};

export default ButtonWhite;
