import './Robotics.css'

const missions = [
  { id: 1, name: 'Launch', points: 20, status: 'completed', description: 'Launch the satellite into orbit.' },
  { id: 2, name: 'Solar Panel', points: 30, status: 'completed', description: 'Flip all solar panels to face the sun.' },
  { id: 3, name: 'Space Station', points: 25, status: 'in-progress', description: 'Dock the module with the space station.' },
  { id: 4, name: 'Rover Deploy', points: 35, status: 'in-progress', description: 'Deploy the rover onto the surface.' },
  { id: 5, name: 'Astronaut Rescue', points: 40, status: 'planned', description: 'Return the astronaut safely to base.' },
  { id: 6, name: 'Asteroid Defense', points: 45, status: 'planned', description: 'Deflect the asteroid from its path.' },
]

const stats = [
  { label: 'Season Wins', value: '8' },
  { label: 'Best Score', value: '325' },
  { label: 'Missions Completed', value: '12' },
  { label: 'Tournaments', value: '5' },
]

function Robotics() {
  return (
    <div className="robotics">
      <section className="robotics-hero">
        <h1>Our <span className="highlight">Robot</span></h1>
        <p>
          Meet NOVA — our custom-built LEGO MINDSTORMS robot designed to tackle the 2025 season
          challenge: <strong>SUBMERGED™</strong>. Every component is carefully engineered and
          programmed for maximum mission efficiency.
        </p>
      </section>

      <section className="robot-showcase">
        <div className="robot-display">
          <div className="robot-big">🤖</div>
          <div className="robot-name">NOVA v3.2</div>
          <div className="robot-tagline">Built for Speed. Programmed for Precision.</div>
        </div>
        <div className="robot-specs">
          <h2>Robot Specs</h2>
          <table className="specs-table">
            <tbody>
              <tr><td>🧱 Components</td><td>LEGO MINDSTORMS EV3</td></tr>
              <tr><td>⚙️ Motors</td><td>4 large + 2 medium motors</td></tr>
              <tr><td>📡 Sensors</td><td>Color, Ultrasonic, Gyro, Touch</td></tr>
              <tr><td>💻 Language</td><td>EV3 Scratch / Python</td></tr>
              <tr><td>⏱️ Avg Run Time</td><td>~150 seconds</td></tr>
              <tr><td>🏋️ Weight</td><td>1.2 kg</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="stats-section">
        <h2>Season Stats</h2>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="missions-section">
        <h2>Mission Board</h2>
        <div className="missions-grid">
          {missions.map((mission) => (
            <div key={mission.id} className={`mission-card status-${mission.status}`}>
              <div className="mission-header">
                <span className="mission-name">{mission.name}</span>
                <span className={`mission-badge ${mission.status}`}>
                  {mission.status === 'completed' ? '✅ Done' :
                   mission.status === 'in-progress' ? '🔄 In Progress' : '📋 Planned'}
                </span>
              </div>
              <p className="mission-description">{mission.description}</p>
              <div className="mission-points">+{mission.points} pts</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Robotics
