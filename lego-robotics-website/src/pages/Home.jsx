import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🏆 Season 2025</div>
          <h1 className="hero-title">
            Welcome to <span className="highlight">RoboLeague</span>
          </h1>
          <p className="hero-subtitle">
            Building the future one LEGO brick at a time. We are a passionate team of
            young engineers competing in FIRST LEGO League robotics competitions.
          </p>
          <div className="hero-buttons">
            <Link to="/robotics" className="btn btn-primary">Our Robot</Link>
            <Link to="/about" className="btn btn-secondary">Meet the Team</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="robot-emoji">🤖</div>
          <div className="lego-bricks">
            <span>🧱</span><span>🧱</span><span>🧱</span>
          </div>
        </div>
      </section>

      <section className="highlights">
        <h2>Why Join RoboLeague?</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="card-icon">⚙️</div>
            <h3>Engineering</h3>
            <p>Design and build real working robots using LEGO Technic and MINDSTORMS components.</p>
          </div>
          <div className="highlight-card">
            <div className="card-icon">💻</div>
            <h3>Programming</h3>
            <p>Write code to control your robot and solve mission challenges autonomously.</p>
          </div>
          <div className="highlight-card">
            <div className="card-icon">🤝</div>
            <h3>Teamwork</h3>
            <p>Collaborate with teammates to strategize, iterate, and bring your best robot to competition.</p>
          </div>
          <div className="highlight-card">
            <div className="card-icon">🏅</div>
            <h3>Competition</h3>
            <p>Compete at local, regional, and national FIRST LEGO League tournaments each season.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Build Something Amazing?</h2>
        <p>Join us for our next season and help push boundaries in robotics and innovation.</p>
        <Link to="/about" className="btn btn-primary">Get to Know Us</Link>
      </section>
    </div>
  )
}

export default Home
