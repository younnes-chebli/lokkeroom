import express from "express";
import emailExists from "../tools/emailExists.mjs";
import getUserByEmail from "../database/queries/getUserByEmail.mjs";
import bcrypt from "bcrypt";

const loginRouter = express.Router();

loginRouter.post("/api/login", async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);
        if(await emailExists(email)) {
            try {
                if (await bcrypt.compare(password, user.password)) {
                    res.status(200).send("Login successful!");
                } else {
                    res.status(401).send("Not Allowed");
                }
            } catch {
                res.status(500).send("Failed to compare passwords");
            }
        } else {
            res.status(400).send("User doesn't exist");
        }
    } catch(err) {
        res.status(500).send("Failed to login");
    }
});

export default loginRouter;