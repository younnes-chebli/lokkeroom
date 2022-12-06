import getUserByEmail from "../database/queries/getUserByEmail.mjs";

const userExists = async(email) => {
    return await getUserByEmail(email) !== undefined;
};

export default userExists;