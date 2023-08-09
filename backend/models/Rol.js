import mongoose from "mongoose";

const rolSchema = mongoose.Schema(
  {
    Rol:{
      type: String,
      required: [true, 'El Rol es Obligatorio'],
      trim: true,
      unique: true
    },
    Estado:{
      type: String,
      required: false,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Rols = mongoose.model( 'rols' , rolSchema );

export default Rols;