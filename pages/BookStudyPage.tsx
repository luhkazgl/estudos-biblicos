import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BOOKS } from '../constants';

// Since showdown is loaded from a CDN, we need to declare it to TypeScript
declare const showdown: any;

const BookStudyPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const book = BOOKS.find(b => b.id === bookId);

  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [contentHtml, setContentHtml] = useState<string>('');
  const [converter, setConverter] = useState<any>(null);

  useEffect(() => {
    // Initialize the showdown converter when the component mounts
    if (typeof showdown !== 'undefined') {
      const sdConverter = new showdown.Converter();
      sdConverter.setOption('simplifiedAutoLink', true);
      sdConverter.setOption('strikethrough', true);
      sdConverter.setOption('tables', true);
      setConverter(sdConverter);
    }
  }, []);
  
  const handleChapterClick = async (chapter: number) => {
    setSelectedChapter(chapter);
    setContentHtml('<div class="text-center p-8"><p class="text-slate-500">Carregando estudo...</p></div>');

    if (!bookId || !converter) {
      setContentHtml(
        `<div class="text-center p-8 bg-slate-100 rounded-lg">
           <h3 class="text-xl font-semibold text-slate-700">Erro</h3>
           <p class="text-slate-500 mt-2">Não foi possível carregar o leitor de estudos.</p>
         </div>`
      );
      return;
    }

    try {
      const response = await fetch(`/studies/${bookId}/${chapter}.md`);
      if (response.ok) {
        const markdown = await response.text();
        const html = converter.makeHtml(markdown);
        setContentHtml(html);
      } else {
        // This handles 404s for non-existent study files
        setContentHtml(
          `<div class="text-center p-8 bg-slate-100 rounded-lg">
             <h3 class="text-xl font-semibold text-slate-700">Estudo Indisponível</h3>
             <p class="text-slate-500 mt-2">O conteúdo para este capítulo ainda não foi adicionado. Por favor, volte mais tarde.</p>
           </div>`
        );
      }
    } catch (error) {
      console.error("Failed to fetch study content:", error);
      setContentHtml(
        `<div class="text-center p-8 bg-slate-100 rounded-lg">
           <h3 class="text-xl font-semibold text-slate-700">Erro ao Carregar</h3>
           <p class="text-slate-500 mt-2">Não foi possível carregar o conteúdo do estudo. Verifique sua conexão e tente novamente.</p>
         </div>`
      );
    }
  };


  if (!book) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600">Livro não encontrado</h1>
        <p className="mt-4 text-slate-600">O livro que você está procurando não existe em nossa base de dados.</p>
        <Link to="/estudos" className="mt-6 inline-block text-sky-600 hover:underline">
          &larr; Voltar para a lista de estudos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <Link to="/estudos" className="text-sm text-sky-600 hover:underline">
          &larr; Voltar para todos os livros
        </Link>
      </div>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-slate-200">
        <h1 className="text-4xl font-extrabold text-slate-800">{book.name}</h1>
        <p className="mt-2 text-lg text-slate-500">{book.description}</p>
        <hr className="my-6" />
        
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Selecione um Capítulo</h2>
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {Array.from({ length: book.chapters }, (_, i) => i + 1).map(chapter => {
                const isActive = selectedChapter === chapter;
                const studyIsAvailable = book.id === 'marcos' && chapter === 5; // Placeholder for available studies
                return (
                  <button 
                      key={chapter} 
                      onClick={() => handleChapterClick(chapter)}
                      className={`relative flex items-center justify-center h-12 w-12 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
                        isActive 
                        ? 'bg-sky-600 text-white shadow' 
                        : 'bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-700'
                      }`}
                      title={`Estudar capítulo ${chapter}`}
                      aria-pressed={isActive}
                  >
                      {chapter}
                  </button>
                )
            })}
        </div>
        
        <div className="mt-8">
            {selectedChapter === null ? (
                <div className="text-center p-8 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
                    <p className="text-slate-500">Selecione um capítulo acima para iniciar o estudo.</p>
                </div>
            ) : (
                <article 
                  className="markdown-content" 
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            )}
        </div>
      </div>
    </div>
  );
};

export default BookStudyPage;