export default function About() {
  return (
    <section className="page">
      <h1>About</h1>
      <p className="lead">
        This site is a minimal React demo created to illustrate how the GitHub
        Copilot Coding Agent can scaffold and implement a simple multi-page web
        application end-to-end.
      </p>

      <h2>What’s inside</h2>
      <ul>
        <li>Built with <strong>React 18</strong> and <strong>Vite</strong>.</li>
        <li>Routing powered by <strong>react-router-dom</strong>.</li>
        <li>Three pages: Home, About, and Robotics.</li>
      </ul>

      <h2>Why React?</h2>
      <p>
        React provides a component-based model that keeps the code small,
        composable, and easy to extend — a good fit for a demo site.
      </p>
    </section>
  )
}
