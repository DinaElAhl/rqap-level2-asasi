import { useExam } from './state/ExamContext.jsx'
import Topbar from './components/Topbar.jsx'
import Welcome from './components/Welcome.jsx'
import Candidate from './components/Candidate.jsx'
import TrackSelect from './components/TrackSelect.jsx'
import SectionIntro from './components/SectionIntro.jsx'
import Item from './components/Item.jsx'
import SectionDone from './components/SectionDone.jsx'
import Submitting from './components/Submitting.jsx'
import Results from './components/Results.jsx'
import Certificate from './components/Certificate.jsx'

const SCREENS = {
  welcome: Welcome,
  candidate: Candidate,
  'track-select': TrackSelect,
  'section-intro': SectionIntro,
  item: Item,
  'section-done': SectionDone,
  submitting: Submitting,
  results: Results,
  certificate: Certificate,
}

// Topbar is shown once the exam proper begins (after track selection).
const TOPBAR_SCREENS = new Set([
  'section-intro', 'item', 'section-done', 'submitting', 'results', 'certificate',
])

export default function App() {
  const { screen } = useExam()
  const Screen = SCREENS[screen] || Welcome
  return (
    <div className="app-shell">
      {TOPBAR_SCREENS.has(screen) && <Topbar />}
      <Screen />
    </div>
  )
}
