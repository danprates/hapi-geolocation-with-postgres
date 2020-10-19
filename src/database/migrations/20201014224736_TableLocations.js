exports.up = async function (knex) {
  await knex.schema.raw(`
    create extension if not exists cube;
    create extension if not exists earthdistance;
  `);

  return knex.schema.createTable('locations', (table) => {
    table.increments('id');
    table.string('name').notNullable(),
      table.float('latitude').notNullable(),
      table.float('longitude').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('locations');
};
