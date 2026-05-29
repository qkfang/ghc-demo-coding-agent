import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <span className="eyebrow">React · Vite · Router</span>
        <h1>Build delightful experiences, one page at a time.</h1>
        <p className="lead">
          GHC Demo is a small, modern React site showcasing a clean layout with
          three focused pages: Home, About, and Robotics.
        </p>
        <div className="actions">
          <Link to="/robotics" className="btn btn-primary">
            Explore Robotics →
          </Link>
          <Link to="/about" className="btn btn-ghost">
            Learn more
          </Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">What you'll find here</h2>
        <p className="section-subtitle">
          A tiny tour of the things this little site is built around.
        </p>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon" aria-hidden="true">⚡</div>
            <h3>Fast by default</h3>
            <p>Powered by Vite for instant dev startup and lightweight builds.</p>
          </div>
          <div className="card">
            <div className="card-icon" aria-hidden="true">🧭</div>
            <h3>Simple routing</h3>
            <p>Three clear pages wired up with React Router v6.</p>
          </div>
          <div className="card">
            <div className="card-icon" aria-hidden="true">🎨</div>
            <h3>Crafted UI</h3>
            <p>Tasteful gradients, soft shadows, and accessible color contrast.</p>
          </div>
          <div className="card">
            <div className="card-icon" aria-hidden="true">🤖</div>
            <h3>Robotics focus</h3>
            <p>A dedicated page exploring what makes robotics so exciting.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

