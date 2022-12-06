import * as dotenv from "dotenv";
dotenv.config();
const PG_PASSWORD = process.env.PG_PASSWORD;
import pg from "pg";

const client = new pg.Client({
    host: "localhost",
    user: "lokkeroom_admin",
    port: 5432,
    password: PG_PASSWORD,
    database: "lokkeroom"
});

export default client;