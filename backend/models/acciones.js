import mongoose from "mongoose";

const accionesSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
        trim: true,
    },
    Cantidad: {
        type: Number,
        required: true,
        trim: true,
    },
    },
    {
        timestamps: true,
    }
    );

    const Accion = mongoose.model('acciones', accionesSchema, 'acciones');
    
    export default Accion;