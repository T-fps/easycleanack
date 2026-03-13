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
          <a href="https://www.facebook.com/profile.php?id=61575697125537" target="_blank" rel="noopener noreferrer">
            <img src="https://static.wixstatic.com/media/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/easycleanack/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.wixstatic.com/media/e1aa082f7c0747168d9cf43e77046142.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1aa082f7c0747168d9cf43e77046142.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/tygrod/" target="_blank" rel="noopener noreferrer">
            <img src="https://static.wixstatic.com/media/11062b_a06d85fa94d64ef68680321f5a043a8c~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_a06d85fa94d64ef68680321f5a043a8c~mv2.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Easy Clean ACK · Nantucket, MA
        </div>
      </footer>
    </>
  );
}
