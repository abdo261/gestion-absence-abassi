import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./layout.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <main className={show ? "space-toggle" : null}>
      <Sidebar show={show} toggleShow={toggleShow} />
      <div className="content">
        <Outlet />
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
      />
    </main>
  );
};

export default Layout;
