import Producto from "../models/productos.js";

const obtenerProductos = async (req,res) => {
    const producto = await Producto.find();
    res.json(producto);
}

const agregarProductos = async (req, res) => {
    const producto = new Producto(req.body);
    try {
        const nuevoProducto = await producto.save();
        res.json(nuevoProducto)
    } catch (error) {
        console.log(error);
    }
}

const borrarProductos = async (req, res) => { 

    try {
        await Producto.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

}

const actualizarProductos = async (req, res) => {
    try {
        const producto = await Producto.findOne({_id:req.params.id});
        if (req.body.ProductoNombre){
            producto.ProductoNombre = req.body.ProductoNombre;
        };
        if (req.body.CantidadPorUnidad){
            producto.CantidadPorUnidad = req.body.CantidadPorUnidad;
        };
        if (req.body.PrecioUnitario){
            producto.PrecioUnitario = req.body.PrecioUnitario;
        };
        if (req.body.UnidadesStock){
            producto.UnidadesStock = req.body.UnidadesStock;
        };
        if (req.body.UnidadesPedidas){
            producto.UnidadesPedidas = req.body.UnidadesPedidas;
        };
        if (req.body.NivelReorden){
            producto.NivelReorden = req.body.NivelReorden;
        };
        if (req.body.Discontinuado){
            producto.Discontinuado = req.body.Discontinuado;
        };

        await producto.save()
        res.send(producto);
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
}


export {obtenerProductos, agregarProductos, borrarProductos, actualizarProductos};