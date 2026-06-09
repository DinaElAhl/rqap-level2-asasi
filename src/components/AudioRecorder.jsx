import { useState, useRef, useEffect } from 'react'
import { useExam } from '../state/ExamContext.jsx'
import { formatDuration } from '../util.js'

const MAX_SECONDS = 180

export default function AudioRecorder({ itemId }) {
  const { audioRecordings, setAudio } = useExam()
  const existing = audioRecordings[itemId]

  const [recording, setRecording] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [audioUrl, setAudioUrl] = useState(existing ? existing.url : null)
  const [status, setStatus] = useState(
    existing ? 'Recording saved' : 'Tap the button to begin recording'
  )
  const [errored, setErrored] = useState(false)

  const mediaRecorderRef = useRef(null)
  const streamRef = useRef(null)
  const chunksRef = useRef([])
  const intervalRef = useRef(null)
  const startTimeRef = useRef(0)
  const prevUrlRef = useRef(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      // Stop the recorder first so its onstop doesn't try to save after unmount.
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.onstop = null
        mediaRecorderRef.current.stop()
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop())
        streamRef.current = null
      }
    }
  }, [])

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }
  }

  const startRecording = async () => {
    setErrored(false)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      chunksRef.current = []
      const mr = new MediaRecorder(stream)
      mediaRecorderRef.current = mr

      mr.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data)
      }

      mr.onstop = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        const url = URL.createObjectURL(blob)
        const durationSec = (Date.now() - startTimeRef.current) / 1000
        // Revoke the URL from a previous re-record in this session (never the
        // restored `existing` URL, which the store still references).
        if (prevUrlRef.current) URL.revokeObjectURL(prevUrlRef.current)
        prevUrlRef.current = url
        setAudioUrl(url)
        setAudio(itemId, { blob, url, durationSec })
        setRecording(false)
        setStatus('Recording saved')
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((t) => t.stop())
          streamRef.current = null
        }
      }

      startTimeRef.current = Date.now()
      setElapsed(0)
      mr.start()
      setRecording(true)
      setStatus('Recording… tap to stop')

      intervalRef.current = setInterval(() => {
        const secs = Math.floor((Date.now() - startTimeRef.current) / 1000)
        setElapsed(secs)
        if (secs >= MAX_SECONDS) stopRecording()
      }, 250)
    } catch (err) {
      setErrored(true)
      setStatus('Microphone access denied or unavailable: ' + err.message)
    }
  }

  const handleClick = () => {
    if (recording) stopRecording()
    else startRecording()
  }

  let statusClass = ''
  if (recording) statusClass = 'recording'
  else if (audioUrl && !errored) statusClass = 'recorded'

  return (
    <div className="audio-recorder">
      <h4>Record Your Recitation</h4>
      <div className={`recording-status ${statusClass}`}>{status}</div>
      <button
        type="button"
        className={`record-button ${recording ? 'recording' : ''}`}
        onClick={handleClick}
      >
        <span className="record-icon"></span>
      </button>
      <div className="recording-timer">{formatDuration(elapsed)}</div>
      {audioUrl && (
        <div className="audio-playback">
          <audio controls src={audioUrl}></audio>
        </div>
      )}
    </div>
  )
}
