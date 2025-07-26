import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Our Team</h1>
        <p className="about-subtitle">Passionate builders, innovative thinkers, future engineers</p>
      </header>
      
      <section className="about-content">
        <div className="mission-section">
          <h2>🎯 Our Mission</h2>
          <p>
            To inspire young minds through hands-on robotics education, fostering creativity, 
            problem-solving skills, and teamwork while having fun with LEGO robotics.
          </p>
        </div>
        
        <div className="team-info">
          <div className="info-grid">
            <div className="info-card">
              <h3>👥 Team Size</h3>
              <p>12 dedicated members from grades 6-12</p>
            </div>
            <div className="info-card">
              <h3>📅 Founded</h3>
              <p>2018 - 6 years of innovation</p>
            </div>
            <div className="info-card">
              <h3>🏫 School</h3>
              <p>Central Middle & High School</p>
            </div>
            <div className="info-card">
              <h3>🏆 Achievements</h3>
              <p>15+ competition awards</p>
            </div>
          </div>
        </div>
        
        <div className="values-section">
          <h2>💡 Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>Innovation</h4>
              <p>We push the boundaries of what's possible with creative engineering solutions.</p>
            </div>
            <div className="value-item">
              <h4>Collaboration</h4>
              <p>Success comes through working together and supporting each member's growth.</p>
            </div>
            <div className="value-item">
              <h4>Learning</h4>
              <p>Every challenge is an opportunity to grow and discover new possibilities.</p>
            </div>
            <div className="value-item">
              <h4>Fun</h4>
              <p>We believe learning should be engaging, exciting, and enjoyable for everyone.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;