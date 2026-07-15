import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: '학력', href: '#education' },
  { label: '경험', href: '#experience' },
  { label: '자격증', href: '#certs' },
  { label: '역량', href: '#skills' },
  { label: '어학', href: '#languages' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo">
          KHJ<span className="nav__dot" />
        </a>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav__link">{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav__cta">연락하기</a>
          </li>
        </ul>

        <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="메뉴">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav__mobile-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
