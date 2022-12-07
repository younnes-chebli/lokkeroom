import getUserByUsername from "../database/queries/getUserByUsername.mjs";

const usernameExists = async(username) => {
    return await getUserByUsername(username) !== undefined;
};

export default usernameExists;