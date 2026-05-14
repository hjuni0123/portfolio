import './Projects.css';

const projects = [
  {
    badge: '차세대 시스템',
    title: '코어뱅킹 차세대 전환 프로젝트',
    desc: '레거시 메인프레임 기반 코어뱅킹 시스템을 Java 마이크로서비스로 전환. 계정계 3개 서비스(수신, 여신, 외환) 담당. 무중단 마이그레이션 전략 수립 및 데이터 정합성 검증 자동화 구현.',
    tags: ['Java', 'Spring Boot', 'Oracle', 'Kubernetes', 'Kafka', 'MSA'],
    result: '처리 TPS 3배 향상, 운영 비용 30% 절감',
  },
  {
    badge: '트레이딩 시스템',
    title: '실시간 주식 주문체결 엔진',
    desc: '기관 투자자 대상 FIX Protocol 기반 저지연 주문체결 시스템 신규 구축. 멀티스레드 기반 매칭 엔진 설계로 초당 10만 건 이상 처리. 실시간 리스크 관리 로직 내장.',
    tags: ['Java', 'FIX Protocol', 'Netty', 'Redis', 'Linux', 'Low Latency'],
    result: '주문 처리 지연 0.5ms 이하 달성',
  },
  {
    badge: 'AI / FDS',
    title: '이상거래 탐지 시스템 (FDS) 고도화',
    desc: '룰 기반 FDS에 머신러닝 모델(XGBoost, Isolation Forest) 결합하여 탐지율 향상. 실시간 피처 엔지니어링 파이프라인 구축. 모델 설명가능성(SHAP) 적용으로 규제 대응.',
    tags: ['Python', 'XGBoost', 'Kafka Streams', 'Spark', 'MLflow', 'SHAP'],
    result: '이상거래 탐지율 18% 향상, 오탐률 25% 감소',
  },
  {
    badge: '인터넷뱅킹',
    title: '인터넷/모바일뱅킹 API 플랫폼',
    desc: 'HTS·MTS·인터넷뱅킹을 위한 통합 API 게이트웨이 구축. OAuth 2.0 기반 인증/인가, API 버전 관리, 트래픽 제어 구현. 금융결제원 오픈뱅킹 API 연동.',
    tags: ['Spring Cloud Gateway', 'OAuth 2.0', 'Redis', 'MySQL', 'Docker', 'ELK'],
    result: 'API 응답시간 평균 120ms → 45ms 개선',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">04. Projects</p>
        <h2 className="section-title">주요 프로젝트</h2>
        <div className="section-divider"></div>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.title} className="project-card">
              <div className="proj-top">
                <span className="proj-badge">{proj.badge}</span>
                <div className="proj-icons">
                  <span className="proj-folder">📁</span>
                </div>
              </div>
              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.desc}</p>
              <div className="proj-result">
                <span className="result-icon">📈</span>
                <span>{proj.result}</span>
              </div>
              <div className="proj-tags">
                {proj.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
