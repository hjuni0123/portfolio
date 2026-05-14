import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__logo">
          KHJ<span className="footer__dot" />
        </p>
        <p className="footer__tagline">금융 × 경영 × 데이터</p>
        <p className="footer__copy">
          © 2026 김형준. All rights reserved.&nbsp;&nbsp;
          <a
            href="https://instagram.com/hjeconomy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__insta"
          >
            @hjeconomy
          </a>
        </p>
      </div>
    </footer>
  );
}
