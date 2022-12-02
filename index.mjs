import express from "express";
const app = express();
const PORT = 3000;
import dbConnection from "./database/dbConnection.mjs";
import defaultRouter from "./routers/defaultRouter.mjs";

app.use(express.json());
dbConnection();
app.use(defaultRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});