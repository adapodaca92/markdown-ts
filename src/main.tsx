import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MarkdownEditor from './MarkdownEditor.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MarkdownEditor />
  </React.StrictMode>,
)
