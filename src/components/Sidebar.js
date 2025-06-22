import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveSection }) => {
  const [collapsed, setCollapsed] = useState(true);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setCollapsed(true);
    }
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setCollapsed(true); // Collapse sidebar after selecting a section
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      className={`sidebar ${collapsed ? 'collapsed' : ''}`}
      ref={sidebarRef}
    >
      <div className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </div>

      {!collapsed && (
        <ul className="nav-links">
          <li>
            <button onClick={() => handleNavClick('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavClick('career')}>Career</button>
          </li>
          <li>
            <button onClick={() => handleNavClick('projects')}>Projects</button>
          </li>
          <li>

          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;

