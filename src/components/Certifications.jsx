import { motion } from 'framer-motion';
import './Certifications.css';

const certs = [
  {
    icon: '📈',
    name: '투자자산운용사',
    issuer: '한국금융투자협회',
    date: '2026.01.29',
    level: 'Professional',
    levelColor: '#7248F2',
    desc: '펀드·파생상품 등 투자자산의 운용·관리 전문 자격',
    accent: '#7248F2',
  },
  {
    icon: '💹',
    name: '펀드투자권유대행인',
    issuer: '한국금융투자협회',
    date: '2026.01.01',
    level: 'Professional',
    levelColor: '#00D4AA',
    desc: '펀드 투자 권유 업무 수행 공인 자격',
    accent: '#00D4AA',
  },
  {
    icon: '📊',
    name: '데이터분석 준전문가',
    issuer: '한국데이터산업진흥원',
    date: '2026.03.06',
    level: 'Associate',
    levelColor: '#F59E0B',
    desc: '데이터 분석 기획·분석·시각화 능력 검증 자격 (ADsP)',
    accent: '#F59E0B',
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

export default function Certifications() {
  return (
    <section id="certs" className="section certs">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Certifications</span>
          <h2 className="h2">자격증</h2>
          <p className="desc" style={{ marginBottom: '48px' }}>
            금융 투자와 데이터 분석 역량을 공인 자격으로 증명합니다.
          </p>
        </motion.div>

        <motion.div
          className="certs__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {certs.map((c) => (
            <motion.div
              key={c.name}
              className="cert__card"
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="cert__top">
                <div className="cert__icon" style={{ background: `${c.accent}12` }}>
                  {c.icon}
                </div>
                <span
                  className="cert__level"
                  style={{ color: c.levelColor, background: `${c.levelColor}12` }}
                >
                  {c.level}
                </span>
              </div>

              <h3 className="cert__name">{c.name}</h3>
              <p className="cert__issuer">{c.issuer}</p>
              <p className="cert__desc">{c.desc}</p>

              <div className="cert__footer">
                <span className="cert__date-label">취득일</span>
                <span className="cert__date num" style={{ color: c.accent }}>{c.date}</span>
              </div>

              <div className="cert__bar" style={{ background: `linear-gradient(90deg, ${c.accent}30, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
