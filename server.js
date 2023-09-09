const sequelize = require('./db/connection')

require('./models');


sequelize.sync({ force: true});