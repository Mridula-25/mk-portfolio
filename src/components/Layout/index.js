import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss'

const Layout = () =>{
    const location = useLocation();
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
      setShowLoader(true);
      const timeout = setTimeout(() => setShowLoader(false), 1200);
      return () => clearTimeout(timeout);
    }, [location]);

    return (
      <div className="App">
        <Sidebar />
        <div className='page'>
          <span className="tags top-tags"> &lt;/body&gt;</span>
         
            <Outlet />
          <span className='tags bottom-tags'>
            &lt;/body&gt;
            <br />
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
          </span>
        </div>
        {showLoader && (
          <div className="loader-inner pacman">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    )
}

export default Layout;