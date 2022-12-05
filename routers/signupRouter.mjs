import express from "express";
import addUser from "../database/queries/addUser.mjs";

const signupRouter = express.Router();

signupRouter.post("/api/register", async(req, res) => {
    const { email, password } = req.body;
    await addUser(email, password);
    res.send("Added user");
});

export default signupRouter;