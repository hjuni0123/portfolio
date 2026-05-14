import { motion } from 'framer-motion';
import CountUp from './CountUp';
import './About.css';

const stats = [
  { to: 3, suffix: '개', label: '자격증', desc: '투자·데이터 분야 전문 자격' },
  { to: 30000, suffix: '+', label: '총 조회수', desc: '인스타 금융 콘텐츠 누적' },
  { to: 4, suffix: '년', label: '연속 활동', desc: '대학 입학 이후 꾸준한 도전' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: i * 0.12 },
  }),
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap">
        {/* Stats row */}
        <div className="about__stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="about__stat"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="about__stat-num">
                <CountUp to={s.to} />
                <span className="about__stat-suffix">{s.suffix}</span>
              </div>
              <div className="about__stat-label">{s.label}</div>
              <div className="about__stat-desc">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="about__divider" />

        {/* Bio */}
        <div className="about__bio-wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="eyebrow">About Me</span>
            <h2 className="h2 about__heading">
              이론과 실전을 넘나드는<br />
              <span className="grad">금융 경력자</span>
            </h2>
          </motion.div>
          <motion.p
            className="about__bio"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            광운대학교에서 경영학과 동북아문화산업학을 복수전공하며,
            금융·경제 분야를 이론부터 실전까지 탐구하고 있습니다.
            투자자산운용사·ADsP 자격증 취득, 한국경제인협회 R&D 연구,
            매경이코노미 서포터즈 활동을 통해 금융 시장의 흐름을
            직접 체험하고 이를 콘텐츠로 사회와 공유해왔습니다.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
