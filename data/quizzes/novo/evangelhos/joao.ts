// data/quizzes/novo/evangelhos/joao.ts
import { Quiz } from '../../../../types';
import { getDifficulty } from '../../../../utils/filterQuizz';
import { joaoQuestions } from './joao.questions';

export const joaoQuiz: Quiz = {
  id: 'evg-joao-001',
  title: 'Evangelho segundo João',
  description: 'Teste seus conhecimentos sobre o Evangelho de João.',
  testament: 'Novo Testamento',
  topic: 'Evangelhos',
  topicSlug: 'evangelhos',
  difficulty: getDifficulty(joaoQuestions.length),
  questions: joaoQuestions,
};