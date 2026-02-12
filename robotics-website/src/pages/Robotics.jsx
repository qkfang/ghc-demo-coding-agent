import './Robotics.css'

function Robotics() {
  return (
    <div className="robotics">
      <div className="page-header">
        <h1>Our Robotics Projects</h1>
      </div>
      
      <div className="content">
        <section className="intro">
          <p>
            Explore the amazing robots and projects our team has built using LEGO 
            Mindstorms and other robotics platforms. Each project showcases our 
            creativity, technical skills, and problem-solving abilities.
          </p>
        </section>

        <section className="projects">
          <h2>Featured Projects</h2>
          
          <div className="project-card">
            <h3>🤖 Autonomous Navigator</h3>
            <div className="project-details">
              <p className="project-description">
                A self-driving robot that uses ultrasonic sensors to navigate through 
                obstacle courses. This project demonstrates our understanding of sensor 
                integration and autonomous navigation algorithms.
              </p>
              <div className="project-specs">
                <h4>Key Features:</h4>
                <ul>
                  <li>Ultrasonic obstacle detection</li>
                  <li>Color sensor for line following</li>
                  <li>Custom pathfinding algorithm</li>
                  <li>Autonomous operation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-card">
            <h3>🦾 Robotic Arm</h3>
            <div className="project-details">
              <p className="project-description">
                A precision robotic arm capable of picking up and sorting objects by 
                color and size. This project showcases our mechanical design skills 
                and advanced programming techniques.
              </p>
              <div className="project-specs">
                <h4>Key Features:</h4>
                <ul>
                  <li>3-axis articulated arm</li>
                  <li>Gripper with force feedback</li>
                  <li>Object recognition system</li>
                  <li>Sorting algorithm implementation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="project-card">
            <h3>🏁 Competition Bot</h3>
            <div className="project-details">
              <p className="project-description">
                Our competition robot designed specifically for regional tournaments. 
                Fast, reliable, and engineered for performance under pressure.
              </p>
              <div className="project-specs">
                <h4>Key Features:</h4>
                <ul>
                  <li>Optimized for speed and agility</li>
                  <li>Mission-specific attachments</li>
                  <li>Advanced programming strategies</li>
                  <li>Robust construction for competition durability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="technologies">
          <h2>Technologies We Use</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>LEGO Mindstorms EV3</h4>
              <p>Our primary robotics platform</p>
            </div>
            <div className="tech-item">
              <h4>Python & Block Coding</h4>
              <p>Programming languages for robot control</p>
            </div>
            <div className="tech-item">
              <h4>Sensors & Motors</h4>
              <p>Various sensors for environmental interaction</p>
            </div>
            <div className="tech-item">
              <h4>CAD Design</h4>
              <p>3D modeling for custom parts</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Robotics
