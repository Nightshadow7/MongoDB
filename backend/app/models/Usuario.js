import mongoose from "mongoose";
import {Schema} from 'mongoose';
import bcryptjs from 'bcryptjs';


const usuarioSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
    },
    Email:{
      type: String,
      required: [true, 'El correo Electronico es Obligatorio'],
      trim: true,
      unique: true
    },
    Password:{
      type: String,
      required: [true, 'La Contraseña es Obligatoria'],
      trim: true
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true
    },
    Rol:{
      type: Schema.Types.ObjectId,
      ref: 'rols',
      required: [true , 'Por favor asigna un rol valido']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
usuarioSchema.statics.encryptPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
};
usuarioSchema.statics.comparePassword = (password, receivedPassword) => {
  return bcryptjs.compareSync(password, receivedPassword)
};
const Usuario = mongoose.model( 'usuarios' , usuarioSchema );

export default Usuario;