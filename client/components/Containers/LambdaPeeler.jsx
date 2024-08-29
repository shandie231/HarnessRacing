import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode } from 'react-icons/fa'; // Import FaCode from react-icons/fa

const LambdaPeeler = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <h1><FaCode size={40} /> Lambda Peeler</h1>
        <button className="return-button" onClick={() => navigate('/ExperienceGPT')}>Return to ExperienceGPT</button>
      </header>
      <section className="description">
        <div className="text">
          <h2 className="subtitle">Project Overview</h2>
          <p>Lambda Peeler is an open-source application designed to streamline the management of AWS Lambda functions and layers. The project was developed with a focus on providing a user-friendly interface for developers to view and manage their Lambda functions and related logs. It features integration with MongoDB for data storage and uses JWT for user authentication.</p>
          <h2 className="subtitle">Key Features</h2>
          <ul className="bullet-points">
            <li>
              <h3>Interactive Function Management</h3>
              <p>Efficiently manage AWS Lambda functions and layers with a clean, intuitive interface.</p>
            </li>
            <li>
              <h3>Real-Time Log Viewing</h3>
              <p>View and filter Lambda function logs to quickly diagnose and resolve issues.</p>
            </li>
            <li>
              <h3>Advanced Authentication</h3>
              <p>Secure user access with JWT-based authentication.</p>
            </li>
            <li>
              <h3>Collaborative Development</h3>
              <p>Developed collaboratively with a team of four, using modern web technologies including JavaScript, TypeScript, React, Node.js, and MongoDB.</p>
            </li>
          </ul>
        </div>
      </section>
      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .header h1 {
          display: flex;
          align-items: center;
          font-size: 2rem;
          margin: 0;
        }
        .return-button {
          background-color: #0070f3;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .return-button:hover {
          background-color: #005bb5;
        }
        .description {
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .text {
          flex: 1;
        }
        .subtitle {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .bullet-points {
          list-style: none;
          padding: 0;
        }
        .bullet-points li {
          margin-bottom: 15px;
        }
        .bullet-points h3 {
          font-size: 1.2rem;
          margin: 0;
        }
        .bullet-points p {
          margin: 5px 0 0;
          font-size: 1rem;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default LambdaPeeler;
