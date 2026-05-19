import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    'nav-link' + (isActive ? ' nav-link--active' : '')

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">GHC Demo</div>
        <nav className="navbar__links">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/robotics" className={linkClass}>Robotics</NavLink>
        </nav>
      </div>
    </header>
  )
}
