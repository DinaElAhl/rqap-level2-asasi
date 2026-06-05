import { useExam } from '../state/ExamContext.jsx'

export default function SectionIntro() {
  const { currentSection, currentSectionKey, startSection } = useExam()
  if (!currentSection) return null

  const title = currentSection.title.replace(/^Section \d[A-Z] — /, '')
  const trackNum = currentSection.track === 'language' ? '1' : '2'

  return (
    <section className="screen">
      <div className="screen-inner">
        <div className="section-hero">
          <div className="number">
            Section {currentSectionKey} · Track {trackNum}
          </div>
          <h2>{title}</h2>
          <div className="arabic-name">{currentSection.titleArabic}</div>
          <p className="lead">{currentSection.description}</p>

          <div className="ornament">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">❦</span>
            <span className="ornament-line"></span>
          </div>

          <div className="section-stats">
            <div className="section-stat">
              <div className="num">{currentSection.itemsList.length}</div>
              <div className="lbl">Questions</div>
            </div>
            <div className="section-stat">
              <div className="num">{currentSection.time}</div>
              <div className="lbl">Minutes</div>
            </div>
            <div className="section-stat">
              <div className="num">{currentSection.weight}</div>
              <div className="lbl">Track Weight</div>
            </div>
          </div>

          <div className="panel-cream">
            <p>{currentSection.instructions}</p>
          </div>

          <button
            className="btn btn-primary btn-large mt-2"
            onClick={startSection}
          >
            Begin Section →
          </button>
        </div>
      </div>
    </section>
  )
}
