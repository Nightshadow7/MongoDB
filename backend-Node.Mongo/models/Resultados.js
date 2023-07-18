import mongoose from "mongoose";

const resultadoSchema = mongoose.Schema(
  {
    Etapa:{
      type: Number,
      required: true,
      trim: true,    
    },
    Ciclista:{
      type: String,
      required: true,
      trim: true,   
    },
    Equipo:{
      type: String,
      required: true,
      trim: true,
    },
    Tiempo:{
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,

  }
);

const Resultado = mongoose.model( 'resultados' , resultadoSchema);

export default Resultado;