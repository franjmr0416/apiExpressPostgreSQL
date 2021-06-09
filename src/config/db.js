const {Pool} = require("pg")

const pool = new Pool({
    user: 'postgres',
    host: 'db.cgmafdcwdlqmdtknsngn.supabase.co',
    database: 'postgres',
    password: 'proyectoTEDW',
    port: '5432'
});

module.exports = pool;