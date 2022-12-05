import getUserByEmail from "../database/queries/getUserByEmail.mjs";

const userExists = () => {
    return getUserByEmail !== null;
};

export default userExists;