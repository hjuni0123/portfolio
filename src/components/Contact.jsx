import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__glow" />
      <div className="wrap contact__wrap">
        {/* ── LEFT ── */}
        <motion.div
          className="contact__left"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="eyebrow contact__eyebrow">Contact</span>
          <h2 className="contact__heading">
            함께 만들어가요,<br />
            <span className="contact__heading-grad">좋은 기회를</span>
          </h2>
          <p className="contact__sub">
            채용 제안, 프로젝트 협업, 금융 관련 인사이트 공유 등<br />
            어떤 이야기든 환영합니다.
          </p>

          <div className="contact__pills">
            <a href="mailto:a0038277482@gmail.com" className="contact__pill">
              <span>📧</span>
              <span>a0038277482@gmail.com</span>
              <span className="contact__pill-arrow">↗</span>
            </a>
            <a
              href="https://instagram.com/hjeconomy"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__pill"
            >
              <span>📸</span>
              <span>@hjeconomy</span>
              <span className="contact__pill-arrow">↗</span>
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT — glassmorphism form ── */}
        <motion.form
          className="glass contact__form"
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
        >
          <h3 className="contact__form-title">메시지 보내기</h3>

          <div className="contact__form-row">
            <div className="contact__field">
              <label>이름</label>
              <input type="text" placeholder="홍길동" />
            </div>
            <div className="contact__field">
              <label>이메일</label>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>

          <div className="contact__field">
            <label>제목</label>
            <input type="text" placeholder="채용 제안 / 협업 문의 / 기타" />
          </div>

          <div className="contact__field">
            <label>메시지</label>
            <textarea rows={5} placeholder="내용을 자유롭게 작성해 주세요..." />
          </div>

          <button type="submit" className="btn-primary contact__submit">
            메시지 보내기 →
          </button>
        </motion.form>
      </div>
    </section>
  );
}
