import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { lessonCtas } from '../data/lessonCtas';
import { useMarkdownConverter } from '../hooks/useMarkdownConverter';
import { loadMarkdown } from '../utils/loadMarkdown';
import MarkdownViewer from '../components/MarkdownViewer';
import StudyError from '../components/StudyError';
import CallToActionCard from '../components/CallToActionCard';

const LessonViewerPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const converter = useMarkdownConverter();
  const cta = lessonCtas.find(c => c.bookId === bookId);

  const [contentHtml, setContentHtml] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadLesson = async () => {
      if (!bookId || !converter) return;

      setLoading(true);
      setError('');

      const markdown = await loadMarkdown(`/lessons/${bookId}/licoes-${bookId}.md`);

      if (!markdown) {
        setError('Erro ao carregar a lição');
      } else if (markdown.includes('<!DOCTYPE html>')) {
        setError('Lição não encontrada');
      } else {
        setContentHtml(converter.makeHtml(markdown));
      }

      setLoading(false);
    };

    loadLesson();
  }, [bookId, converter]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Carregando lição...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div
            className="max-w-xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: renderToStaticMarkup(
                <StudyError title="Erro" message={error}>
                  <Link
                    to="/licoes-dos-livros"
                    className="inline-block mt-6 bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-sky-700 transition-colors"
                  >
                    Voltar para Lições
                  </Link>
                </StudyError>
              ),
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Lições de {bookId}</h1>
            <p className="text-slate-600 text-sm mt-1">Estudo detalhado dos principais ensinamentos</p>
          </div>
          <Link
            to="/licoes-dos-livros"
            className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
            <MarkdownViewer html={contentHtml} />
          </div>

          {/* Call to Action */}
          {cta && (
            <div className="mt-12">
              <CallToActionCard
                title={cta.title}
                description={cta.description}
                buttonText={cta.buttonText}
                buttonLink={cta.buttonLink}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonViewerPage;