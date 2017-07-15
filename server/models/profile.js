'use strict';
const { sequelize, SequelizeClass } = require(__BASE + 'config/database');

const Profile = sequelize.define('profile', {
  firstName: {
    type: SequelizeClass.STRING
  },
  lastName: {
    type: SequelizeClass.STRING
  }
});

module.exports = Profile;
