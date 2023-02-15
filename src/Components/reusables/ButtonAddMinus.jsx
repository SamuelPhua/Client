import React from "react";

const ButtonAddMinus = ({ displayName, padding, margin, size, onClick }) => {
  return (
    <button
      className="font-normal text-xs tracking-wider text-white bg-darkBlue border-solid border-2 rounded-full mx-auto hover:text-xs hover:bg-lightBlue hover:border-darkBlue"
      id={displayName}
      style={{ padding: padding, margin: margin, height: size, width: size }}
      onClick={(event) => onClick(event)}
    >
      {displayName}
    </button>
  );
};

export default ButtonAddMinus;
