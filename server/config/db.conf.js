"use strict";
const index_1 = require("../api/gem/model/index");
var orm = require("orm");
var dbConst = require('../constants/db.constants.json');
const URL = (process.env.NODE_ENV === 'production') ? process.env.MONGOHQ_URL : dbConst.dbUrl;
class DBConfig {
    static init(app) {
        var db = orm.connect(URL, function (err, db) {
            if (err)
                throw err;
            index_1.default(orm, db);
            db.sync(function (err) {
                if (err)
                    throw err;
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
}
exports.DBConfig = DBConfig;
;
//# sourceMappingURL=db.conf.js.map