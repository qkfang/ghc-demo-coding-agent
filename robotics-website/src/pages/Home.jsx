import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="page-container">
      <div className="content">
        <h1>Welcome to Our Lego Robotics Team!</h1>
        <div className="hero-section">
          <p className="tagline">Building the Future, One Brick at a Time</p>
          <div className="highlights">
            <div className="highlight-card">
              <h3>🤖 Innovation</h3>
              <p>Creating cutting-edge robots with LEGO technology</p>
            </div>
            <div className="highlight-card">
              <h3>🏆 Competition</h3>
              <p>Competing in regional and national tournaments</p>
            </div>
            <div className="highlight-card">
              <h3>🎓 Learning</h3>
              <p>Developing STEM skills through hands-on experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
