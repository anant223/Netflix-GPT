import React from "react";

const Btn = ({
  name,
  icon,
  handleBtn,
  className,
  type = "button",

}) => {
  return (
    <button
      onClick={handleBtn}
      className={`${className}`}
      type={type}
    >
      {name}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Btn;
