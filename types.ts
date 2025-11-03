
export interface Book {
  id: string;
  name: string;
  testament: 'old' | 'new';
  description: string;
  details: string;
  chapters: number;
}

export interface OtherStudy {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  comingSoon?: boolean;
}

export interface Highlight {
  book: string;
  verses: {
    reference: string;
    text: string;
    commentary: string;
    related?: string;
  }[];
}

export interface BookLesson {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  comingSoon?: boolean;
}

export interface BookCTA {
  bookId: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  disabled?: boolean;
}

export interface LessonCTA {
  bookId: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ArticleCTA {
  articleId: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export type QuizTestament = 'Antigo Testamento' | 'Novo Testamento';
export type QuizTopic = 'Evangelhos' | 'História' | 'Profecias' | 'Personagens' | 'Versículos';

export type QuizDifficulty = 'Fácil' | 'Médio' | 'Difícil';

export interface Quiz {
  id: string;
  title: string;
  description: string;
  testament: QuizTestament;
  topic: QuizTopic;
  topicSlug: string;
  difficulty: QuizDifficulty;
  questions: Question[];
}
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
}

export interface ShelfBook {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  bannerImage?: string;
  status: ReadingStatus;
  comingSoon: boolean;
  rating?: number;
  readLink?: string;
}

export type ReadingStatus = 'lido' | 'lendo' | 'nao-lido';