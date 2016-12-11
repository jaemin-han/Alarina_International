const pg       = require('pg-promise')({});

const pgConfig = {  host:     process.env.AL_HOST,
                    port:     process.env.AL_PORT,
                    database: process.env.AL_DATABASE,
                    user:     process.env.AL_USER,
                    password: process.env.AL_PASSWORD };

const db       = pg(pgConfig);

module.exports = db;
