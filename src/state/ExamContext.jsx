import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react'
import { EXAM, TRACK_SECTIONS } from '../data/exam.js'
import { scoreExam } from '../scoring.js'
import { countWords } from '../util.js'

const ExamContext = createContext(null)

export function useExam() {
  const ctx = useContext(ExamContext)
  if (!ctx) throw new Error('useExam must be used within <ExamProvider>')
  return ctx
}

// Screen ids: welcome | candidate | track-select | section-intro | item
//             section-done | submitting | results | certificate
export function ExamProvider({ children }) {
  const [screen, setScreen] = useState('welcome')
  const [candidate, setCandidate] = useState({ name: '', email: '', country: '', age: '', background: '' })
  const [selectedTracks, setSelectedTracks] = useState({ language: true, tajweed: true })
  const [sectionOrder, setSectionOrder] = useState([])
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [responses, setResponses] = useState({})
  const [audioRecordings, setAudioRecordings] = useState({})
  const [results, setResults] = useState(null)
  const [cert, setCert] = useState({ id: '', date: '', validUntil: '' })

  // --- Single continuous exam timer ---
  const examStartRef = useRef(null)
  const totalSecondsRef = useRef(0)
  const [remaining, setRemaining] = useState(null)
  const [timerRunning, setTimerRunning] = useState(false)

  useEffect(() => {
    if (!timerRunning) return
    const tick = () => {
      const elapsed = Math.floor((Date.now() - examStartRef.current) / 1000)
      setRemaining(Math.max(0, totalSecondsRef.current - elapsed))
    }
    tick()
    const id = setInterval(tick, 500)
    return () => clearInterval(id)
  }, [timerRunning])

  // --- Navigation helper ---
  const goTo = useCallback((s) => {
    setScreen(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // --- Derived ---
  const currentSectionKey = sectionOrder[currentSectionIndex]
  const currentSection = currentSectionKey ? EXAM.sections[currentSectionKey] : null
  const currentItem = currentSection ? currentSection.itemsList[currentItemIndex] : null
  const isLastSection = currentSectionIndex >= sectionOrder.length - 1
  const nextSection = !isLastSection ? EXAM.sections[sectionOrder[currentSectionIndex + 1]] : null

  let progressPct = 0
  if (sectionOrder.length) {
    let total = 0, done = 0
    sectionOrder.forEach((key, idx) => {
      const n = EXAM.sections[key].itemsList.length
      total += n
      if (idx < currentSectionIndex) done += n
      else if (idx === currentSectionIndex) done += currentItemIndex
    })
    progressPct = total ? (done / total) * 100 : 0
  }

  // --- Candidate ---
  const updateCandidate = useCallback((patch) => {
    setCandidate((c) => ({ ...c, ...patch }))
  }, [])

  const submitCandidate = useCallback(() => {
    const name = candidate.name.trim()
    const email = candidate.email.trim()
    if (!name) { alert('Please enter your full name to continue.'); return false }
    if (!email || !email.includes('@')) { alert('Please enter a valid email address.'); return false }
    goTo('track-select')
    return true
  }, [candidate, goTo])

  // --- Tracks ---
  const toggleTrack = useCallback((track) => {
    setSelectedTracks((t) => ({ ...t, [track]: !t[track] }))
  }, [])

  const confirmTracks = useCallback(() => {
    if (!selectedTracks.language && !selectedTracks.tajweed) {
      alert('Please select at least one track.')
      return
    }
    const order = []
    if (selectedTracks.language) order.push(...TRACK_SECTIONS.language)
    if (selectedTracks.tajweed) order.push(...TRACK_SECTIONS.tajweed)
    setSectionOrder(order)
    setCurrentSectionIndex(0)
    totalSecondsRef.current = order.reduce((sum, k) => sum + EXAM.sections[k].time * 60, 0)
    examStartRef.current = null
    setTimerRunning(false)
    goTo('section-intro')
  }, [selectedTracks, goTo])

  // --- Section flow ---
  const startSection = useCallback(() => {
    setCurrentItemIndex(0)
    if (!examStartRef.current) {
      examStartRef.current = Date.now()
      setTimerRunning(true)
    }
    goTo('item')
  }, [goTo])

  const finishSection = useCallback(() => {
    goTo('section-done')
  }, [goTo])

  // --- Responses ---
  const selectOption = useCallback((itemId, optionIndex) => {
    const item = findItem(itemId)
    setResponses((r) => ({
      ...r,
      [itemId]: { value: optionIndex, correct: item ? optionIndex === item.correct : false }
    }))
  }, [])

  const setEssay = useCallback((itemId, value) => {
    setResponses((r) => ({ ...r, [itemId]: { value, wordCount: countWords(value) } }))
  }, [])

  const setAudio = useCallback((itemId, rec) => {
    setAudioRecordings((a) => ({ ...a, [itemId]: rec }))
    setResponses((r) => ({ ...r, [itemId]: { value: 'recorded', durationSec: rec.durationSec } }))
  }, [])

  const isItemAnswered = useCallback((item) => {
    if (!item) return false
    if (item.type === 'audio') return !!audioRecordings[item.id]
    if (item.type === 'essay-arabic' || item.type === 'essay-target') {
      const r = responses[item.id]
      return !!r && r.wordCount >= (item.minWords || 10)
    }
    const r = responses[item.id]
    return !!r && r.value !== undefined
  }, [responses, audioRecordings])

  // --- Item navigation ---
  const nextItem = useCallback(() => {
    if (!currentSection) return
    if (currentItemIndex < currentSection.itemsList.length - 1) {
      setCurrentItemIndex((i) => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      finishSection()
    }
  }, [currentSection, currentItemIndex, finishSection])

  const prevItem = useCallback(() => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex((i) => i - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentItemIndex])

  // --- Submit & score ---
  const submitExam = useCallback(() => {
    setTimerRunning(false)
    goTo('submitting')
    setTimeout(() => {
      const res = scoreExam({ selectedTracks, sectionOrder, responses, audioRecordings }, EXAM)
      setResults(res)

      const id = 'RQAP-2-' + Date.now().toString(36).toUpperCase()
      const today = new Date()
      const dateStr = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      const valid = new Date(today)
      valid.setFullYear(valid.getFullYear() + 2)
      const validStr = valid.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
      setCert({ id, date: dateStr, validUntil: validStr })

      goTo('results')
    }, 2200)
  }, [selectedTracks, sectionOrder, responses, audioRecordings, goTo])

  const afterSection = useCallback(() => {
    if (isLastSection) {
      submitExam()
    } else {
      setCurrentSectionIndex((i) => i + 1)
      goTo('section-intro')
    }
  }, [isLastSection, submitExam, goTo])

  const start = useCallback(() => goTo('candidate'), [goTo])

  // --- Timer display ---
  let timerText = '--:--'
  let timerClass = ''
  if (remaining !== null) {
    const m = Math.floor(remaining / 60)
    const s = remaining % 60
    timerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    if (remaining < 60) timerClass = 'danger'
    else if (remaining < 300) timerClass = 'warning'
  }

  const value = {
    // state
    screen, candidate, selectedTracks, sectionOrder,
    currentSectionIndex, currentItemIndex, responses, audioRecordings,
    results, cert,
    // derived
    currentSectionKey, currentSection, currentItem, isLastSection, nextSection, progressPct,
    timerText, timerClass, timerRunning,
    // actions
    goTo, start, updateCandidate, submitCandidate, toggleTrack, confirmTracks,
    startSection, finishSection, afterSection, submitExam,
    selectOption, setEssay, setAudio, isItemAnswered, nextItem, prevItem,
    EXAM
  }

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>
}

function findItem(itemId) {
  for (const key in EXAM.sections) {
    const found = EXAM.sections[key].itemsList.find((it) => it.id === itemId)
    if (found) return found
  }
  return null
}
