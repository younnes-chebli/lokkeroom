import express from "express";
const app = express();
const PORT = 3000;
import dbConnection from "./src/database/dbConnection.mjs";
import defaultRouter from "./src/api/defaultRouter.mjs";
import signupRouter from "./src/api/signupRouter.mjs";
import loginRouter from "./src/api/loginRouter.mjs";

app.use(express.json());

dbConnection();

app.use(defaultRouter);

app.use(signupRouter);

app.use(loginRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});