import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
      trim: true, //sirve para eliminar espacios vacios en las cadenas de caracteres
    },
    Email:{
      type: String,
      required: [true , 'El email es Obligatorio'],
      trim: true,
      unique: true, //Sirve para simularlo como una clave primaria en una base de datos no relacional que no pueden existir 2 igual
    },
    Password:{
      type: String,
      required: [true , 'El password es Obligatorio'],
      trim: true,
    },
    Imagen:{
      type: String,
      required: false,
      trim: true,
    },
    Rol:{
      type: String,
      required: true,
      trim: true,
      default: 'USER', //Asignarle un valor por defecto en este caso se le asigna que sea usuario en cuyo caso no se halla definido antes
      //enum: ['ADMIN','USER'], //Le asigno los datos posibles que puede llegar a tener
      trim: true,
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true,
      trim: true,
    },
    GoogleSignIn:{
      type: Boolean,
      required: false,
      default: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model( 'users' , usuarioSchema );

export default Usuario;