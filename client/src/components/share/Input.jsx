import React, { useEffect, useState } from "react";

const Input = ({ label, defaultValue, onchange, classLabel, type, field }) => {
  const [value, setValue] = useState(defaultValue);
const handelChange = (e)=>{
setValue(prev=>e.target.value)
}
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <div className={classParent}>
      {label && <label className={classLabel}> {label} </label>}
      <input type={type} id={field} name={field} value={value} onChange={handelChange}/>
    </div>
  );
};

export default Input;
