import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Since showdown is loaded from a CDN, we need to declare it to TypeScript
declare const showdown: any;

const LessonViewerPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [contentHtml, setContentHtml] = useState<string>('');
  const [converter, setConverter] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Initialize the showdown converter when the component mounts
    const initConverter = () => {
      if (typeof showdown !== 'undefined') {
        const sdConverter = new showdown.Converter();
        sdConverter.setOption('simplifiedAutoLink', true);
        sdConverter.setOption('strikethrough', true);
        sdConverter.setOption('tables', true);
        sdConverter.setOption('headerLevelStart', 2); // Start headers from h2
        setConverter(sdConverter);
      } else {
        // If showdown is not loaded yet, try again after a short delay
        setTimeout(initConverter, 100);
      }
    };
    
    initConverter();
  }, []);

  useEffect(() => {
    const loadLesson = async () => {
      if (!bookId || !converter) return;

      setLoading(true);
      setError('');

      try {
        const response = await fetch(`/lessons/${bookId}/licoes-${bookId}.md`);
        if (response.ok) {
          const markdown = await response.text();
          console.log('Markdown content:', markdown); // Debug log
          const html = converter.makeHtml(markdown);
          console.log('Converted HTML:', html); // Debug log
          setContentHtml(html);
        } else {
          setError('Lição não encontrada');
        }
      } catch (err) {
        console.error("Failed to fetch lesson content:", err);
        setError('Erro ao carregar a lição');
      } finally {
        setLoading(false);
      }
    };

    loadLesson();
  }, [bookId, converter]);

  const getBookName = (id: string) => {
    const bookNames: { [key: string]: string } = {
      'joao': 'João',
      'genesis': 'Gênesis',
      'salmos': 'Salmos',
      'mateus': 'Mateus',
      'marcos': 'Marcos',
      'lucas': 'Lucas'
    };
    return bookNames[id] || id;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Carregando lição...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Erro</h1>
            <p className="text-slate-600 mb-6">{error}</p>
            <Link 
              to="/licoes-dos-livros" 
              className="inline-block bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-sky-700 transition-colors"
            >
              Voltar para Lições
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Lições de {getBookName(bookId || '')}
              </h1>
              <p className="text-slate-600 text-sm mt-1">
                Estudo detalhado dos principais ensinamentos
              </p>
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
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 markdown-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          
          {/* Call to Action Cards - Show based on lesson */}
          {bookId === 'joao' && (
            <div className="mt-8 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg border border-sky-200 p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Prosseguir para a leitura de Lucas
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Continue sua jornada bíblica! Explore o Evangelho de Lucas e descubra Jesus como o Salvador compassivo de toda a humanidade.
                  </p>
                  <Link
                    to="/estudos/lucas"
                    className="inline-block bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors"
                  >
                    Estudar Lucas
                  </Link>
                </div>
              </div>
            </div>
          )}

          {bookId === 'lucas' && (
            <div className="mt-8 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg border border-sky-200 p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Prosseguir para a leitura de Marcos
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Continue sua jornada pelos Evangelhos! Explore o Evangelho de Marcos e descubra Jesus através de seus milagres e ensinamentos dinâmicos.
                  </p>
                  <Link
                    to="/estudos/marcos"
                    className="inline-block bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors"
                  >
                    Estudar Marcos
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonViewerPage;
