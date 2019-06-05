import { Document } from 'mongoose';
import { Verse } from './verse';

export interface Chapter extends Document {
  id: string;
  bookId: any;
  name: string;
  number: string;
  position: number;
  verses: [Verse];
}
