import { Document } from 'mongoose';

export interface Verse extends Document {
  id: string;
  bookId: any;
  chapterId: any;
  content: string;
  number: string;
}
