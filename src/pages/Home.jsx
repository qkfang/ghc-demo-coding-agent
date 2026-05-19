import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page page--home">
      <h1>Welcome to the GHC Demo</h1>
      <p className="lead">
        A small React website built to showcase the GitHub Copilot Coding Agent
        in action. Explore the pages below to learn more.
      </p>

      <div className="cards">
        <Link to="/about" className="card">
          <h2>About</h2>
          <p>Learn what this project is and who it’s for.</p>
        </Link>
        <Link to="/robotics" className="card">
          <h2>Robotics</h2>
          <p>Discover the robotics topics featured in this demo.</p>
        </Link>
      </div>
    </section>
  )
}
