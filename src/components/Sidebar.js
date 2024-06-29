import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/tables">Tables</Link></li>
          <li><Link to="/charts">Charts</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/kanban">Kanban</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;