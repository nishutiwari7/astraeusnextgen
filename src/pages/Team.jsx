import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Import the LinkedIn icon
import './Team.css';

const Team = () => {
  return (
    <div id="team" className="team-section">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-transparent bg-clip-text">The Founders</h2>
      <p className="team-description">
        Discover the visionary founders behind Astraeus NextGen, driving innovation and redefining the landscape of AI technology.
      </p>
      <div className="team-cards">
        <div className="team-card">
          <img src="Anush-Dhavale.jpg" alt="Founder 1" className="team-image" />
          <h2>Anush Dhavale</h2>
          <a href="https://www.linkedin.com/in/anush-dhavale-693488251" target="_blank" rel="noopener noreferrer" className="team-link">
            <FaLinkedin size={30} color="#0077B5" /> {/* LinkedIn icon with custom size and color */}
          </a>
        </div>
        <div className="team-card">
          <img src="Shreejit-Sen.jpg" alt="Founder 2" className="team-image" />
          <h2>Shreejit Sen</h2>
          <a href="https://mc.linkedin.com/in/shreejit-sen-7a7b75255" target="_blank" rel="noopener noreferrer" className="team-link">
            <FaLinkedin size={30} color="#0077B5" /> {/* LinkedIn icon with custom size and color */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
