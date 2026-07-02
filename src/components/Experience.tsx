import { experience } from '../data/site'
import type { Experience as ExperienceEntry } from '../data/site'
import { useReveal } from '../hooks/useReveal'

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const ref = useReveal<HTMLElement>()

  return (
    <article className="exp reveal" ref={ref}>
      <div className="exp__head">
        <h3 className="exp__company">{entry.company}</h3>
        <span className="exp__period">{entry.period}</span>
      </div>
      <p className="exp__location">{entry.location}</p>
      {entry.roles.map((role) => (
        <div className="exp__role" key={role.title}>
          <span>{role.title}</span>
          {role.period && <span className="exp__role-period">{role.period}</span>}
        </div>
      ))}
      <ul className="exp__bullets">
        {entry.bullets.map((b) => (
          <li key={b.slice(0, 24)}>{b}</li>
        ))}
      </ul>
      <div className="exp__tags">
        {entry.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <span className="eyebrow">Where I&apos;ve Worked</span>
        <h2 className="section-title">Experience</h2>
        <div className="exp__list">
          {experience.map((e) => (
            <ExperienceCard key={e.company} entry={e} />
          ))}
        </div>
      </div>
    </section>
  )
}
