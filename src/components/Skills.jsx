import './Skills.css';

const skillGroups = [
  {
    category: '백엔드',
    icon: '⚙️',
    skills: ['Java / Spring Boot', 'Python', 'Node.js', 'Oracle DB', 'PostgreSQL', 'Redis', 'Kafka', 'REST API / gRPC'],
  },
  {
    category: '프론트엔드',
    icon: '🖥️',
    skills: ['React', 'TypeScript', 'Vue.js', 'HTML/CSS', 'Chart.js / D3.js'],
  },
  {
    category: '금융 도메인',
    icon: '🏦',
    skills: ['코어뱅킹 (계정계/정보계)', '증권 주문체결 시스템', 'FIX Protocol', 'SWIFT / 전자금융', 'ISMS 보안', '금융 규제 준수'],
  },
  {
    category: '인프라 / DevOps',
    icon: '☁️',
    skills: ['AWS / Azure', 'Docker / Kubernetes', 'CI/CD (Jenkins, GitLab)', 'Linux 서버 운영', 'ELK Stack 모니터링'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">02. Skills</p>
        <h2 className="section-title">기술 스택</h2>
        <div className="section-divider"></div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-dot">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
