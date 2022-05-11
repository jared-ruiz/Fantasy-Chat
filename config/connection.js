//database connection 
const Sequelize = require('sequelize');

//execute upon server connection // uses .env credentials 
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize;