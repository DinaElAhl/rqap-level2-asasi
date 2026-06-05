import { useEffect, useState } from 'react'
import { useExam } from '../state/ExamContext.jsx'
import { THRESHOLDS } from '../data/exam.js'
import { generateReport } from '../report.js'

const NOT_MET_MESSAGE =
  'Your scores did not meet the certification threshold for this demo run, ' +
  'so no certificate is issued. Review your diagnostic report below to see ' +
  'where to focus, then take the examination again.'

function statusFor(score, thresholds) {
  if (score >= thresholds.distinction) return { cls: 'distinction', label: 'Distinction' }
  if (score >= thresholds.pass) return { cls: 'pass', label: 'Pass' }
  return { cls: 'fail', label: 'Below Threshold' }
}

function ScoreCard({ title, arabicSub, score, thresholds, reveal }) {
  const status = statusFor(score, thresholds)
  const target = Math.min(100, score)
  return (
    <div className="score-card">
      <h3>{title}</h3>
      <div className="arabic-sub">{arabicSub}</div>
      <div className="score-display">
        {score.toFixed(1)}
        <span className="max"> / 100</span>
      </div>
      <div className="score-meter">
        <div
          className="score-meter-fill"
          style={{ width: (reveal ? target : 0) + '%' }}
        />
      </div>
      <span className={'score-status ' + status.cls}>{status.label}</span>
    </div>
  )
}

export default function Results() {
  const { selectedTracks, sectionOrder, results, cert, candidate, goTo, EXAM } = useExam()
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 100)
    return () => clearTimeout(t)
  }, [])

  if (!results) return null

  const sectionScores = results.sectionScores || {}

  const viewCertificate = () => {
    if (results.verdictTier === 'fail') {
      alert(NOT_MET_MESSAGE)
      return
    }
    goTo('certificate')
  }

  const downloadReport = () => {
    const text = generateReport({ candidate, cert, results, sectionOrder, EXAM })
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `RQAP-Report-${(cert && cert.id) || 'demo'}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section className="screen">
      <div className="screen-inner">
        <div className="score-hero">
          <div className="section-label">Examination Result</div>
          <div className="verdict-badge">
            <div className="verdict-label">Outcome</div>
            <div className="verdict-result">{results.verdict}</div>
            <div className="verdict-arabic">{results.verdictArabic}</div>
          </div>
        </div>

        <div className="score-breakdown">
          {selectedTracks.language && (
            <ScoreCard
              title="Track 1 — Language"
              arabicSub="مسار اللغة القرآنية"
              score={results.trackScores.language ?? 0}
              thresholds={THRESHOLDS.language}
              reveal={reveal}
            />
          )}
          {selectedTracks.tajweed && (
            <ScoreCard
              title="Track 2 — Tajweed"
              arabicSub="مسار التجويد والتلاوة"
              score={results.trackScores.tajweed ?? 0}
              thresholds={THRESHOLDS.tajweed}
              reveal={reveal}
            />
          )}
        </div>

        <div className="panel">
          <h3>Diagnostic Report</h3>
          <p className="small text-faint">
            A per-section breakdown of your performance, showing where you excelled
            and where to focus next.
          </p>
          {sectionOrder.map((key) => {
            const sec = sectionScores[key]
            const def = EXAM.sections[key] || {}
            if (!sec) return null
            return (
              <div className="diagnostic" key={key}>
                <h4>{def.title}</h4>
                <div className="diag-item">
                  <span className="lbl">Items attempted</span>
                  <span className="score-val">{sec.items}</span>
                </div>
                <div className="diag-item">
                  <span className="lbl">Score</span>
                  <span className="score-val">
                    {sec.earned} / {sec.max} ({sec.pct.toFixed(1)}%)
                  </span>
                </div>
                <div className="diag-item">
                  <span className="lbl">Weight in track</span>
                  <span className="score-val">{def.weight}</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="panel-info">
          <p className="small">
            <strong>Important note about this demo:</strong> Constructed-response
            and audio-recorded items are graded by certified human raters in the
            live RQAP examination. In this demo, those items are auto-scored using
            simplified heuristics (length and engagement), so the scores shown are
            indicative only and should not be read as a definitive assessment of
            your proficiency.
          </p>
        </div>

        <div className="item-nav mt-2">
          <button className="btn btn-light" onClick={viewCertificate}>
            View Certificate →
          </button>
          <button className="btn btn-primary" onClick={downloadReport}>
            Download Report
          </button>
        </div>
      </div>
    </section>
  )
}
