import { useExam } from '../state/ExamContext.jsx'

export default function Topbar() {
  const { currentSection, progressPct, timerText, timerClass } = useExam()
  const label = currentSection?.title
    ? currentSection.title.replace(/^Section \d[A-Z] — /, '')
    : 'Section'

  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="logo-mark">ج</span>
        <div>
          <div className="name">Roots RQAP</div>
          <div className="subname">Level 2 Asasi</div>
        </div>
      </div>
      <div className="topbar-progress">
        <span className="label">{label}</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPct}%` }}></div>
        </div>
      </div>
      <div className={`topbar-timer ${timerClass}`}>{timerText}</div>
    </header>
  )
}
