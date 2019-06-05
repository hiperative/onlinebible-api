import { Schema, model } from 'mongoose';
import { Verse } from './../entities/verse';

export const verseSchema: Schema = new Schema({
  id: {
    type: String,
  },
  bookId: {
    type: Schema.Types.ObjectId,
  },
  chapterId: {
    type: Schema.Types.ObjectId,
  },
  number: {
    type: String,
  },
  content: {
    type: String,
  },
});

export const VerseModel = model<Verse>('Verse', verseSchema);
