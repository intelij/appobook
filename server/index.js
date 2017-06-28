'use strict';
const router = require('express').Router();
const Company = require('./interface/company');

router.post('/company', Company.create);

router.get('/', (req, res) => res.send('hi from Appobook API, version 1.0'));
module.exports = router;
