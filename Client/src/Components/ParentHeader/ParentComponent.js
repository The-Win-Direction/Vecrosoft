import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderDesktop from '../HeaderDesktop/HeaderDesktop';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import SidebarMobile from '../SidebarMobile/SidebarMobile';  
import './ParentComponent.css';

const ParentComponent = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(false); // Ensure sidebar is closed on desktop
      }
    }; 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const isAuthPage = location.pathname === '/sign-up' || location.pathname === '/Sign-in';

  return (
    <div>
      {!isAuthPage && (
        <>
          {isMobile ? (
            <HeaderMobile toggleSidebar={toggleSidebar} />
          ) : (
            <HeaderDesktop />
          )}
          {isMobile && <SidebarMobile isOpen={isSidebarOpen} closeSidebar={closeSidebar} />}
        </>
      )}
      <main className={`content ${isSidebarOpen && isMobile ? 'sidebar-open' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default ParentComponent;
