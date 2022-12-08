import client from "../../config/client.mjs";

const getMessagesByLobbyId = async(lobbyId) => {
    try {
        const messages = await client.query(`SELECT * FROM messages WHERE lobby = ${lobbyId}`);
        return messages.rows;
    } catch(err) {
        throw err;
    }
};

export default getMessagesByLobbyId;