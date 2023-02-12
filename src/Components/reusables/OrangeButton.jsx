import React from "react";

const Button = ({ displayName, width, onClick }) => {
  return (
    <button
      className="text-white bg-orange focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-2 w-28 md:w-32 lg:w-36 mx-auto"
      id={displayName}
      style={{ width: width }}
      onClick={(event) => onClick(event)}
    >
      {displayName}
    </button>
  );
};

export default Button;
