import express from "express";
const app = express();
const PORT = 3000;
import dbConnection from "./database/dbConnection.mjs";
import defaultRouter from "./routers/defaultRouter.mjs";
import signupRouter from "./routers/signupRouter.mjs";
import loginRouter from "./routers/loginRouter.mjs";

app.use(express.json());

dbConnection();

app.use(defaultRouter);

app.use(signupRouter);

app.use(loginRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});