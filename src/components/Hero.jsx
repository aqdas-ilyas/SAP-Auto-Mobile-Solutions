import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const STATS = [
  { value: 99, suffix: '%', label: 'Uptime SLA' },
  { value: 50, suffix: '+', label: 'Countries' },
  { value: 1000, suffix: '+', label: 'Enterprises' },
]

/* Background sparkle positions (percent) – spread across hero for twinkle effect */
const SPARKLES = [
  { left: 8, top: 12 }, { left: 22, top: 8 }, { left: 38, top: 18 }, { left: 55, top: 14 }, { left: 72, top: 22 }, { left: 88, top: 16 },
  { left: 12, top: 28 }, { left: 28, top: 32 }, { left: 45, top: 26 }, { left: 62, top: 34 }, { left: 78, top: 30 }, { left: 92, top: 38 },
  { left: 5, top: 48 }, { left: 18, top: 52 }, { left: 35, top: 44 }, { left: 52, top: 58 }, { left: 68, top: 50 }, { left: 82, top: 54 },
  { left: 10, top: 68 }, { left: 25, top: 72 }, { left: 42, top: 64 }, { left: 58, top: 78 }, { left: 75, top: 70 }, { left: 90, top: 76 },
  { left: 15, top: 88 }, { left: 48, top: 92 }, { left: 65, top: 85 }, { left: 85, top: 90 },
]

function animateValue(el, start, end, duration) {
  if (!el) return
  const startTime = performance.now()
  function step(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeOut = 1 - (1 - progress) ** 3
    const current = Math.floor(start + (end - start) * easeOut)
    el.textContent = current
    if (progress < 1) requestAnimationFrame(step)
    else el.textContent = end
  }
  requestAnimationFrame(step)
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const statsRef = useRef([])

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const idx = Number(entry.target.dataset.statIndex)
          const target = STATS[idx]?.value
          const el = entry.target.querySelector('.stat-value')
          if (el != null && target != null) animateValue(el, 0, target, 1500)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.5 }
    )
    statsRef.current.forEach((node) => node && observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <div className="hero-sparkles" aria-hidden="true">
          {SPARKLES.map((s, i) => (
            <span
              key={i}
              className={`sparkle ${i % 4 === 0 ? 'sparkle-accent' : ''}`}
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                animationDelay: `${i * 0.18}s`,
                animationDuration: `${3.5 + (i % 3) * 0.5}s`,
              }}
            />
          ))}
        </div>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      <div className="container hero-content">
        <p className={`hero-badge animate-fade-in ${visible ? 'visible' : ''}`}>
          Enterprise mobility for the automotive industry
        </p>
        <h1 className="hero-title">
          <span className={`hero-title-line animate-slide-up ${visible ? 'visible' : ''}`}>Drive digital</span>
          <span className={`hero-title-line hero-title-accent animate-slide-up delay-1 ${visible ? 'visible' : ''}`}>
            transformation
          </span>
        </h1>
        <p className={`hero-subtitle animate-fade-in delay-2 ${visible ? 'visible' : ''}`}>
          Connect your workforce, vehicles, and operations with SAP-powered mobile solutions.
          Real-time data, seamless workflows, and intelligent automation.
        </p>
        <div className={`hero-cta animate-fade-in delay-3 ${visible ? 'visible' : ''}`}>
          <Link to="/#contact" className="btn btn-primary">Get started</Link>
          <Link to="/#solutions" className="btn btn-secondary">Explore solutions</Link>
        </div>
        <div className={`hero-stats animate-fade-in delay-4 ${visible ? 'visible' : ''}`}>
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="stat"
              ref={(el) => { statsRef.current[i] = el }}
              data-stat-index={i}
            >
              <span className="stat-value">0</span>
              <span className="stat-suffix">{stat.suffix}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-indicator" />
      </div>
    </section>
  )
}
