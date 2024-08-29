import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUniversity, FaCode, FaWind } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Developer at Rowan University',
    description: 'Worked on mapping land parcel information in NJ with various filters and overlays. Involved in refactoring a massive codebase into more manageable segments.',
    link: '/software-developer-details',
    icon: <FaUniversity size={40} /> // Icon for Rowan University
  },
  {
    title: 'Geologist in Offshore Windfarm Industry',
    description: 'Managed backdeck operations, operated cranes, trained new crew members, led geological lab work, and built an application for data input and deliverables.',
    link: '/geologist-details',
    icon: <FaWind size={40} /> // Icon for Windfarm Geologist
  },
  {
    title: 'Creator of Lambda Peeler',
    description: 'Developed an open-source application for managing AWS Lambda functions and layers, featuring a frontend with React and a backend with Node.js.',
    link: '/lambda-peeler-details',
    icon: <FaCode size={40} /> // Icon for Lambda Peeler
  },
];

const ExperienceGPT = () => {
  const navigate = useNavigate();

  const handleButtonClick = (link) => {
    navigate(link);
  };

  return (
    <div className="experience-container">
      <h1 className="experience-title">Professional Experience</h1>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="experience-icon">
              {experience.icon}
            </div>
            <div className="experience-content">
              <h2 className="experience-title">{experience.title}</h2>
              <p className="experience-description">{experience.description}</p>
              <button
                className="experience-button"
                onClick={() => handleButtonClick(experience.link)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .experience-container {
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }
        .experience-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .experience-item {
          display: flex;
          align-items: center;
          background-color: #f5f5f5;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .experience-icon {
          margin-right: 20px;
        }
        .experience-content {
          flex: 1;
        }
        .experience-title {
          font-size: 1.5rem;
          margin: 0;
        }
        .experience-description {
          margin: 10px 0;
          font-size: 1rem;
          color: #333;
        }
        .experience-button {
          background-color: #0070f3;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .experience-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default ExperienceGPT;
