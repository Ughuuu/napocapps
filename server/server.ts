'use strict';

if (process.env.NODE_ENV === 'production')
    require('newrelic');

var PORT = process.env.PORT || 3333;

import * as express from 'express';
var http = require('http');
var os = require('os');
import { RoutesConfig } from './config/routes.conf';
import { DBConfig } from './config/db.conf';
import { Router } from './routes/index';

const app = express();

RoutesConfig.init(app);
DBConfig.init(app);
Router.init(app);

http.createServer(app)
    .listen(PORT, () => {
        console.log('started running @: ' + os.hostname() + ' on port: ' + PORT + ' with environment: ' + process.env.NODE_ENV);
    });
