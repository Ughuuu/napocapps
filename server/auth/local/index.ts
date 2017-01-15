"use strict";

var dbConst = require('../constants/db.json');

import * as express from 'express';
import * as passport from 'passport';
import flash = require('connect-flash');

import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';

export class AuthLocal {
    static init(app: express.Application) {
        app.use(cookieParser());
        app.use(bodyParser());

        // required for passport
        app.use(session({ secret: dbConst.secret }));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(flash());
    }
}