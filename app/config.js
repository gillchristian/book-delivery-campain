'use strict';

let config = {
  port: 3000 || process.env.PORT,
  db: process.env.db,
}

module.exports = config;
