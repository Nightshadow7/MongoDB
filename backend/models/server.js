import express from "express";
import cors from "cors";
import conectarDB from "./../config/config.js";

import routerCategorias from "./../routes/categorias.routes.js";
import routerClientes from "./../routes/clientes.routes.js";
import routerEmpleados from "./../routes/empleados.routes.js";
import routerProductos from "./../routes/productos.routes.js";

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
    this.app.use(routerCategorias);
    this.app.use(routerClientes);
    this.app.use(routerEmpleados);
    this.app.use(routerProductos);
  };

  listen(){
    this.app.listen(this.port , () =>{
      console.log(`Server is runing on port ${this.port}`);
    });
  };
};

export default Server;