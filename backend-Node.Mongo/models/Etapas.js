import mongoose from "mongoose";

const etapaSchema = mongoose.Schema(
  {
    Numero:{
      type: Number,
      required: true,
      trim: true,    
    },
    Fecha:{
      type: Date,
      required: true,
      trim: true,   
    },
    Salida:{
      type: String,
      required: true,
      trim: true,
    },
    Llegada:{
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Etapa = mongoose.model( 'etapa' , etapaSchema , 'etapa');

export default Etapa;