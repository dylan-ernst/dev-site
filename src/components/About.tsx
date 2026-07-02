import { about, skills } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="section">
      <div className="wrap reveal" ref={ref}>
        <span className="eyebrow">Who I Am</span>
        <h2 className="section-title">About</h2>
        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="facts">
            {about.facts.map((f) => (
              <div className="fact" key={f.label}>
                <span className="fact__label">{f.label}</span>
                <span className="fact__value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills">
          {skills.map((g) => (
            <div className="skills__group" key={g.group}>
              <span className="skills__label">{g.group}</span>
              <div className="skills__chips">
                {g.items.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
