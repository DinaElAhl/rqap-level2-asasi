// ============================================
// PLAIN-TEXT DIAGNOSTIC REPORT GENERATOR
// Pure, dependency-free. Produces the downloadable .txt report.
//   generateReport({ candidate, cert, results, sectionOrder, EXAM }) -> string
// ============================================

export function generateReport({ candidate, cert, results, sectionOrder, EXAM }) {
  const cand = candidate || {}
  const c = cert || {}
  const res = results || {}
  const order = sectionOrder || []
  const exam = EXAM || { sections: {} }
  const sectionScores = res.sectionScores || {}
  const trackScores = res.trackScores || { language: null, tajweed: null }

  const L = []
  const rule = '============================================================'

  L.push(rule)
  L.push('RQAP LEVEL 2 ASASI — DIAGNOSTIC REPORT')
  L.push(rule)
  L.push('')
  L.push(`Candidate:     ${cand.name || 'Anonymous Candidate'}`)
  L.push(`Email:         ${cand.email || '—'}`)
  L.push(`Date:          ${new Date().toLocaleDateString()}`)
  L.push(`Credential ID: ${c.id || 'demo'}`)
  L.push('')

  L.push('------------------------------------------------------------')
  L.push('OUTCOME')
  L.push('------------------------------------------------------------')
  L.push(`${res.verdict || '—'}   (${res.verdictArabic || ''})`)
  L.push('')

  L.push('------------------------------------------------------------')
  L.push('TRACK SCORES')
  L.push('------------------------------------------------------------')
  if (trackScores.language !== null && trackScores.language !== undefined) {
    L.push(`Track 1 — Language:   ${trackScores.language} / 100`)
  }
  if (trackScores.tajweed !== null && trackScores.tajweed !== undefined) {
    L.push(`Track 2 — Tajweed:    ${trackScores.tajweed} / 100`)
  }
  L.push('')

  L.push('------------------------------------------------------------')
  L.push('SECTION DIAGNOSTIC')
  L.push('------------------------------------------------------------')
  order.forEach((key) => {
    const sec = sectionScores[key]
    const def = exam.sections[key] || {}
    if (!sec) return
    L.push(def.title || key)
    L.push(`   ${sec.earned}/${sec.max} = ${sec.pct}%   (${def.weight || ''})`)
    L.push('')
  })

  L.push('------------------------------------------------------------')
  L.push(
    'Note: Constructed-response and audio-recorded items are graded by ' +
    'certified human raters in the live RQAP examination. In this demo, ' +
    'those items are auto-scored using simplified heuristics (length and ' +
    'engagement), so the scores shown are indicative only.'
  )
  L.push('')
  L.push('Roots · جذور — العربية القرآنية في متناول كلّ باحث عنها')
  L.push(rule)

  return L.join('\n')
}
