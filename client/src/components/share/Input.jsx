import React, { useEffect, useState } from "react";

const Input = ({
  label,
  defaultValue,
  onchange,
  classLabel,
  type,
  field=null,
  classParent,
  className,
  placeholder,
  autoFocus=false,
  require=false
}) => {
  const [value, setValue] = useState(defaultValue);
  const handelChange = (e) => {
    setValue((prev) => e.target.value);
    field ? onchange(field, e.target.value) : onchange(e.target.value);
  };
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={classParent}>
      {label && <label className={classLabel}> {label} </label>}
      <input
        placeholder={placeholder}
        className={className}
        type={type}
        id={field}
        name={field}
        value={value}
        onChange={handelChange}
        autoFocus={autoFocus}
        required={require}
      />
    </div>
  );
};

export default Input;
