'use strict';

const APP_PORT = process.env.PORT || 9090;
const PUBLIC_DIR = __dirname + (process.env.PUBLIC || '/public/dist/');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const API_V1_0 = require('./server');

app.use(bodyParser.json())

app.use('/api/v1.0/', API_V1_0);

console.log(PUBLIC_DIR);

app.use('/', express.static(PUBLIC_DIR));

app.listen(APP_PORT, function() {
  console.log("Server running and listening on port " + APP_PORT);
});
