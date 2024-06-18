const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('schoolMs', 'root_nc', 'rp2MBhxmM@', {
    host: '54.161.142.80',
    dialect: 'mysql',
});

module.exports = sequelize;