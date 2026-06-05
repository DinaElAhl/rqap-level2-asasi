// ============================================
// SCORING ENGINE
// Pure function — no React, no DOM. Given the candidate's responses and the
// exam definition, returns section scores, weighted track scores, and a verdict.
//
//   scoreExam({ selectedTracks, sectionOrder, responses, audioRecordings }, EXAM)
//     -> { sectionScores, trackScores, verdict, verdictArabic, verdictTier }
//
// Demo grading policy:
//   - MCQ: 1 mark each, correct/incorrect.
//   - Essays: out of 5; heuristic on word-count vs minimum, capped at 4/5
//             (full marks require a human rater).
//   - Audio: out of 5; heuristic on recording duration.
// ============================================
import { SECTION_WEIGHTS, THRESHOLDS } from './data/exam.js'

export function scoreExam({ selectedTracks, sectionOrder, responses, audioRecordings }, EXAM) {
  const sectionScores = {}

  sectionOrder.forEach((key) => {
    const section = EXAM.sections[key]
    let earned = 0
    let max = 0

    section.itemsList.forEach((item) => {
      const r = responses[item.id]
      if (item.options) {
        max += 1
        if (r && r.correct) earned += 1
      } else if (item.type === 'essay-arabic' || item.type === 'essay-target') {
        max += 5
        if (r && r.wordCount) {
          const min = item.minWords || 50
          const hit = Math.min(1, r.wordCount / min)
          earned += Math.round(hit * 4 * 10) / 10 // cap at 4/5
        }
      } else if (item.type === 'audio') {
        max += 5
        const rec = audioRecordings[item.id]
        if (rec) {
          const dur = rec.durationSec
          if (dur >= 20 && dur <= 90) earned += 4
          else if (dur >= 10) earned += 3
          else earned += 2
        }
      }
    })

    const pct = max > 0 ? (earned / max) * 100 : 0
    sectionScores[key] = {
      earned: Math.round(earned * 10) / 10,
      max,
      pct: Math.round(pct * 10) / 10,
      items: section.itemsList.length
    }
  })

  const trackScores = { language: null, tajweed: null }

  function weightedTrack(keys) {
    let weighted = 0, weightSum = 0
    keys.forEach((k) => {
      if (sectionScores[k]) {
        const w = SECTION_WEIGHTS[k]
        weighted += sectionScores[k].pct * w
        weightSum += w
      }
    })
    return weightSum > 0 ? Math.round((weighted / weightSum) * 10) / 10 : 0
  }

  if (selectedTracks.language) trackScores.language = weightedTrack(['1A', '1B', '1C', '1D'])
  if (selectedTracks.tajweed) trackScores.tajweed = weightedTrack(['2A', '2B', '2C'])

  const langPass = trackScores.language !== null && trackScores.language >= THRESHOLDS.language.pass
  const langDist = trackScores.language !== null && trackScores.language >= THRESHOLDS.language.distinction
  const tajPass = trackScores.tajweed !== null && trackScores.tajweed >= THRESHOLDS.tajweed.pass
  const tajDist = trackScores.tajweed !== null && trackScores.tajweed >= THRESHOLDS.tajweed.distinction

  let verdict, verdictArabic, verdictTier
  if (selectedTracks.language && selectedTracks.tajweed) {
    if (langDist && tajDist) { verdict = 'Level 2 with Distinction'; verdictArabic = 'أساسي مع الامتياز'; verdictTier = 'distinction' }
    else if (langPass && tajPass) { verdict = 'Level 2 (Asasi) — Pass'; verdictArabic = 'أساسي — ناجح'; verdictTier = 'pass' }
    else if (langPass || tajPass) { verdict = 'Single-Track Pass'; verdictArabic = 'نجاح في مسار واحد'; verdictTier = 'pass-partial' }
    else { verdict = 'Below Threshold'; verdictArabic = 'دون الحدّ المطلوب'; verdictTier = 'fail' }
  } else if (selectedTracks.language) {
    verdict = langDist ? 'Language Track — Distinction' : (langPass ? 'Language Track — Pass' : 'Language Track — Below Threshold')
    verdictArabic = langDist ? 'مسار اللغة — امتياز' : (langPass ? 'مسار اللغة — ناجح' : 'مسار اللغة — دون الحدّ')
    verdictTier = langDist ? 'distinction' : (langPass ? 'pass' : 'fail')
  } else {
    verdict = tajDist ? 'Tajweed Track — Distinction' : (tajPass ? 'Tajweed Track — Pass' : 'Tajweed Track — Below Threshold')
    verdictArabic = tajDist ? 'مسار التجويد — امتياز' : (tajPass ? 'مسار التجويد — ناجح' : 'مسار التجويد — دون الحدّ')
    verdictTier = tajDist ? 'distinction' : (tajPass ? 'pass' : 'fail')
  }

  return { sectionScores, trackScores, verdict, verdictArabic, verdictTier }
}
