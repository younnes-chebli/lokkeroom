import getUserByEmail from "../database/queries/getUserByEmail.mjs";

const emailExists = async(email) => {
    return await getUserByEmail(email) !== undefined;
};

export default emailExists;