'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const Knex = require('knex')(require('../knexfile').development);

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/locations',
    options: {
      validate: {
        query: Joi.object({
          latitude: Joi.number(),
          longitude: Joi.number(),
        }),
      },
    },
    handler: ({ query }, h) => {
      const result = Knex('locations').select('*');

      if (query.latitude && query.longitude) {
        result
          .select(
            Knex.raw(
              `(point(longitude, latitude)<@>point(${query.longitude}, ${query.latitude})) * 1609.344 as distance`,
            ),
          )
          .orderBy('distance');
      }

      return result;
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
