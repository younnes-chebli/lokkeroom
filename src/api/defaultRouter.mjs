import express from "express";

const defaultRouter = express.Router();

defaultRouter.get("/", (req, res) => {
    try {
        res.status(200).send("<h1>Lokkeroom Platform</h1>");
    } catch(err) {
        res.status(500).send();
    }
});

export default defaultRouter;