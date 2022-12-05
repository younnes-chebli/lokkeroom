import client from "../client.mjs";

const getUserByEmail = async(email) => {
    try {
        const res = await client.query(`SELECT * FROM users where email = ${email}`);
        return res.rows[0];
    } catch(err) {
        console.log("Failed to select data", err.stack);
    }
}

export default getUserByEmail;
