const {Pool} = require("pg")

const pool = new Pool({
    user: 'postgres',
    host: 'db.esifakvujbekqsyretdw.supabase.co',
    database: 'postgres',
    password: 'proyectoTEDW',
    port: '5432'
});

module.exports = pool;