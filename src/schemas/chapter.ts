import { Schema, model } from 'mongoose';
import { verseSchema } from './verse';
import { Chapter } from './../entities/chapter';

export const chapterSchema: Schema = new Schema({
  id: {
    type: String,
  },
  bookId: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  position: {
    type: Number,
  },
  verses: {
    type: [verseSchema],
  },
});

export const ChapterModel = model<Chapter>('Chapter', chapterSchema);
