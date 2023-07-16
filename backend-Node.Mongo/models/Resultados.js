import mongoose from "mongoose";

const resultadoSchema = mongoose.Schema(
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

const Resultado = mongoose.model( 'resultados' , resultadoSchema);

export default Resultado;