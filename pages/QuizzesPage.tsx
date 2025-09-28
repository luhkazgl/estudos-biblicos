import React from 'react';
import { Link } from 'react-router-dom';

const QuizzesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Quizzes Bíblicos</h1>
        <p className="text-slate-600 text-lg mb-6">
          Em breve você poderá testar seus conhecimentos com quizzes interativos sobre os livros da Bíblia, personagens e mais.
        </p>
        <div className="inline-block bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors">
          <Link to="/">Voltar para a Home</Link>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;