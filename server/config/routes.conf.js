"use strict";
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const zlib = require("zlib");
class RoutesConfig {
    static init(app) {
        let _root = process.cwd();
        let _nodeModules = '/node_modules/';
        let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';
        app.use(compression({
            level: zlib.Z_BEST_COMPRESSION,
            threshold: '1kb'
        }));
        app.use(express.static(_root + _nodeModules));
        app.use(express.static(_root + _clientFiles));
        app.use(bodyParser.json());
        app.use(morgan('dev'));
        app.use(helmet());
    }
}
exports.RoutesConfig = RoutesConfig;
;
//# sourceMappingURL=routes.conf.js.map