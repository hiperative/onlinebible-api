import { IBook } from './../models/book';
import { Schema, model } from 'mongoose';
import { chapterSchema } from './chapter';

export const bookSchema: Schema = new Schema({
  id: {
    type: String,
  },
  bibleId: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  nameLong: {
    type: String
  },
  chapters: {
    type: [chapterSchema]
  },
});

export const Book = model<IBook>("Book", bookSchema);
