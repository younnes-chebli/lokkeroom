import express from "express";
import hash from "../../tools/hash.mjs";
import addUser from "../../database/queries/addUser.mjs";

const signupRouter = express.Router();

signupRouter.post("/api/register", async(req, res) => {
    try {
        const { email, password } = req.body;
        const hashed_password = await hash(password);
        const success = await addUser(email, hashed_password);
        if (success) {
            res.status(201).send("Added user");
        } else {
            res.status(500).send("Failed to add user or user already exists");
        }
    } catch(err) {
        res.status(500).send("POST request failed");
    }
});

export default signupRouter;