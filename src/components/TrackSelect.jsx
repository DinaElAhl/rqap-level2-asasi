import { useExam } from '../state/ExamContext.jsx'

export default function TrackSelect() {
  const { selectedTracks, toggleTrack, confirmTracks, goTo } = useExam()
  const noneSelected = !selectedTracks.language && !selectedTracks.tajweed

  return (
    <section className="screen">
      <div className="screen-inner">
        <div className="section-label">Step 2 of 4</div>
        <h2>Choose Your Tracks</h2>
        <div className="section-title-ar">اختر مساراتك</div>
        <p className="lead">
          Each track is assessed and certified independently. Select one or both.
        </p>

        <div className="track-grid">
          <div
            className={`track-card-select ${selectedTracks.language ? 'selected' : ''}`}
            onClick={() => toggleTrack('language')}
          >
            <h3>Track 1 — Language</h3>
            <div className="arabic-sub">مسار اللغة القرآنية</div>
            <ul>
              <li>Vocabulary & trilateral roots</li>
              <li>Classical grammar & morphology</li>
              <li>Verse comprehension</li>
              <li>Constructed Arabic response</li>
            </ul>
          </div>

          <div
            className={`track-card-select ${selectedTracks.tajweed ? 'selected' : ''}`}
            onClick={() => toggleTrack('tajweed')}
          >
            <h3>Track 2 — Tajweed</h3>
            <div className="arabic-sub">مسار التجويد والتلاوة</div>
            <ul>
              <li>Theory: makharij & sifaat</li>
              <li>Rules of noon, meem, madd</li>
              <li>Applied identification</li>
              <li>Practical recitation (audio)</li>
            </ul>
          </div>
        </div>

        <div className="panel-info">
          <p className="small">
            This is a demonstration. You may select either track or both; each
            produces its own score and certificate.
          </p>
        </div>

        <div className="item-nav">
          <button className="btn btn-light" onClick={() => goTo('candidate')}>
            ← Back
          </button>
          <button
            className="btn btn-primary"
            onClick={confirmTracks}
            disabled={noneSelected}
          >
            Continue →
          </button>
        </div>
      </div>
    </section>
  )
}
