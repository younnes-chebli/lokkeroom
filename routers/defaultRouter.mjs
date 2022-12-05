import express from "express";

const defaultRouter = express.Router();

defaultRouter.get("/", (req, res) => {
    res.send("<h1>Lokkeroom Platform</h1>");
});

export default defaultRouter;