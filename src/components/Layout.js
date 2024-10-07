import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import UserSettings from './UserSettings';
import { Outlet } from 'react-router-dom';
import './Layout.css'; // 필요한 CSS 파일을 가져옵니다.

const Layout = () => {
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);

  const toggleUserSettings = () => {
    setIsUserSettingsOpen(!isUserSettingsOpen);
  };

  return (
    <div className="layout">
      <Header  onToggleUserSettings={toggleUserSettings} />
      <UserSettings isOpen={isUserSettingsOpen} onClose={toggleUserSettings} />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <Outlet /> {/* 여기에 페이지 내용이 들어갑니다 */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
