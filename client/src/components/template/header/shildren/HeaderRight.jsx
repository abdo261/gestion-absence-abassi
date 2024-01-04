import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";


const HeaderRight = () => {
  return (
    <div className="header-right d-flex align-items-center gap-2">
      <span className="header-right-profile d-flex align-items-center">
        <span className="mx-1" >abdellah</span> <IoPersonCircleSharp size={30} />
      </span>
      
    </div>
  );
};

export default HeaderRight;
