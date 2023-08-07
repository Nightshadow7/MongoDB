import express from 'express';
import cors from 'cors';
import DBConnection from './../database/config.js';
import fileUpload from 'express-fileupload';
import authRouter from "../routes/auth.routes.js";
import searchRouter from "../routes/search.routes.js";
import usuariosRouter from "../routes/usuario.routes.js";
import categoriasRouter from "./../routes/categoria.routes.js";
import cheesesRouter from './../routes/cheeses.routes.js';
import uploadsRouter from './../routes/upload.routes.js';
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

    //public Directory
    this.app.use(express.static('public'));

    // Fileupload 
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
  }));
  };

  routes(){
    this.app.use(authRouter);
    this.app.use(searchRouter);
    this.app.use(usuariosRouter);
    this.app.use(categoriasRouter);
    this.app.use(cheesesRouter);
    this.app.use(uploadsRouter);
  };

  listen(){
    this.app.listen(this.port , () =>{
      console.log(`Server is runing on port ${this.port}`);
    })
  };
}

export default Server;