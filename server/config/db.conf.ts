"use strict";

import * as express from 'express';
import GemModel from '../api/gem/model/index';
var orm = require("orm");
var dbConst = require('../constants/db.constants.json');

const URL = (process.env.NODE_ENV === 'production') ? process.env.MONGOHQ_URL : dbConst.dbUrl;

export class DBConfig {
  static init(app: express.Application): void {    
      var db = orm.connect(URL, function (err, db) {
      if (err) throw err;
      GemModel(orm, db);

      db.sync(function (err) {
        if (err) throw err;
      });

      console.log("Database succesfuly initialized.");
    });
    let func = function (req, res, next) {
      req.db = db;
      req.model = db.models;
      return next();
    };
    app.use(func);
  }
};
