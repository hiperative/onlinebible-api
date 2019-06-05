import { Schema, model } from 'mongoose';
import { chapterSchema } from './chapter';
import { Book } from './../entities/book';

export const bookSchema: Schema = new Schema({
  id: {
    type: String,
  },
  bibleId: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
  },
  nameLong: {
    type: String,
  },
  chapters: {
    type: [chapterSchema],
  },
});

export const BookModel = model<Book>('Book', bookSchema);
