import React from "react";

const ButtonAddMinus = ({ displayName, padding, margin, size, onClick }) => {
  return (
    <button
      className="font-normal text-xs tracking-wider text-darkBlueFont bg-white border-solid border-2 rounded-full py-4 mx-auto hover:text-xs hover:bg-lightGreen hover:border-lightGrey focus:bg-lightGreen focus:border-3"
      id={displayName}
      style={{ padding: padding, margin: margin, height: size, width: size }}
      onClick={(event) => onClick(event)}
    >
      {displayName}
    </button>
  );
};

export default ButtonAddMinus;
