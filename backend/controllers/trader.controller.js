import Trader from "../models/trader.js";

const getTraders = async (req,res) => {
    const traders = await Trader.find();
    res.json(traders);
};

const postTraders = async (req, res) => {
    const trader = new Trader(req.body);
    try {
        const nuevaTrader = await trader.save();
        res.json(nuevaTrader)
    } catch (error) {
        console.log(error);
    }
};

const deleteTraders = async (req, res) => { 
    try {
        await Trader.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

};

const patchTraders = async (req, res) => {
    try {
        const trader = await Trader.findOne({_id:req.params.id});
        if (req.body.Nombre){
            trader.Nombre = req.body.Nombre;
        };
        if (req.body.Edad){
            trader.Edad = req.body.Edad;
        };
        if (req.body.Nacionalidad){
            trader.Nacionalidad = req.body.Nacionalidad;
        };
        if (req.body.Presupuesto){
            trader.Presupuesto = req.body.Presupuesto;
        };
        await trader.save()
        res.send(trader)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
};


export {getTraders, postTraders , deleteTraders, patchTraders};