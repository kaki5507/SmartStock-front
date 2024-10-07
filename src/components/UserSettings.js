import React from 'react';
import './UserSettings.css';

const UserSettings = ({ onClose }) => {
  return (
    <div className="user-settings">
      <div className="user-settings-header">
        <h3>사용자 설정</h3>
        <button className="close-button" onClick={onClose}>닫기</button>
      </div>
      <ul className="user-settings-menu">
        <li>프로필 수정</li>
        <li>비밀번호 변경</li>
        <li>로그아웃</li>
      </ul>
    </div>
  );
};

export default UserSettings;
