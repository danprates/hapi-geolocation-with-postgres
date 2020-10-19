# Geolocation Search with Postgres

Geolocation search using Postgres` Earth distance

> This project was expired by this [article](https://www.notion.so/danprates/Buscar-por-localiza-o-usando-Postgres-Hapi-52c89ae725214cc2b4d7d6499c634a48#c797f841a0724511b17379433b6d4229)

## Development

1. Run docker: `docker-compose up -d`
1. Run migrations: `npm run migration:up`
1. Run seeds: `npm run seed:run`
1. Run API: `npm run dev`

## API documentation

**[GET]** `http://localhost:3000/locations`

**Query parameters:**

- Latitude: `Number`
- Longitude: `Number`

**Response:**

```json
[
  {
    "id": 2,
    "name": "Hashrocket Chicago",
    "latitude": -87.647316,
    "longitude": 41.885387,
    "distance": 0.0030228255796682212
  }
]
```
