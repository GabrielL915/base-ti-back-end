// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    /* client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'pguser',
      password: 'pgpassword',
      database: 'nestjs',
    }, */
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      connectionString:
        '',
      host: '',
      port: 6418,
      user: '',
      database: '',
      password: '',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
