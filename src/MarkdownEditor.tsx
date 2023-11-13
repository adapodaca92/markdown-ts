import { useState } from 'react'
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './MarkdownEditor.css'

const MarkdownEditor: React.FC = () => {

  const [markdown, setMarkdown] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  }

  const exportToFile = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.download = 'markdown-export.md';
    link.href = window.URL.createObjectURL(blob);
    link.click();
    link.remove();
  }
  
  const createSanitizedOutput = () => {
    const rawMarkup = marked(markdown);
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
    return { __html: sanitizedMarkup };
  }

  return (
    <div className="markdown-editor-container">
      <h1 className='editor-title'>Markdown Live Preview</h1>
      <textarea className='editor-input' value={markdown} onChange={handleInputChange} placeholder='Enter Markdown here...' />
      <div className='markdown-preview' dangerouslySetInnerHTML={createSanitizedOutput()} />
      <button className='export-button' onClick={exportToFile}>
        Export to Markdown
      </button>
    </div>
  );

}

export default MarkdownEditor;
