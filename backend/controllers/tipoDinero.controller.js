import Tipo from "../models/tipoDinero.js";

const getTipos = async (req,res) => {
    const tipo = await Tipo.find();
    res.json(tipo);
};

const postTipos = async (req, res) => {
    const tipo = new Tipo(req.body);
    try {
        const nuevaTipo = await tipo.save();
        res.json(nuevaTipo)
    } catch (error) {
        console.log(error);
    }
};

const deleteTipos = async (req, res) => { 
    try {
        await Tipo.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

};

const patchTipos = async (req, res) => {
    try {
        const tipo = await Tipo.findOne({_id:req.params.id});
        if (req.body.Nombre){
            tipo.Nombre = req.body.Nombre;
        };
        if (req.body.Descripcion){
            tipo.Descripcion = req.body.Descripcion;
        };
        await tipo.save()
        res.send(tipo)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
};


export {getTipos, postTipos , deleteTipos, patchTipos};