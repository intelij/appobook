'use strict';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('appobook', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/appobook');

module.exports = sequelize;
