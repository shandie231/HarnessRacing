import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/ProcSmall.png';
import { gsap } from 'gsap';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo('.section', { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  const goToExperience = () => {
    navigate('/ExperienceGPT'); // Link to your ExperienceGPT page
  };

  const goToProjects = () => {
    navigate('/projects'); // Link to your Projects page
  };

  const goToInterests = () => {
    navigate('/interests'); // Link to your Interests page
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="profile">
          <img src={profileImg} alt="Michael Shand" className="profile-photo" />
          {/* I hate this below. It needs to change */}
          <h1 className="name">Hello, I'm Michael Shand</h1> 
        </div>
        <br></br>
        <h2 className="title">Software Engineer</h2>
        <h2 className="title">&</h2>
        <h2 className="title">Project Manager</h2>

      </header>
      <section className="brief-experience section">
        <h2 className="section-title">Professional Experience</h2>
        <p className="experience-summary">Driven software engineer with a passion for developing cutting-edge solutions. Leveraging a diverse background to bring creativity and technical expertise to every project.</p>
        <button className="button" onClick={goToExperience}>Explore My Journey</button>
      </section>
      {/* <section className="projects section">
        <h2 className="section-title">Projects</h2>
        <p className="projects-summary">Showcasing a portfolio of dynamic projects that blend innovation with functionality. Discover how my solutions can drive success and elevate your business.</p>
        <button className="button" onClick={goToProjects}>See My Work</button>
      </section>
      <section className="interests section">
        <h2 className="section-title">Interests</h2>
        <p className="interests-summary">Explore my passions and interests that fuel my creativity and drive. From technology trends to personal hobbies, find out what inspires me.</p>
        <button className="button" onClick={goToInterests}>Discover More</button>
      </section> */}
      <style jsx>{`
        .home-container {
          text-align: center;
          padding: 30px;
          max-width: 1400px;
          margin: auto;
          background: linear-gradient(135deg, #f7f8f9, #e1e9f0);
          border-radius: 10px;
        }
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 50px;
        }
        .profile {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .profile-photo {
          border-radius: 50%;
          width: 120px;
          height: 120px;
          object-fit: cover;
          border: 4px solid #0070f3;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .name {
          font-size: 2.5rem;
          color: #333;
          margin: 0;
          font-weight: bold;
        }
        .title {
          font-size: 1.8rem;
          color: #0070f3;
          margin: 0;
        }
        .brief-experience, .projects, .interests {
          margin-bottom: 50px;
        }
        .section-title {
          font-size: 2rem;
          color: #0070f3;
          margin-bottom: 15px;
          font-weight: bold;
          border-bottom: 2px solid #0070f3;
          display: inline-block;
          padding-bottom: 10px;
        }
        .experience-summary, .projects-summary, .interests-summary {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 20px;
        }
        .button {
          background-color: #0070f3;
          color: #fff;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: bold;
          transition: background-color 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .button:hover {
          background-color: #005bb5;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default HomePage;
