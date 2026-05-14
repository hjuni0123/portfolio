import { motion } from 'framer-motion';
import './Education.css';

const nodes = [
  {
    period: '2021.03 — 2027.02 예정',
    school: '광운대학교',
    sub: '동북아문화산업학부 · 경영학부 복수전공',
    status: '재학중',
    statusColor: '#7248F2',
    statusBg: 'rgba(114,72,242,0.1)',
    bullets: [
      '동북아문화산업학부 주전공',
      '경영학부 복수전공',
      '학부 조교 재직 (2025.06 ~)',
    ],
    dotColor: '#7248F2',
  },
  {
    period: '2017.03 — 2020.02',
    school: '오산고등학교',
    sub: '일반계 고등학교 졸업',
    status: '졸업',
    statusColor: '#888899',
    statusBg: 'rgba(136,136,153,0.1)',
    bullets: [],
    dotColor: '#BBBBCC',
  },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Education</span>
          <h2 className="h2">학력</h2>
          <p className="desc" style={{ marginBottom: '56px' }}>
            꾸준한 학습과 다양한 전공 융합으로 금융·경영의 폭넓은 시각을 키워왔습니다.
          </p>
        </motion.div>

        <div className="edu__timeline">
          {nodes.map((n, i) => (
            <motion.div
              key={n.school}
              className="edu__node"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: i * 0.15 }}
            >
              <div className="edu__track">
                <div className="edu__dot" style={{ background: n.dotColor, boxShadow: `0 0 0 5px ${n.dotColor}20` }} />
                {i < nodes.length - 1 && (
                  <div className="edu__line" style={{ background: `linear-gradient(to bottom, ${n.dotColor}60, transparent)` }} />
                )}
              </div>

              <motion.div className="edu__card" whileHover={{ y: -3 }}>
                <div className="edu__card-top">
                  <div>
                    <div className="edu__period">{n.period}</div>
                    <h3 className="edu__school">{n.school}</h3>
                    <p className="edu__sub">{n.sub}</p>
                  </div>
                  <span
                    className="edu__status"
                    style={{ color: n.statusColor, background: n.statusBg }}
                  >
                    {n.status}
                  </span>
                </div>
                {n.bullets.length > 0 && (
                  <ul className="edu__bullets">
                    {n.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
