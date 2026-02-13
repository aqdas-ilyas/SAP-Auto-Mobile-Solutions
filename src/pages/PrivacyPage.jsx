import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | SAP Auto Mobile Solutions'
    return () => { document.title = 'SAP Auto Mobile Solutions | Enterprise Mobility & Digital Transformation' }
  }, [])

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How we collect, use, and protect your information.</p>
          <p className="last-updated">Last updated: February 2025</p>
        </div>
      </section>

      <div className="container privacy-content">
        <h2>1. Introduction</h2>
        <p>
          SAP Auto Mobile Solutions (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and related services. Please read this policy carefully.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect information that you provide directly to us, including:</p>
        <ul>
          <li>Name, email address, company name, and job title</li>
          <li>Messages and inquiries you submit through our contact forms</li>
          <li>Information you provide when requesting a demo or signing up for communications</li>
        </ul>
        <p>
          We may also automatically collect certain information when you visit our website, such as your IP address, browser type, device type, and usage data (e.g., pages visited, time spent). We may use cookies and similar technologies for this purpose.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you product updates, marketing communications (where you have consented), and relevant information about our solutions</li>
          <li>Improve our website, services, and user experience</li>
          <li>Comply with legal obligations and protect our rights</li>
        </ul>

        <h2>4. Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website and business (e.g., hosting, analytics), subject to strict confidentiality obligations. We may also disclose information where required by law or to protect our rights and safety.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes described in this policy or as required by law. When no longer needed, we securely delete or anonymize your data.
        </p>

        <h2>7. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access and receive a copy of your personal data</li>
          <li>Correct or update your data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict certain processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p>To exercise these rights, please contact us using the details in the Contact section below.</p>

        <h2>8. Cookies and Tracking</h2>
        <p>
          Our website may use cookies and similar technologies to improve functionality and analyze usage. You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of the site.
        </p>

        <h2>9. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies.
        </p>

        <h2>10. Children’s Privacy</h2>
        <p>
          Our services are not directed to individuals under 16. We do not knowingly collect personal data from children. If you believe we have collected such data, please contact us so we can delete it.
        </p>

        <h2>11. International Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this policy and applicable law.
        </p>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the “Last updated” date. We encourage you to review this policy periodically.
        </p>

        <h2>13. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>SAP Auto Mobile Solutions</strong><br />
          Email: <a href="mailto:privacy@sapautomobile.com">privacy@sapautomobile.com</a><br />
          Or use our <Link to="/#contact">contact form</Link>.
        </p>
      </div>
    </>
  )
}
