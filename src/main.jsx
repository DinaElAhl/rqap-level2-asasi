import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ExamProvider } from './state/ExamContext.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExamProvider>
      <App />
    </ExamProvider>
  </React.StrictMode>,
)
