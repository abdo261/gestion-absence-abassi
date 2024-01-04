import { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import './layout.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [show, setShow] = useState(false);
const toggleShow = ()=>{
   setShow(!show) 
   console.log(show)
} 
  return (
    <main className={show ? 'space-toggle' : null}>
  <Sidebar show={show} toggleShow={toggleShow}/>
  <div className="content">
    <Outlet />
  </div>

    
    </main>
  )
}

export default Layout