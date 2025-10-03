import React, { useState, useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useParams, Link } from 'react-router-dom';
import { BOOKS } from '../constants';
import { bookCtas } from '../data/bookCtas';
import ChapterGrid from '../components/ChapterGrid';
import MarkdownViewer from '../components/MarkdownViewer';
import StudyError from '../components/StudyError';
import ChapterPlaceholder from '../components/ChapterPlaceholder';
import CallToActionCard from '../components/CallToActionCard';
import { useMarkdownConverter } from '../hooks/useMarkdownConverter';
import { loadMarkdown } from '../utils/loadMarkdown';

const BookStudyPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const book = BOOKS.find(b => b.id === bookId);
  const cta = bookCtas.find(c => c.bookId === bookId);

  const converter = useMarkdownConverter();
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [contentHtml, setContentHtml] = useState<string>('');
  const [bookDetailsHtml, setBookDetailsHtml] = useState<string>('');

  useEffect(() => {
    const loadDetails = async () => {
      if (!book?.details || !converter) return;
      const markdown = await loadMarkdown(book.details);
      setBookDetailsHtml(
        markdown
          ? converter.makeHtml(markdown)
          : converter.makeHtml('Não foi possível carregar os detalhes do livro.')
      );
    };
    loadDetails();
  }, [book?.details, converter]);

  const handleChapterClick = async (chapter: number) => {
    setSelectedChapter(chapter);
    setContentHtml('<div class="text-center p-8"><p class="text-slate-500">Carregando estudo...</p></div>');

    if (!bookId || !converter) {
      setContentHtml(
        converter.makeHtml('<div><strong>Erro:</strong> Não foi possível carregar o leitor de estudos.</div>')
      );
      return;
    }

    const markdown = await loadMarkdown(`/studies/${bookId}/${chapter}.md`);

    if (
      !markdown ||
      markdown.includes('<!DOCTYPE html>') ||
      markdown.includes('<script') ||
      markdown.includes('<meta')
    ) {
      setContentHtml(
        converter.makeHtml(
          `<div>${renderToStaticMarkup(
            <StudyError
              title="Estudo Indisponível"
              message="O conteúdo para este capítulo ainda não foi adicionado. Por favor, volte mais tarde."
            />
          )}</div>`
        )
      );
    } else {
      setContentHtml(converter.makeHtml(markdown));
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

      {/* Card principal */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-slate-200">
        <h1 className="text-4xl font-extrabold text-slate-800">Um pouco mais sobre o livro de {book.name}</h1>
        <p className="mt-2 text-lg text-slate-500">{book.description}</p>

        <hr className="my-6" />
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Detalhes do Livro</h2>
        <MarkdownViewer html={bookDetailsHtml} />

        <hr className="my-6" />
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Selecione um Capítulo</h2>
        <ChapterGrid
          total={book.chapters}
          selected={selectedChapter}
          onSelect={handleChapterClick}
        />

        <div className="mt-8">
          {selectedChapter === null ? (
            <ChapterPlaceholder />
          ) : (
            <MarkdownViewer html={contentHtml} />
          )}
        </div>
      </div>

      {/* Call to Action fora do card principal */}
      {cta && (
        <div className="mt-12">
          <CallToActionCard
            title={cta.title}
            description={cta.description}
            buttonText={cta.buttonText}
            buttonLink={cta.buttonLink}
            disabled={cta.disabled} // Adicione esta linha
          />
        </div>
      )}
    </div>
  );
};

export default BookStudyPage;