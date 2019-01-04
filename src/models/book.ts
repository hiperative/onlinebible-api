import { Document } from 'mongoose';
import { IChapter } from './chapter';

export interface IBook extends Document {
  id: string;
  bibleId: any;
  name: string;
  nameLong: string;
  chapters: [IChapter];
}
