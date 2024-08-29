import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUniversity, FaCode, FaWind } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <FaHome size={24} /> ExperienceGPT
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/software-developer-details" className="navbar-link">
            <FaUniversity size={24} /> Rowan University
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/lambda-peeler-details" className="navbar-link">
            <FaCode size={24} /> Lambda Peeler
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/geologist-details" className="navbar-link">
            <FaWind size={24} /> Windfarm Geologist
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          background-color: #333;
          padding: 10px 20px;
          color: white;
        }
        .navbar-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-item {
          margin-right: 20px;
        }
        .navbar-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          font-size: 1rem;
        }
        .navbar-link:hover {
          text-decoration: underline;
        }
        .navbar-link svg {
          margin-right: 8px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
