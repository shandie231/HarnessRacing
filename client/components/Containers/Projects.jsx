import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-content">
        <p className="projects-description">This page is currently in the works! Check back soon to see the projects I’ve been working on.</p>
        <button className="home-button" onClick={handleHomeClick}>
          Home
        </button>
      </div>
      <style jsx>{`
        .projects-container {
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }
        .projects-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .projects-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f5f5f5;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        .projects-description {
          font-size: 1.5rem;
          color: #333;
          text-align: center;
          margin-bottom: 40px;
        }
        .home-button {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background-color: #0070f3;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .home-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Projects;
