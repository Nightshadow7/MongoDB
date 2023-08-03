import mongoose from "mongoose";
import {Schema} from 'mongoose';


const administradoresSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
    },
    Email:{
      type: String,
      required: [true, 'El Correo es Obligatorio'], 
      trim: true,
      unique: true
    },
    Password: {
      type: String,
      required: [true, 'Por favor Proporciona una clave'],
      trim: true
    },
    Rol:{
      type: Schema.Types.ObjectId,
      ref: 'Rol', 
      required: [true, 'El Rol es obligatorio'],
      trim: true,
    } 
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Administrador = mongoose.model( 'administradores' , administradoresSchema );

export default Administrador;