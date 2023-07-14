import Cliente from "../models/clientes.js";

const obtenerClientes = async (req,res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
};

const oneClientes = async (req,res) => {
  try {
      const cliente = await Cliente.findOne({_id:req.params.id});
      res.status(200).json(cliente);
  } catch (error) {
      res.status(404).send({error: "El Cliente no Existe"})
  }
};

const agregarClientes = async (req, res) => {
    const cliente = new Cliente(req.body);
    try {
        const nuevoCliente = await cliente.save();
        res.json(nuevoCliente)
    } catch (error) {
        console.log(error);
    }
}

const borrarClientes = async (req, res) => { 

    try {
        await Cliente.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

}

const actualizarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findOne({_id:req.params.id});
        if (req.body.Compania){
            cliente.Compania = req.body.Compania;
        };
        if (req.body.Contacto){
          cliente.Contacto = req.body.Contacto;
        };
        if (req.body.Titulo){
          cliente.Titulo = req.body.Titulo;
        };
        if (req.body.Direccion){
          cliente.Direccion = req.body.Direccion;
        };
        if (req.body.Ciudad){
          cliente.Ciudad = req.body.Ciudad;
        };
        if (req.body.Regiones){
          cliente.Regiones = req.body.Regiones;
        };
        if (req.body.CodigoPostal){
          cliente.CodigoPostal = req.body.CodigoPostal;
        };
        if (req.body.Pais){
          cliente.Pais = req.body.Pais;
        };
        if (req.body.Telefono){
          cliente.Telefono = req.body.Telefono;
        };
        if (req.body.Fax){
          cliente.Fax = req.body.Fax;
        };

        await cliente.save()
        res.send(cliente)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
}


export {obtenerClientes, oneClientes , agregarClientes, borrarClientes, actualizarClientes};