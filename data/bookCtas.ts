import type { BookCTA } from '../types';

export const bookCtas: BookCTA[] = [
  {
    bookId: 'joao',
    title: 'Explore as Lições de João',
    description:
      'Aprofunde seu conhecimento! Descubra as principais lições e ensinamentos extraídos do Evangelho de João, incluindo a divindade de Jesus e a unidade entre o Pai e o Filho.',
    buttonText: 'Ver Lições de João',
    buttonLink: '/licoes-dos-livros/joao',
  },
  {
    bookId: 'lucas',
    title: 'Descubra os Ensinos de Lucas',
    description:
      'Aprofunde seu conhecimento! Descubra as principais lições e ensinamentos extraídos do Evangelho de Lucas, incluindo a compaixão de Jesus e sua missão universal de salvação.',
    buttonText: 'Ver Lições de Lucas',
    buttonLink: '/licoes-dos-livros/lucas',
  },
  {
    bookId: 'marcos',
    title: 'Descubra os Ensinos de Marcos',
    description:
      'Aprofunde seu conhecimento! Descubra as principais lições e ensinamentos extraídos do Evangelho de Marcos, incluindo o foco nas ações de Jesus, sua autoridade e o chamado ao discipulado.',
    buttonText: 'Ver Lições de Marcos',
    buttonLink: '/licoes-dos-livros/marcos',
    // disabled:true,
  },
  {
    bookId: 'mateus',
    title: 'Descubra os Ensinos de Mateus',
    description:
      'Aprofunde seu conhecimento! Descubra as principais lições e ensinamentos extraídos do Evangelho de Mateus, --',
    buttonText: 'Ver Lições de Mateus',
    buttonLink: '/licoes-dos-livros/mateus',
    disabled:true,
  },
  // Adicione outros livros aqui
];