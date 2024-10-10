import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import UserSettings from './UserSettings';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);

  const toggleUserSettings = () => {
    setIsUserSettingsOpen(!isUserSettingsOpen);
  };

  // UserSettings 이외의 영역을 클릭하면 닫히도록 설정
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('dim-background')) {
      setIsUserSettingsOpen(false);
    }
  };

  return (
    <div className="layout">
      <Header onToggleUserSettings={toggleUserSettings} />
      <div className="main-content-wrapper">
        <Sidebar />
        <div className={`content ${isUserSettingsOpen ? 'dim-background' : ''}`} onClick={handleBackgroundClick}>
          <Outlet /> {/* 각 페이지가 이 부분에 렌더링 됩니다 */}
        </div>
      </div>
      {isUserSettingsOpen && (
        <div className="dim-background" onClick={handleBackgroundClick}>
          <UserSettings onClose={toggleUserSettings} />
        </div>
      )}
    </div>
  );
};

export default Layout;
