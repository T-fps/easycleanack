import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/membership', label: 'Membership' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="tel:4133338401" className="nav-phone">413-333-8401</a>

          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className={router.pathname === link.href ? 'active' : ''}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-social">
            <a href="https://www.facebook.com/profile.php?id=61575697125537" target="_blank" rel="noopener noreferrer">
              <img src="https://static.wixstatic.com/media/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/easycleanack/" target="_blank" rel="noopener noreferrer">
              <img src="https://static.wixstatic.com/media/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png" alt="Instagram" />
            </a>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="tel:4133338401" style={{ color: 'var(--gold)' }}>413-333-8401</a>
        </div>
      </nav>

      <main className="page-content">{children}</main>

      <footer className="footer">
        <div className="footer-logo">Easy Clean ACK</div>
        <div className="footer-tagline">Nantucket's Finest Mobile Auto Detailers</div>
        <div className="footer-contact">
          <a href="tel:4133338401">413-333-8401</a>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="mailto:easycleanack@gmail.com">easycleanack@gmail.com</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=61575697125537" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/easycleanack/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/tygrod/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Easy Clean ACK · Nantucket, MA
        </div>
      </footer>
    </>
  );
}
