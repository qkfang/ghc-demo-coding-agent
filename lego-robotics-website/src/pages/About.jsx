import './Page.css'

function About() {
  return (
    <div className="page-container">
      <h1>About Our Team</h1>
      
      <div className="content-section">
        <div className="card">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, our LEGO Robotics Team brings together students from diverse 
            backgrounds who share a common passion for STEM education and innovation. 
            What started as a small after-school club has grown into a competitive team 
            that represents our school in regional and national competitions.
          </p>
        </div>
        
        <div className="card">
          <h2>Team Values</h2>
          <ul className="values-list">
            <li><strong>Innovation:</strong> We constantly push the boundaries of what's possible with LEGO robotics</li>
            <li><strong>Collaboration:</strong> Every team member's ideas and contributions are valued</li>
            <li><strong>Learning:</strong> We embrace challenges as opportunities to grow</li>
            <li><strong>Fun:</strong> We believe learning should be engaging and enjoyable</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-icon">👨‍💻</div>
              <h3>Programming Team</h3>
              <p>Develops the code that brings our robots to life</p>
            </div>
            <div className="team-member">
              <div className="member-icon">🔧</div>
              <h3>Build Team</h3>
              <p>Designs and constructs innovative robot mechanisms</p>
            </div>
            <div className="team-member">
              <div className="member-icon">📊</div>
              <h3>Strategy Team</h3>
              <p>Plans competition approaches and analyzes performance</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2>Join Us!</h2>
          <p>
            Interested in joining our team? We welcome new members of all skill levels. 
            No prior robotics experience required – just bring your curiosity and 
            enthusiasm to learn!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
