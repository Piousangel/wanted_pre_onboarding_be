const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
	host: dbConfig.host,
  	dialect: dbConfig.dialect,
  	operatorsAliases: false,
    port : dbConfig.port,
  	pool: {
        max: dbConfig.pool.max,
   		min: dbConfig.pool.min,
      	acquire: dbConfig.pool.acquire,
      	idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//company, user sequelize 등록하기
db.company_info = require("./company.js")(sequelize, Sequelize);
db.user_info = require("./user.js")(sequelize, Sequelize);
db.notices = require("./notice.js")(sequelize, Sequelize);

module.exports = db;