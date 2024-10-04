import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = ({ onToggleSidebar }) => {
  // 사이드바의 열린 상태를 관리하는 state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 사이드바 토글 함수
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onToggleSidebar(!isSidebarOpen); // 부모 컴포넌트에 토글 상태 전달
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={toggleSidebar}>☰</Button>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          재고 관리 프로그램
        </Typography>
        <Button color="inherit" component={Link} to="/" onClick={toggleSidebar}>홈</Button>
        <Button color="inherit" component={Link} to="/inventory-manager" onClick={toggleSidebar}>재고 관리</Button>
        <Button color="inherit" component={Link} to="/product-page" onClick={toggleSidebar}>상품 페이지</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
