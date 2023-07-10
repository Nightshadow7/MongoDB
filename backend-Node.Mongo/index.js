import express from 'express';
import dotenv from "dotenv";
import conectarDB from "./config/config.js";

const app = express();
dotenv.config();

const puerto = process.env.PORT;

conectarDB();

app.listen(puerto, () => {
  console.log(`Server web listening on ${puerto}`);

});