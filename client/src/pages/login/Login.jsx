import {  BsPersonFill, BsUnlockFill } from "react-icons/bs";
import Input from "../../components/share/Input";
import "./login.css";
import Btn from "../../components/share/Btn";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/apiCalls/authApiCall";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "", mot_de_passe: "" });
  const handelChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));
  const handelSubmit = (e) => {
    e.preventDefault();
   
    dispatch(LoginUser(formData,()=>navigate('/')))
  };
  return (<>
    <div className="containerr-form">
      <div className="wrapper">
        <form onSubmit={handelSubmit}>
          <div className="w-100 d-flex justify-content-center">
            <img src="/logo.png" className="img-logo-login " />
          </div>{" "}
          <h1>Se Connecter</h1>
          <div className="input-box">
            <Input
              type="email"
              placeholder="Username"
              onchange={handelChange}
              field="email"
              require={true}
            />
            <BsPersonFill className="input-logo" />
          </div>
          <div className="input-box">
            <Input
              type="password"
              placeholder="Password"
              onchange={handelChange}
              field="mot_de_passe"
              require={true}
            />
            <BsUnlockFill className="input-logo" />
          </div>
          
          <Btn type="submit" text={"Login"} className="btn" />
        </form>
      </div>
    </div> 
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /></>
  );
};

export default Login;
