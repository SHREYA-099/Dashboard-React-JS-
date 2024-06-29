import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';

const Header = ({ toggleSidebar, children, className }) => {
  const theme = useTheme();

  return (
    <header
      className={`header ${className}`}
      style={{
        backgroundColor: theme.components.header.backgroundColor,
        color: theme.components.header.color,
      }}
    >
      <div className="header-content">
        <IconButton onClick={toggleSidebar} edge="start">
          <MenuIcon style={{ color: theme.components.header.color }} />
        </IconButton>
        <h1>Admin Dashboard</h1>
        {children}
      </div>
    </header>
  );
};

export default Header;