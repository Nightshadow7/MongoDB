import express from 'express';
import cors from 'cors';
import {DBConnection} from './../database/config.js';

class Server{
  constructor(){
    this.app = express();

    this.port = process.env.port
    this.usuariosPath = "/api/usuarios";
    //Conectar a Base de Datos MongoDB
    this.connectDB();

    //middlewares
    this.middlewares();
    //Routing
    this.routes();
  };

  async connectDB(){
    await DBConnection();
  };

  middlewares () {
    //Cors
    this.app.use(cors());

    //leer y parsear JSON en BODY
    this.app.use(express.json());

  }
}