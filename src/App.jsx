import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Robotics from './pages/Robotics.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/robotics" element={<Robotics />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} GHC Demo — Coding Agent</p>
      </footer>
    </div>
  )
}
