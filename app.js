'use strict';
global.__BASE = __dirname + '/server/';

const APP_PORT = process.env.PORT || 9090;
const PUBLIC_DIR = __dirname + (process.env.PUBLIC || '/public/dist/');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const synchronizeDB = require(__BASE + 'config/synchdb');
// Synchronize all the modules with the database
synchronizeDB.then(() => {
    console.log('Connection has been established successfully.');

    const API_V1_0 = require(__BASE + 'routes/');
    app.use(bodyParser.json())

    app.use('/api/v1.0/', API_V1_0);
    app.use('/', express.static(PUBLIC_DIR));

    app.listen(APP_PORT, () => {
      console.log("Server running and listening on port " + APP_PORT);
    });
})
