'use strict';
const Sequelize = require('sequelize');
// const sequelize = require('sequelize');
const sequelize = new Sequelize('appobook', 'postgres', 'postgres',
{
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    username: 'John',
    password: '12345',
    email: 'john@email.com'
  });
  console.log("User table created!")
});

module.exports = User;
