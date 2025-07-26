import React from 'react';
import './Robotics.css';

function Robotics() {
  return (
    <div className="robotics">
      <header className="robotics-header">
        <h1>Our Robotics Projects</h1>
        <p className="robotics-subtitle">Engineering excellence through LEGO innovation</p>
      </header>
      
      <section className="robotics-content">
        <div className="intro-section">
          <h2>🤖 What We Build</h2>
          <p>
            Our team specializes in designing and building competitive robots using LEGO Mindstorms EV3 
            and NXT platforms. We participate in various robotics competitions including FIRST LEGO League 
            and local robotics challenges.
          </p>
        </div>
        
        <div className="projects-section">
          <h2>🏗️ Current Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>🚗 Autonomous Racing Bot</h3>
              <p>
                A high-speed robot designed for line-following races with advanced sensor integration 
                and optimized gear ratios for maximum speed and precision.
              </p>
              <div className="project-tech">
                <span>Color Sensor</span>
                <span>Gyro Sensor</span>
                <span>Custom Chassis</span>
              </div>
            </div>
            
            <div className="project-card">
              <h3>🦾 Multi-Task Explorer</h3>
              <p>
                Versatile robot capable of navigation, object manipulation, and environmental sensing. 
                Built for FIRST LEGO League challenges with modular attachments.
              </p>
              <div className="project-tech">
                <span>Ultrasonic Sensor</span>
                <span>Touch Sensors</span>
                <span>Modular Design</span>
              </div>
            </div>
            
            <div className="project-card">
              <h3>🎯 Precision Shooter</h3>
              <p>
                Competition robot designed for accuracy-based challenges, featuring a custom launching 
                mechanism and advanced targeting algorithms.
              </p>
              <div className="project-tech">
                <span>Motor Encoders</span>
                <span>Vision Processing</span>
                <span>PID Control</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="competitions-section">
          <h2>🏆 Competitions & Events</h2>
          <div className="competitions-list">
            <div className="competition-item">
              <h4>FIRST LEGO League</h4>
              <p>Annual international competition focusing on real-world challenges and research projects.</p>
            </div>
            <div className="competition-item">
              <h4>Regional Robotics Challenge</h4>
              <p>Local competition featuring custom challenges and head-to-head robot battles.</p>
            </div>
            <div className="competition-item">
              <h4>STEM Expo Demonstrations</h4>
              <p>Public showcases where we demonstrate our robots and teach others about robotics.</p>
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h2>🛠️ Skills We Develop</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Programming</h4>
              <ul>
                <li>LEGO Mindstorms EV3</li>
                <li>Scratch for Robotics</li>
                <li>Python basics</li>
                <li>Algorithm design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Engineering</h4>
              <ul>
                <li>Mechanical design</li>
                <li>Sensor integration</li>
                <li>Gear systems</li>
                <li>Structural optimization</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Problem Solving</h4>
              <ul>
                <li>Design thinking</li>
                <li>Testing & iteration</li>
                <li>Troubleshooting</li>
                <li>Creative solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Robotics;