import { QuizDifficulty } from '../types';

export function getDifficulty(questionCount: number): QuizDifficulty {
  if (questionCount <= 5) return 'Fácil';
  if (questionCount <= 10) return 'Médio';
  return 'Difícil';
}