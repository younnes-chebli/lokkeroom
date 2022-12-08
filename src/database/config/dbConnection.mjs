import client from "../config/client.mjs";

const dbConnection = async() => {
    try {
        await client.connect();
        console.log(`Connected to database ${client.database} as ${client.user}`);
    } catch(err) {
        console.log(`Failed to connect to database ${client.database}`, err.stack);
    }
};

export default dbConnection;