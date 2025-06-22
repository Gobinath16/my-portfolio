import React from "react";
import './Project.css';

const Projects = () => {
    return (
        <div className="project-container">
            <h2 className="project-title">API Test Automation Tool</h2>
            <a
                 className="github-link"
                 href="https://github.com/Gobinath16/API-Testing"
                target="_blank"
                rel="noopener noreferrer"
                title="View source code on GitHub"
            >
                   🔗 GitHub
            </a>

            <section className="project-section">
                <h2>📌 Overview</h2>
                <p>
                    This project is a Python-based API Testing tool designed to automate bulk API validation using input and output through Excel files. Built to streamline the API testing process for large datasets or repetitive endpoints, this tool improves productivity by automating status checks, response logging, and test result tracking.
                </p>
            </section>
            <section className="project-section">
                <h2>⚙️ Key Features</h2>
                <ul>
                    <li><strong>🔄 Bulk API Testing:</strong> Automates validation of multiple API endpoints in one go, eliminating the need for manual request-by-request testing.</li>
                    <li><strong>📄 Excel Integration:</strong> Reads API inputs from an Excel sheet and logs response codes directly back to the same sheet, keeping documentation and test results in one place.</li>
                    <li><strong>💾 Response Storage:</strong> Saves full API responses locally using the API name, making it easy to trace and debug failures later.</li>
                    <li><strong>🧩 Customizable Structure:</strong> Easily extendable to include response time validation, header checks, authentication handling, and more.</li>
                </ul>
            </section>
            <section className="project-section">
                <h2>🛠 Tech Stack</h2>
                <ul>
                    <li><strong>Language:</strong> Python</li>
                    <li><strong>Libraries:</strong> requests, pandas, openpyxl</li>
                    <li><strong>Tools:</strong> Excel, Local File Storage</li>
                </ul>
            </section>
            <section className="project-section">
                <h2>👨‍💻 My Role & Contributions</h2>
                <ul>
                    <li>Designed and developed the tool from scratch to assist with automated API validation across multiple client accounts.</li>
                    <li>Integrated Excel handling using pandas and openpyxl, ensuring user-friendly input and traceable outputs.</li>
                    <li>Implemented a logging mechanism to save both status codes and response payloads, improving traceability.</li>
                    <li>Optimized for daily QA use by incorporating reusability and parameterization to support multiple scenarios with minimal code changes.</li>
                </ul>
            </section>
            <section className="project-section">
                <h2>💡 Impact</h2>
                <ul>
                    <li>✅ Reduced manual API validation effort by 60%+</li>
                    <li>🕒 Saved hours per testing cycle by allowing bulk endpoint validation</li>
                    <li>📈 Improved debugging efficiency with local logging of full API responses</li>
                </ul>
            </section>
                
         <hr style={{ margin: '2rem 0', borderColor: '#666' }} />



            {/* Project 2 */}
            <h2 className="project-title">
                JSON Comparison Tool (GUI-Based)</h2>
                <a
                    className="github-link"
                    href="https://github.com/Gobinath16/JSON_Comparison"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View source code on GitHub"
                >
                    🔗 GitHub
                </a>
            
            <section className="project-section">
                <h2>📌 Overview</h2>
                <p>
                    The JSON Comparator Tool is a desktop-based Python application designed to compare two JSON files and clearly highlight their differences. Built with PyQt5...
                </p>
            </section>
            <section className="project-section">
                <h2>⚙️ Key Features</h2>
                <ul>
                    <li><strong>🔍 Side-by-Side Comparison:</strong> Compare two JSON files in a dual-pane editor for clear inspection.</li>
                    <li><strong>🎨 Color-Coded Differences:</strong> Green for left-side diffs, Red for right-side diffs.</li>
                    <li><strong>🖥️ GUI:</strong> Built with PyQt5 for smooth navigation.</li>
                    <li><strong>📁 Folder-Based Loading:</strong> Fetch JSON files from a selected folder.</li>
                </ul>
            </section>
            <section className="project-section">
                <h3>🛠 Tech Stack</h3>
                <ul>
                    <li><strong>Language:</strong> Python</li>
                    <li><strong>GUI Framework:</strong> PyQt5</li>
                    <li><strong>Libraries:</strong> json, os, PyQt5</li>
                </ul>
            </section>
            <section className="project-section">
                <h2>👨‍💻 My Role & Contributions</h2>
                <ul>
                    <li>Developed the GUI using PyQt5, focusing on usability.</li>
                    <li>Implemented JSON parsing and comparison logic.</li>
                    <li>Added visual highlighting for field-level differences.</li>
                    <li>Built file directory navigation for dynamic access.</li>
                </ul>
            </section>
            <section className="project-section">
                <h2>💡 Impact</h2>
                <ul>
                    <li>✅ Reduced manual JSON comparison effort by 70%+</li>
                    <li>💬 Used frequently for regression testing and validation</li>
                    <li>🛠️ Reusable across test/dev scenarios</li>
                </ul>
            </section>
            <section className="project-section">
                <h2>🚀 How to Run</h2>
                <ul>
                    <li>Clone the repository</li>
                    <li>Install dependencies: <code>pip install -r requirements.txt</code></li>
                    <li>Run: <code>python json_comparator.py</code></li>
                </ul>
            </section>
        </div>
        
        
    );
};

export default Projects;