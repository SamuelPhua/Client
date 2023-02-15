import React from "react";

const ButtonDisabled = ({
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
      className="cursor-not-allowed font-normal tracking-wider w-28 md:w-32 lg:w-36 text-white bg-buttonDisableGrey border-solid border-3 rounded-full mx-auto hover:text-xs"
      name={category}
      id={displayName}
      style={{ width: width, padding: padding, margin: margin }}
      onClick={(event) => onClick(event)}
    >
      {displayName}
    </button>
  );
};

export default ButtonDisabled;
