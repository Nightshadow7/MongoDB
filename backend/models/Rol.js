import mongoose from "mongoose";

const rolSchema = mongoose.Schema(
  {
    Rol:{
      type: String,
      required: [true, 'El Rol es Obligatorio'],
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model( 'rol' , rolSchema, );

export default Usuario;