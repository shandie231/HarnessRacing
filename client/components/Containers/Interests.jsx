import React from 'react';
import { useNavigate } from 'react-router-dom';

const Interests = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="interests-container">
      <h1 className="interests-title">Interests</h1>
      <div className="interests-content">
        <p className="interests-description">This page is currently in the works! Check back soon to see my interests and hobbies.</p>
        <button className="home-button" onClick={handleHomeClick}>
          Home
        </button>
      </div>
      <style jsx>{`
        .interests-container {
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }
        .interests-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .interests-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f5f5f5;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        .interests-description {
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

export default Interests;
