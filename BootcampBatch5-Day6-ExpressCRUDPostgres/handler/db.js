const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'admin123',
    host: 'localhost',
    port: 5432,
    database: 'data_pg_latihan'
})

module.exports = pool