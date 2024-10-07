import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>전체 메뉴</h3>
      <ul>
        <li>재고 관리</li>
        <li>주문 관리</li>
        <li>상품 관리</li>
        <li>리포트</li>
        {/* 추가 메뉴 항목들 */}
      </ul>
    </div>
  );
};

export default Sidebar;
