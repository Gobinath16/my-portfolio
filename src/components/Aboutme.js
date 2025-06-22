// src/components/AboutMe.js
import React from 'react';
import './Aboutme.css'; // Assuming you have a CSS file for styling

const AboutMe = () => {
  return (
    <section className='about-me'>
      <h1>👋 About Me</h1>
      <p>
        Hey there! I’m Gobinath M, a passionate QA Test Engineer with over 2.4 years of hands-on experience in ensuring software quality, accuracy, and performance across a range of domains—from digital media to energy analytics.
      </p>
      <h2>🚀 My Journey So Far</h2>
      <p>
        I began my QA journey shortly after graduating with a degree in Mechatronics Engineering from Coimbatore Institute of Engineering and Technology. Drawn to software testing by curiosity and a love for structured problem-solving, I started working at Pearl Thoughts, where I tested digital marketing platforms and developed functional UI test cases. I also gained exposure to marketing analytics tools like Google Analytics, LinkedIn Campaign Manager, and Facebook Ads Manager, while contributing to test automation using Playwright with JavaScript.
      </p>
      <p>
        In 2023, I joined Arcadia, where my role became more technical and data-intensive. I work closely with tariff analytics and energy datasets, validating API responses, checking data integrity using SQL, and building smart automation scripts with Python and Playwright. Whether it's writing regression tests, automating form validations, or ensuring smooth API functionality, my focus is on delivering accurate, reliable, and high-performance software systems.
      </p>
      <h2>🧪 What I Do Best</h2>
      <ul>
        <li>✅ Automating API validations using Python to ensure backend reliability</li>
        <li>✅ Building functional end-to-end tests with Playwright</li>
        <li>✅ Writing SQL queries to verify energy tariff and charge-class data</li>
        <li>✅ Designing and executing regression, smoke, and exploratory test cycles</li>
        <li>✅ Logging and managing issues with JIRA, contributing to UAT and production readiness</li>
        <li>✅ Collaborating with cross-functional teams to shape and refine product quality</li>
      </ul>
      <h2>🧰 Tech Stack</h2>
      <p>
        <strong>Languages &amp; Tools:</strong> Python, Playwright, MySQL, JavaScript, Postman, Git, GitHub, JIRA, Snowflake<br />
        <strong>Testing Types:</strong> API Testing, Functional Testing, Regression Testing, Smoke Testing, UAT, Exploratory Testing<br />
        <strong>Other Tools:</strong> Google Analytics, Facebook Ads Manager, LinkedIn Campaign Manager, MS Excel, Cron Jobs
      </p>
      <h2>🔍 How I Work</h2>
      <p>
        I believe QA is more than just finding bugs—it's about building trust in software. I take a holistic approach to testing, combining technical skills with curiosity to understand how systems behave and how they can break. I enjoy automating where it makes sense, but I’m also not afraid to dig into edge cases with hands-on exploratory testing.
      </p>
      <h2>📈 What’s Next</h2>
      <p>
        I’m continuously learning and currently leveling up in DevOps and advanced end-to-end automation frameworks. I'm excited about using test automation not just as a validator—but as a powerful enabler for faster, smarter development workflows.
      </p>
    </section>
  );
};

export default AboutMe;
