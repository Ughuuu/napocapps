import * as express from 'express';
import { HomeRoutes } from '../api/gem/routes/home.routes';
import { AppConstants } from '../constants/app.constants';


export class Router {
  static init(app: express.Application) {
    app.get('/*', function (req, res) {
      res.sendFile(AppConstants.root + AppConstants.clientFiles + 'index.html');
    });
    HomeRoutes.init(app);
  }
};