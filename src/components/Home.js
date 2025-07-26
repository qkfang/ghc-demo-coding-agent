import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Our Lego Robotics Team</h1>
        <p className="home-subtitle">Building the future, one brick at a time</p>
      </header>
      
      <section className="home-content">
        <div className="hero-section">
          <h2>🤖 Innovation Through Play</h2>
          <p>
            Our team combines creativity, engineering, and teamwork to build amazing robots 
            using LEGO Mindstorms and other robotic platforms. We compete in various robotics 
            competitions and love sharing our passion for STEM education.
          </p>
        </div>
        
        <div className="highlights">
          <div className="highlight-card">
            <h3>🏆 Championships</h3>
            <p>Multiple regional and state competition victories</p>
          </div>
          <div className="highlight-card">
            <h3>🔧 Innovation</h3>
            <p>Creative problem-solving with cutting-edge designs</p>
          </div>
          <div className="highlight-card">
            <h3>🤝 Teamwork</h3>
            <p>Collaborative learning and peer mentorship</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;