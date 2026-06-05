import { useExam } from '../state/ExamContext.jsx'

function trackText(selectedTracks, results) {
  const lang = selectedTracks.language
  const taj = selectedTracks.tajweed
  let text
  if (lang && taj) text = 'Track 1 — Language · Track 2 — Tajweed'
  else if (lang) text = 'Track 1 — Language'
  else text = 'Track 2 — Tajweed'
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
