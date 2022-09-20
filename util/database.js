const Sequelize = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;