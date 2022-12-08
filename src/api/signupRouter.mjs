import express from "express";
import hash from "../tools/hash.mjs";
import addUser from "../database/queries/users/addUser.mjs";

const signupRouter = express.Router();

signupRouter.post("/api/register", async(req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashed_password = await hash(password);
        const success = await addUser(email, username, hashed_password);
        if (success) {
            const user = {
                email: email,
                username: username,
                password: hashed_password
            }
            res.status(201).send(user);
        } else {
            res.status(500).send("Failed to add user or user already exists");
        }
    } catch(err) {
        res.status(500).send(err.stack);
    }
});

export default signupRouter;