import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Work.css';

import industryDefenseChart from '../assets/work/industry-defense-chart.png';
import industrySecurityTable from '../assets/work/industry-security-table.png';
import modelStructure from '../assets/work/model-structure.png';
import modelNvidiaSheet from '../assets/work/model-nvidia-sheet.png';
import modelPbrSheet from '../assets/work/model-pbr-sheet.png';
import modelCapexChart from '../assets/work/model-capex-chart.png';
import modelConclusion from '../assets/work/model-conclusion.png';
import macroRateReport from '../assets/work/macro-rate-report.png';
import macroTreasuryReport from '../assets/work/macro-treasury-report.png';
import macroBtcReport from '../assets/work/macro-btc-report.png';
import irKpwReview from '../assets/work/ir-kpw-review.png';
import irSamsungReport from '../assets/work/ir-samsung-report.png';
import fieldMap from '../assets/work/field-map.png';
import fieldBrief from '../assets/work/field-brief.png';
import automationBot from '../assets/work/automation-bot.jpeg';
import contentInstagram from '../assets/work/content-instagram.jpeg';

const groups = [
  {
    no: '01',
    title: '산업·기업 분석',
    items: [
      {
        image: industryDefenseChart,
        title: 'K-방산, 완제품에서 공급망으로',
        meta: '산업분석 발표 · 19장 · 단독 작성·발표 · 2026.09',
        desc: 'K-방산 밸류체인(완제품 → 소부장)을 ETF 일별 데이터·코스피/VIX/지정학지수 상관 검증·EV/EBITDA 비교로 분석 — 완제품 1/3 분할매수, 소부장은 직접수출 전환주만 제시.',
      },
      {
        image: industrySecurityTable,
        title: 'AI 해킹 국면, 보안주 5개사 원페이저',
        meta: '기업 원페이저 · 7장 · 단독 작성 · 2026.10',
        desc: 'DART 재무로 PER·PBR·PSR·성장률을 직접 산출해 보안주 5개사 비교 — Top Pick 안랩(PER 23.0x 최저, 3Q 영업이익 +38%).',
      },
    ],
  },
  {
    no: '02',
    title: '재무 모델링 · 엑셀',
    items: [
      {
        image: modelStructure,
        title: 'AI 반도체 통합 재무 모델 — 구조',
        meta: 'Excel · 10개 시트 · 2020~2026 분기 · 개인 프로젝트 · 2026.05',
        desc: '빅테크 4사·NVIDIA·TSMC·메모리 3사 분기 재무를 10개 시트로 통합. SEC·DART·TSMC 6-K 원자료 입력, CAPEX→매출→마진 연결 구조 설계.',
      },
      {
        image: modelCapexChart,
        title: '빅테크 CAPEX가 NVIDIA 매출을 끌고 간다',
        meta: '모델 결과 차트 · 2020~2026 분기',
        desc: '빅테크 합산 CAPEX와 NVIDIA 매출을 시계열로 연결해 AI 인프라 투자 사이클의 자금원을 시각화.',
      },
      {
        image: modelNvidiaSheet,
        title: 'NVIDIA 분기 장기 시트',
        meta: 'FY20 Q1~FY27 Q1 · 매출/GPM/OPM + 재고/약정',
        desc: 'GPM 최고 FY25Q1 78.4%, OPM 최고 FY27Q1 65.6% 등 분기별 수익성 지표를 SEC 공시 기준으로 정리.',
      },
      {
        image: modelPbrSheet,
        title: '메모리 3사 PBR 장기 추이',
        meta: '2020~2026 · 재평가(re-rating) 논쟁의 핵심',
        desc: '마이크론 PBR이 1.3~3.0배 밴드에서 2026Q1 13.9배까지 치솟은 재평가 구간을 분기별로 추적.',
      },
      {
        image: modelConclusion,
        title: '메모리 재평가는 구조 변화인가 — 결론',
        meta: '모델 결론 시트',
        desc: '수요 독립성·독점력·이익 변동성·PBR 밴드 4개 조건으로 판정 — 재평가는 모멘텀 성격, 3단계 매도 트리거 설정.',
      },
    ],
  },
  {
    no: '03',
    title: '매크로 · 가상자산 리포트',
    items: [
      {
        image: macroRateReport,
        title: '노벨경제학상 이론으로 본 국내 금리·증시',
        meta: 'Market Strategy · 7쪽 · 2026.10',
        desc: '국고채 금리별 수익률을 계산해 손익분기 +34bp 도출 — 국내 주식 중립, 국고채 2~3년 비중확대, PB 고객 설명 자료로 활용.',
      },
      {
        image: macroTreasuryReport,
        title: '미국채 금리로 본 미국·한국 증시',
        meta: 'Market Strategy · 6쪽 · 2026.10',
        desc: '미 10년물 상승분을 기대인플레·기간프리미엄으로 분해 — 미국 주식 비중축소, 중간선거 후 롱 전환 제시.',
      },
      {
        image: macroBtcReport,
        title: '비트코인, 정상 배수까지 21%',
        meta: '가상자산 리포트 · 19쪽 · 2026.10',
        desc: '시장 원가 × MVRV 중앙값 1.75배로 적정가치 산출 — BUY, 목표가 105,000달러 제시.',
      },
    ],
  },
  {
    no: '04',
    title: 'IR 참관 보고',
    items: [
      {
        image: irKpwReview,
        title: 'KPW 2026 IR 세션 리뷰',
        meta: '금융위원회·한국거래소 주최 · 25쪽 · 2026.09',
        desc: '삼성전자·SK하이닉스·두산에너빌리티·로보티즈 IR을 이익 확인 단계별로 구분 — AI 수요 확산 순서(반도체 → 전력 → 로봇)를 센터에 보고.',
      },
      {
        image: irSamsungReport,
        title: '삼성전자 IR 참관 보고서',
        meta: '리포트 양식 2쪽 · 2026.09',
        desc: '삼성전자 4개 부문 발표를 리포트 양식 + 주가 지표로 정리 — 메모리 시장 9.6배 전망·주주환원 계획 2쪽 요약.',
      },
    ],
  },
  {
    no: '05',
    title: '현장 영업',
    items: [
      {
        image: fieldMap,
        title: '남동공단 현황과 고객 유치 방안',
        meta: '센터 발표 · 17장 · 공동 발표 중 단독 담당 · 2026.10',
        desc: '공장 8,635개 대비 센터 공단 고객 0명의 원인을 주변 산단 비교·금융기관 매핑(은행 12·증권사 0)으로 분석, 센터장 1:1 보고.',
      },
      {
        image: fieldBrief,
        title: '남동공단 업황 브리핑',
        meta: '월간 브리프 시범 제작 · 1쪽 · 2026.10',
        desc: '공단 방문 영업용 1쪽 브리프 — 관세·유가·금리·환율 영향과 상담 항목을 담은 월간 양식.',
      },
    ],
  },
  {
    no: '06',
    title: '자동화 · 콘텐츠',
    items: [
      {
        image: automationBot,
        title: 'PB 데일리 브리핑 봇',
        meta: '한양증권 인천프리미어센터 · 2026.09~ · 단독 개발',
        desc: 'DART·네이버·토스 API와 Claude Code를 연동해 PB용 시황 브리핑을 아침·장중·마감 하루 3회 자동 발송 — PB 7명이 2개월째 사용.',
      },
      {
        image: contentInstagram,
        title: '경제 카드뉴스 채널',
        meta: 'Instagram @hjeconomy · 개인',
        desc: '뉴스 수집 → GPT 요약 → 카드 생성 → 자동 게시 파이프라인 구축 — 게시물 조회 600~880회.',
      },
    ],
  },
];

export default function Work() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="work" className="section work">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Work</span>
          <h2 className="h2">실제 작업물</h2>
          <p className="desc" style={{ marginBottom: '48px' }}>
            리포트, 재무 모델, 현장 자료까지 — 직접 작성한 결과물로 보여드립니다.
          </p>
        </motion.div>

        {groups.map((g) => (
          <div className="work__group" key={g.no}>
            <h3 className="work__group-title">
              <span className="work__group-no">{g.no}</span>
              {g.title}
            </h3>
            <div className="work__grid">
              {g.items.map((it) => (
                <motion.button
                  key={it.title}
                  type="button"
                  className="work__card"
                  onClick={() => setLightbox(it)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="work__thumb">
                    <img src={it.image} alt={it.title} loading="lazy" />
                    <span className="work__zoom">🔍 크게 보기</span>
                  </div>
                  <div className="work__meta">{it.meta}</div>
                  <div className="work__title">{it.title}</div>
                  <p className="work__desc">{it.desc}</p>
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="work__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="work__lightbox-inner"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="work__lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="닫기"
              >
                ✕
              </button>
              <img src={lightbox.image} alt={lightbox.title} />
              <div className="work__lightbox-caption">
                <div className="work__lightbox-title">{lightbox.title}</div>
                <div className="work__lightbox-meta">{lightbox.meta}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
