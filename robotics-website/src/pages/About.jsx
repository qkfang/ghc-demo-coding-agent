import './About.css'

function About() {
  return (
    <div className="about">
      <div className="page-header">
        <h1>About Our Team</h1>
      </div>
      
      <div className="content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire young minds to explore science, technology, 
            engineering, and mathematics (STEM) through hands-on robotics experiences. 
            We believe that by working with LEGO robotics, students can develop 
            critical thinking, problem-solving, and teamwork skills that will serve 
            them throughout their lives.
          </p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We encourage creative thinking and innovative solutions to complex problems.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>We work together, respecting each other's ideas and contributions.</p>
            </div>
            <div className="value-card">
              <h3>Learning</h3>
              <p>We embrace challenges as opportunities to learn and grow.</p>
            </div>
            <div className="value-card">
              <h3>Fun</h3>
              <p>We believe that learning should be engaging and enjoyable.</p>
            </div>
          </div>
        </section>

        <section className="team-info">
          <h2>Meet Our Team</h2>
          <p>
            Our team consists of dedicated students from various backgrounds, each 
            bringing unique skills and perspectives. We have designers who focus on 
            building innovative robot structures, programmers who bring our robots 
            to life with code, and strategists who help us succeed in competitions.
          </p>
          <p>
            Together, we form a community of learners who support each other and 
            celebrate our achievements, both big and small.
          </p>
        </section>

        <section className="achievements">
          <h2>Our Achievements</h2>
          <ul className="achievements-list">
            <li>Regional Competition Finalists - 2024</li>
            <li>Innovation Award Winner - 2023</li>
            <li>Community Outreach Program - Ongoing</li>
            <li>STEM Workshop Organizers - Monthly Events</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About
