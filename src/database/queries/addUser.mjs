import client from "../client.mjs";
import emailExists from "../../tools/emailExists.mjs";
import usernameExists from "../../tools/usernameExists.mjs";

const addUser = async(email, username, hashed_password) => {
    if(!await emailExists(email) && !await usernameExists(username)) {
        try {
            await client.query(`INSERT INTO users (email, username, password) VALUES ('${email}', '${username}', '${hashed_password}')`);
            return true;
        } catch(err) {
            throw err;
        }    
    } else {
        return false;
    }
};

export default addUser;