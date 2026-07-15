import { motion } from 'framer-motion';
import './Languages.css';

const langs = [
  {
    icon: '🗣️',
    name: 'TOEIC',
    score: '880',
    date: '2025.10.27',
    desc: '비즈니스 영어 독해·청해 역량 검증 점수',
    accent: '#7248F2',
  },
  {
    icon: '🎤',
    name: 'OPIc',
    score: 'IH',
    date: '2025.12.07',
    desc: '실전 영어 스피킹 및 즉흥 커뮤니케이션 역량 검증',
    accent: '#00D4AA',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Languages() {
  return (
    <section id="languages" className="section languages">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Languages</span>
          <h2 className="h2">어학</h2>
          <p className="desc" style={{ marginBottom: '48px' }}>
            글로벌 금융 시장 리서치와 커뮤니케이션에 필요한 어학 역량을 갖추고 있습니다.
          </p>
        </motion.div>

        <motion.div
          className="lang__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {langs.map((l) => (
            <motion.div
              key={l.name}
              className="lang__card"
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="lang__top">
                <div className="lang__icon" style={{ background: `${l.accent}12` }}>
                  {l.icon}
                </div>
                <span className="lang__score" style={{ color: l.accent, background: `${l.accent}12` }}>
                  {l.score}
                </span>
              </div>

              <h3 className="lang__name">{l.name}</h3>
              <p className="lang__desc">{l.desc}</p>

              <div className="lang__footer">
                <span className="lang__date-label">취득일</span>
                <span className="lang__date num" style={{ color: l.accent }}>{l.date}</span>
              </div>

              <div className="lang__bar" style={{ background: `linear-gradient(90deg, ${l.accent}30, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
