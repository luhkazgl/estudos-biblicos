
export interface Book {
  id: string;
  name: string;
  testament: 'old' | 'new';
  description: string;
  chapters: number;
}
