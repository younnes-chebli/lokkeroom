import * as dotenv from "dotenv";
import pg from "pg";

dotenv.config();
const PG_PASSWORD = process.env.PG_PASSWORD;

const { Client } = pg;

const client = new Client({
    host: "localhost",
    user: "lokkeroom_admin",
    port: 5432,
    password: PG_PASSWORD,
    database: "lokkeroom"
});

export default client;