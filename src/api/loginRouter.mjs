import express from "express";
import emailExists from "../tools/emailExists.mjs";
import getUserByEmail from "../database/queries/getUserByEmail.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const loginRouter = express.Router();

loginRouter.post("/api/login", async(req, res) => {
    try {
        const { email, password } = req.body;
        const row = await getUserByEmail(email);
        if(await emailExists(email)) {
            try {
                if (await bcrypt.compare(password, row.password)) {
                    const user = {
                        username: row.username
                    }
                    const accessToken = jwt.sign(user, ACCESS_TOKEN);
                    res.status(200).send({accessToken: accessToken});
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