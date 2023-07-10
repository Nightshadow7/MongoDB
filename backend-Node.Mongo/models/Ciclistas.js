import mongoose from "mongoose";

const ciclistaSchema = mongoose.Schema(
  {
    
    Nombre:{
      type: String,
      required: true,
      trim: true,    
    },
    Nacionalidad:{
      type: String,
      required: true,
      trim: true,   
    },
    Numero:{
      type: Number,
      required: true,
      trim: true,
    },
    Color_Camisa:{
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,

  }
);

const Ciclista = mongoose.model('Ciclista',ciclistaSchema);

export default Ciclista;