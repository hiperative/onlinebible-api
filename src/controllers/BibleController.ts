import { Controller } from 'routing-controllers';

// import { Bible } from './../schemas/bible';
// import { Request, Response, NextFunction } from 'express';

@Controller('/api/v1')
export class BibleController {
  // public getAll = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const bibles = await Bible.find({});
  //     res.json(bibles);
  //   } catch (err) {
  //     next();
  //   }
  // }
  // public getBybleWithId = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { bibleId }: any = req.params;
  //     const bible = await Bible.findById(bibleId);
  //     res.json(bible);
  //   } catch (err) {
  //     next();
  //   }
  // }
  // public create = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const newBible = new Bible(req.body);
  //     const bible = newBible.save();
  //     res.json(bible);
  //   } catch (err) {
  //     next();
  //   }
  // }
  // public update = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { bibleId }: any = req.params;
  //     const bible = await Bible.findOneAndUpdate({ _id: bibleId }, req.body, { new: true });
  //     res.json(bible);
  //   } catch (err) {
  //     next();
  //   }
  // }
}
