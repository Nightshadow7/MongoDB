import Dinero from "../models/dinero.js";

const getDineros = async (req,res) => {
    const dineros = await Dinero.find();
    res.json(dineros);
};

const postDineros = async (req, res) => {
    const dinero = new Dinero(req.body);
    try {
        const nuevaDinero = await dinero.save();
        res.status(201).json(nuevaDinero)
    } catch (error) {
        res.status(404).send({error: "Faltan Datos"});
    }
};


const deleteDineros = async (req, res) => { 
    try {
        await Dinero.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

};

const patchDineros = async (req, res) => {
    try {
        const dinero = await Dinero.findOne({_id:req.params.id});
        if (req.body.Nombre){
            dinero.Nombre = req.body.Nombre;
        };
        if (req.body.Tipo){
            dinero.Tipo = req.body.Tipo;
        };
        await dinero.save()
        res.send(dinero)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
};


export {getDineros, postDineros , deleteDineros, patchDineros};