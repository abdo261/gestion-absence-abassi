import React from "react";

const BtnCheckbox = ({
  classParent = "form-check form-switch d-flex align-items-center",
  className = "form-check-input",
  onchange,
  checked,
  text
}) => {
    
  return (
    <div className={classParent}>
      <input
        className={className}
        type="checkbox"
        onChange={onchange}
        checked={checked}
        role="switch"
        id="flexSwitchCheckDefault"
      />
     { text && text}
    </div>
  );
};

export default BtnCheckbox;
