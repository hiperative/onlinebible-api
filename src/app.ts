import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { useExpressServer } from 'routing-controllers';
// import mongoose from 'mongoose';
// import { env } from "process";

// import Routes from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json
    this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // add cors to the api routes
    this.app.use(cors());

    // load routes
    this.loadRoutes();

    // configure database
    // this.mongoSetup();

    // serving static files
    this.app.use(express.static('public'));
  }

  private loadRoutes(): void {
    useExpressServer(this.app, {
      controllers: [`${__dirname}/controllers/*`],
      middlewares: [`${__dirname}/middlewares/*`],
    });
    // this.app.use('/api', Routes);
  }

  // private mongoSetup(): void {
  //   const {
  //     MONGODB_URI,
  //     MONGODB_DATABASE,
  //     MONGODB_USERNAME,
  //     MONGODB_PASSWORD
  //   } = env;
  //   // mongoose.Promise = global.Promise;
  //   try {
  //     mongoose.connect(`mongodb://${MONGODB_URI}/${MONGODB_DATABASE}`, {
  //       auth: {
  //         user: MONGODB_USERNAME,
  //         password: MONGODB_PASSWORD
  //       },
  //       useNewUrlParser: true
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
}

export default new App().app;
