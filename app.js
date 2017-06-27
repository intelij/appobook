'use strict';

const APP_PORT = 9090;

const express = require('express');
const app = express();

const API_V1_0 = require('./server');

app.use('/api/v1.0/', API_V1_0);
app.use('/', express.static(__dirname + '/public'));

app.listen(APP_PORT, function() {
  console.log("Server running and listening on port " + APP_PORT);
});
