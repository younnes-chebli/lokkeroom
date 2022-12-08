import express from "express";
import getMessagesByLobbyId from "../database/queries/messages/getMessagesByLobbyID.mjs";

const getMessagesByLobbyIdRouter = express.Router();

getMessagesByLobbyIdRouter.get("/api/messages/lobby/:lobbyId", async(req, res) => {
    try {
        const lobbyId = req.params.lobbyId;
        const messages = await getMessagesByLobbyId(lobbyId);
        res.status(200).send({messages});    
    } catch(err) {
        res.status(500).send();
    }
});

export default getMessagesByLobbyIdRouter;