import React from 'react';
import { Link } from 'react-router-dom';
import { highlights } from '../data/highlights';
import HighlightCard from '../components/HighlightCard';

// Função para gerar IDs seguros para âncoras e rotas
const slugify = (text: string) =>
  text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');

// Função para rolar suavemente até o livro
const scrollToBook = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Separar livros por testamento
const isNewTestament = (book: string) =>
  ['Mateus', 'Marcos', 'Lucas', 'João', 'Atos', 'Romanos', '1 Coríntios', '2 Coríntios', 'Gálatas', 'Efésios', 'Filipenses', 'Colossenses', '1 Tessalonicenses', '2 Tessalonicenses', '1 Timóteo', '2 Timóteo', 'Tito', 'Filemom', 'Hebreus', 'Tiago', '1 Pedro', '2 Pedro', '1 João', '2 João', '3 João', 'Judas', 'Apocalipse'].includes(book);

const oldTestament = highlights.filter(h => !isNewTestament(h.book));
const newTestament = highlights.filter(h => isNewTestament(h.book));

const DestaquesPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Destaques</h1>
        <p className="mt-2 text-lg text-slate-600">
          Versículos em destaque dos livros com estudos disponíveis.
        </p>
      </div>

      {/* Índice dividido por testamento */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Antigo Testamento */}
        <div>
          <h3 className="text-sky-700 font-semibold text-lg mb-4">Antigo Testamento</h3>
          {oldTestament.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {oldTestament.map((highlight) => {
                const id = slugify(highlight.book);
                return (
                  <button
                    key={id}
                    onClick={() => scrollToBook(id)}
                    className="text-sm bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200 hover:bg-sky-100 transition"
                  >
                    {highlight.book}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-slate-500 text-sm italic">Em breve</p>
          )}
        </div>

        {/* Novo Testamento */}
        <div>
          <h3 className="text-sky-700 font-semibold text-lg mb-4">Novo Testamento</h3>
          <div className="flex flex-wrap gap-3">
            {newTestament.map((highlight) => {
              const id = slugify(highlight.book);
              return (
                <button
                  key={id}
                  onClick={() => scrollToBook(id)}
                  className="text-sm bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200 hover:bg-sky-100 transition"
                >
                  {highlight.book}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Conteúdo por livro */}
      {highlights.map((highlight) => {
        const id = slugify(highlight.book);
        const studyLink = `/estudos/${id}`;
        return (
          <section key={highlight.book} id={id} className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800 border-b border-sky-300 pb-2">
                {highlight.book}
              </h2>
              <Link
                to={studyLink}
                className="text-sky-600 hover:text-sky-700 text-sm font-medium flex items-center gap-1"
              >
                Ver estudo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {highlight.verses.map((verse, index) => (
                <div key={index} className="w-full md:w-[calc(50%-0.75rem)]">
                  <HighlightCard
                    reference={verse.reference}
                    text={verse.text}
                    commentary={verse.commentary}
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default DestaquesPage;