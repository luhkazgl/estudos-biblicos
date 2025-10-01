import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '@/utils/generateSlug';
import { QuizTopic } from '../types';

const topics: QuizTopic[] = ['Evangelhos', 'História', 'Profecias', 'Personagens', 'Versículos'];

const QuizzesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Quizzes Bíblicos</h1>
        <p className="text-slate-600 text-lg mb-6">
          Escolha um tópico para explorar os quizzes disponíveis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map(topic => {
            const slug = slugify(topic);
            return (
              <Link to={`/quizzes/${slug}`} key={topic}>
                <div className="bg-white shadow-md p-6 rounded-lg hover:bg-sky-100 transition">
                  <h2 className="text-xl font-semibold text-slate-700">{topic}</h2>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 inline-block bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors">
          <Link to="/">Voltar para a Home</Link>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;