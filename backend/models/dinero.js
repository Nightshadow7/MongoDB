import mongoose from "mongoose";

const dineroSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
        trim: true,
    },
    Tipo: {
        type: String,
        required: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
    );

    const Dinero = mongoose.model('dinero', dineroSchema , 'dinero');

    export default Dinero;