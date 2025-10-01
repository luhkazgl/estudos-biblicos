import React from 'react';
import { Link } from 'react-router-dom';

interface QuizResultProps {
  correctCount: number;
  total: number;
  onRetry: () => void;
  backLink: string;
}

const QuizResult: React.FC<QuizResultProps> = ({ correctCount, total, onRetry, backLink }) => (
  <div className="mt-8 text-center">
    <h2 className="text-xl font-bold mb-2">
      Você acertou {correctCount} de {total} perguntas!
    </h2>
    <div className="flex justify-center gap-4 mt-4">
      <button
        onClick={onRetry}
        className="bg-sky-600 text-white font-semibold py-2 px-4 rounded hover:bg-sky-700 transition"
      >
        Tentar novamente
      </button>
      <Link
        to={backLink}
        className="bg-gray-200 text-slate-700 font-semibold py-2 px-4 rounded hover:bg-gray-300 transition"
      >
        Voltar
      </Link>
    </div>
  </div>
);

export default QuizResult;