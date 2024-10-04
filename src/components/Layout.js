import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar'; // 사이드바 컴포넌트

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div>
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onToggleSidebar={handleToggleSidebar} />
      {/* 다른 컨텐츠는 여기 들어갑니다. */}
    </div>
  );
};

export default Layout;
