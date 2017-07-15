'use strict';

const { sequelize, SequelizeClass } = require(__BASE + 'config/database');

const agenda = sequelize.define("agenda", {
	service: {
		type: SequelizeClass.STRING(50),
		allowNull: false
	},
  client: {
    type: SequelizeClass.STRING(50),
		allowNull: false
  },
  attendant: {
    type: SequelizeClass.STRING(50),
		allowNull: false
  },
	date: {
		type: SequelizeClass.DATEONLY,
		allowNull: false
	},
	startTime: {
    type: SequelizeClass.DATE,
		allowNull: false
  },
	endTime: {
		type: SequelizeClass.DATE,
    allowNull: false
	}
},
{
	paranoid: true
});

module.exports = agenda;
