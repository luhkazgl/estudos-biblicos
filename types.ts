
export interface Book {
  id: string;
  name: string;
  testament: 'old' | 'new';
  description: string;
  details: string;
  chapters: number;
}
