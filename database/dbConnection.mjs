import client from "./client.mjs";

const dbConnection = async() => {
    try {
        await client.connect();
    } catch(err) {
        console.log(`Failed to connect to database ${client.database}`, err.stack);
    }
};

export default dbConnection;