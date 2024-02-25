import 'dotenv/config'
import pg from "pg";


export const pool = new pg.Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    allowExitOnIdle: true
}) 


export default pool;

