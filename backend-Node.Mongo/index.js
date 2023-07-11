import express from 'express';
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import ciclistasRouter from "./routes/ciclistas.routes.js";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/ciclistas", ciclistasRouter);
const puerto = process.env.PORT;
conectarDB();

app.listen(puerto, () => {
  console.log(`Server web listening on ${puerto}`);

});