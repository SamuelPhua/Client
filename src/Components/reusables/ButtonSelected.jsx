import React from "react";

const ButtonSelected = ({
  displayName,
  category,
  width,
  padding,
  margin,
  onClick,
  //   autofocus,
}) => {
  return (
    <button
      className="font-normal tracking-wider w-28 md:w-32 lg:w-36 text-darkBlueFont bg-lightGreen border-solid border-3 rounded-full py-4 mx-auto hover:text-xs hover:bg-lightGreen hover:border-lightGrey"
      name={category}
      id={displayName}
      style={{ width: width, padding: padding, margin: margin }}
      onClick={(event) => onClick(event)}
      //   autoFocus={autofocus}
    >
      {displayName}
    </button>
  );
};

export default ButtonSelected;
