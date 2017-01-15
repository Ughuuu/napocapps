"use strict";
const home_routes_1 = require("../api/gem/routes/home.routes");
const root = process.cwd();
class Router {
    static init(app) {
        app.get('/*', function (req, res) {
            res.sendFile(root + '/client/dev/index.html');
        });
        home_routes_1.HomeRoutes.init(app);
    }
}
exports.Router = Router;
;
