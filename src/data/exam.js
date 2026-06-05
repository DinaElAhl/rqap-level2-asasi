// ============================================
// EXAM CONTENT — combined item bank
// Sections are authored in track-specific files and merged here so the two
// content tracks can be developed independently without merge conflicts.
// ============================================
import { languageSections } from './examLanguage.js'
import { tajweedSections } from './examTajweed.js'

export const EXAM = {
  meta: {
    level: "2",
    levelArabic: "أساسي",
    levelLatin: "Asasi",
    cefrEquivalent: "B1"
  },
  sections: {
    ...languageSections,
    ...tajweedSections
  }
}

// Canonical section order per track. confirmTracks() filters this by selection,
// so the order is defined in one place and never drifts.
export const TRACK_SECTIONS = {
  language: ["1A", "1B", "1C", "1D"],
  tajweed: ["2A", "2B", "2C"]
}

// Weight of each section within its track (must sum to 1.0 per track).
export const SECTION_WEIGHTS = {
  "1A": 0.20, "1B": 0.20, "1C": 0.30, "1D": 0.30,
  "2A": 0.40, "2B": 0.25, "2C": 0.35
}

// Pass / distinction thresholds per track (out of 100).
export const THRESHOLDS = {
  language: { pass: 65, distinction: 80 },
  tajweed:  { pass: 70, distinction: 85 }
}
