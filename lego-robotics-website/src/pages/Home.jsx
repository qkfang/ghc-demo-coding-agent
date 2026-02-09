import './Page.css'

function Home() {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>Welcome to Our Lego Robotics Team</h1>
        <p className="tagline">Building Tomorrow's Innovators Today</p>
      </div>
      
      <div className="content-section">
        <div className="card">
          <h2>🤖 Who We Are</h2>
          <p>
            We are a passionate team of young engineers and programmers dedicated to 
            exploring the exciting world of robotics through LEGO technology.
          </p>
        </div>
        
        <div className="card">
          <h2>🏆 Our Mission</h2>
          <p>
            To inspire creativity, foster teamwork, and develop problem-solving skills 
            through hands-on robotics challenges and competitions.
          </p>
        </div>
        
        <div className="card">
          <h2>🎯 What We Do</h2>
          <p>
            Design, build, and program robots using LEGO Mindstorms and Spike Prime. 
            We compete in regional and national robotics competitions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
