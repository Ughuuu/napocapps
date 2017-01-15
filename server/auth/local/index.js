"use strict";
var dbConst = require('../constants/db.json');
const passport = require("passport");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
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
//# sourceMappingURL=index.js.map