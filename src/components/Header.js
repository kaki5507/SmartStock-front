import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onToggleUserSettings }) => {
  return (
    <div className="header">
      <button className="menu-button" onClick={onToggleUserSettings}>☰</button>
      <h1 className="title">재고 관리 프로그램</h1>
      <nav className="nav-menu">
        <Link className="nav-item" to="/home">홈</Link>
        <Link className="nav-item" to="/inventory-manager">재고 관리</Link>
        <Link className="nav-item" to="/order-view">주문 관리</Link>
        <Link className="nav-item" to="/report-stock">리포트</Link>
      </nav>
    </div>
  );
};

export default Header;
