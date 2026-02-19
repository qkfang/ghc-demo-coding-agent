import React from 'react';
import './Robotics.css';

function Robotics() {
  return (
    <div className="page-container">
      <div className="content">
        <h1>Our Robotics Projects</h1>
        <div className="robotics-section">
          <div className="robot-card">
            <h2>Competition Robot 2024</h2>
            <div className="robot-details">
              <p><strong>Features:</strong></p>
              <ul>
                <li>Advanced sensor integration</li>
                <li>Autonomous navigation system</li>
                <li>Custom-built gripper mechanism</li>
                <li>Optimized for speed and accuracy</li>
              </ul>
            </div>
          </div>
          
          <div className="technologies">
            <h2>Technologies We Use</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h3>LEGO Mindstorms</h3>
                <p>The foundation of our robotic systems</p>
              </div>
              <div className="tech-item">
                <h3>Python Programming</h3>
                <p>Writing intelligent control algorithms</p>
              </div>
              <div className="tech-item">
                <h3>EV3 Software</h3>
                <p>Visual programming for quick prototyping</p>
              </div>
              <div className="tech-item">
                <h3>Sensor Technology</h3>
                <p>Color, touch, ultrasonic, and gyro sensors</p>
              </div>
            </div>
          </div>
          
          <div className="achievements">
            <h2>Recent Achievements</h2>
            <ul>
              <li>🥇 1st Place - Regional Championship 2023</li>
              <li>🥈 2nd Place - State Finals 2023</li>
              <li>🏅 Innovation Award - Spring Tournament 2024</li>
              <li>⭐ Best Robot Design - Fall Competition 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Robotics;
