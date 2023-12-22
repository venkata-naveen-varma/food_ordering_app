import express from 'express';
import App from './services/ExpressApp';
import dbConnection from './services/Database';
import { PORT } from './config';
import dotenv from "dotenv";
dotenv.config();

const StartServer = async () => {

    const app = express();

    await dbConnection()

    await App(app);

    app.listen(PORT, () => {
        console.clear();
        console.log(`Listening to port ${PORT}`);
    })
}

StartServer();