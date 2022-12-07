import bcrypt from "bcrypt";

const hash = async(password) => {
    try {
        const hashed_password = await bcrypt.hash(password, 10);
        return hashed_password;
    } catch(err) {
        throw err;
    }
};

export default hash;