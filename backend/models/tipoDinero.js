import mongoose from "mongoose";

const tipoSchema = mongoose.Schema({
    Nombre: {
      type: String,
      required: true,
      trim: true,
    },
    Descripcion: {
      type: String,
      required: true,
      trim: true,
    }
    },
    {
      timestamps: true,
    }
    );

    const Tipo = mongoose.model('tipoDinero', tipoSchema, 'tipoDinero');

    export default Tipo;