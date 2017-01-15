"use strict";

var dbConst = require('../constants/db.json');

import * as express from 'express';
var passport = require('passport');
var flash = require('connect-flash');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

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