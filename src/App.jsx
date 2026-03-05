import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showIntro, setShowIntro] = useState(true)

  // Cursor glow (desktop only)
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Intro splash timing
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      {/* Cursor Glow */}
      <div className="cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* Floating Particles */}
      <div className="particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle p${i + 1}`} />
        ))}
      </div>

      {showIntro && (
        <div className="intro-overlay" aria-hidden="true">
          <div className="intro-backdrop" />
          <div className="intro-text">
            <span className="intro-word">RRV</span>
            <span className="intro-word accent">GYM</span>
            <span className="intro-word">FITNESS</span>
          </div>
        </div>
      )}

      {!showIntro && (
        <>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
