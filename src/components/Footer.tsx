import { identity } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__copy">© 2026 Dylan Ernst · Built with React + TypeScript</span>
        <div className="footer__links">
          <a href={identity.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={identity.pianoSite} target="_blank" rel="noreferrer">
            Piano Studio
          </a>
        </div>
      </div>
    </footer>
  )
}
