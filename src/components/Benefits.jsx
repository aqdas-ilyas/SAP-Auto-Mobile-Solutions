import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const BENEFITS = [
  'Faster decision-making with real-time data',
  'Higher productivity with streamlined mobile workflows',
  'Reduced errors and rework with guided processes',
  'Better customer and driver experience',
]

export default function Benefits() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (contentRef.current) contentRef.current.classList.add('reveal')
          if (visualRef.current) visualRef.current.classList.add('reveal')
        })
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section benefits" id="benefits" ref={sectionRef}>
      <div className="container">
        <div className="benefits-content" ref={contentRef}>
          <p className="section-badge">Results</p>
          <h2 className="section-title">Transform how your teams work</h2>
          <ul className="benefits-list">
            {BENEFITS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to="/#contact" className="btn btn-primary">Request a demo</Link>
        </div>
        <div className="benefits-visual" ref={visualRef}>
          <div className="visual-card visual-card-1" />
          <div className="visual-card visual-card-2" />
          <div className="visual-card visual-card-3" />
        </div>
      </div>
    </section>
  )
}
