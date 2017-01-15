"use strict";
const home_routes_1 = require("../api/gem/routes/home.routes");
const app_constants_1 = require("../constants/app.constants");
class Router {
    static init(app) {
        app.get('/*', function (req, res) {
            res.sendFile(app_constants_1.AppConstants.root + app_constants_1.AppConstants.clientFiles + 'index.html');
        });
        home_routes_1.HomeRoutes.init(app);
    }
}
exports.Router = Router;
;
