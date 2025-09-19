
import React from 'react';
import { Link } from 'react-router-dom';
import type { Book } from '../types';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link
      to={`/estudos/${book.id}`}
      className="group block bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-sky-700 group-hover:text-sky-600">{book.name}</h3>
          <p className="text-sm text-slate-500">{book.chapters} capítulos</p>
        </div>
        <div className="bg-slate-100 rounded-full p-2 group-hover:bg-sky-100 transition-colors">
            <ChevronRightIcon className="h-5 w-5 text-slate-500 group-hover:text-sky-600"/>
        </div>
      </div>
      <p className="mt-4 text-slate-600 text-sm leading-relaxed">{book.description}</p>
    </Link>
  );
};

export default BookCard;
