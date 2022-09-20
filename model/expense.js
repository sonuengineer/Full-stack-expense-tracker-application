const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const expense1 = sequelize.define('expenses', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    expense: {
        type: Sequelize.INTEGER,
        //allowNull: false
    },
    description: Sequelize.STRING,
    category: Sequelize.STRING,
    
});

module.exports = expense1;