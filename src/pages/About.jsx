export default function About() {
  return (
    <div className="page">
      <section className="hero">
        <span className="eyebrow">About this site</span>
        <h1>A small site with a clear purpose.</h1>
        <p className="lead">
          GHC Demo is a tiny React + Vite project used to showcase a clean,
          modern layout across just three pages — nothing more, nothing less.
        </p>
      </section>

      <section className="split">
        <div>
          <h2 className="section-title">Built with care</h2>
          <p className="section-subtitle">
            The site stays intentionally simple so the design and content can
            speak for themselves.
          </p>
          <ul className="timeline">
            <li>React 18 with functional components and hooks.</li>
            <li>React Router v6 for clean, declarative navigation.</li>
            <li>Vite for fast development and tiny production builds.</li>
            <li>Hand-rolled CSS — no framework, no runtime cost.</li>
          </ul>
        </div>
        <div>
          <h2 className="section-title">Tech stack</h2>
          <p className="section-subtitle">A short list of what powers the site.</p>
          <div className="tags">
            <span className="tag">React 18</span>
            <span className="tag">Vite 5</span>
            <span className="tag">React Router 6</span>
            <span className="tag">CSS</span>
            <span className="tag">ES Modules</span>
            <span className="tag">No frameworks</span>
          </div>
          <div className="stats" style={{ marginTop: '1.25rem' }}>
            <div className="stat">
              <div className="stat-value">3</div>
              <div className="stat-label">Pages</div>
            </div>
            <div className="stat">
              <div className="stat-value">0</div>
              <div className="stat-label">UI libs</div>
            </div>
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">React</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

