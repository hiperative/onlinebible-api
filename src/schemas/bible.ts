import { Schema, model } from 'mongoose';
import { bookSchema } from './book';
import { Bible } from '../entities/bible';

export const bibleSchema: Schema = new Schema({
  id: {
    type: String,
  },
  language: {
    type: String,
  },
  name: {
    type: String,
  },
  copyright: {
    type: String,
  },
  books: {
    type: [bookSchema],
  },
});

export const BibleModel = model<Bible>('Bible', bibleSchema);
