import React from 'react';
import { Link } from 'react-router-dom';
import { shelf } from '../data/shelf';
import ReadingStatusLabel from '../components/ReadingStatusLabel';

const truncateDescription = (text: string, maxLength: number): string => {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const ShelfPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">Estante</h1>
      <p className="text-slate-600 text-center mb-12">
        Livros que estou lendo ou já li, com reflexões e resumos pessoais.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {shelf.map(book => (
            <div key={book.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition relative">
                <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-auto object-contain aspect-[2/3]"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-slate-800 group-hover:text-sky-700 transition">
                    {book.title}
                    </h2>
                    <p className="text-slate-500 text-sm italic mt-1">por {book.author}</p>
                    <div className="mt-2">
                    <ReadingStatusLabel status={book.status} className="absolute top-2 right-2" />
                    </div>
                    <p className="text-slate-600 text-sm mt-3">
                    {truncateDescription(book.description, 300)}
                    </p>

                    {/* Bloqueado */}
                    {book.comingSoon && (
                    <div className="mt-4 text-center text-sm font-semibold text-slate-400">
                        Em breve 
                    </div>
                    )}
                </div>

                {/* Link condicional */}
                {!book.comingSoon && (
                    <Link
                    to={`/estante/${book.id}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Ver detalhes de ${book.title}`}
                    />
                )}
                </div>
            </div>
            ))}
      </div>
    </div>
  );
};

export default ShelfPage;