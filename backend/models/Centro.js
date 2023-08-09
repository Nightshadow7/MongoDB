import mongoose from "mongoose";

const centroSchema = mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre del Centro es Obligatorio'],
      unique: true,
    },
    Descripcion:{
      type: String,
      required: [true, 'La Descripcion es obligatoria']
    },
    Estado:{
      type:  Boolean,
      required: false,
      default: true
    },
    Ciudad:{
      type: String,
      required: [true, 'La Ciudad es obligatoria']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Centro = mongoose.model( 'centros' , centroSchema );

export default Centro;