const env = require("./env.js");

const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password,
    {
        host: env.host,
        dialect: env.dialect,
        operatorsAliases: 0,
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.GuideSeq = require("../models/guide.model.js")(sequelize, Sequelize);

module.exports = db;