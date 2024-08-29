import React from 'react';
import { FaMapMarkedAlt, FaFilter, FaLayerGroup, FaUniversity, FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RowanUniversity = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Software Developer at Rowan University</h1>
        <button className="return-button" onClick={handleReturn}>Return to ExperienceGPT</button>
      </header>
      <section className="description">
        <div className="icon">
          <FaMapMarkedAlt size={60} />
        </div>
        <div className="text">
          <h2 className="subtitle">Key Responsibilities & Achievements</h2>
          <ul className="bullet-points">
            <li>
              <h3><FaMapMarkedAlt size={20} /> Developed and maintained an interactive state map</h3>
              <p>Designed and implemented a comprehensive map of New Jersey, integrating various land parcel data and enabling dynamic feature filtering and overlaying.</p>
            </li>
            <li>
              <h3><FaFilter size={20} /> Advanced Filtering and Overlay Capabilities</h3>
              <p>Engineered robust filter options for ecological, environmental, and developed land features, along with overlays for water levels, forests, wetlands, and historical imagery.</p>
            </li>
            <li>
              <h3><FaLayerGroup size={20} /> Customizable Basemap Overlays</h3>
              <p>Implemented multiple basemap options including infrared views and historical maps to enhance data visualization and analysis.</p>
            </li>
            <li>
              <h3><FaUniversity size={20} /> Polygon Drawing and Feature Categorization Tool</h3>
              <p>Developed a tool for users to draw polygons on land parcels, enabling detailed categorization of features such as agricultural land, barns, and waterways.</p>
            </li>
            <li>
              <h3><FaCode size={20} /> Debugging and Error Resolution</h3>
              <p>Provided ongoing maintenance, debugging, and error resolution to address user-reported issues and ensure optimal system performance.</p>
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

export default RowanUniversity;
