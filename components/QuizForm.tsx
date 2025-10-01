import React from 'react';

interface QuizFormProps {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}

const QuizForm: React.FC<QuizFormProps> = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    {children}
  </form>
);

export default QuizForm;