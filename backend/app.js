import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import Server from "./models/server.js";

const app = express();

app.use(express.json());
app.use(cors())

const config = dotenv.config();


const server = new Server();
server.listen();