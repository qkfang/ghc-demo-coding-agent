import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Robotics from './pages/Robotics'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/robotics" element={<Robotics />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2025 LEGO Robotics Team. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
