'use strict';
const router = require('express').Router();
router.get('/', (req, res) => res.send('hi from Appobook API, version 1.0'));
module.exports = router;
