'use strict';

const { sequelize, SequelizeClass } = require(__BASE + 'config/database');

const service = sequelize.define("service", {
	name: {
		type: SequelizeClass.STRING(50),
		allowNull: false
	},
	responsible: {
		type: SequelizeClass.STRING(50)
	},
	description: {
		type: SequelizeClass.STRING(250)
	},
	estimatedTime: {
    type: SequelizeClass.INTEGER,
		allowNull: false
  },
	deletedAt: {
		type: SequelizeClass.DATE,
		unique: 'uq_name'
	}
},
{
	paranoid: true
});

module.exports = service;
