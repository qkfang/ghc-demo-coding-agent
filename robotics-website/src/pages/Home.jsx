import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our LEGO Robotics Team</h1>
        <p className="tagline">Building the Future, One Brick at a Time</p>
      </div>
      
      <div className="content">
        <section className="intro">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team of young engineers, programmers, and innovators 
            who come together to design, build, and program LEGO robots. Our team 
            participates in competitions and works on exciting projects that challenge 
            our creativity and technical skills.
          </p>
        </section>

        <section className="highlights">
          <div className="highlight-card">
            <h3>🏆 Competitive Excellence</h3>
            <p>Participating in regional and national robotics competitions</p>
          </div>
          <div className="highlight-card">
            <h3>🤝 Teamwork</h3>
            <p>Learning collaboration and communication skills</p>
          </div>
          <div className="highlight-card">
            <h3>🔧 Innovation</h3>
            <p>Developing creative solutions to real-world challenges</p>
          </div>
        </section>

        <section className="cta">
          <h2>Join Us!</h2>
          <p>
            Interested in joining our team? We welcome students of all skill levels 
            who are eager to learn and have fun with robotics.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home
