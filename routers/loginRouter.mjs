import express from "express";

const loginRouter = express.Router();

loginRouter.post("/api/login", (req, res) => {
    try {
        const { email, password } = req.body;
    } catch(err) {
        res.status(500).send("Failed to login");
    }
});

export default loginRouter;