'use strict'

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3000,
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || 'project_name_DEV',
  }
};

const prod = {
  app: {
    port: process.env.PRO_APP_PORT || 3001,
  },
  db: {
    host: process.env.PRO_DB_HOST || 'localhost',
    port: process.env.PRO_DB_PORT || 27017,
    name: process.env.PRO_DB_NAME || 'project_name_PROD',
  }
};

const config = {dev, prod};
const env = process.env.NODE_ENV || 'dev';
console.log(config[env])

module.exports = config[env];