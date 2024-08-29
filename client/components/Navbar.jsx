import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserTie, FaUniversity, FaCode, FaWind } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleDropdownClick = () => {
    setDropdownVisible(false); // Hide dropdown when an option is clicked
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <FaHome size={24} /> Home
          </Link>
        </li>
        <li
          className="navbar-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/ExperienceGPT" className="navbar-link">
            <FaUserTie size={24} /> Experiences
          </Link>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li>
                <Link
                  to="/software-developer-details"
                  className="dropdown-link"
                  onClick={handleDropdownClick}
                >
                  <FaUniversity size={20} /> Rowan University
                </Link>
              </li>
              <li>
                <Link
                  to="/lambda-peeler-details"
                  className="dropdown-link"
                  onClick={handleDropdownClick}
                >
                  <FaCode size={20} /> Lambda Peeler
                </Link>
              </li>
              <li>
                <Link
                  to="/geologist-details"
                  className="dropdown-link"
                  onClick={handleDropdownClick}
                >
                  <FaWind size={20} /> Alpine Ocean
                </Link>
              </li>
            </ul>
          )}
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
          position: relative;
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
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #444;
          padding: 10px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          list-style: none;
          margin: 0;
          padding: 0;
          z-index: 10;
        }
        .dropdown-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          padding: 5px 10px;
          font-size: 0.9rem;
        }
        .dropdown-link:hover {
          background-color: #555;
        }
        .dropdown-link svg {
          margin-right: 8px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
