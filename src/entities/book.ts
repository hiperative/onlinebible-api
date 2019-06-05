import { Document } from 'mongoose';
import { Chapter } from './chapter';

export interface Book extends Document {
  id: string;
  bibleId: any;
  name: string;
  nameLong: string;
  chapters: [Chapter];
}
