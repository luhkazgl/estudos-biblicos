import type { BookLesson } from '../types';

export const bookLessons: BookLesson[] = [
  {
    id: 'mateus',
    title: 'Mateus',
    description: 'O Evangelho que apresenta Jesus como o Messias prometido e Rei dos Judeus.',
    tags: ['Messias', 'Reino', 'Ensinamentos'],
    comingSoon: true,
  },
  {
    id: 'marcos',
    title: 'Marcos',
    description: 'Um Evangelho dinâmico e cheio de ação, focado nos milagres e no serviço de Jesus.',
    tags: ['Serviço', 'Milagres', 'Ação'],
    comingSoon: true,
  },
  {
    id: 'lucas',
    title: 'Lucas',
    description: 'O Evangelho que retrata Jesus como o Salvador compassivo de toda a humanidade.',
    tags: ['Compaixão', 'Oração', 'Humanidade'],
    link: '/licoes-dos-livros/lucas',
  },
  {
    id: 'joao',
    title: 'João',
    description: 'O Evangelho que revela a divindade de Jesus e a unidade entre o Pai e o Filho.',
    tags: ['Divindade', 'Unidade', 'Salvação'],
    link: '/licoes-dos-livros/joao',
  },
];