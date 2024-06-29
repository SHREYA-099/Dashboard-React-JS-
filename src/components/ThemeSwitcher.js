import React from 'react';
import { Switch } from '@mui/material';

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <Switch onChange={toggleTheme} />
  );
};

export default ThemeSwitcher;