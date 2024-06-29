import React, { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import './App.css'; // Ensure you import the main CSS file

const App = () => {
  const [themeMode, setThemeMode] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const theme = useMemo(
    () => (themeMode === 'light' ? lightTheme : darkTheme),
    [themeMode]
  );

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {isSidebarOpen && <Sidebar />}
        <Header className={isSidebarOpen ? 'with-sidebar' : 'without-sidebar'} toggleSidebar={toggleSidebar}>
          <ThemeSwitcher toggleTheme={toggleTheme} />
        </Header>
        <div className={`content ${isSidebarOpen ? 'with-sidebar' : 'without-sidebar'}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;