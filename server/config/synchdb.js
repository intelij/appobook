'use strict';

const { sequelize } = require(__BASE + 'config/database');

// define models
require(__BASE + 'models/');

module.exports = sequelize.sync();
