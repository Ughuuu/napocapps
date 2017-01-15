"use strict";
const app_constants_1 = require("../constants/app.constants");
class DBConstants {
}
DBConstants.dbUrl = app_constants_1.AppConstants.mode ? process.env.DB_URL : "mongodb://ddaian:nuarePAROLA@ds159328.mlab.com:59328/worldpath";
DBConstants.secret = "secret-key-123";
exports.DBConstants = DBConstants;
