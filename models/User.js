const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');


const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(99),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  });

  module.exports = User;
  