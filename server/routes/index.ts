import * as express from 'express';
import { HomeRoutes } from '../api/gem/routes/home.routes';

const root = process.cwd();

export class Router {
  static init(app: express.Application) {
    app.get('/*', function (req, res) {
      res.sendFile(root + '/client/dev/index.html');
    });
    HomeRoutes.init(app);
  }
};