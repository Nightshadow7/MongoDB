import mongoose from "mongoose";

const traderSchema = mongoose.Schema({
    Nombre: {
      type: String,
      required: true,
      trim: true,
    },
    Edad: {
      type: Number,
      required: true,
      trim: true,
    },
    Nacionalidad: {
      type: String,
      required: true,
      trim: true,
    },
    Presupuesto: {
      type: String,
      required: true,
      trim: true,
    }
    },
    {
      timestamps: true,
    }
    );

    const Trader = mongoose.model('trader', traderSchema, 'trader');

    export default Trader;