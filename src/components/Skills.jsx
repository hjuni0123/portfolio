import { motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    category: '데이터 & 오피스',
    icon: '📊',
    skills: [
      'Excel 피벗테이블·VLOOKUP 활용 데이터 정리 및 분석',
      'PowerPoint 기반 보고 자료 제작',
      'Word 활용 정제된 보고서 작성',
    ],
  },
  {
    category: '생성형 AI 활용',
    icon: '🤖',
    skills: [
      '생성형 AI 활용 반복업무 자동화 경험',
      'AI로 웹사이트를 제작·배포해 실제 행사에 활용한 경험',
      '프롬프트 기반 리서치 및 문서 초안 작성',
    ],
  },
  {
    category: '금융 리서치',
    icon: '🏦',
    skills: [
      '정책·규제 동향 분석 및 시사점 도출',
      '리서치 보고서 작성 및 발표',
      '금융 콘텐츠 기획 (카드뉴스 등)',
    ],
  },
  {
    category: '소프트 스킬',
    icon: '🤝',
    skills: [
      '책임감 있는 업무 수행 (8천만원 규모 사업 전담기획)',
      '이해관계자 커뮤니케이션 및 협업',
      '꼼꼼한 문서 검토와 정확성',
      '빠른 학습 및 적응력',
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

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Skills</span>
          <h2 className="h2">역량</h2>
          <p className="desc" style={{ marginBottom: '48px' }}>
            리서치와 실무 현장에서 쌓아온 업무 툴, AI 활용, 협업 역량입니다.
          </p>
        </motion.div>

        <motion.div
          className="skl__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skillGroups.map((g) => (
            <motion.div key={g.category} className="skl__card" variants={item} whileHover={{ y: -4 }}>
              <div className="skl__card-header">
                <span className="skl__icon">{g.icon}</span>
                <h3>{g.category}</h3>
              </div>
              <ul className="skl__list">
                {g.skills.map((s) => (
                  <li key={s}>
                    <span className="skl__dot">·</span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
