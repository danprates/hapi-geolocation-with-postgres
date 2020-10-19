exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('locations')
    .del()
    .then(function () {
      return knex('locations').insert([
        {
          name: 'Hashrocket JAX',
          latitude: -81.3927381,
          longitude: 30.2918842,
        },
        {
          name: 'Hashrocket Chicago',
          latitude: -87.6473133,
          longitude: 41.8853881,
        },
        {
          name: `Satchel''s Pizza`,
          latitude: -82.3018702,
          longitude: 29.6739466,
        },
        { name: 'V Pizza', latitude: -81.3905175, longitude: 30.2938423 },
        {
          name: 'Artichoke Pizza',
          latitude: -73.9860525,
          longitude: 40.7321652,
        },
        { name: `Giordano''s`, latitude: -87.6252984, longitude: 41.8850284 },
      ]);
    });
};
