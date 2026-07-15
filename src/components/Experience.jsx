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
      '학부 행정업무 전반을 전담하며 안정적인 학사 운영 지원',
      '연 2회 | 8천만원 규모의 사업 전담기획 진행 — 기획안 수립부터 예산 집행까지 총괄',
      '품의서 기안 및 전자결재 시스템 운용으로 사업 일정 차질 없이 완료',
    ],
  },
  {
    emoji: '🏛️',
    emojiColor: '#8B5CF6',
    org: '중소벤처기업부',
    role: '인턴',
    program: '창업벤처혁신실 청년정책과',
    period: '2026.07 — 현재',
    tags: ['정책 지원', '행사 기획', '창업 지원'],
    bullets: [
      '중기부 주관 행사 기획 및 운영 실무 보조 수행',
      '모두의창업 플랫폼 관련 업무 지원',
      '정책 실행 프로세스와 민관 협업 구조에 대한 실무 이해 확보',
    ],
  },
];

const relatedCards = [
  {
    emoji: '💬',
    emojiColor: '#F59E0B',
    org: 'YLC 전국시장경제연합동아리',
    role: '동아리 활동',
    program: '전국시장경제연합동아리',
    period: '2025.09 — 2026.06',
    tags: ['금융 토론', '예산 관리', '경제 발표'],
    bullets: [
      '금융·경제 이슈에 대한 토론 및 발표를 정기적으로 진행',
      '동아리 예산 편성·집행 관리를 담당하며 재무 프로세스 경험',
      '시장경제 세미나 기획으로 회원 대상 학습 콘텐츠 제공',
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
    emoji: '🪙',
    emojiColor: '#7248F2',
    org: '한국경제인협회',
    role: 'R&D 연구원',
    program: '미래내일 일경험 프로젝트형',
    period: '2025.09 — 2025.10',
    tags: ['핀테크 리서치', '스테이블코인', '규제 분석'],
    bullets: [
      '미국 GENIUS 법안 시행에 따른 국내 스테이블코인 시장 영향 리서치 수행',
      '글로벌 암호화폐 규제 동향을 비교분석해 국내 시장 영향도 도출',
      '연구 결과를 보고서로 정리·발표해 규제 리스크 시사점 제시',
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
      '관련 정책·사례 비교분석을 통해 실효성 검증',
      '연구 결과 보고서 작성·발표로 정책 개선 시사점 제시',
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
      '키움증권 커뮤니티 활성화를 위한 콘텐츠 기획 및 제작 수행',
      '금융·투자 정보를 가공해 커뮤니티 내 소통 활동 주도',
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
