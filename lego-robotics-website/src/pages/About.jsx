import './About.css'

const teamMembers = [
  { name: 'Alex Chen', role: 'Team Captain', emoji: '👑', bio: 'Alex leads strategy sessions and coordinates our competition prep.' },
  { name: 'Maya Patel', role: 'Lead Programmer', emoji: '💻', bio: 'Maya writes the autonomous programs that guide our robot through missions.' },
  { name: 'Jordan Smith', role: 'Robot Builder', emoji: '🔧', bio: 'Jordan designs and assembles the mechanical structure of our robot.' },
  { name: 'Sam Rivera', role: 'Research Specialist', emoji: '🔬', bio: 'Sam leads our Innovation Project and presents findings to judges.' },
  { name: 'Taylor Kim', role: 'Core Values Ambassador', emoji: '🌟', bio: 'Taylor ensures the team upholds FIRST LEGO League Core Values.' },
  { name: 'Chris Lee', role: 'Robot Tester', emoji: '🧪', bio: 'Chris runs test cycles and documents mission scores for every build iteration.' },
]

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About <span className="highlight">RoboLeague</span></h1>
        <p>
          We are a team of dedicated students who love robotics, coding, and creative problem solving.
          Founded in 2022, RoboLeague competes in the FIRST LEGO League (FLL) competition every year,
          challenging ourselves to grow as engineers and teammates.
        </p>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            To inspire a love of science, technology, engineering, and math (STEM) in young people
            through hands-on robotics experiences, friendly competition, and community outreach.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">💡</div>
          <h2>Our Values</h2>
          <ul>
            <li>✅ Gracious Professionalism</li>
            <li>✅ Coopertition (cooperation + competition)</li>
            <li>✅ Continuous learning</li>
            <li>✅ Community impact</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card">
              <div className="member-avatar">{member.emoji}</div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="coaches-section">
        <h2>Our Coaches</h2>
        <p>
          We are grateful for our amazing coaches who volunteer their time to mentor, guide,
          and support us throughout the season. Their expertise in engineering and education
          makes RoboLeague possible!
        </p>
        <div className="coaches-grid">
          <div className="coach-card">
            <span className="coach-emoji">🧑‍🏫</span>
            <p><strong>Coach Wilson</strong> – Head Coach</p>
          </div>
          <div className="coach-card">
            <span className="coach-emoji">👩‍💻</span>
            <p><strong>Coach Nguyen</strong> – Programming Mentor</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
