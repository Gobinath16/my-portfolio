
import React from 'react';
import './experience.css'; 

const experience = () => {
  return (
<section className="experience-section">
  <h1>Experience</h1>

  <div className="experience-entry">
    <div className="exp-header">
      <h3 className="company">Arcadia</h3>
      <div className="exp-role-details">
        <span className="role">QA Engineer – Tariff Analytics</span>
        <div className="exp-meta">
          <span className="location">Chennai, India</span>
          <span className="duration">August 2023 – Present</span>
        </div>
      </div>
    </div>

    <p className="summary">
      As a QA Engineer specializing in utility tariff analytics and data validation, I focus on ensuring the reliability,
      accuracy, and quality of complex datasets and user-facing workflows through a combination of manual testing,
      automation, and collaboration with cross-functional teams.
    </p>

    <div className="exp-points">
      <p><span className="bullet-dot" /> <strong>Python-Based Automation & API Testing:</strong> Develop and maintain robust Python scripts to automate API validations and ensure data integrity across multiple platforms.</p>

      <p><span className="bullet-dot" /> <strong>SQL-Powered Data Verification:</strong> Use MySQL to write and execute queries that verify backend data accuracy—particularly for tariff records, charge classes, and energy usage analytics.</p>

      <p><span className="bullet-dot" /> <strong>Functional Automation with Playwright:</strong> Utilize Playwright for functional end-to-end automation testing of web applications.</p>

      <p><span className="bullet-dot" /> <strong>Exploratory & Regression Testing:</strong> Regularly conduct exploratory testing and regression testing before every release to validate feature integrity.</p>

      <p><span className="bullet-dot" /> <strong>Bug Tracking & Collaboration:</strong> Leverage JIRA to report, track, and document bugs while collaborating with developers and analysts for quick resolution.</p>

      <p><span className="bullet-dot" /> <strong>Technical Skills:</strong> API Testing, Functional Testing, Exploratory Testing, UAT, Regression Testing, Smoke Testing, Python, MySQL, Playwright, Postman, JIRA, GitHub, Snowflake, Test Documentation, Cron Jobs</p>
    </div>


     <hr style={{ margin: '2rem 0', borderColor: '#666' }} />

     
  </div>
  <div className="experience-entry">
  <div className="exp-header">
    <h3 className="company">Pearl Thoughts</h3>
    <div className="exp-role-details">
      <span className="role">Software Quality Analyst – Digital Media Marketing</span>
      <div className="exp-meta">
        <span className="location">Remote, TN</span>
        <span className="duration">April 2023 – August 2023</span>
      </div>
    </div>
  </div>

  <p className="summary">
    Worked as part of a QA team supporting web-based digital marketing platforms, focusing on delivering high-quality user
    experiences through functional, UI, and automation testing.
  </p>

  <div className="exp-points">
    <p><span className="bullet-dot" /> <strong>Test Planning & Execution:</strong> Designed and executed test cases to validate web applications across multiple browsers and devices, ensuring functional and non-functional requirements were met.</p>

    <p><span className="bullet-dot" /> <strong>UI & Functional Validation:</strong> Conducted detailed UI and UX testing to ensure design consistency and functional accuracy, helping to ship more user-friendly product updates.</p>

    <p><span className="bullet-dot" /> <strong>Automation with Playwright (JavaScript):</strong> Built automation scripts using Playwright in JavaScript to reduce manual efforts and improve regression testing speed and accuracy.</p>

    <p><span className="bullet-dot" /> <strong>Reporting & Stakeholder Communication:</strong> Generated test reports and performance insights using data from tools like Google Analytics, Facebook Ads Manager, and LinkedIn Campaign Manager to inform campaign and product decisions.</p>

    <p><span className="bullet-dot" /> <strong>Version Control & CI/CD Awareness:</strong> Used Git/GitHub for version control and collaborated with developers on CI/CD pipeline integration of automated tests for faster, more stable releases.</p>

    <p><span className="bullet-dot" /> <strong>Technical Skills:</strong> Manual Testing, Functional Testing, GUI Testing, Regression Testing, Playwright (JavaScript), Test Case Development, Test Execution, Bug Reporting, MySQL, JIRA, Git/GitHub, Digital Marketing Analytics</p>
  </div>
  </div>
  </section>
   
    )};

export default experience;
