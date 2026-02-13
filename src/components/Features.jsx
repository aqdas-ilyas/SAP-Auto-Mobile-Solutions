import { useEffect, useRef } from 'react'

const FEATURES = [
  { number: '01', title: 'Secure & compliant', description: 'SAP security standards, encryption, and compliance with industry regulations.' },
  { number: '02', title: 'Offline-first', description: 'Work without connectivity. Sync when back online with conflict resolution.' },
  { number: '03', title: 'Native SAP integration', description: 'Direct integration with SAP S/4HANA, Fiori, and your existing landscape.' },
  { number: '04', title: 'Customizable & extensible', description: 'Adapt workflows, forms, and UI to your processes and branding.' },
]

export default function Features() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const refs = useRef([])

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
    refs.current.forEach((el) => el && cardObserver.observe(el))

    return () => {
      sectionObserver.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  return (
    <section className="section features section-alt" id="features" ref={sectionRef}>
      <div className="container slide-in-left" ref={contentRef}>
        <p className="section-badge">Why choose us</p>
        <h2 className="section-title">Built for enterprise, designed for people</h2>
        <div className="features-list">
          {FEATURES.map((item, i) => (
            <div
              key={item.number}
              className="feature-item"
              ref={(el) => { refs.current[i] = el }}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="feature-number">{item.number}</div>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
