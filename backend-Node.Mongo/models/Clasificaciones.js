import mongoose from "mongoose";

const clasificacionSchema = mongoose.Schema(
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

const Clasificacion = mongoose.model( 'clasificaciones' , clasificacionSchema );

export default Clasificacion;