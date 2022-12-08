import getUserByEmail from "../database/queries/users/getUserByEmail.mjs";

const emailExists = async(email) => {
    return await getUserByEmail(email) !== undefined;
};

export default emailExists;