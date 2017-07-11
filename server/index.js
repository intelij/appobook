'use strict';
const router = require('express').Router();
const Company = require('./interface/company');

const User = require('./models/user')

router.post('/company', Company.create);

router.get('/user', async (req, res) => {
  const user = await User.findAll();
  res.send(user);
});

router.get('/', (req, res) => res.send('hi from Appobook API, version 1.0'));
module.exports = router;
