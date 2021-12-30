const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456789',
    database: 'shop'
  },
  pool: { min: 0, max: 50 }
});
module.exports = knex