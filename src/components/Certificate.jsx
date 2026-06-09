import { useExam } from '../state/ExamContext.jsx'
import { THRESHOLDS } from '../data/exam.js'

const LANG_TEXT = 'Track 1 — Language'
const TAJ_TEXT = 'Track 2 — Tajweed'

function trackText(selectedTracks, results) {
  let lang = !!selectedTracks.language
  let taj = !!selectedTracks.tajweed

  // On a single-track pass (both tracks attempted, only one met threshold),
  // certify only the track that actually passed — never name a failed track.
  if (results && results.verdictTier === 'pass-partial') {
    const ts = results.trackScores || {}
    lang = lang && ts.language != null && ts.language >= THRESHOLDS.language.pass
    taj = taj && ts.tajweed != null && ts.tajweed >= THRESHOLDS.tajweed.pass
  }

  const parts = []
  if (lang) parts.push(LANG_TEXT)
  if (taj) parts.push(TAJ_TEXT)
  let text = parts.join(' · ')
  if (results && results.verdictTier === 'distinction') text += ' · with Distinction'
  return text
}

export default function Certificate() {
  const { selectedTracks, results, cert, candidate, goTo } = useExam()

  if (!cert) return null

  return (
    <section className="screen">
      <div className="screen-inner">
        <div className="section-label center">Your Credential</div>

        <div className="certificate" id="certificate">
          <div className="certificate-eyebrow">Roots · جذور</div>
          <div className="certificate-title">Quranic Arabic Proficiency Certificate</div>
          <div className="certificate-arabic-title">شهادة جذور لإتقان العربية القرآنية</div>

          <div className="ornament">
            <span className="ornament-line"></span>
            <span className="ornament-symbol">❦</span>
            <span className="ornament-line"></span>
          </div>

          <div className="certificate-recipient-label">This certifies that</div>
          <div className="certificate-recipient">
            {(candidate && candidate.name) || 'Anonymous Candidate'}
          </div>

          <div className="certificate-statement">
            has demonstrated proficiency in Quranic Arabic at the level set forth
            below, through assessment anchored on Juz ʿAmma:
          </div>

          <div className="certificate-level">
            Level 2 — <span className="ar">أساسي</span> — Asasi
          </div>

          <div className="certificate-statement small">
            {trackText(selectedTracks, results)}
          </div>

          <div className="certificate-meta">
            <div className="certificate-meta-item">
              <div className="lbl">Credential ID</div>
              <div className="val">{cert.id}</div>
            </div>
            <div className="certificate-meta-item">
              <div className="lbl">Date Issued</div>
              <div className="val">{cert.date}</div>
            </div>
            <div className="certificate-meta-item">
              <div className="lbl">Valid Until</div>
              <div className="val">{cert.validUntil}</div>
            </div>
          </div>

          <div className="certificate-seal">جذور</div>
        </div>

        <div className="panel-info">
          <p className="small">
            <strong>Demo credential:</strong> In the live RQAP examination, each
            certificate carries a scannable QR code linking to a verifiable record
            and is issued under accreditation with Al-Azhar. This demo certificate
            is illustrative only and is not an officially recognised credential.
          </p>
        </div>

        <div className="item-nav mt-2">
          <button className="btn btn-light" onClick={() => goTo('results')}>
            ← Back to Results
          </button>
          <button className="btn btn-primary" onClick={() => window.print()}>
            Print / Save PDF
          </button>
        </div>
      </div>
    </section>
  )
}
