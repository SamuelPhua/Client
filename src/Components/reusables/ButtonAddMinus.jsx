import React from "react";

const ButtonWhite = ({ displayName, padding, margin, onClick, autofocus }) => {
  return (
    <button
      className="font-normal tracking-wider h-28 w-28 md:h-28 md:w-32 lg:h-36 lg:w-36 text-darkBlueFont bg-white border-solid border-2 rounded-full py-4 mx-auto hover:text-xs hover:bg-lightGreen hover:border-lightGrey focus:bg-lightGreen focus:border-3"
      id={displayName}
      style={{ padding: padding, margin: margin }}
      onClick={(event) => onClick(event)}
      autofocus={autofocus}
    >
      {displayName}
    </button>
  );
};

export default ButtonWhite;
