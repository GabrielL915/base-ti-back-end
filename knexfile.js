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
        'postgresql://postgres:65tl3WjVUbNjvl9d8tUh@containers-us-west-72.railway.app:6418/railway',
      host: 'containers-us-west-72.railway.app',
      port: 6418,
      user: 'postgres',
      database: 'railway',
      password: '65tl3WjVUbNjvl9d8tUh',
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
