import mongoose from "mongoose";

const premiosSchema = mongoose.Schema(
  {
    Tipo:{
      type: String,
      required: true,
      trim: true,    
    },
    Descripcion:{
      type: String,
      required: true,
      trim: true,   
    }
  },
  {
    timestamps: true,

  }
);

const Premios = mongoose.model( 'premios' , premiosSchema);

export default Premios;