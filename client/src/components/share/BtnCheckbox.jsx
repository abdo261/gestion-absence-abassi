import React from "react";

const BtnCheckbox = ({
  classParent = "form-check form-switch d-flex align-items-center",
  className = "form-check-input",
  onchange,
  checked,
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
    </div>
  );
};

export default BtnCheckbox;
