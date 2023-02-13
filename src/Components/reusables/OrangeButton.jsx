import React from "react";

const Button = ({ displayName, width, onClick }) => {
  return (
    <button
      className="text-white bg-darkOrange focus:outline-none focus:ring-4 hover:text-darkOrange hover:bg-buttonHoverOrange hover:border-darkOrange focus:bg-buttonHoverOrange rounded-full mt-5 mb-5 md:mt-10 py-2 w-28 md:w-32 lg:w-36 mx-auto"
      id={displayName}
      style={{ width: width }}
      onClick={(event) => onClick(event)}
    >
      {displayName}
    </button>
  );
};

export default Button;
