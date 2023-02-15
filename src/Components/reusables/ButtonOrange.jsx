import React from "react";

const ButtonOrange = ({ displayName, width, padding, onClick }) => {
  return (
    <button
      className="font-montserrat text-white bg-darkOrange hover:text-darkOrange hover:bg-buttonHoverOrange hover:border-2 hover:border-darkOrange rounded-full mt-5 mb-5 md:mt-10 font-bold py-4 tracking-wider w-28 md:w-32 lg:w-36 mx-auto focus:bg-buttonHoverOrange focus:outline-none focus:ring-2"
      id={displayName}
      style={{ width: width, padding: padding }}
      onClick={(event) => onClick(event)}
      // didsabled={disabled}
    >
      {displayName}
    </button>
  );
};

export default ButtonOrange;
