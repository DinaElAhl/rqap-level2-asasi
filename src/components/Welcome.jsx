import { useExam } from '../state/ExamContext.jsx'

export default function Welcome() {
  const { start } = useExam()

  return (
    <section id="welcome-screen" className="screen">
      <div className="welcome-content">
        <div className="welcome-eyebrow">
          <span className="line"></span>
          Roots · جذور · Level 2 Asasi
          <span className="line"></span>
        </div>
        <h1>
          The Roots <span className="accent">Quranic Arabic</span> Proficiency Examination
        </h1>
        <div className="welcome-arabic">شهادة جذور لإتقان العربية القرآنية</div>
        <p className="welcome-tagline">
          A standardized assessment of foundational proficiency in Quranic Arabic
          and Tajweed, anchored in Juz ʿAmma. Two tracks, certified independently.
        </p>
        <div className="welcome-meta">
          <div className="welcome-meta-item">
            <span className="label">Level</span>
            <span className="value">2 — Asasi (B1)</span>
          </div>
          <div className="welcome-meta-item">
            <span className="label">Duration</span>
            <span className="value">~30 minutes (demo)</span>
          </div>
          <div className="welcome-meta-item">
            <span className="label">Tracks</span>
            <span className="value">Language & Tajweed</span>
          </div>
        </div>
        <div className="welcome-cta">
          <button className="btn btn-primary btn-large" onClick={start}>
            Begin Examination →
          </button>
        </div>
      </div>
    </section>
  )
}
