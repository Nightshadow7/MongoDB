import express from "express";
import cors from "cors";
import conectarDB from "./../config/config.js";

import routerCiclistas from "./../routes/ciclistas.routes.js";
import routerClasificaciones from "./../routes/clasificaciones.routes.js";
import routerEquipos from "./../routes/equipos.routes.js";
import routerEtapas from "./../routes/etapas.routes.js";
import routerPremios from "./../routes/premios.routes.js";
import routerResultados from "./../routes/resultados.routes.js";

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
  };

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
  };

  routes(){
    this.app.use(routerCiclistas);
    this.app.use(routerClasificaciones);
    this.app.use(routerEquipos);
    this.app.use(routerEtapas);
    this.app.use(routerPremios);
    this.app.use(routerResultados);
  };

  listen(){
    this.app.listen(this.port , () =>{
      console.log(`Server is runing on port ${this.port}`);
    });
  };
};

export default Server;