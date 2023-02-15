import React from "react";

const ButtonWhite = ({
  displayName,
  width,
  padding,
  margin,
  onClick,
  autofocus,
}) => {
  return (
    <button
      className="font-normal tracking-wider w-28 md:w-32 lg:w-36 text-darkBlueFont bg-white border-solid border-2 rounded-full py-4 mx-auto hover:text-xs hover:bg-lightGreen hover:border-lightGrey focus:bg-lightGreen focus:border-3"
      id={displayName}
      style={{ width: width, padding: padding, margin: margin }}
      onClick={(event) => onClick(event)}
      autofocus={autofocus}
    >
      {displayName}
    </button>
  );
};

export default ButtonWhite;
