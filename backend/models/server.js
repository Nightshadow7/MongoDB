import express from 'express';
import cors from 'cors';
import DBConnection from './../database/config.js';
import usuariosRouter from "../routes/usuario.routes.js";


class Server{
  constructor(){
    this.app = express();

    this.port = process.env.port
    
    //middlewares
    this.middlewares();
    //Conectar a Base de Datos MongoDB
    this.connectDB();
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
  };

  routes(){
    this.app.use(usuariosRouter);
  };

  listen(){
    this.app.listen(this.port , () =>{
      console.log(`Server is runing on port ${this.port}`);
    })
  };
}

export default Server;