// data/quizzes/novo/evangelhos/joao.ts
import { Quiz } from '../../../../types';
import { getDifficulty } from '../../../../utils/filterQuizz';
import { marcosQuestions } from './marcos.questions';

export const marcosQuiz: Quiz = {
  id: 'evg-marcos-001',
  title: 'Evangelho segundo Marcos',
  description: 'Teste seus conhecimentos sobre o Evangelho de Marcos.',
  testament: 'Novo Testamento',
  topic: 'Evangelhos',
  topicSlug: 'evangelhos',
  difficulty: getDifficulty(marcosQuestions.length),
  questions: marcosQuestions,
};