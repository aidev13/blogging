const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("blog_db", 'root', 'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    });

// --- Below is just for testing the connection if needed
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// --- end

module.exports = sequelize;