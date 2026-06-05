import { useExam } from '../state/ExamContext.jsx'

export default function SectionDone() {
  const { currentSection, isLastSection, nextSection, afterSection } = useExam()
  if (!currentSection) return null

  const title = currentSection.title.replace(/^Section \d[A-Z] — /, '')
  const nextTitle = nextSection
    ? nextSection.title.replace(/^Section \d[A-Z] — /, '')
    : ''

  const message = isLastSection
    ? 'You have completed all sections of the examination. The next step is scoring.'
    : `You've completed this section. Up next: ${nextTitle}.`

  const buttonLabel = isLastSection
    ? 'View Results →'
    : 'Continue to Next Section →'

  return (
    <section className="screen">
      <div className="screen-inner">
        <div className="section-hero">
          <div className="ornament">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">✦</span>
            <span className="ornament-line"></span>
          </div>
          <div className="number">Section Complete</div>
          <h2>{title}</h2>
          <p className="lead">{message}</p>
          <button
            className="btn btn-primary btn-large mt-2"
            onClick={afterSection}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
