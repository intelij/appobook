'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Appobook app'));

const appPort = 9090;
app.listen(appPort, function() {
  console.log("Server running and listening on port " + appPort);
});
