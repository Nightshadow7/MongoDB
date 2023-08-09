import express from 'express';
import cors from 'cors';
import DBConnection from './../database/config.js';
import fileUpload from 'express-fileupload';
import authRouter from "../routes/auth.routes.js";
import searchRouter from "../routes/search.routes.js";
import camperRouter from './../routes/camper.routes.js';
import uploadRouter from './../routes/upload.routes.js';
import rolRouter from './../routes/rol.routes.js';
import centroRouter from './../routes/centro.routes.js';
import rutaRouter from './../routes/ruta.routes.js';
import levelRouter from './../routes/level.routes.js';
class Server{
  constructor(){
    this.app = express();

    this.port = process.env.PORT
    
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
    this.app.use(camperRouter);
    this.app.use(uploadRouter);
    this.app.use(rolRouter);
    this.app.use(centroRouter);
    this.app.use(rutaRouter);
    this.app.use(levelRouter);
  };

  listen(){
    this.app.listen(this.port , () =>{
      console.log(`Server is runing on port ${this.port}`);
    })
  };
}

export default Server;