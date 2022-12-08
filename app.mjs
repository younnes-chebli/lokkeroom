import express from "express";
const app = express();
const PORT = 3000;
import dbConnection from "./src/database/config/dbConnection.mjs";
import defaultRouter from "./src/api/defaultRouter.mjs";
import signupRouter from "./src/api/signupRouter.mjs";
import loginRouter from "./src/api/loginRouter.mjs";
import getMessagesByLobbyIdRouter from "./src/api/getMessagesBylobbyIdRouter.mjs";

app.use(express.json());

dbConnection();

app.use(defaultRouter);

app.use(signupRouter);

app.use(loginRouter);

app.use(getMessagesByLobbyIdRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});