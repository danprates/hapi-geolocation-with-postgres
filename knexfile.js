module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'geolocation',
      user: 'docker',
      password: 'docker',
      charset: 'utf8',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
    seeds: { tableName: './seeds', directory: './src/database/seeds' },
  },
};
