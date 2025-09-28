import type { Book } from '../types';

export const books: Book[] = [
  // Antigo Testamento
  // { id: 'genesis', name: 'Gênesis', testament: 'old', description: 'O livro dos começos...', chapters: 50 },
  // { id: 'exodo', name: 'Êxodo', testament: 'old', description: 'Narra a libertação...', chapters: 40 },
  // { id: 'salmos', name: 'Salmos', testament: 'old', description: 'Uma coleção de 150 cânticos...', chapters: 150 },
  // { id: 'proverbios', name: 'Provérbios', testament: 'old', description: 'Um livro de sabedoria...', chapters: 31 },

  // Novo Testamento
  { id: 'marcos', name: 'Marcos', testament: 'new', description: 'Um Evangelho dinâmico e cheio de ação, focado nos milagres e no serviço de Jesus.', details: 'studies/marcos/marcos-details.md', chapters: 16 },
  { id: 'lucas', name: 'Lucas', testament: 'new', description: 'O Evangelho que retrata Jesus como o Salvador compassivo de toda a humanidade.', details: 'studies/lucas/lucas-details.md', chapters: 24 },
  { id: 'joao', name: 'João', testament: 'new', description: 'Um Evangelho teológico que revela a divindade de Jesus e o caminho para a vida eterna.', details: 'studies/joao/joao-details.md', chapters: 21 },
  // { id: 'romanos', name: 'Romanos', testament: 'new', description: 'Uma carta fundamental...', chapters: 16 },
  // { id: 'apocalipse', name: 'Apocalipse', testament: 'new', description: 'O livro da revelação...', chapters: 22 },
];
