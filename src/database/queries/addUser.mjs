import client from "../client.mjs";
import userExists from "../../tools/userExists.mjs";

const addUser = async(email, hashed_password) => {
    const userAlreadyExists = await userExists(email);
    if(!userAlreadyExists) {
        try {
            await client.query(`INSERT INTO users (email, password) VALUES ('${email}', '${hashed_password}')`);
            return true;
        } catch(err) {
            console.log("Failed to add user", err.stack);
        }    
    } else {
        return false;
    }
};

export default addUser;