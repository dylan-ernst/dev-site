import { identity } from '../data/site'
import { useTyping } from '../hooks/useTyping'

export function Hero() {
  const typed = useTyping(identity.typedLines)

  return (
    <section id="top" className="hero">
      <div className="wrap hero__inner">
        <span className="hero__greeting">Hello, I&apos;m</span>
        <h1 className="hero__name">{identity.name}</h1>
        <p className="hero__typed">
          {typed}
          <span className="hero__cursor" aria-hidden="true" />
        </p>
        <p className="hero__tagline">{identity.tagline}</p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in Touch
          </a>
        </div>
        <div className="hero__social">
          <a href={identity.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {identity.linkedin && (
            <a href={identity.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          <a href={`mailto:${identity.email}`}>Email</a>
        </div>
      </div>
    </section>
  )
}
