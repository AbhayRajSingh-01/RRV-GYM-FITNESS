import { useState, useEffect, useRef } from 'react'
import { useScrollReveal, useTilt3D } from './hooks'

/* ─── Animated counter ─── */
export function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const parsed = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 1500
          const step = (ts) => {
            if (!start) start = ts
            const progress = Math.min((ts - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * parsed))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          obs.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [parsed])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Scroll-reveal wrapper ─── */
export function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`scroll-reveal reveal-${direction} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ─── 3D Card wrapper ─── */
export function Card3D({ children, className = '' }) {
  const ref = useTilt3D()
  return (
    <div ref={ref} className={`card-3d ${className}`}>
      <div className="card-3d-shine" />
      {children}
    </div>
  )
}
