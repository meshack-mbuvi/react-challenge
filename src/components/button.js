import React from "react";
export const Button = ({ type = "button", value, className, id, dataToggle = "", dataTarget = "", onClick, ref }) => {
  return (
    <button
      type={type}
      className={className}
      id={id}
      data-toggle={dataToggle}
      data-target={dataTarget}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  );
};
