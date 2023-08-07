import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const usuarioSchema = mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
    },
    Email:{
      type: String,
      required: [true , 'El email es Obligatorio'],
      trim: true,
      unique: true
    },
    Password:{
      type: String,
      required: [true , 'El password es Obligatorio'],
      trim: true,
    },
    Imagen:{
      type: String,
      required: false,
    },
    Rol:{
      type: String,
      required: true,
      trim: true,
      default: 'USER',
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
    versionKey: false
  }
);
usuarioSchema.statics.encryptPassword = (Password) => {
  const salt = bcryptjs.genSaltSync();
  return bcryptjs.hashSync(Password, salt);
};
usuarioSchema.statics.comparePassword = (Password, receivedPassword) => {
  return bcryptjs.compareSync(Password, receivedPassword)
};
const Usuario = mongoose.model( 'users' , usuarioSchema );

export default Usuario;