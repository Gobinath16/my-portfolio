// src/components/Header.js
import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header>
      <div className="header-main">
        <div className="name-location">
          <h1>Gobinath M</h1>
          <h2>Ariyalur, TN</h2>
          <h2>QA Engineer</h2>
        </div>
        <div className="contact-info">
          <p><strong>Email:</strong> gobinathm.16@gmail.com</p>
          <p><strong>LinkedIn: </strong>
            <a
              href="https://www.linkedin.com/in/gobinath-mathi/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/Gobinath
            </a>
          </p>
          <p><strong>GitHub: </strong>
            <a
              href="https://github.com/Gobinath16"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Gobinath
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
