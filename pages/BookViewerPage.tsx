import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shelf } from '../data/shelf';
import { useMarkdownConverter } from '../hooks/useMarkdownConverter';
import { loadMarkdown } from '../utils/loadMarkdown';
import MarkdownViewer from '../components/MarkdownViewer';

const renderStars = (rating: number = 0) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-500 text-lg ml-2">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`}>★</span>
      ))}
      {halfStar && <span key="half">☆</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`}>☆</span>
      ))}
    </div>
  );
};

const BookViewerPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const book = shelf.find(b => b.id === bookId);
  const converter = useMarkdownConverter();

  const [opinionHtml, setOpinionHtml] = useState('');
  const [summaryHtml, setSummaryHtml] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const loadMarkdownFiles = async () => {
      if (!bookId || !converter || book?.comingSoon) return;

      const opinionMd = await loadMarkdown(`/shelf/${bookId}/opiniao.md`);
      const resumoMd = await loadMarkdown(`/shelf/${bookId}/resumo.md`);

      if (opinionMd && !opinionMd.includes('<!DOCTYPE html>')) {
        setOpinionHtml(converter.makeHtml(opinionMd));
      }

      if (resumoMd && !resumoMd.includes('<!DOCTYPE html>')) {
        setSummaryHtml(converter.makeHtml(resumoMd));
      }
    };

    loadMarkdownFiles();
  }, [bookId, converter, book?.comingSoon]);

  if (!book) {
    return <p className="text-center text-slate-500 mt-20">Livro não encontrado.</p>;
  }

  if (book.comingSoon) {
    return (
      <p className="text-center text-slate-500 mt-20">
        Este livro ainda não está disponível. Em breve!
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{book.title}</h1>
      <p className="text-slate-500 italic mb-4">por {book.author}</p>

      <img
        src={book.bannerImage ?? book.image}
        alt={book.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      {book.readLink && (
        <div className="mb-8">
          <a
            href={book.readLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-sky-700 transition-colors"
          >
            📖 Ler gratuitamente online
          </a>
          <p className="text-sm text-slate-500 mt-2">
            Você será redirecionado para uma página externa com acesso gratuito ao conteúdo completo.
          </p>
        </div>
      )}

      <p className="text-slate-600 mb-8">{book.description}</p>

      {opinionHtml && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-sky-700 mb-2 flex items-center">
            Minha opinião
            {book.rating !== undefined && renderStars(book.rating)}
          </h2>
          <MarkdownViewer html={opinionHtml} />
        </section>
      )}

      {summaryHtml && (
        <section>
          {!showSummary ? (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-6 rounded">
              <p className="mb-4">
                ⚠️ Atenção: O conteúdo abaixo contém spoilers. Clique no botão abaixo se deseja continuar.
              </p>
              <button
                onClick={() => setShowSummary(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition"
              >
                Concordo em visualizar o conteúdo
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-sky-700 mb-4">Resumo por capítulo</h2>
              <MarkdownViewer html={summaryHtml} />
            </>
          )}
        </section>
      )}
    </div>
  );
};

export default BookViewerPage;