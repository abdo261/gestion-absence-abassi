import React from "react";

const Btn = ({
  text,
  icon,
  oncklick,
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={oncklick}
      className={className}
      type={type}
    >
      {icon && icon}
      {text && text}{" "}
    </button>
  );
};

export default Btn;
