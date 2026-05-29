export default function Robotics() {
  return (
    <div className="page">
      <section className="hero">
        <span className="eyebrow">Field spotlight</span>
        <h1>Robotics: machines that sense, think, and act.</h1>
        <p className="lead">
          Robotics blends mechanical engineering, electronics, and computer
          science to build systems that perceive the world and operate within
          it — from factory floors to your living room.
        </p>
      </section>

      <section>
        <h2 className="section-title">Core areas</h2>
        <p className="section-subtitle">A quick map of where the field is most active today.</p>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon" aria-hidden="true">🗺️</div>
            <h3>Navigation & mapping</h3>
            <p>SLAM, path planning, and autonomous movement through real spaces.</p>
          </div>
          <div className="card">
            <div className="card-icon" aria-hidden="true">🦾</div>
            <h3>Manipulation</h3>
            <p>Grasping, dexterous handling, and learning from demonstration.</p>
          </div>
          <div className="card">
            <div className="card-icon" aria-hidden="true">👁️</div>
            <h3>Perception</h3>
            <p>Computer vision, sensor fusion, and 3D scene understanding.</p>
          </div>
          <div className="card">
            <div className="card-icon" aria-hidden="true">🤝</div>
            <h3>Human–robot interaction</h3>
            <p>Safe, natural collaboration between people and machines.</p>
          </div>
        </div>
      </section>

      <section className="split">
        <div>
          <h2 className="section-title">Where you'll see it</h2>
          <p className="section-subtitle">Robots are quietly showing up almost everywhere.</p>
          <ul className="timeline">
            <li>Warehouses moving billions of packages every year.</li>
            <li>Surgical assistants performing delicate, sub-millimeter work.</li>
            <li>Drones inspecting bridges, farms, and power lines.</li>
            <li>Home robots that vacuum, mow, and cook alongside us.</li>
          </ul>
        </div>
        <div>
          <h2 className="section-title">By the numbers</h2>
          <p className="section-subtitle">A few illustrative figures from the industry.</p>
          <div className="stats">
            <div className="stat">
              <div className="stat-value">3.9M</div>
              <div className="stat-label">Industrial robots in operation</div>
            </div>
            <div className="stat">
              <div className="stat-value">+10%</div>
              <div className="stat-label">Annual install growth</div>
            </div>
            <div className="stat">
              <div className="stat-value">∞</div>
              <div className="stat-label">Things still to build</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

