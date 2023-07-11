import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    ProductoNombre: {
        type: String,
        required: true,
        trim: true,
    },
    CantidadPorUnidad: {
        type: String,
        required: true,
        trim: true,
    },
    PrecioUnitario: {
        type: String,
        required: true,
        trim: true,
    },
    UnidadesStock: {
      type: String,
      required: true,
      trim: true,
    },
    UnidadesPedidas: {
      type: String,
      required: true,
      trim: true,
    },
    NivelReorden: {
      type: String,
      required: true,
      trim: true,
    },
    Discontinuado: {
      type: String,
      required: true,
      trim: true,
    }
    },
    {
        timestamps: true,
    }
    );

    const Producto = mongoose.model('producto', productoSchema);

    export default Producto;