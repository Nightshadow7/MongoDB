import express from 'express';
import cors from 'cors';
import DBConnection from './../database/config.js';
import fileUpload from 'express-fileupload';
import allRoutes from './../routes/index.js';
class Server{
  constructor(){
    this.port = process.env.port
    this.app = express();
    this.routesV1 = '/api'
    this.middlewares();
    this.connectDB();
    this.routes();
  };

  async connectDB(){
    await DBConnection();
  };

  middlewares () {
    this.app.use(express.json());
    this.app.use(cors());
    //public Directory
    this.app.use(express.static('public'));

    // Fileupload 
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
  }));
  };

  routes(){
    this.app.use(this.routesV1, allRoutes)
  };

  listen(){
    this.app.listen(this.port , () =>{
      console.log(`Server is runing on port ${this.port}`);
    })
  };
}

export default Server;