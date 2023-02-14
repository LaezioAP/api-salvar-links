const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "pudge",
    database: "teste_db_dev",
  },
});

module.exports = knex ;
