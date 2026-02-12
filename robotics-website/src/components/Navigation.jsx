import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">🤖</span>
          <span className="logo-text">LEGO Robotics Team</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/robotics" 
              className={location.pathname === '/robotics' ? 'active' : ''}
            >
              Robotics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
