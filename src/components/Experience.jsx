import { motion } from 'framer-motion';
import './Experience.css';

const workCards = [
  {
    emoji: '🎓',
    emojiColor: '#EF4444',
    org: '광운대학교',
    role: '학부 조교',
    program: '동북아문화산업학부',
    period: '2025.06 — 2026.06',
    tags: ['사업 기획', '행정 업무', '예산 운용'],
    bullets: [
      '학부 내 행정업무 전담 처리',
      '방학마다 약 7,000만원 규모 사업 기획 및 진행',
      '품의서 등 문서 기안 및 전자결재 시스템 운용',
    ],
  },
  {
    emoji: '🏢',
    emojiColor: '#8B5CF6',
    org: '중소벤처기업부',
    role: '인턴',
    program: '창업벤처혁신실 청년정책과',
    period: '2026.07 — 현재',
    tags: ['정책 지원', '행사 기획', '창업 지원'],
    bullets: [
      '중기부 주관 행사 기획 및 운영 보조',
      '모두의창업 관련 업무 보조 수행',
    ],
  },
];

const relatedCards = [
  {
    emoji: '🏛️',
    emojiColor: '#7248F2',
    org: '한국경제인협회',
    role: 'R&D 연구원',
    program: '미래내일 일경험 프로젝트형',
    period: '2025.09 — 2025.10',
    tags: ['핀테크 리서치', '스테이블코인', '규제 분석'],
    bullets: [
      '미국 GENIUS 법안이 국내 스테이블코인 시장에 미치는 영향 연구',
      '글로벌 암호화폐 규제 동향 분석 및 국내 시장 영향도 분석',
      '연구 결과 보고서 작성 및 발표',
    ],
  },
  {
    emoji: '📰',
    emojiColor: '#00D4AA',
    org: '매경이코노미',
    role: '공식 서포터즈',
    program: '매경이코노미 서포터즈',
    period: '2025.09 — 2025.12',
    badge: '🏆 우수 서포터즈 수료',
    tags: ['콘텐츠 제작', 'SNS 마케팅', '금융 미디어'],
    bullets: [
      '금융·경제 기사를 인스타그램 카드뉴스로 재가공 및 배포',
      '4개월 만에 팔로워 2,000명·총 조회수 30,000회 달성',
      '우수 서포터즈로 수료 — Instagram @hjeconomy 운영',
    ],
  },
  {
    emoji: '📊',
    emojiColor: '#F59E0B',
    org: 'YLC 전국시장경제연합',
    role: '재무팀 멤버',
    program: '전국시장경제연합동아리',
    period: '2025.09 — 2026.06',
    tags: ['금융 토론', '예산 관리', '경제 발표'],
    bullets: [
      '금융·경제 관련 주제 토론 및 발표 진행',
      '재무팀에서 동아리 내 예산 편성 및 관리',
      '시장경제 관련 세미나 기획 및 참여',
    ],
  },
  {
    emoji: '🤝',
    emojiColor: '#3B82F6',
    org: '한경협중소기업협력센터',
    role: 'R&D 연구원',
    program: '미래내일 일경험 프로젝트형',
    period: '2026.05 — 2026.06',
    tags: ['상생협력', '중소기업 정책', '리서치'],
    bullets: [
      '대중소기업 상생협력사업이 중소기업 성장에 미치는 영향 연구 진행',
      '관련 정책 및 사례 분석을 통한 시사점 도출',
      '연구 결과 보고서 작성 및 발표',
    ],
  },
  {
    emoji: '💹',
    emojiColor: '#10B981',
    org: '키움증권',
    role: '커뮤니티 서포터즈',
    program: '키움증권 커뮤니티 서포터즈',
    period: '2026.07 — 2026.09',
    tags: ['금융 커뮤니티', '콘텐츠 제작', 'SNS 마케팅'],
    bullets: [
      '키움증권 커뮤니티 활성화를 위한 콘텐츠 기획 및 제작',
      '금융·투자 관련 정보 전달 및 커뮤니티 소통 활동',
    ],
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

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Experience</span>
          <h2 className="h2">활동 &amp; 경험</h2>
          <p className="desc" style={{ marginBottom: '48px' }}>
            다양한 현장에서 금융·경영 역량을 쌓고, 실제 문제를 해결해 왔습니다.
          </p>
        </motion.div>

        <div className="exp__group">
          <h3 className="exp__group-title">업무 경험</h3>
          <motion.div
            className="exp__grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {workCards.map((c) => (
              <motion.div key={c.role + c.org} className="exp__card" variants={item} whileHover={{ y: -4 }}>
                <div className="exp__card-top">
                  <div className="exp__icon" style={{ background: `${c.emojiColor}14` }}>
                    {c.emoji}
                  </div>
                  <div className="exp__card-meta">
                    <span className="exp__period">{c.period}</span>
                    {c.badge && <span className="exp__badge">{c.badge}</span>}
                  </div>
                </div>

                <div className="exp__org">{c.org}</div>
                <div className="exp__role">{c.role}</div>
                <div className="exp__program">{c.program}</div>

                <ul className="exp__bullets">
                  {c.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>

                <div className="exp__tags">
                  {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="exp__group">
          <h3 className="exp__group-title">관련 경험</h3>
          <motion.div
            className="exp__grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {relatedCards.map((c) => (
              <motion.div key={c.role + c.org} className="exp__card" variants={item} whileHover={{ y: -4 }}>
                <div className="exp__card-top">
                  <div className="exp__icon" style={{ background: `${c.emojiColor}14` }}>
                    {c.emoji}
                  </div>
                  <div className="exp__card-meta">
                    <span className="exp__period">{c.period}</span>
                    {c.badge && <span className="exp__badge">{c.badge}</span>}
                  </div>
                </div>

                <div className="exp__org">{c.org}</div>
                <div className="exp__role">{c.role}</div>
                <div className="exp__program">{c.program}</div>

                <ul className="exp__bullets">
                  {c.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>

                <div className="exp__tags">
                  {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
