import client from "../client.mjs";

const getUserByEmail = async(email) => {
    try {
        const res = await client.query(`SELECT * FROM users where email = '${email}'`);
        return res.rows[0];
    } catch(err) {
        throw err;
    }
}

export default getUserByEmail;
