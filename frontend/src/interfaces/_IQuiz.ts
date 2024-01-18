import type { Question } from '@/interfaces/_IQuestion';

export interface Quiz {
  id: number;
  title: string;
  questions: Question[];
  artistname: string;
  artistimage: string;
  timer: number;
}
