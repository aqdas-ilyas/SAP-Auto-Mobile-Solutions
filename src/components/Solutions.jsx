import { useEffect, useRef } from 'react'

const SOLUTIONS = [
  {
    title: 'Fleet & Asset Management',
    description: 'Track vehicles, parts, and assets in real time. Optimize utilization and maintenance schedules.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Field Service & Workforce',
    description: 'Dispatch, schedule, and support field teams with mobile-first tools and offline capability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Supply Chain & Logistics',
    description: 'Integrate warehousing, shipping, and last-mile delivery with SAP ERP and S/4HANA.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
  },
  {
    title: 'Analytics & Intelligence',
    description: 'Dashboards, KPIs, and predictive insights for operations and leadership.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
  },
]

export default function Solutions() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && contentRef.current) contentRef.current.classList.add('visible')
        })
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    )
    if (sectionRef.current) sectionObserver.observe(sectionRef.current)

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal')
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0 }
    )
    cardRefs.current.forEach((el) => el && cardObserver.observe(el))

    return () => {
      sectionObserver.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  return (
    <section className="section solutions" id="solutions" ref={sectionRef}>
      <div className="container slide-in-right" ref={contentRef}>
        <p className="section-badge">What we offer</p>
        <h2 className="section-title">Solutions that scale with your business</h2>
        <p className="section-subtitle">End-to-end mobility and automotive solutions powered by SAP.</p>
        <div className="solutions-grid">
          {SOLUTIONS.map((item, i) => (
            <article
              key={item.title}
              className="solution-card"
              ref={(el) => { cardRefs.current[i] = el }}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="solution-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
