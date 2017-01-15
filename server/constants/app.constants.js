"use strict";
class AppConstants {
}
AppConstants.root = process.cwd();
AppConstants.mode = (process.env.NODE_ENV === 'production') ? true : false;
AppConstants.clientFiles = AppConstants.mode ? '/client/dist/' : '/client/dev/';
exports.AppConstants = AppConstants;
