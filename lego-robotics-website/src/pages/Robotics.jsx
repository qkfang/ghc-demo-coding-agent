import './Page.css'

function Robotics() {
  return (
    <div className="page-container">
      <h1>Our Robotics Projects</h1>
      
      <div className="content-section">
        <div className="card">
          <h2>🏗️ Current Season Challenge</h2>
          <p>
            This season, we're tackling the "Cargo Connect" challenge, where robots must 
            autonomously navigate a field, pick up cargo blocks, and deliver them to 
            designated zones while avoiding obstacles.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>Autonomous navigation using color sensors</li>
            <li>Precision gripper mechanism for cargo handling</li>
            <li>Gyro-based turning for accurate positioning</li>
            <li>Optimized algorithms for maximum point scoring</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>🤖 Robot Technologies</h2>
          <div className="tech-section">
            <h3>Hardware</h3>
            <ul>
              <li>LEGO Mindstorms EV3 & Spike Prime systems</li>
              <li>Multiple motors for drive and manipulation</li>
              <li>Color, ultrasonic, and gyro sensors</li>
              <li>Custom-built attachments and mechanisms</li>
            </ul>
            
            <h3>Programming</h3>
            <ul>
              <li>Python and block-based programming</li>
              <li>PID control for smooth movements</li>
              <li>Sensor fusion for enhanced accuracy</li>
              <li>Modular code design for easy updates</li>
            </ul>
          </div>
        </div>
        
        <div className="card">
          <h2>🏆 Achievements</h2>
          <div className="achievements-list">
            <div className="achievement">
              <span className="medal">🥇</span>
              <div>
                <strong>Regional Champions 2024</strong>
                <p>First place in robot performance</p>
              </div>
            </div>
            <div className="achievement">
              <span className="medal">🥈</span>
              <div>
                <strong>Innovation Award 2023</strong>
                <p>Recognized for creative problem-solving</p>
              </div>
            </div>
            <div className="achievement">
              <span className="medal">🥉</span>
              <div>
                <strong>Teamwork Award 2023</strong>
                <p>Excellence in collaboration</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2>📈 Design Process</h2>
          <ol className="process-list">
            <li><strong>Research:</strong> Analyze challenge rules and constraints</li>
            <li><strong>Brainstorm:</strong> Generate creative solutions as a team</li>
            <li><strong>Prototype:</strong> Build and test initial designs</li>
            <li><strong>Iterate:</strong> Refine based on testing results</li>
            <li><strong>Program:</strong> Develop and optimize robot code</li>
            <li><strong>Compete:</strong> Put our robot to the test!</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Robotics
