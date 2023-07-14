import dotenv from "dotenv";

const config = dotenv.config();

import Server from './models/server.js';

const server = new Server();
server.listen();
