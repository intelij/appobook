'use strict';

const router = require('express').Router();

router.get('/agenda', async (request, response) => {
  response.send('obtaining agenda!');
});

module.exports = router;
