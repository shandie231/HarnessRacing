import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

const WindfarmGeologist = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/ExperienceGPT');
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Windfarm Geologist</h1>
        <button className="return-button" onClick={handleReturn}>Return to ExperienceGPT</button>
      </header>
      <section className="description">
        <div className="icon">
          <FontAwesomeIcon icon={faWind} size="3x" />
        </div>
        <div className="text">
          <h2 className="subtitle">Key Responsibilities & Achievements</h2>
          <ul className="bullet-points">
            <li>
              <h3><FontAwesomeIcon icon={faWind} size="1x" /> Managed Backdeck Operations</h3>
              <p>Oversaw a team of 10 in high-stress and hazardous conditions, ensuring safe and efficient backdeck operations.</p>
            </li>
            <li>
              <h3><FontAwesomeIcon icon={faWind} size="1x" /> Crane Operation and Training</h3>
              <p>Operated cranes and trained new crew members and crane operators, serving as the sole crane operator for two years.</p>
            </li>
            <li>
              <h3><FontAwesomeIcon icon={faWind} size="1x" /> Geological Testing and Data Management</h3>
              <p>Conducted geological tests on seafloor samples, recorded data, and developed an application for generating client deliverables with a 48-hour turnaround time.</p>
            </li>
            <li>
              <h3><FontAwesomeIcon icon={faWind} size="1x" /> Crew Training and Field Project Management</h3>
              <p>Trained new crew members every 6-9 weeks on deck operations, geological lab work, and data input. Acted as Field Project Manager, ensuring smooth communication with clients and vessel crew.</p>
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
        .title {
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
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .icon {
          flex-shrink: 0;
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
          display: flex;
          align-items: center;
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

export default WindfarmGeologist;
