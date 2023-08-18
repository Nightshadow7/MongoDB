import mongoose from "mongoose";
import {Schema} from 'mongoose';
import bcryptjs from 'bcryptjs';


const usuarioSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
    },
    Documento:{
      type: Number,
      required: [true, 'El numero de Documento es Obligatorio'], 
      trim: true,
      unique: true
    },
    Edad: {
      type: Number,
      required: [true, 'Por favor Proporciona una edad'],
      trim: true
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
    Telefono:{
      type: Number,
      required: [true, 'El numero de contacto es Obligatorio'],
      trim: true
    },
    Especialidades:{
      type: String,
      required: [true, 'Por favor especifica al menos 1 especialidad']
    },
    Sexo: {
      type: Schema.Types.ObjectId,
      ref: 'sexos',
      required: [true, 'Seleccione un sexo valido']
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
    },
    Grupo:{
      type: Schema.Types.ObjectId,
      ref: 'grupos',
      required: false
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