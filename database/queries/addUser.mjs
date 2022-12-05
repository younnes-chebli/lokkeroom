import client from "../client.mjs";
import userExists from "../../tools/userExists.mjs";

const addUser = async(email, password) => {
    if(!userExists(email)) {
        try {
            await client.query(`INSERT INTO users (email, password) VALUES ('${email}', '${password}')`);
        } catch(err) {
            console.log("Failed to add user", err.stack);
        }    
    } else {
        console.log("User already exists!");
    }
};

export default addUser;