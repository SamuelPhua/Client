import React from "react";

const ButtonOrange = ({ displayName, width, padding, margin, onClick }) => {
  return (
    <button
      className="tracking-widest text-white bg-darkOrange border-solid border-darkOrange border-2 rounded-full mt-5 mb-5 md:mt-10 font-bold py-4 w-28 md:w-32 lg:w-36 mx-auto hover:text-darkOrange hover:bg-buttonHoverOrange focus:ring-1 focus:bg-buttonHoverOrange"
      id={displayName}
      style={{ width: width, padding: padding, margin: margin }}
      onClick={(event) => onClick(event)}
    >
      {displayName}
    </button>
  );
};

export default ButtonOrange;
