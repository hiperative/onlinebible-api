import { Document } from 'mongoose';
import { IBook } from './book';

export interface IBible extends Document {
  id: string;
  language: string;
  name: string;
  copyright: string;
  books: [IBook];
}
