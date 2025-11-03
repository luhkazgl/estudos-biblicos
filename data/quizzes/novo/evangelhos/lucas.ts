// data/quizzes/novo/evangelhos/joao.ts
import { Quiz } from '../../../../types';
import { getDifficulty } from '../../../../utils/filterQuizz';
import { lucasQuestions } from './lucas.questions';

export const lucasQuiz: Quiz = {
  id: 'evg-lucas-001',
  title: 'Evangelho segundo Lucas',
  description: 'Teste seus conhecimentos sobre o Evangelho de Lucas.',
  testament: 'Novo Testamento',
  topic: 'Evangelhos',
  topicSlug: 'evangelhos',
  difficulty: getDifficulty(lucasQuestions.length),
  questions: lucasQuestions,
};