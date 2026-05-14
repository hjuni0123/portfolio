import { motion } from 'framer-motion';
import './Hero.css';

const chips = [
  '금융 분석', '핀테크 리서치', '스테이블코인', '데이터 분석',
  '콘텐츠 마케팅', '투자자산운용', '자본시장', '예산 관리', 'R&D 리서치',
];

const profileItems = [
  { icon: '🎓', label: '소속', value: '광운대학교 4학년' },
  { icon: '📚', label: '전공', value: '경영학 · 동북아문화산업학' },
  { icon: '📍', label: '위치', value: '서울특별시' },
  { icon: '📸', label: 'Instagram', value: '@hjeconomy' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98], delay },
});

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* ambient glows */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__grid" />

      <div className="wrap hero__wrap">
        {/* ── LEFT ── */}
        <div className="hero__left">
          <motion.div {...fadeUp(0.1)}>
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              광운대학교 경영·동북아문화산업학 재학
            </span>
          </motion.div>

          <motion.h1 className="hero__title" {...fadeUp(0.2)}>
            금융의 흐름을<br />
            <span className="hero__title-grad">직접 만들어갑니다</span>
          </motion.h1>

          <motion.div className="hero__chips-wrap" {...fadeUp(0.35)}>
            <div className="hero__chips">
              {chips.map((c) => (
                <span key={c} className="hero__chip">{c}</span>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero__actions" {...fadeUp(0.45)}>
            <a href="#experience" className="btn-primary">경험 보기 →</a>
            <a href="#contact" className="btn-ghost">연락하기</a>
          </motion.div>
        </div>

        {/* ── RIGHT — glassmorphism card ── */}
        <motion.div
          className="glass hero__card"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
        >
          <div className="hero__avatar">
            <span>KHJ</span>
          </div>
          <h2 className="hero__card-name">김형준</h2>
          <p className="hero__card-en">Kim Hyung-Jun</p>

          <div className="hero__card-divider" />

          <ul className="hero__card-info">
            {profileItems.map(({ icon, label, value }) => (
              <li key={label}>
                <span className="hero__card-icon">{icon}</span>
                <div>
                  <div className="hero__card-label">{label}</div>
                  <div className="hero__card-value">{value}</div>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="https://instagram.com/hjeconomy"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__insta"
          >
            <span>📸</span> Instagram 바로가기
            <span className="hero__insta-arrow">↗</span>
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
