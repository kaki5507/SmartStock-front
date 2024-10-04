import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={() => onToggleSidebar(false)}>
      <List>
        <ListItem button component={Link} to="/" onClick={() => onToggleSidebar(false)}>
          <ListItemText primary="홈" />
        </ListItem>
        <ListItem button component={Link} to="/inventory-manager" onClick={() => onToggleSidebar(false)}>
          <ListItemText primary="재고 관리" />
        </ListItem>
        <ListItem button component={Link} to="/product-page" onClick={() => onToggleSidebar(false)}>
          <ListItemText primary="상품 페이지" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
