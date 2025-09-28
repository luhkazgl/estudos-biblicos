import React from 'react';
import { bookLessons } from '../data/bookLessons';
import BookLessonCard from '../components/BookLessonCard';

const LicoesDosLivrosPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Lições Dos Livros</h1>
        <p className="mt-2 text-lg text-slate-600">
          Descubra as principais lições e ensinamentos extraídos de cada livro da Bíblia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {bookLessons.map((lesson) => (
          <BookLessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      <div className="text-center p-8 bg-slate-100 rounded-lg">
        <h3 className="text-xl font-semibold text-slate-700">Mais Lições em Desenvolvimento</h3>
        <p className="text-slate-500 mt-2">
          Estamos preparando lições detalhadas para todos os livros da Bíblia. 
          Cada lição incluirá os principais temas, versículos-chave e aplicações práticas.
        </p>
      </div>
    </div>
  );
};

export default LicoesDosLivrosPage;