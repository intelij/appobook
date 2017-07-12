'use strict';
const Sequelize = require('sequelize');

const DATABASE = process.env.PG_DATABASE || 'appobook';
const USERNAME = process.env.PG_USERNAME || 'postgres';
const PASSWORD = process.env.PG_PASSWORD || 'postgres';
const DATABASE_HOST = process.env.PG_HOST || 'localhost';

const sequelize = new Sequelize(
    DATABASE,
    USERNAME,
    PASSWORD,
    {
      host: DATABASE_HOST,
      dialect: 'postgres'
    }
);

module.exports = sequelize;
