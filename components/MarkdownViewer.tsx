import React from 'react';

interface MarkdownViewerProps {
  html: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ html }) => {
  return (
    <article
      className="markdown-content prose prose-slate max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MarkdownViewer;