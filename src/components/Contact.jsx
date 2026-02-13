import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && formRef.current) formRef.current.classList.add('reveal')
        })
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      e.target.reset()
      setTimeout(() => setStatus('idle'), 2500)
    }, 800)
  }

  return (
    <section className="section contact section-alt" id="contact" ref={sectionRef}>
      <div className="container">
        <p className="section-badge">Get in touch</p>
        <h2 className="section-title">Ready to get started?</h2>
        <p className="section-subtitle">
          Tell us about your mobility and automotive challenges. We'll help you design the right solution.
        </p>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" name="name" required placeholder="Your name" autoComplete="name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Work email</label>
            <input type="email" id="email" name="email" required placeholder="you@company.com" autoComplete="email" />
          </div>
          <div className="form-row">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" placeholder="Your company" autoComplete="organization" />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="How can we help?" required />
          </div>
          <p className="form-privacy">
            By submitting, you agree to our <Link to="/privacy">Privacy Policy</Link>.
          </p>
          <button type="submit" className="btn btn-primary btn-full" disabled={status === 'sending'}>
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && 'Message sent'}
            {status === 'idle' && 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
