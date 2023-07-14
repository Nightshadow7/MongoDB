import express from 'express';
import cors from 'cors';
import conectarDB from '../config/config.js';
import routerAcciones from './../routes/acciones.routes.js';
import routerDinero from './../routes/dinero.routes.js';
import routerTipoDinero from './../routes/tipoDinero.routes.js';
import routerTrader from './../routes/trader.routes.js';


class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT;

    //middlewares
    this.middlewares();
    this.mongoDB();

    //routing
    this.routes();

  };

  async mongoDB(){
    await conectarDB();
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());

  }

  routes(){
    this.app.use(routerAcciones);
    this.app.use(routerDinero);
    this.app.use(routerTipoDinero);
    this.app.use(routerTrader );
  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log(`Server Runing on port : ${this.port}`)
    });
  };
}


export default Server;