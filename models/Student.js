// ./models/Student.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    major: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courses: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Student;
