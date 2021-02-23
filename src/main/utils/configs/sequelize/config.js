require('dotenv').config();

module.exports = {
  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: process.env.DB_NAME_DEV,
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASS_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: 'postgres',
  },

  test: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};
