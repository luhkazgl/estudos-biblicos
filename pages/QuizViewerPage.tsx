import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResult from '@/components/QuizResult';
import QuizWarning from '@/components/QuizWarning';
import QuizForm from '@/components/QuizForm';

const QuizViewerPage: React.FC = () => {
  const { quizId, topic } = useParams();
  const quiz = quizzes.find(q => q.id === quizId);

  const [answers, setAnswers] = useState<number[]>(Array(quiz?.questions.length || 0).fill(-1));
  const [showResult, setShowResult] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);

  if (!quiz) {
    return (
      <div>
        <h2>Quiz não encontrado.</h2>
        <Link to="/quizzes">Voltar</Link>
      </div>
    );
  }

  const handleOptionChange = (qIdx: number, optIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = optIdx;
    setAnswers(newAnswers);
    setWarning(null);
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    const unanswered = answers
      .map((ans, idx) => (ans === -1 ? idx + 1 : null))
      .filter(idx => idx !== null) as number[];
    if (unanswered.length > 0) {
      setWarning(
        `Responda todas as perguntas antes de finalizar. Questões não respondidas: ${unanswered.join(', ')}.`
      );
      return;
    }
    setWarning(null);
    setShowResult(true);
  };

  const handleRetry = () => {
    setAnswers(Array(quiz.questions.length).fill(-1));
    setShowResult(false);
    setWarning(null);
  };

  const correctCount = quiz.questions.reduce(
    (acc, q, idx) => acc + (answers[idx] === q.correctIndex ? 1 : 0),
    0
  );

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
      <p className="mb-4">{quiz.description}</p>
      <QuizForm onSubmit={handleFinish}>
        <ul>
          {quiz.questions.length === 0 && <li>Este quiz ainda não possui perguntas.</li>}
          {quiz.questions.map((q, idx) => (
            <QuizQuestion
              key={q.id}
              question={q}
              index={idx}
              selected={answers[idx]}
              showResult={showResult}
              correctIndex={q.correctIndex}
              onChange={optIdx => handleOptionChange(idx, optIdx)}
            />
          ))}
        </ul>
        {!showResult && quiz.questions.length > 0 && (
          <>
            {warning && <QuizWarning message={warning} />}
            <button
              type="submit"
              className="mt-6 bg-sky-600 text-white font-semibold py-2 px-6 rounded hover:bg-sky-700 transition"
            >
              Finalizar
            </button>
          </>
        )}
      </QuizForm>
      {showResult && (
        <QuizResult
          correctCount={correctCount}
          total={quiz.questions.length}
          onRetry={handleRetry}
          backLink={`/quizzes/${topic}`}
        />
      )}
    </div>
  );
};

export default QuizViewerPage;