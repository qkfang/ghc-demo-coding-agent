import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">🤖</span>
        <span className="brand-name">RoboLeague</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="/robotics" className={location.pathname === '/robotics' ? 'active' : ''}>
            Robotics
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
