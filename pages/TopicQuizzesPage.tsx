import React from 'react';

import { useParams, Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';

const TopicQuizzesPage: React.FC = () => {
  const { topic } = useParams();
  const quizzesByTopic = quizzes.filter(q => q.topicSlug === topic);

  console.log('Todos quizzes:', quizzes);
  console.log('Topic param:', topic);
  console.log('Quizzes filtrados:', quizzesByTopic);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Quizzes sobre {topic}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quizzesByTopic.map(quiz => (
            <Link
              to={`/quizzes/${quiz.topicSlug}/${quiz.id}`}
              key={quiz.id}
              className="block bg-white shadow-md p-6 rounded-lg hover:bg-sky-100 transition"
            >
              <h2 className="text-xl font-semibold text-slate-700 mb-2">{quiz.title}</h2>
              <p className="text-slate-600 mb-2">{quiz.description}</p>
              <span className="text-sm text-sky-600 font-medium">Dificuldade: {quiz.difficulty}</span><br />
              <span className="text-sm text-slate-500">Testamento: {quiz.testament}</span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/quizzes" className="text-sky-600 hover:underline">← Voltar aos tópicos</Link>
        </div>
      </div>
    </div>
  );
};

export default TopicQuizzesPage;