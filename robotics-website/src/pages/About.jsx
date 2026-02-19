import React from 'react';
import './About.css';

function About() {
  return (
    <div className="page-container">
      <div className="content">
        <h1>About Our Team</h1>
        <div className="about-section">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              We are a passionate group of students dedicated to learning robotics,
              programming, and engineering principles through the exciting world of
              LEGO robotics competitions.
            </p>
          </div>
          
          <div className="values">
            <h2>Our Values</h2>
            <ul>
              <li><strong>Teamwork:</strong> We work together to achieve our goals</li>
              <li><strong>Innovation:</strong> We embrace creative problem-solving</li>
              <li><strong>Excellence:</strong> We strive for the best in everything we do</li>
              <li><strong>Learning:</strong> We never stop growing and improving</li>
            </ul>
          </div>
          
          <div className="team-info">
            <h2>Team History</h2>
            <p>
              Founded in 2020, our team has grown from a small group of enthusiasts
              to a competitive force in the LEGO robotics community. We participate
              in various competitions throughout the year and continuously work on
              improving our skills and robots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
