require('dotenv').config();

module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    tableName: 'migrations',
  },
};
