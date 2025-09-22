import React from 'react';
import { BOOKS } from '../constants';
import BookCard from '../components/BookCard';

const StudiesPage: React.FC = () => {
  const oldTestamentBooks = BOOKS.filter(book => book.testament === 'old');
  const newTestamentBooks = BOOKS.filter(book => book.testament === 'new');

  const EmptyCard = () => (
    <div className="p-6 border rounded-lg shadow text-center text-slate-600 bg-slate-50">
      📖 Em breve serão adicionados
    </div>
  );

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Estudos Bíblicos</h1>
        <p className="mt-2 text-lg text-slate-600">Selecione um livro para iniciar seus estudos.</p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-sky-500 pb-2 mb-6 text-slate-700">
          Antigo Testamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oldTestamentBooks.length > 0 ? (
            oldTestamentBooks.map(book => <BookCard key={book.id} book={book} />)
          ) : (
            <EmptyCard />
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b-2 border-sky-500 pb-2 mb-6 text-slate-700">
          Novo Testamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newTestamentBooks.length > 0 ? (
            newTestamentBooks.map(book => <BookCard key={book.id} book={book} />)
          ) : (
            <EmptyCard />
          )}
        </div>
      </section>
    </div>
  );
};

export default StudiesPage;
