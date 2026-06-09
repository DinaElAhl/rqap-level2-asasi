import { useExam } from '../state/ExamContext.jsx'
import AudioRecorder from './AudioRecorder.jsx'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function Item() {
  const {
    currentSection,
    currentItem,
    currentItemIndex,
    responses,
    selectOption,
    setEssay,
    isItemAnswered,
    nextItem,
    prevItem
  } = useExam()

  if (!currentSection || !currentItem) return null

  const item = currentItem
  const len = currentSection.itemsList.length
  const response = responses[item.id]
  const isLastInSection = currentItemIndex === len - 1
  const isEssay = item.type === 'essay-arabic' || item.type === 'essay-target'
  const isArabicEssay = item.type === 'essay-arabic'

  // --- body ---
  let body = null
  if (item.passage && item.type === 'audio') {
    body = (
      <div className="item-verse" dangerouslySetInnerHTML={{ __html: item.passage }} />
    )
  } else if (item.passage) {
    body = (
      <div className="item-passage" dangerouslySetInnerHTML={{ __html: item.passage }} />
    )
  } else if (item.verse) {
    body = (
      <div className="item-verse" dangerouslySetInnerHTML={{ __html: item.verse }} />
    )
  }

  // --- input ---
  let input = null
  if (item.options) {
    input = (
      <ul className="item-options">
        {item.options.map((opt, i) => {
          const selected = response?.value === i
          return (
            <li key={i}>
              <label
                className={`item-option ${selected ? 'selected' : ''}`}
                onClick={() => selectOption(item.id, i)}
              >
                <span className="letter">{LETTERS[i]}</span>
                <span
                  className={item.arabicOptions ? 'opt-arabic' : ''}
                  dangerouslySetInnerHTML={{ __html: opt }}
                />
              </label>
            </li>
          )
        })}
      </ul>
    )
  } else if (isEssay) {
    const minWords = item.minWords || 10
    const wc = response?.wordCount || 0
    const placeholder = isArabicEssay
      ? 'اكتب إجابتك هنا بالعربية...'
      : 'Write your response here...'
    input = (
      <>
        <textarea
          className={`response-textarea ${isArabicEssay ? 'arabic' : ''}`}
          value={response?.value || ''}
          onChange={(e) => setEssay(item.id, e.target.value)}
          placeholder={placeholder}
        />
        <div className="word-count">
          Words: {wc} · Minimum {minWords}
        </div>
      </>
    )
  } else if (item.type === 'audio') {
    input = (
      <>
        <AudioRecorder key={item.id} itemId={item.id} />
        <div className="panel-info">
          <p className="small">
            Allow microphone access when prompted. Recite clearly; you may re-record
            as many times as you wish before continuing.
          </p>
        </div>
      </>
    )
  }

  // --- nav info ---
  let navInfo = ''
  const answered = isItemAnswered(item)
  if (item.type === 'audio') {
    navInfo = answered ? '✓ Recording saved' : 'Record your recitation to continue'
  } else if (isEssay) {
    const min = item.minWords || 10
    const wc = response?.wordCount || 0
    navInfo = wc >= min
      ? '✓ Response complete'
      : `Minimum ${min} words (currently ${wc})`
  } else {
    navInfo = answered ? '✓ Answer selected' : 'Choose an answer to continue'
  }

  const nextLabel = isLastInSection ? 'Finish Section →' : 'Next →'

  return (
    <section className="screen">
      <div className="screen-inner">
        <div id="item-host">
          <div className="item-container">
            <div className="item-header">
              <div className="item-position">
                Question {currentItemIndex + 1}
                <span className="total"> of {len}</span>
              </div>
              <div className="item-tag">{item.tag}</div>
            </div>
            <div
              className="item-stem"
              dangerouslySetInnerHTML={{ __html: item.stem }}
            />
            {body}
            {input}
          </div>
        </div>

        <div className="item-nav">
          <button
            className="btn btn-light"
            onClick={prevItem}
            disabled={currentItemIndex === 0}
          >
            ← Previous
          </button>
          <span className="item-nav-info">{navInfo}</span>
          <button
            className="btn btn-primary"
            onClick={nextItem}
            disabled={!answered}
          >
            {nextLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
