import mongoose from "mongoose";

const equipoSchema = mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: true,
      trim: true,    
    },
    Patrocinador:{
      type: String,
      required: true,
      trim: true,   
    },
  },
  {
    timestamps: true,

  }
);

const Equipo = mongoose.model('equipos' , equipoSchema);

export default Equipo;