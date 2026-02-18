function Robotics() {
  return (
    <div className="page">
      <h1>Our Robotics Journey</h1>
      <div className="content">
        <section className="robotics-section">
          <h2>🔧 Robot Design</h2>
          <p>
            Our robots are built using LEGO Mindstorms and SPIKE Prime kits.
            We design our robots to be efficient, reliable, and adaptable to
            various competition challenges.
          </p>
          <div className="features">
            <span className="feature-tag">Modular Design</span>
            <span className="feature-tag">Sensor Integration</span>
            <span className="feature-tag">Optimized Movement</span>
          </div>
        </section>

        <section className="robotics-section">
          <h2>💻 Programming</h2>
          <p>
            We program our robots using Python and block-based programming
            languages. Our code focuses on autonomous navigation, sensor
            feedback, and precise task execution.
          </p>
          <div className="features">
            <span className="feature-tag">Autonomous Control</span>
            <span className="feature-tag">Sensor Processing</span>
            <span className="feature-tag">Path Planning</span>
          </div>
        </section>

        <section className="robotics-section">
          <h2>🏆 Competitions</h2>
          <p>
            We participate in various LEGO robotics competitions throughout
            the year. These competitions challenge us to solve real-world
            problems using robotics and programming.
          </p>
          <div className="competition-list">
            <div className="competition-item">
              <strong>Regional Championship</strong>
              <p>Qualified for state finals</p>
            </div>
            <div className="competition-item">
              <strong>Innovation Project</strong>
              <p>Best Solution Award</p>
            </div>
            <div className="competition-item">
              <strong>Robot Design</strong>
              <p>Excellence in Engineering</p>
            </div>
          </div>
        </section>

        <section className="robotics-section">
          <h2>🎯 Current Season Challenge</h2>
          <p>
            This season, we're tackling challenges related to sustainable
            transportation and environmental solutions. Our robot must complete
            multiple missions autonomously within a set time limit.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Robotics
