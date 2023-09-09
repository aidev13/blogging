const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');

const Post = sequelize.define('Post', {
    writtenPost: {
      type: DataTypes.STRING(2000), // blogs can be up to 2000 chartchers
      allowNull: false
    }
  }, {
    timestamps: true
  });

module.exports = Post;