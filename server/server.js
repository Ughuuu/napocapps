'use strict';
if (process.env.NODE_ENV === 'production')
    require('newrelic');
var PORT = process.env.PORT || 3333;
const express = require("express");
var http = require('http');
var os = require('os');
const routes_conf_1 = require("./config/routes.conf");
const db_conf_1 = require("./config/db.conf");
const index_1 = require("./routes/index");
const app = express();
routes_conf_1.RoutesConfig.init(app);
db_conf_1.DBConfig.init(app);
index_1.Router.init(app);
http.createServer(app)
    .listen(PORT, () => {
    console.log('started running @: ' + os.hostname() + ' on port: ' + PORT + ' with environment: ' + process.env.NODE_ENV);
});
//# sourceMappingURL=server.js.map