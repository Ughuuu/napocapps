"use strict";
var dbConst = require('../constants/db.json');
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
class AuthLocal {
    static init(app) {
        app.use(cookieParser());
        app.use(bodyParser());
        // required for passport
        app.use(session({ secret: dbConst.secret }));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(flash());
    }
}
exports.AuthLocal = AuthLocal;
