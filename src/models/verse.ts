import { Document } from 'mongoose';

export interface IVerse extends Document {
  id: string;
  bookId: any;
  chapterId: any;
  content: string;
  number: string;
}
