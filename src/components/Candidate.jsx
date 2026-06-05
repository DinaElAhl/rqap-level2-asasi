import { useExam } from '../state/ExamContext.jsx'

export default function Candidate() {
  const { candidate, updateCandidate, submitCandidate } = useExam()

  return (
    <section className="screen">
      <div className="screen-inner">
        <div className="section-label">Step 1 of 4</div>
        <h2>Candidate Information</h2>
        <div className="section-title-ar">معلومات المتقدّم</div>
        <p className="lead">
          Please provide your details. Your name will appear on the certificate of
          completion.
        </p>

        <div className="panel">
          <div className="form-group">
            <label htmlFor="cand-name">
              Full Name (as it should appear on certificate)
            </label>
            <input
              id="cand-name"
              type="text"
              value={candidate.name}
              onChange={(e) => updateCandidate({ name: e.target.value })}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cand-email">Email</label>
              <input
                id="cand-email"
                type="email"
                value={candidate.email}
                onChange={(e) => updateCandidate({ email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cand-country">Country</label>
              <input
                id="cand-country"
                type="text"
                value={candidate.country}
                onChange={(e) => updateCandidate({ country: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cand-age">Age Range</label>
              <select
                id="cand-age"
                value={candidate.age}
                onChange={(e) => updateCandidate({ age: e.target.value })}
              >
                <option value="">Select age range</option>
                <option value="Under 13">Under 13</option>
                <option value="13–17">13–17</option>
                <option value="18–25">18–25</option>
                <option value="26–40">26–40</option>
                <option value="41–60">41–60</option>
                <option value="60+">60+</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cand-bg">Years Studying Arabic / Quran</label>
              <select
                id="cand-bg"
                value={candidate.background}
                onChange={(e) => updateCandidate({ background: e.target.value })}
              >
                <option value="">Select range</option>
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="1–2">1–2</option>
                <option value="3–5">3–5</option>
                <option value="6–10">6–10</option>
                <option value="More than 10 years">More than 10 years</option>
              </select>
            </div>
          </div>
        </div>

        <div className="panel-info">
          <p className="small">
            This is a demonstration. Your information is stored only in your browser
            and is not transmitted anywhere.
          </p>
        </div>

        <div className="item-nav">
          <span></span>
          <button className="btn btn-primary" onClick={submitCandidate}>
            Continue →
          </button>
        </div>
      </div>
    </section>
  )
}
