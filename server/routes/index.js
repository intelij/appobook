'use strict';
const router = require('express').Router();

const use = [
  'service',
  'agenda'
].map(route => {
  router.use(require(`${__BASE}routes/${route}`));
});

module.exports = router;
