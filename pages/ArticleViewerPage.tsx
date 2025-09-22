import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Since showdown is loaded from a CDN, we need to declare it to TypeScript
declare const showdown: any;

const ArticleViewerPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
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
        setConverter(sdConverter);
      } else {
        // If showdown is not loaded yet, try again after a short delay
        setTimeout(initConverter, 100);
      }
    };
    
    initConverter();
  }, []);

  useEffect(() => {
    const loadArticle = async () => {
      if (!articleId || !converter) return;

      setLoading(true);
      setError('');

      try {
        const response = await fetch(`/other/${articleId}.md`);
        if (response.ok) {
          const markdown = await response.text();
          const html = converter.makeHtml(markdown);
          setContentHtml(html);
        } else {
          setError('Artigo não encontrado');
        }
      } catch (err) {
        console.error("Failed to fetch article content:", err);
        setError('Erro ao carregar o artigo');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [articleId, converter]);

  const getArticleTitle = (id: string) => {
    const articleTitles: { [key: string]: string } = {
      'o-que-e-a-biblia': 'O que é a Bíblia?',
      'introducao-biblica': 'Introdução Bíblica',
      'como-estudar-biblia': 'Como Estudar a Bíblia'
    };
    return articleTitles[id] || id;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Carregando artigo...</p>
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
              to="/outros-estudos" 
              className="inline-block bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-sky-700 transition-colors"
            >
              Voltar para Outros Estudos
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
                {getArticleTitle(articleId || '')}
              </h1>
              <p className="text-slate-600 text-sm mt-1">
                Estudo temático e aprofundado
              </p>
            </div>
            <Link 
              to="/outros-estudos" 
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
          
          {/* Call to Action Card - Only show for "O que é a Bíblia" article */}
          {articleId === 'o-que-e-a-biblia' && (
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
                    Prosseguir para a leitura de João
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Vamos conhecer quem é Jesus! Explore o Evangelho de João e descubra a divindade de Cristo através de seus ensinamentos e milagres.
                  </p>
                  <Link
                    to="/estudos/joao"
                    className="inline-block bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors"
                  >
                    Estudar João
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

export default ArticleViewerPage;
