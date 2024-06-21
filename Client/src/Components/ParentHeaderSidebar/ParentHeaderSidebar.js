import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';

const ParentComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      {/* Other content of your application */}
    </div>
  );
};

export default ParentComponent;
