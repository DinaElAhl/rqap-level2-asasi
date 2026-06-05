// Shared pure helpers used across components and the store.

// Unicode-aware word counter. Splitting on whitespace miscounts Arabic words
// joined by punctuation with no space. This matches runs of Arabic letters +
// diacritics (and Latin/digits) as discrete words.
const WORD_RE = new RegExp(
  '[A-Za-z0-9' +
  '\\u0660-\\u0669' + // Arabic-Indic digits
  '\\u0621-\\u065F' + // Arabic letters + diacritics
  '\\u0670-\\u06D3' + // extended letters
  '\\u06FA-\\u06FF' + // supplement
  ']+',
  'g'
)

export function countWords(text) {
  if (!text) return 0
  const tokens = text.match(WORD_RE)
  return tokens ? tokens.length : 0
}

export function formatDuration(secs) {
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}
