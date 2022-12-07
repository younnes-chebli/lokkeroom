import client from "../client.mjs";

const getUserByUsername = async(username) => {
    try {
        const res = await client.query(`SELECT * FROM users where username = '${username}'`);
        return res.rows[0];
    } catch(err) {
        throw err;
    }
}

export default getUserByUsername;
