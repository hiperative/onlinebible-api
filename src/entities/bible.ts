import { Document } from 'mongoose';
import { Book } from './book';

export interface Bible extends Document {
  id: string;
  language: string;
  name: string;
  copyright: string;
  books: [Book];
}
