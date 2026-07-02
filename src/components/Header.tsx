import { useState } from 'react'
import { nav } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="#top" className="wordmark" onClick={() => setOpen(false)}>
          Dylan <span>Ernst</span>
        </a>
        <button
          className={`menu-btn${open ? ' is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav${open ? ' is-open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
