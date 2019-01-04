import { Document } from 'mongoose';
import { IVerse } from './verse';

export interface IChapter extends Document {
  id: string;
  bookId: any;
  name: string;
  number: string;
  position: number;
  verses: [IVerse];
}
