import React from "react";

const Btn = ({ name, icon, handleBtn, children, className, type = "button" }) => {
  return (
    <button
      icon
      onClick={handleBtn}
      className={`text-white ${className}`}
      type={type}
    >
      {name}
      {<span>{icon}</span>}
    </button>
  );
};

export default Btn;
