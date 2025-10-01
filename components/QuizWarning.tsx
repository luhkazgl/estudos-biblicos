import React from 'react';

interface QuizWarningProps {
  message: string;
}

const QuizWarning: React.FC<QuizWarningProps> = ({ message }) => (
  <div className="mb-4 text-red-600 font-semibold text-center">
    {message}
  </div>
);

export default QuizWarning;