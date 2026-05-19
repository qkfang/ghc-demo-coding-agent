import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Robotics from './pages/Robotics.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">GHC Demo</div>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/robotics" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Robotics
          </NavLink>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/robotics" element={<Robotics />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} GHC Demo</p>
      </footer>
    </div>
  )
}

export default App
