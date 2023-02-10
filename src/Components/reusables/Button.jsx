import React from "react";

const Button = ({ displayName, onClick }) => {
  return (
    <button id={displayName} onClick={(event) => onClick(event)}>
      {displayName}
    </button>
  );
};

export default Button;
