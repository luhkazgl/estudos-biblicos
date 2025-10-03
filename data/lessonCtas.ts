import type { LessonCTA } from '../types';

export const lessonCtas: LessonCTA[] = [
  {
    bookId: 'joao',
    title: 'Prosseguir para a leitura de Lucas',
    description: 'Continue sua jornada bíblica! Explore o Evangelho de Lucas e descubra Jesus como o Salvador compassivo de toda a humanidade.',
    buttonText: 'Estudar Lucas',
    buttonLink: '/estudos/lucas',
  },
  {
    bookId: 'lucas',
    title: 'Prosseguir para a leitura de Marcos',
    description: 'Continue sua jornada pelos Evangelhos! Explore o Evangelho de Marcos e descubra Jesus através de seus milagres e ensinamentos dinâmicos.',
    buttonText: 'Estudar Marcos',
    buttonLink: '/estudos/marcos',
  },
  {
    bookId: 'marcos',
    title: 'Prosseguir para a leitura de Mateus',
    description: '...',
    buttonText: 'Estudar Mateus',
    buttonLink: '/estudos/mateus',
  },
];