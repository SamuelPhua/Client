import React from "react";

const ButtonOrange = ({ displayName, width, padding, onClick }) => {
  return (
    <button
      className="text-white bg-darkOrange focus:outline-none focus:ring-2 hover:text-darkOrange hover:bg-buttonHoverOrange hover:border-darkOrange focus:bg-buttonHoverOrange rounded-full mt-5 mb-5 md:mt-10 font-bold py-4 tracking-wider w-28 md:w-32 lg:w-36 mx-auto"
      id={displayName}
      style={{ width: width, padding: padding }}
      onClick={(event) => onClick(event)}
    >
      {displayName}
    </button>
  );
};

export default ButtonOrange;
