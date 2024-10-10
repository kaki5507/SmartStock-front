import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    {
      title: '사용자 관리',
      subItems: [
        { name: '사용자 정보 수정', path: '/user-edit' },
        { name: '사용자 조회 및 역할 할당', path: '/user-role' },
        { name: '사용자 접근 로그', path: '/user-log' },
      ],
    },
    {
      title: '재고 관리',
      subItems: [
        { name: '제품 등록', path: '/inventory-register' },
        { name: '재고 조회', path: '/inventory-view' }, // 헤더와 동일
        { name: '재고 수정', path: '/inventory-edit' },
      ],
    },
    {
      title: '주문 관리',
      subItems: [
        { name: '주문 생성', path: '/order-create' },
        { name: '주문 조회', path: '/order-view' }, // 헤더와 동일
        { name: '주문 수정', path: '/order-edit' },
      ],
    },
    {
      title: '리포트',
      subItems: [
        { name: '재고 리포트', path: '/report-stock' },
        { name: '판매 리포트', path: '/report-sales' }, // 리포트 관련 페이지
      ],
    },
  ];

  // 각 메뉴의 열림 상태를 관리하기 위한 상태 배열
  const [openMenus, setOpenMenus] = useState(Array(menuItems.length).fill(false));

  const handleMenuClick = (index) => {
    // 클릭한 메뉴의 열림 상태를 토글
    const newOpenMenus = [...openMenus];
    newOpenMenus[index] = !newOpenMenus[index];
    setOpenMenus(newOpenMenus);
  };

  return (
    <div className="sidebar">
      <h3>전체 메뉴</h3>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <div onClick={() => handleMenuClick(index)} className="menu-title">
              {item.title}
              <span className="toggle-icon">{openMenus[index] ? '-' : '+'}</span>
            </div>

            {openMenus[index] && (
              <ul className={`sub-menu ${openMenus[index] ? 'open' : ''}`}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
