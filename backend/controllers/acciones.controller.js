import Accion from "../models/acciones.js";

const getAcciones = async (req,res) => {
    const acciones = await Accion.find();
    res.json(acciones);
};

const postAcciones = async (req, res) => {
    const accion = new Accion(req.body);
    try {
        const nuevaAccion = await accion.save();
        res.json(nuevaAccion)
    } catch (error) {
        console.log(error);
    }
};

const deleteAcciones = async (req, res) => { 
    try {
        await Accion.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

};

const patchAcciones = async (req, res) => {
    try {
        const accion = await Accion.findOne({_id:req.params.id});
        if (req.body.Nombre){
            accion.Nombre = req.body.Nombre;
        };
        if (req.body.Cantidad){
            accion.Cantidad = req.body.Cantidad;
        };
        await accion.save()
        res.send(accion)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
};


export {getAcciones, postAcciones , deleteAcciones, patchAcciones};