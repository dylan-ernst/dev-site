import { identity } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className="section contact">
      <div className="wrap reveal" ref={ref}>
        <span className="eyebrow">Let&apos;s Talk</span>
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact__lead">
          I&apos;m open to early-career software engineering roles and freelance builds. If you have a
          project in mind or just want to connect, my inbox is open.
        </p>
        <div className="contact__actions">
          <a href={`mailto:${identity.email}`} className="btn btn--primary">
            Email Me
          </a>
          <a href={identity.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
            GitHub
          </a>
        </div>
        <div className="contact__meta">
          <a href={`mailto:${identity.email}`}>{identity.email}</a>
          <a href={`tel:${identity.phone.replace(/\D/g, '')}`}>{identity.phone}</a>
          {identity.linkedin && (
            <a href={identity.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
