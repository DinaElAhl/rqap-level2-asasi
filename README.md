# RQAP — Level 2 Asasi

**Roots Quranic Arabic Proficiency Examination** — a native **React + Vite** rebuild of the original single-file Claude artifact, with the bugs fixed and the full item banks authored.

A standardized assessment of foundational proficiency in Quranic Arabic and Tajweed, anchored in Juz ʿAmma (Level 2 — *Asasi*, ≈ CEFR B1). Two independently certified tracks.

## Tracks & sections

| Section | Track | Focus | Items | Weight |
|---|---|---|---|---|
| 1A | Language | Vocabulary & Roots | 20 | 20% |
| 1B | Language | Grammar & Morphology | 15 | 20% |
| 1C | Language | Verse Comprehension | 20 | 30% |
| 1D | Language | Constructed Response (essays) | 2 | 30% |
| 2A | Tajweed | Theory (makharij, sifaat, madd…) | 25 | 40% |
| 2B | Tajweed | Applied Tajweed | 10 | 25% |
| 2C | Tajweed | Practical Recitation (audio) | 1 | 35% |

**93 items total.** Pass thresholds: Language ≥ 65 (distinction ≥ 80), Tajweed ≥ 70 (distinction ≥ 85).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # serve the production build
```

Requires Node 18+.

## Architecture

Single-page React app driven by one screen state machine.

```
index.html               Vite entry (loads fonts, mounts #root)
src/
  main.jsx               React root + <ExamProvider>
  App.jsx                screen router + conditional <Topbar>
  styles.css             Roots design system (ported verbatim)
  util.js                countWords (Unicode-aware), formatDuration
  scoring.js             pure scoreExam() — section + weighted track scores, verdict
  report.js              plain-text diagnostic report generator
  state/
    ExamContext.jsx      all exam state + flow logic + the single continuous timer
  data/
    exam.js              combines the two tracks; exposes weights & thresholds
    examLanguage.js      Track 1 item bank (1A–1D)
    examTajweed.js       Track 2 item bank (2A–2C)
  components/
    Topbar, Welcome, Candidate, TrackSelect, SectionIntro,
    Item, AudioRecorder, SectionDone, Submitting, Results, Certificate
```

### Notes on the rebuild
- The original "screens toggle via CSS `.active`" pattern was replaced by React conditional rendering — only the active screen mounts.
- **One continuous exam timer** spans all selected sections (starts on the first section, never resets between them).
- **Word counting** is Unicode-aware so Arabic words separated only by punctuation are counted correctly.
- Candidate fields are controlled inputs, so values persist across back/forward navigation.
- Constructed-response and audio items are auto-scored with simplified heuristics for the demo; in a live administration they are graded by certified human raters.

## Disclaimer
This is a **demonstration**. Candidate data lives only in the browser session and is never transmitted. The demo certificate is illustrative and is not an officially recognised credential.
